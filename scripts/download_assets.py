#!/usr/bin/env python3
"""Download Sendou.ink AVIF icons and convert them to local WebP assets."""

from __future__ import annotations

import io
import re
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
APP_JS = ROOT / "app.js"
ASSETS = ROOT / "assets"
RAW_BASE = "https://raw.githubusercontent.com/sendou-ink/sendou.ink/main/public/static-assets/img"
WEBP_QUALITY = 88
MAX_WORKERS = 8


def extract_object_keys(source: str, object_name: str) -> list[int]:
    match = re.search(rf"const {re.escape(object_name)} = \{{(.*?)\n\}};", source, re.S)
    if not match:
        raise ValueError(f"Could not find const {object_name} in app.js")

    keys = []
    for key in re.findall(r"^\s*(\d+)\s*:", match.group(1), re.M):
        keys.append(int(key))
    return sorted(set(keys))


def download(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "splatoon3-weapon-roulette-assets/1.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def convert_avif_to_webp(avif_bytes: bytes, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(io.BytesIO(avif_bytes)) as image:
        image.save(output_path, "WEBP", quality=WEBP_QUALITY, method=6)


def fetch_one(kind: str, source_dir: str, output_dir: str, item_id: int) -> str:
    output_path = ASSETS / output_dir / f"{item_id}.webp"
    if output_path.exists() and output_path.stat().st_size > 0:
        return f"skip {kind} {item_id}"

    url = f"{RAW_BASE}/{source_dir}/{item_id}.avif"
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            avif_bytes = download(url)
            convert_avif_to_webp(avif_bytes, output_path)
            return f"ok   {kind} {item_id}"
        except (urllib.error.URLError, TimeoutError, OSError) as error:
            last_error = error
            time.sleep(1 + attempt)

    raise RuntimeError(f"failed {kind} {item_id}: {last_error}")


def main() -> int:
    source = APP_JS.read_text(encoding="utf-8")
    tasks = [
        *[("weapon", "main-weapons", "weapons", item_id) for item_id in extract_object_keys(source, "names")],
        *[("sub", "sub-weapons", "sub-weapons", item_id) for item_id in extract_object_keys(source, "subWeapons")],
        *[("special", "special-weapons", "special-weapons", item_id) for item_id in extract_object_keys(source, "specialWeapons")],
    ]

    failures = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = [executor.submit(fetch_one, *task) for task in tasks]
        for future in as_completed(futures):
            try:
                print(future.result())
            except Exception as error:  # noqa: BLE001 - print all failed asset ids at the end.
                failures.append(error)
                print(error, file=sys.stderr)

    if failures:
        print(f"\n{len(failures)} asset(s) failed.", file=sys.stderr)
        return 1

    print(f"\nDone. Wrote WebP assets under {ASSETS}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
