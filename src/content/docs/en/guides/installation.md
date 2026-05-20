---
title: SONAR Installation
description: Installation guide for SONAR on supported operating systems.
---

## Install SONAR

This guide explains how to install SONAR depending on your operating system.

### Windows (NSIS or MSI)

1. **Download**:
   Get the Windows installer from the [download page](/doc/en/download).
2. **Install**:
   Double-click the downloaded `.exe` or `.msi` file and follow the setup wizard.
3. **Required dependency**:
   Install [Npcap 1.87](https://npcap.com/dist/npcap-1.87.exe) if you want to capture live network traffic.

### Linux (AppImage, DEB and RPM)

Make sure `libpcap` is available on the host before running live capture.

```bash
sudo apt install libpcap-dev
```

#### Debian / Ubuntu (.deb)

```bash
sudo apt install ./sonar*.deb
```

#### Fedora / CentOS / RHEL (.rpm)

```bash
sudo dnf install ./sonar*.rpm
```

#### Portable run (.AppImage)

```bash
chmod +x SONAR*.AppImage
./SONAR*.AppImage
```

### macOS (DMG)

1. **Download**:
   Get the `.dmg` file from the [download page](/doc/en/download).
2. **Install**:
   Open the disk image and drag SONAR into `Applications`.
3. **First launch**:
   If macOS blocks the app, allow it from the system security settings.

### CLI / headless mode

Recent SONAR versions also expose a no-window mode for automated workflows.

```bash
sonar --headless
```

## Additional resources

- See the [development prerequisites](/doc/en/developpement/prerequis) for local setup details.
- Report issues on [GitHub](https://github.com/Sonar-team/Sonar_desktop_app).
