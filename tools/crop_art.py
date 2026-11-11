"""从设定集切出游戏可用的美术资源。

用法：python tools/crop_art.py
源图在 picture/，产物写到 public/art/。
切图坐标用归一化比例，换图后只需微调这里的数字。
"""

import os
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "picture")
OUT = os.path.join(ROOT, "public", "art")
SHEET = os.path.join(ROOT, "tools", "_contact.png")

os.makedirs(OUT, exist_ok=True)


def crop(src, box, out, max_h=None, square=None):
    im = Image.open(os.path.join(SRC, src)).convert("RGB")
    w, h = im.size
    x1, y1, x2, y2 = box
    piece = im.crop((int(x1 * w), int(y1 * h), int(x2 * w), int(y2 * h)))

    if square:
        # 居中裁成正方形，供头像使用
        sw, sh = piece.size
        side = min(sw, sh)
        piece = piece.crop(
            ((sw - side) // 2, int((sh - side) * 0.18), (sw - side) // 2 + side,
             int((sh - side) * 0.18) + side)
        )
        piece = piece.resize((square, square), Image.LANCZOS)
    elif max_h and piece.size[1] > max_h:
        ratio = max_h / piece.size[1]
        piece = piece.resize((int(piece.size[0] * ratio), max_h), Image.LANCZOS)

    piece.save(os.path.join(OUT, out), "WEBP", quality=90, method=6)
    return piece


JOBS = []

# ---------- 店铺场景 ----------
JOBS.append(("林记糕点铺的温暖午后.png", (0, 0, 1, 1), "shop-exterior.webp", 1100, None))

# ---------- 林念（成长档案：立绘在左，4 个表情在中右） ----------
JOBS.append(("林念的烘焙成长档案.png", (0.085, 0.035, 0.332, 0.828), "ln-full.webp", 900, None))
JOBS.append(("林念的烘焙成长档案.png", (0.113, 0.040, 0.252, 0.170), "ln-face.webp", None, 240))

# ---------- 苏晴（立绘居中，表情 2 行 3 列在右） ----------
JOBS.append(("苏晴的暖心蛋糕店角色设定集.png", (0.492, 0.042, 0.666, 0.908), "sq-full.webp", 900, None))
JOBS.append(("苏晴的暖心蛋糕店角色设定集.png", (0.200, 0.675, 0.470, 0.930), "sq-friends.webp", 520, None))
SQ_EXP = (0.705, 0.363, 0.968, 0.612)
for r in range(2):
    for c in range(3):
        x1 = SQ_EXP[0] + (SQ_EXP[2] - SQ_EXP[0]) / 3 * c
        x2 = SQ_EXP[0] + (SQ_EXP[2] - SQ_EXP[0]) / 3 * (c + 1)
        y1 = SQ_EXP[1] + (SQ_EXP[3] - SQ_EXP[1]) / 2 * r
        y2 = SQ_EXP[1] + (SQ_EXP[3] - SQ_EXP[1]) / 2 * (r + 1)
        JOBS.append(
            ("苏晴的暖心蛋糕店角色设定集.png", (x1, y1, x2, y2),
             "sq-exp-%d.webp" % (r * 3 + c + 1), None, 200)
        )

# ---------- 林暖（立绘居中，表情 2 行 3 列在右上） ----------
JOBS.append(("《小镇蛋糕店》林暖角色设定集.png", (0.378, 0.015, 0.605, 0.965), "nu-full.webp", 900, None))
JOBS.append(("《小镇蛋糕店》林暖角色设定集.png", (0.215, 0.520, 0.345, 0.780), "nu-duo.webp", 520, None))
JOBS.append(("《小镇蛋糕店》林暖角色设定集.png", (0.030, 0.080, 0.232, 0.470), "nu-portrait.webp", 640, None))
# 两行表情的纵向范围单独给，避免框到「开心/惊讶/欣慰」这些文字标签
NU_ROWS = [(0.052, 0.163), (0.220, 0.334)]
for r in range(2):
    for c in range(3):
        x1 = 0.755 + (0.998 - 0.755) / 3 * c
        x2 = 0.755 + (0.998 - 0.755) / 3 * (c + 1)
        y1, y2 = NU_ROWS[r]
        JOBS.append(
            ("《小镇蛋糕店》林暖角色设定集.png", (x1, y1, x2, y2),
             "nu-exp-%d.webp" % (r * 3 + c + 1), None, 200)
        )


def main():
    pieces = []
    for src, box, out, max_h, square in JOBS:
        piece = crop(src, box, out, max_h, square)
        pieces.append((out, piece.copy()))
        print("%-16s %s" % (out, piece.size))

    # 拼一张联络表，方便一眼校验切图有没有偏
    cols = 6
    cell = 170
    rows = (len(pieces) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell, rows * (cell + 18)), (250, 245, 238))
    draw = ImageDraw.Draw(sheet)
    for i, (name, piece) in enumerate(pieces):
        thumb = piece.copy()
        thumb.thumbnail((cell - 10, cell - 10), Image.LANCZOS)
        cx = (i % cols) * cell
        cy = (i // cols) * (cell + 18)
        sheet.paste(thumb, (cx + (cell - thumb.size[0]) // 2, cy + 4))
        draw.text((cx + 4, cy + cell + 2), name.replace(".webp", ""), fill=(90, 70, 55))
    sheet.save(SHEET)
    print("\n联络表：%s" % SHEET)


if __name__ == "__main__":
    main()
