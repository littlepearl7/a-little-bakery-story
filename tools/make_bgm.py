# -*- coding: utf-8 -*-
"""
程序化合成《林记的午后》：治愈系八音盒风格 BGM。

结构：A 段 8 小节（主题）+ B 段 8 小节（上扬），共 16 小节，约 53 秒，首尾衔接可循环。
编制：八音盒主旋律 + 分解和弦 + 低音垫，最后加两道延迟当混响。

用法：python tools/make_bgm.py
输出：public/audio/bgm.wav（中间产物）→ public/audio/bgm.mp3
"""

import os
import subprocess
import wave

import numpy as np

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(HERE, 'public', 'audio')
SR = 44100
BPM = 72
BEAT = 60.0 / BPM          # 一拍秒数 ≈ 0.8333
BAR = BEAT * 4             # 一小节

# ---------- 音名 -> 频率 ----------

NOTE = {}
NAMES = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B']
for octave in range(2, 6):
    for i, n in enumerate(NAMES):
        midi = 12 * (octave + 1) + i
        NOTE['%s%d' % (n, octave)] = 440.0 * 2 ** ((midi - 69) / 12.0)


def place(track, start, dur, freq, vel, tone='bell'):
    """把一个音符写进轨道。tone: bell 主旋律 / soft 伴奏 / bass 低音"""
    n = int(dur * SR)
    if n < 8:
        return
    t = np.arange(n) / SR
    if tone == 'bell':
        # 八音盒：基频 + 少量高次泛音，指数衰减
        w = (np.sin(2 * np.pi * freq * t)
             + 0.35 * np.sin(2 * np.pi * freq * 2 * t)
             + 0.12 * np.sin(2 * np.pi * freq * 4.02 * t))
        env = np.minimum(t / 0.008, 1) * np.exp(-t * 3.2)
        sustain = 0.18
    elif tone == 'soft':
        w = np.sin(2 * np.pi * freq * t) + 0.15 * np.sin(2 * np.pi * freq * 2 * t)
        env = np.minimum(t / 0.03, 1) * np.exp(-t * 1.6)
        sustain = 0.22
    else:
        w = np.sin(2 * np.pi * freq * t) + 0.2 * np.sin(2 * np.pi * freq * 3 * t)
        env = np.minimum(t / 0.05, 1) * np.exp(-t * 0.9)
        sustain = 0.25
    # 尾音留一点余韵，避免戛然而止
    amp = vel * (env + sustain * (1 - np.exp(-t * 3)) * np.exp(-t * 0.5))
    track[start:start + n] += (w * amp)[:len(track) - start]


# ---------- 乐谱 ----------
# 和弦进行（每小节一个和弦根音 + 组成音）
PROG_A = [('C', ['C3', 'G3', 'E4', 'G3']), ('G', ['G2', 'D3', 'B3', 'D3']),
          ('Am', ['A2', 'E3', 'C4', 'E3']), ('F', ['F2', 'C3', 'A3', 'C3'])]
PROG_B = [('F', ['F2', 'C3', 'A3', 'C3']), ('G', ['G2', 'D3', 'B3', 'D3']),
          ('C', ['C3', 'G3', 'E4', 'G3']), ('Am', ['A2', 'E3', 'C4', 'E3'])]

# 主旋律：(小节内拍位置, 音名, 拍数)。None 表示休止。
MELODY_A = [
    [(0, 'E4', 1), (1, 'G4', 1), (2, 'A4', 2)],
    [(0, 'G4', 1), (1, 'D4', 1), (2, 'B3', 2)],
    [(0, 'C4', 1), (1, 'E4', 1), (2, 'A4', 2)],
    [(0, 'A4', 1.5), (1.5, 'G4', 1.5), (3, 'E4', 1)],
    [(0, 'E4', 1), (1, 'G4', 1), (2, 'C5', 2)],
    [(0, 'B4', 1), (1, 'A4', 1), (2, 'G4', 2)],
    [(0, 'E4', 1), (1, 'D4', 1), (2, 'C4', 2)],
    [(0, 'D4', 2), (2, 'E4', 2)],
]
MELODY_B = [
    [(0, 'A4', 1), (1, 'C5', 1), (2, 'D5', 2)],
    [(0, 'B4', 1), (1, 'D5', 1), (2, 'E5', 1.5), (3.5, 'D5', 0.5)],
    [(0, 'C5', 2), (2, 'G4', 1), (3, 'E4', 1)],
    [(0, 'A4', 1), (1, 'B4', 1), (2, 'C5', 2)],
    [(0, 'C5', 1), (1, 'A4', 1), (2, 'F4', 2)],
    [(0, 'G4', 1), (1, 'B4', 1), (2, 'D5', 2)],
    [(0, 'E5', 1), (1, 'D5', 1), (2, 'C5', 2)],
    [(0, 'G4', 3), (3, 'C5', 1)],   # 结尾落在 C5，接回开头的 E4 自然
]

BARS = 16
TOTAL = BAR * BARS
n_total = int(TOTAL * SR) + SR // 2   # 多留半秒尾音
lead = np.zeros(n_total)
arp = np.zeros(n_total)
bass = np.zeros(n_total)


def render():
    for bar in range(BARS):
        t0 = int(bar * BAR * SR)
        prog = PROG_A[bar % 4] if bar < 8 else PROG_B[bar % 4]
        chord_root, arp_notes = prog

        # 低音：根音每两拍一次
        place(bass, t0, BEAT * 1.9, NOTE[arp_notes[0]], 0.20, 'bass')
        place(bass, t0 + int(BEAT * 2 * SR), BEAT * 1.9, NOTE[arp_notes[1]], 0.15, 'bass')

        # 分解和弦：八分音符琶音
        for i in range(8):
            n = arp_notes[i % 4]
            place(arp, t0 + int(i * BEAT * 0.5 * SR), BEAT * 0.48, NOTE[n], 0.16, 'soft')

        # 主旋律
        mel = MELODY_A[bar] if bar < 8 else MELODY_B[bar % 8]
        for beat_pos, name, dur in mel:
            place(lead, t0 + int(beat_pos * BEAT * SR), dur * BEAT, NOTE[name], 0.42, 'bell')


def add_reverb(x):
    """两道短延迟 + 一道长延迟，模拟小房间，输出柔和一些"""
    out = x.copy()
    for delay, gain in [(0.11, 0.22), (0.23, 0.13), (0.41, 0.07)]:
        d = int(delay * SR)
        out[d:] += x[:-d] * gain
    return out


def main():
    render()
    mix = lead + arp + bass
    mix = add_reverb(mix)

    # 首尾淡入淡出各 0.4 秒，循环时不会有爆音
    fade = int(0.4 * SR)
    mix[:fade] *= np.linspace(0, 1, fade)
    mix[-fade:] *= np.linspace(1, 0, fade)

    peak = np.max(np.abs(mix))
    mix = mix / peak * 0.72

    os.makedirs(OUT_DIR, exist_ok=True)
    wav_path = os.path.join(OUT_DIR, 'bgm.wav')
    pcm = (mix * 32767).astype(np.int16)
    with wave.open(wav_path, 'wb') as f:
        f.setnchannels(1)
        f.setsampwidth(2)
        f.setframerate(SR)
        f.writeframes(pcm.tobytes())

    mp3 = os.path.join(OUT_DIR, 'bgm.mp3')
    subprocess.run([
        'ffmpeg', '-y', '-loglevel', 'error', '-i', wav_path,
        '-codec:a', 'libmp3lame', '-b:a', '96k', mp3,
    ], check=True)
    os.remove(wav_path)

    print('时长 %.1f 秒' % (len(mix) / SR))
    print('mp3: %s (%.0f KB)' % (mp3, os.path.getsize(mp3) / 1024))


if __name__ == '__main__':
    main()
