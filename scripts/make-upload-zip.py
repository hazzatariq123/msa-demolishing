"""Packages dist/ (including the hidden .htaccess) as msa-website-upload.zip for shared hosting.

Uses forward-slash paths so Linux hosting control panels extract folders correctly.
Run after `npm run build`:  python scripts/make-upload-zip.py
"""

import os
import zipfile

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DIST = os.path.join(ROOT, 'dist')
TARGET = os.path.join(ROOT, 'msa-website-upload.zip')

with zipfile.ZipFile(TARGET, 'w', zipfile.ZIP_DEFLATED) as archive:
    for folder, _, files in os.walk(DIST):
        for name in files:
            path = os.path.join(folder, name)
            archive.write(path, os.path.relpath(path, DIST).replace(os.sep, '/'))

names = zipfile.ZipFile(TARGET).namelist()
print(f'{len(names)} files written to msa-website-upload.zip')
print('top level:', sorted(n for n in names if '/' not in n))
print('.htaccess included:', '.htaccess' in names)
