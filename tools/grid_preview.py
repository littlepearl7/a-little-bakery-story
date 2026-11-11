"""给设定集叠加百分比网格，用来量准切图坐标。

用法：python tools/grid_preview.py "picture/文件名.png" [输出宽]
产物：tools/_grid_<文件名>.png
"""

import os
import sys
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    src = sys.argv[1]
    width = int(sys.argv[2]) if len(sys.argv) > 2 else 900

    im = Image.open(os.path.join(ROOT, src)).convert("RGB")
    ratio = width / im.size[0]
    im = im.resize((width, int(im.size[1] * ratio)), Image.LANCZOS)
    w, h = im.size

    draw = ImageDraw.Draw(im)
    for p in range(0, 101, 5):
        x = int(w * p / 100)
        y = int(h * p / 100)
        strong = p % 10 == 0
        color = (255, 0, 0) if strong else (0, 120, 255)
        draw.line([(x, 0), (x, h)], fill=color, width=1)
        if p <= 100:
            draw.line([(0, y), (w, y)], fill=color, width=1)
        if strong:
            draw.text((x + 3, 3), str(p), fill=(255, 0, 0))
            draw.text((3, max(y - 12, 0)), str(p), fill=(255, 0, 0))

    out = os.path.join(ROOT, "tools", "_grid_" + os.path.basename(src).replace(".png", "") + ".png")
    im.save(out)
    print(out, im.size)


if __name__ == "__main__":
    main()
