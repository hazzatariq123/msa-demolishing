"""One-off migration: gives every image a descriptive, hyphenated file name and updates all references.

Renames the WebP variants in public/images, the original JPEGs in source-images, and every reference in
src/, index.html and scripts/. Safe to re-run: names that are already migrated are skipped.
"""

import glob
import os
import shutil

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
PUBLIC = os.path.join(ROOT, 'public', 'images')
SOURCE = os.path.join(ROOT, 'source-images')
ASSETS = os.path.join(ROOT, 'src', 'assets', 'images')

NAMES = {
    'about_us_engineers_1791866089032': 'msa-demolition-engineers-dubai',
    'building_demolition_dubai_1791759699360': 'building-demolition-dubai',
    'controlled_implosion_sequence_1791756049767': 'controlled-implosion-demolition',
    'deep_shoring_foundation_removal_1791759750345': 'deep-shoring-foundation-removal',
    'demolition_heavy_shear_1791756033650': 'industrial-demolition-heavy-shear',
    'dubai_demolition_cleared_1791767868682': 'cleared-demolition-site-dubai',
    'dubai_engineers_inspection_1791761613623': 'engineers-site-inspection-dubai',
    'dubai_flyover_viaduct_demolition_1791762226685': 'flyover-viaduct-demolition-dubai',
    'dubai_marine_wharf_demolition_1791762216315': 'marine-wharf-demolition-dubai',
    'dubai_palm_resort_demolition_1791762297191': 'resort-demolition-palm-jumeirah',
    'dubai_plaza_intact_1791767847027': 'commercial-plaza-before-demolition',
    'dubai_silo_plant_demolition_1791762286680': 'silo-plant-demolition-uae',
    'emirates_fleet_png_1791823665730': 'demolition-fleet-all-emirates',
    'faint_demolition_sketch_1791756966285': 'demolition-engineering-sketch',
    'hero_building_demolition_1791830585768': 'high-reach-building-demolition-dubai',
    'inspection_icon_png_1791823642120': 'free-demolition-site-inspection',
    'interior_stripout_demolition_1791759731027': 'interior-strip-out-dubai',
    'permit_doc_png_1791823653448': 'demolition-permit-management',
    'plaza_4k_hd_white_1791768728482': 'commercial-plaza-demolition',
    'real_dubai_plaza_hero_1791768452077': 'plaza-demolition-dubai',
    'real_plaza_demolish_mid_1791768516531': 'plaza-demolition-in-progress',
    'robotic_concrete_cruncher_1791756065306': 'robotic-concrete-demolition',
    'structural_wire_sawing_1791759713427': 'diamond-wire-sawing-concrete',
    'uae_demolition_site_1791830061517': 'demolition-site-uae',
    'MSA-logo-300': 'msa-demolition-logo-300',
    'MSA-logo-2': 'msa-demolition-logo',
}


def rename_files(directory, extension_glob):
    for old, new in NAMES.items():
        for path in glob.glob(os.path.join(directory, old + extension_glob)):
            target = os.path.join(directory, os.path.basename(path).replace(old, new, 1))
            os.replace(path, target)


def main():
    rename_files(PUBLIC, '*')
    rename_files(SOURCE, '.jpg')

    # The three images that used to be bundled from src/assets now live with the others.
    if os.path.isdir(ASSETS):
        shutil.rmtree(ASSETS)

    files = (
        glob.glob(os.path.join(ROOT, 'src', '**', '*.ts*'), recursive=True)
        + glob.glob(os.path.join(ROOT, 'scripts', '*.ts'))
        + [os.path.join(ROOT, 'index.html')]
    )
    for path in files:
        text = open(path, encoding='utf-8').read()
        updated = text
        for old, new in NAMES.items():
            updated = updated.replace(old, new)
        if updated != text:
            open(path, 'w', encoding='utf-8').write(updated)
            print('updated', os.path.relpath(path, ROOT))


if __name__ == '__main__':
    main()
