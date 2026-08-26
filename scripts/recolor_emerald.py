#!/usr/bin/env python3
"""Recolor all section files from Midnight Velvet (wine/coral) to Emerald Luxe (emerald/copper)."""

from pathlib import Path

REPLACEMENTS = [
    # Wine → Emerald
    ("#4A1A28", "#0B3D2E"),    # wine → deep emerald
    ("#2A0E18", "#07261d"),    # wine-deep → emerald-deep
    ("#6B2A3B", "#2E5D43"),    # wine-soft → mid emerald
    # Coral → Copper
    ("#E07856", "#B87333"),    # coral → copper
    ("#F0A88E", "#C68A4E"),    # coral-soft → copper-light
    # Blush / Rose — keep #E8B4B8 and #D4A5A5 same (they're in both palettes)
    # Ivory → Cream
    ("#FAF3E8", "#F7F1E8"),    # ivory → warm cream
    ("#FFFCF5", "#FCFAF3"),    # cream surface → card white
    # Border
    ("#E8DDC8", "#E5D9C0"),    # champagne border → warm border
    # Background classes
    ("bg-luxe-wine", "bg-luxe-emerald"),
    ("bg-luxe-rose", "bg-luxe-blush"),
    ("bg-luxe-coral", "bg-luxe-copper"),
    # Gradient mesh dark — same name, no change needed
]

SECTION_DIR = Path("/home/z/my-project/src/components/sections")

def replace_in_file(path: Path):
    text = path.read_text(encoding="utf-8")
    original = text
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False

def main():
    print("Recoloring to Emerald Luxe palette...")
    files = sorted(SECTION_DIR.glob("*.tsx"))
    updated = 0
    for f in files:
        if replace_in_file(f):
            updated += 1
            print(f"  ✓ {f.name}")
    print(f"\nDone. {updated}/{len(files)} files updated.")

if __name__ == "__main__":
    main()
