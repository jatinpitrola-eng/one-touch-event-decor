#!/usr/bin/env python3
"""Bulk replace old hex colors with new Midnight Velvet palette across section files."""

import re
from pathlib import Path

# Color migration: old → new
REPLACEMENTS = [
    # Greens → Wine
    ("#1F3D34", "#4A1A28"),  # emerald → wine
    ("#122821", "#2A0E18"),  # emerald-deep → wine-deep (black cherry)
    ("#2F5749", "#6B2A3B"),  # emerald-soft → wine-soft
    # Terracotta → Coral
    ("#C97B5C", "#E07856"),
    ("#E8A589", "#F0A88E"),
    # Blush → Dusty Rose
    ("#E8B4B8", "#D4A5A5"),
    ("#F5D9DB", "#F0D5D7"),
    # Champagne → soft champagne (lighter, not gold)
    ("#E8D5B7", "#E8DDC8"),
    # Sage — keep same greenish but slightly brighter
    ("#94A88B", "#9CAF88"),
    # Border
    ("#E5D9C4", "#E8DDC8"),
    # Background classes
    ("bg-luxe-emerald", "bg-luxe-wine"),
    ("bg-luxe-blush", "bg-luxe-rose"),
    ("bg-luxe-terracotta", "bg-luxe-coral"),
]

SECTION_DIR = Path("/home/z/my-project/src/components/sections")

def replace_in_file(path: Path):
    text = path.read_text(encoding="utf-8")
    original = text
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding="utf-8")
        # Count changes
        diffs = sum(1 for o, _ in REPLACEMENTS if o in original)
        print(f"  ✓ {path.name}: updated ({diffs} unique patterns found)")
        return True
    return False

def main():
    print("Replacing colors across section files...")
    files = sorted(SECTION_DIR.glob("*.tsx"))
    updated = 0
    for f in files:
        if replace_in_file(f):
            updated += 1
    print(f"\nDone. {updated}/{len(files)} files updated.")

if __name__ == "__main__":
    main()
