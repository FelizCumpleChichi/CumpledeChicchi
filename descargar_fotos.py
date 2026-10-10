#!/usr/bin/env python3
"""Valida las fotos locales del Gran Viaje 2026.

A partir de la V5 ya no es necesario descargar fotos desde internet:
el proyecto incluye los seis archivos locales dentro de assets/gran-viaje-2026/.
Este script simplemente verifica su presencia y muestra sus dimensiones.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent
FILES = [
    ('washington', ROOT/'assets/gran-viaje-2026/washington.jpg'),
    ('philadelphia', ROOT/'assets/gran-viaje-2026/philadelphia.jpg'),
    ('new-york', ROOT/'assets/gran-viaje-2026/new-york.jpg'),
    ('boston', ROOT/'assets/gran-viaje-2026/boston.jpg'),
    ('montreal', ROOT/'assets/gran-viaje-2026/montreal.jpg'),
    ('punta-cana', ROOT/'assets/gran-viaje-2026/punta-cana.jpg'),
]

missing = []
for name, path in FILES:
    if not path.exists():
        missing.append(name)
        print(f'FALTA: {name} -> {path}')
        continue
    with Image.open(path) as im:
        print(f'OK: {name:12s} {im.size[0]}x{im.size[1]}  {path.relative_to(ROOT)}')

if missing:
    raise SystemExit('Faltan imágenes del capítulo especial.')
print('\nListo: las seis fotos locales del Gran Viaje 2026 están disponibles.')
