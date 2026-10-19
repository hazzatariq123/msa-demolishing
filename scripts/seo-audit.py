"""Checks the built site (dist/) for common technical SEO problems: title and description length,
a single H1, canonical URLs, broken internal links, image alt text and valid JSON-LD.
Run after `npm run build`:  python scripts/seo-audit.py
"""

import glob
import json
import os
import re

pages = {'/': 'dist/index.html'}
for path in glob.glob('dist/*/index.html'):
    parts = path.replace(os.sep, '/').split('/')
    pages['/' + parts[1]] = path

known = set(pages) | {'/sitemap.xml', '/robots.txt', '/favicon.png'}
issues = 0

for page, file in sorted(pages.items()):
    html = open(file, encoding='utf-8').read()
    title = re.search(r'<title>(.*?)</title>', html).group(1)
    description = re.search(r'name="description" content="(.*?)"', html).group(1)
    canonical = re.search(r'rel="canonical" href="(.*?)"', html).group(1)
    h1_count = len(re.findall(r'<h1', html))
    links = re.findall(r'<a href="(/[^"#]*)"', html)
    broken = [link for link in links if link not in known and not os.path.exists('dist' + link)]
    schemas = re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S)
    schema_ok = all(json.loads(block) is not None for block in schemas)
    missing_alt = [img for img in re.findall(r'<img[^>]*>', html) if 'alt=' not in img]

    problems = []
    if not 30 <= len(title) <= 60:
        problems.append(f'title length {len(title)}')
    if not 120 <= len(description) <= 160:
        problems.append(f'description length {len(description)}')
    if h1_count != 1:
        problems.append(f'{h1_count} h1 tags')
    if broken:
        problems.append(f'broken links {broken}')
    if missing_alt:
        problems.append('image without alt text')
    if not canonical.endswith(page if page != '/' else '.com/'):
        problems.append(f'canonical {canonical}')
    issues += len(problems)
    print(
        page.ljust(28),
        f'title {len(title)}, description {len(description)}, h1 {h1_count}, links {len(links)},',
        f'json-ld {len(schemas)} ({"valid" if schema_ok else "INVALID"}) |',
        problems or 'OK',
    )

print('issues:', issues)
