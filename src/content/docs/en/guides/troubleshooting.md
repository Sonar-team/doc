---
title: Troubleshooting
description: Quick fixes for common installation and capture issues.
---

# Troubleshooting

## Capture does not start

- Verify selected network interface is correct.
- Verify capture permissions (`libpcap` / OS permissions).
- On Windows, ensure Npcap is installed.

## No packets appear in the matrix

- Confirm traffic is present on the selected interface.
- Temporarily disable filters to validate incoming flow.
- Restart capture after interface changes.

## App fails to launch after install

- Re-download artifact from official release page.
- Verify downloaded artifact SHA256.
- Check app logs when available.

## Local build errors

- Verify pinned Rust/Node/Deno versions.
- Verify system dependencies (`libpcap`, Tauri prerequisites).
- Reinstall dependencies from a clean state.

## Where to report issues

- Main repository:  
  `https://github.com/Sonar-team/Sonar_desktop_app/issues`
