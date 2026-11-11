"""把切好的立绘去底，输出可直接摆在场景里的透明 PNG/WebP。

做法：从四边泛洪，把和边缘同色的连通区域变透明；再对 alpha 做一次羽化，
避免边缘出现白色硬边。人物身上和底色相近的部分（奶油色衣服）因为不连通，不会被误删。
"""

import os
from collections import deque

from PIL import Image, ImageFilter

SRC = ['ln-full.webp', 'sq-full.webp', 'nu-full.webp']

# 个别图片上还挂着一小块相邻插画（比如林念左边那块「糕点店」招牌），手动抹掉
ERASE = {
    'ln-full.webp': [(0, 775, 64, 900)],
}
ART = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'art')


def edge_color(px, w, h):
    """取四边像素的中位数颜色，作为背景色参考。"""
    vals = []
    for x in range(0, w, 3):
        vals.append(px[x, 0])
        vals.append(px[x, h - 1])
    for y in range(0, h, 3):
        vals.append(px[0, y])
        vals.append(px[w - 1, y])
    chans = list(zip(*vals))
    return tuple(sorted(c)[len(c) // 2] for c in chans)


def dist(a, b):
    return max(abs(a[0] - b[0]), abs(a[1] - b[1]), abs(a[2] - b[2]))


def drop_islands(alpha, keep_ratio=0.02, min_area=400):
    w, h = alpha.size
    data = alpha.load()
    lab = bytearray(w * h)
    areas = []
    boxes = []

    for y in range(h):
        for x in range(w):
            i = y * w + x
            if lab[i] or data[x, y] < 60:
                continue
            label = len(areas) + 1
            q = deque([i])
            lab[i] = label
            n = 0
            minx = maxx = x
            miny = maxy = y
            while q:
                j = q.popleft()
                jy, jx = divmod(j, w)
                n += 1
                minx = min(minx, jx)
                maxx = max(maxx, jx)
                miny = min(miny, jy)
                maxy = max(maxy, jy)
                for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ny, nx = jy + dy, jx + dx
                    if 0 <= ny < h and 0 <= nx < w:
                        k = ny * w + nx
                        if not lab[k] and data[nx, ny] >= 60:
                            lab[k] = label
                            q.append(k)
            areas.append(n)
            boxes.append((minx, miny, maxx, maxy))

    if not areas:
        return alpha
    biggest = max(areas)
    keep = set()
    for idx, n in enumerate(areas):
        if n >= max(min_area, biggest * keep_ratio):
            keep.add(idx + 1)

    out = Image.new('L', (w, h), 0)
    src = alpha.load()
    dst = out.load()
    for y in range(h):
        for x in range(w):
            i = y * w + x
            if lab[i] in keep:
                dst[x, y] = src[x, y]
    return out


def cutout(path):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    px = im.load()
    bg = edge_color(px, w, h)

    # 候选：和背景色足够接近
    tol = 20
    cand = bytearray(w * h)
    for y in range(h):
        row = y * w
        for x in range(w):
            if dist(px[x, y], bg) <= tol:
                cand[row + x] = 1

    # 从四边泛洪，只有与边缘连通的背景才删
    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            i = y * w + x
            if cand[i] and not seen[i]:
                seen[i] = 1
                q.append(i)
    for y in range(h):
        for x in (0, w - 1):
            i = y * w + x
            if cand[i] and not seen[i]:
                seen[i] = 1
                q.append(i)
    while q:
        i = q.popleft()
        y, x = divmod(i, w)
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w:
                j = ny * w + nx
                if cand[j] and not seen[j]:
                    seen[j] = 1
                    q.append(j)

    alpha = Image.frombytes('L', (w, h), bytes(0 if seen[i] else 255 for i in range(w * h)))
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))

    # 只保留主体：彩纸屑、邻近插画碎片这些孤立小块要清掉
    alpha = drop_islands(alpha)

    for box in ERASE.get(os.path.basename(path), []):
        alpha.paste(0, box)

    out = im.convert('RGBA')
    out.putalpha(alpha)
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)
    name = os.path.basename(path).replace('-full.webp', '-sprite.webp')
    dst = os.path.join(ART, name)
    out.save(dst, 'WEBP', quality=92, method=6)
    print('%s -> %s  %s  底色 %s' % (path, name, out.size, bg))


if __name__ == '__main__':
    for f in SRC:
        cutout(os.path.join(ART, f))
