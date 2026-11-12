# -*- coding: utf-8 -*-
"""
把 picture/ 下的原始素材转成游戏用的 webp。

三类产出：
  *-sprite-in.webp / *-sprite-out.webp   立绘（店内 / 店外两套，透明底）
  *-face.webp                            对话头像（从立绘头部裁）
  bg-*.webp                              剧情背景（9:16 竖构图）
  shop-lv1..4.webp                       店铺页插画（4:3 横构图）

用法：python tools/art_v2.py
"""

import os
import glob
from collections import deque

from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PIC = os.path.join(ROOT, 'picture')
CHAR_DIR = 'character'
BG_DIR = 'background'
SHOP_DIR = 'shop'
OUT = os.path.join(ROOT, 'public', 'art')

# 角色 -> (前缀, 店内源文件, 店外源文件)
SPRITES = [
    ('林念',   'ln', '林念/林念默认立绘（店内）.png',   '林念/林念默认立绘（店外）.png'),
    ('苏晴',   'sq', '苏晴/苏晴主立绘.png',             '苏晴/秋日暖色系格纹围巾少女-2.png'),
    ('林暖',   'nu', '林暖/林暖默认立绘（店内）.png',   '林暖/林暖默认立绘（店外）.png'),
    ('周雨桐', 'xy', '周雨桐/小雨默认立绘（店内）.png', '周雨桐/小雨默认立绘（店外）.png'),
    ('许知遥', 'zy', '许知遥/许知遥默认立绘（店内）.png', '许知遥/许知遥默认立绘（店外）.png'),
    ('唐鸢',   'ty', '唐鸢/唐鸢默认立绘（店内）.png',   '唐鸢/唐鸢默认立绘（店外）.png'),
    ('叶星河', 'xh', '叶星河/叶星河默认立绘（店内）.png', '叶星河/叶星河默认立绘（店外）.png'),
]

# 背景：源文件名 -> 输出名（bg-shool 是原始拼写，输出修正为 school）
BACKGROUNDS = [
    ('bg-shop.png',    'bg-shop.webp'),
    ('bg-kitchen.png', 'bg-kitchen.webp'),
    ('bg-street.png',  'bg-street.webp'),
    ('bg-home.png',    'bg-home.webp'),
    ('bg-cafe.png',    'bg-cafe.webp'),
    ('bg-market.png',  'bg-market.webp'),
    ('bg-store.png',   'bg-store.webp'),
    ('bg-shool.png',   'bg-school.webp'),
    ('bg-park.png',    'bg-park.webp'),
    ('bg-studio.png',  'bg-studio.webp'),
]

# 店铺等级插画
SHOPS = [
    ('shop-lv1.png', 'shop-lv1.webp'),
    ('shop-lv2.png', 'shop-lv2.webp'),
    ('shop-lv3.png', 'shop-lv3.webp'),
    ('shop-lv4.png', 'shop-lv4.webp'),
]

SPRITE_H = 1100      # 立绘输出高度
FACE = 160           # 头像输出边长
BG_W, BG_H = 720, 1280
SHOP_W = 960


def flood_cutout(img, thr=14):
    """四边泛洪抠底：只删和边缘连通、颜色接近的部分，人物内部不会被穿透。"""
    img = img.convert('RGB')
    w, h = img.size
    px = img.load()
    seen = bytearray(w * h)
    q = deque()

    def seed(x, y):
        i = y * w + x
        if not seen[i]:
            seen[i] = 1
            q.append(i)

    for x in range(w):
        seed(x, 0)
        seed(x, h - 1)
    for y in range(h):
        seed(0, y)
        seed(w - 1, y)

    base = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]

    while q:
        i = q.popleft()
        y, x = divmod(i, w)
        r, g, b = px[x, y]
        near = False
        for br, bg, bb in base:
            if abs(r - br) <= thr and abs(g - bg) <= thr and abs(b - bb) <= thr:
                near = True
                break
        if not near:
            continue
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w:
                j = ny * w + nx
                if not seen[j]:
                    seen[j] = 1
                    q.append(j)

    alpha = Image.frombytes('L', (w, h), bytes(0 if seen[i] else 255 for i in range(w * h)))
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.6))
    out = img.convert('RGBA')
    out.putalpha(alpha)
    return out


def drop_islands(alpha, keep_ratio=0.02, min_area=600):
    """去掉漂浮的小碎块（彩纸屑、旁边插画碎片）。"""
    w, h = alpha.size
    data = alpha.load()
    lab = bytearray(w * h)
    areas = []

    for y in range(h):
        for x in range(w):
            i = y * w + x
            if lab[i] or data[x, y] < 60:
                continue
            label = len(areas) + 1
            q = deque([i])
            lab[i] = label
            n = 0
            while q:
                j = q.popleft()
                jy, jx = divmod(j, w)
                n += 1
                for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ny, nx = jy + dy, jx + dx
                    if 0 <= ny < h and 0 <= nx < w:
                        k = ny * w + nx
                        if not lab[k] and data[nx, ny] >= 60:
                            lab[k] = label
                            q.append(k)
            areas.append(n)

    if not areas:
        return alpha
    biggest = max(areas)
    keep = set(i + 1 for i, n in enumerate(areas) if n >= max(min_area, biggest * keep_ratio))

    out = Image.new('L', (w, h), 0)
    src = alpha.load()
    dst = out.load()
    for y in range(h):
        for x in range(w):
            i = y * w + x
            if lab[i] in keep:
                dst[x, y] = src[x, y]
    return out


def trim_alpha(img, pad=6):
    box = img.split()[-1].getbbox()
    if not box:
        return img
    x0, y0, x1, y1 = box
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(img.size[0], x1 + pad)
    y1 = min(img.size[1], y1 + pad)
    return img.crop((x0, y0, x1, y1))


def load_sprite(rel):
    path = os.path.join(PIC, CHAR_DIR, rel)
    img = Image.open(path)
    if img.mode != 'RGBA' or img.split()[-1].getextrema()[0] > 250:
        # 不透明图（比如林暖店内是 RGB）：抠底
        img = flood_cutout(img)
        img.putalpha(drop_islands(img.split()[-1]))
    img = trim_alpha(img)
    return img


def clean_alpha(img, solid=248):
    """把接近不透明的像素拉到纯不透明。

    webp 的 alpha 是有损压缩的，衣服这类平坦区域会出现 250 上下的抖动，
    叠到背景上就是一层白点。内部拉满 255，边缘的过渡保留。
    """
    a = img.split()[-1]
    lut = [255 if v >= solid else v for v in range(256)]
    out = img.copy()
    out.putalpha(a.point(lut))
    return out


def save_sprite(img, name):
    w, h = img.size
    nw = max(1, round(w * SPRITE_H / h))
    im = img.resize((nw, SPRITE_H), Image.LANCZOS)
    im = clean_alpha(im)
    dst = os.path.join(OUT, name)
    im.save(dst, 'WEBP', lossless=True, quality=100, method=6)
    return im, os.path.getsize(dst)


def make_face(img):
    """从立绘顶部裁头部方图：取人像水平中心、顶部 22% 高。"""
    w, h = img.size
    box = img.split()[-1].getbbox()
    if not box:
        return None
    x0, y0, x1, y1 = box
    bw = x1 - x0
    side = int(min(bw, (y1 - y0) * 0.22))
    if side < 20:
        return None
    cx = (x0 + x1) // 2
    left = max(x0, cx - side // 2)
    top = y0
    return img.crop((left, top, min(x1, left + side), min(y1, top + side)))


def save_face(img, name):
    im = clean_alpha(img.resize((FACE, FACE), Image.LANCZOS))
    dst = os.path.join(OUT, name)
    im.save(dst, 'WEBP', lossless=True, quality=100, method=6)
    return os.path.getsize(dst)


def crop_ratio(img, ratio):
    """按宽高比居中裁切。"""
    w, h = img.size
    cur = w / h
    if cur > ratio:
        nw = int(h * ratio)
        left = (w - nw) // 2
        return img.crop((left, 0, left + nw, h))
    nh = int(w / ratio)
    top = max(0, int((h - nh) * 0.35))
    return img.crop((0, top, w, top + nh))


def main():
    os.makedirs(OUT, exist_ok=True)
    total = 0
    rows = []

    # ---------- 立绘 + 头像 ----------
    for cname, pre, fin, fout in SPRITES:
        for tag, rel in (('in', fin), ('out', fout)):
            if not rel:
                continue
            img = load_sprite(rel)
            name = '%s-sprite-%s.webp' % (pre, tag)
            im, size = save_sprite(img, name)
            total += size
            rows.append((name, im.size, size))
            if tag == 'in':
                face = make_face(img)
                if face:
                    fs = save_face(face, '%s-face.webp' % pre)
                    total += fs
                    rows.append(('%s-face.webp' % pre, (FACE, FACE), fs))

    # ---------- 背景 ----------
    for src, dst in BACKGROUNDS:
        path = os.path.join(PIC, BG_DIR, src)
        if not os.path.exists(path):
            print('缺少背景：', src)
            continue
        img = crop_ratio(Image.open(path).convert('RGB'), BG_W / BG_H)
        img = img.resize((BG_W, BG_H), Image.LANCZOS)
        p = os.path.join(OUT, dst)
        img.save(p, 'WEBP', quality=84, method=6)
        total += os.path.getsize(p)
        rows.append((dst, img.size, os.path.getsize(p)))

    # ---------- 店铺插画 ----------
    for src, dst in SHOPS:
        path = os.path.join(PIC, SHOP_DIR, src)
        if not os.path.exists(path):
            print('缺少店铺图：', src)
            continue
        img = Image.open(path).convert('RGB')
        h = round(SHOP_W * img.size[1] / img.size[0])
        img = img.resize((SHOP_W, h), Image.LANCZOS)
        p = os.path.join(OUT, dst)
        img.save(p, 'WEBP', quality=86, method=6)
        total += os.path.getsize(p)
        rows.append((dst, img.size, os.path.getsize(p)))

    print('%-26s %-12s %s' % ('文件', '尺寸', '大小'))
    for n, size, b in rows:
        print('%-26s %-12s %5.1f KB' % (n, '%dx%d' % size, b / 1024))
    print('--- %d 个文件，合计 %.1f KB ---' % (len(rows), total / 1024))


if __name__ == '__main__':
    main()
