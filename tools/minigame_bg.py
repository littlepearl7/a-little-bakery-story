# -*- coding: utf-8 -*-
"""小游戏背景转 webp：内容不动，只裁成 9:16 并压缩体积"""
import os
from PIL import Image

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(HERE, 'public', 'art')
NAMES = ['minigame-production', 'minigame-research', 'minigame-delivery',
         'minigame-market', 'minigame-cafe']
W, H = 720, 1280

for name in NAMES:
    src = os.path.join(ART, name + '.png')
    if not os.path.exists(src):
        print('缺:', name)
        continue
    im = Image.open(src).convert('RGB')
    w, h = im.size
    # 居中裁成 9:16
    if w / h > W / H:
        nw = int(h * W / H)
        left = (w - nw) // 2
        im = im.crop((left, 0, left + nw, h))
    else:
        nh = int(w * H / W)
        top = max(0, int((h - nh) * 0.4))
        im = im.crop((0, top, w, top + nh))
    im = im.resize((W, H), Image.LANCZOS)
    dst = os.path.join(ART, name + '.webp')
    im.save(dst, 'WEBP', quality=84, method=6)
    print('%-22s %.0f KB' % (name + '.webp', os.path.getsize(dst) / 1024))
