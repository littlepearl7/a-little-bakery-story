"""把 picture/蛋糕/ 里的产品图转成游戏用的 webp。

- 自动裁掉四周透明边（有 alpha 的图），再居中补成正方形
- 统一 480×480，保留透明通道
"""

import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'picture', '蛋糕')
OUT = os.path.join(ROOT, 'public', 'art')

# 文件名 -> 产品 id（和 src/data.js 的 PRODUCTS 对齐）
MAP = {
    '香草奶油蛋糕切面透明展示.png': 'plain',
    '草莓奶油蛋糕透明背景美食摄影.png': 'strawberry',
    '巧克力甘纳许蛋糕切片.png': 'chocolate',
    '紫薯芋泥夹心奶油蛋糕.png': 'taro',
    '抹茶红豆三层夹心蛋糕.png': 'matcha',
    '芒果慕斯蛋糕水彩插画.png': 'mango',
    '水彩提拉米苏与金色花饰勺.png': 'tiramisu',
    '无缝无花果奶油蛋糕水彩插画.png': 'fig',
    '鲜果奶油蛋糕精致摆拍.png': 'seasonal',
    '草莓蓝莓生日蛋糕与蜡烛.png': 'custom',
    '圣诞姜饼草莓奶油蛋糕.png': 'festival',
    '草莓芒果抹茶夹心蛋糕.png': 'signature',
}

SIZE = 480
PAD = 0.94  # 主体占画布的比例，留一点呼吸


def convert(name, pid):
    im = Image.open(os.path.join(SRC, name)).convert('RGBA')
    bbox = im.split()[3].getbbox()
    if bbox:
        im = im.crop(bbox)

    w, h = im.size
    side = int(max(w, h) / PAD)
    canvas = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    canvas.paste(im, ((side - w) // 2, (side - h) // 2), im)
    canvas = canvas.resize((SIZE, SIZE), Image.LANCZOS)

    dst = os.path.join(OUT, 'cake-%s.webp' % pid)
    canvas.save(dst, 'WEBP', quality=88, method=6)
    print('%-12s %-8s %s' % (pid, '%dx%d' % (w, h), os.path.basename(dst)))


if __name__ == '__main__':
    for fname, product in MAP.items():
        convert(fname, product)
    total = sum(
        os.path.getsize(os.path.join(OUT, 'cake-%s.webp' % p)) for p in MAP.values()
    )
    print('共 %d 张，%.0f KB' % (len(MAP), total / 1024))
