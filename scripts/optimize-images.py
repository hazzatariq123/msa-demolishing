"""Regenerates the WebP image set from the original JPEGs in source-images/.

Each image is written at four widths (-640, -750, -828 and full source width) at quality 90 with the slowest,
best-compressing encoder setting, so quality is preserved and only the encoding is optimised.
Very grainy photos that would exceed the phone-size byte budget step down in small increments, never below
MIN_QUALITY (82, visually indistinguishable), so one heavy photo cannot slow the page down.
Requires Pillow:  pip install pillow
"""

import glob
import os
import re

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SOURCE_DIR = os.path.join(ROOT, 'source-images')
TARGET_DIRS = [os.path.join(ROOT, 'public', 'images')]
QUALITY = 90
MIN_QUALITY = 82
PHONE_BUDGET_BYTES = 120 * 1024  # the 750 px variant is what most phones download for a hero image
WIDTHS = ((640, '-640'), (750, '-750'), (828, '-828'), (None, ''))


def base_names(directory):
    names = set()
    for path in glob.glob(os.path.join(directory, '*.webp')):
        names.add(re.sub(r'(-640|-750|-828)?\.webp$', '', os.path.basename(path)))
    return names


def resized_to(image, width):
    if width is None or image.width <= width:
        return image
    return image.resize((width, round(image.height * width / image.width)), Image.LANCZOS)


def pick_quality(image):
    """Highest quality (90 down to MIN_QUALITY) whose phone-size variant fits the byte budget."""
    import io

    phone = resized_to(image, 750)
    quality = QUALITY
    while quality > MIN_QUALITY:
        buffer = io.BytesIO()
        phone.save(buffer, 'WEBP', quality=quality, method=6)
        if buffer.tell() <= PHONE_BUDGET_BYTES:
            break
        quality -= 2
    return quality


def main():
    before = after = 0
    for directory in TARGET_DIRS:
        for base in sorted(base_names(directory)):
            source = os.path.join(SOURCE_DIR, base + '.jpg')
            if not os.path.exists(source):
                continue
            image = Image.open(source).convert('RGB')
            quality = pick_quality(image)
            if quality != QUALITY:
                print(f'  {base}: quality {quality}')
            for width, suffix in WIDTHS:
                resized = resized_to(image, width)
                target = os.path.join(directory, base + suffix + '.webp')
                if os.path.exists(target):
                    before += os.path.getsize(target)
                resized.save(target, 'WEBP', quality=quality, method=6)
                after += os.path.getsize(target)
    print(f'images: {before // 1024} KB -> {after // 1024} KB')


if __name__ == '__main__':
    main()
