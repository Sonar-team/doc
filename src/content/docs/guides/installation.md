---
title: Installation de SONAR
description: Guide d'installation de SONAR sur différents systèmes d'exploitation.
sidebar:
  order: 301
---

## Installation de SONAR

Ce guide vous accompagne dans l'installation de SONAR en fonction de votre
système d'exploitation. Choisissez le format correspondant à votre
environnement.

### Windows (NSIS ou MSI)

1. **Téléchargement** :
   Téléchargez l'installateur Windows depuis la [page de téléchargement](/doc/download).
2. **Installation** :
   Double-cliquez sur le fichier `.exe` ou `.msi` téléchargé puis suivez l'assistant.
3. **Dépendance requise** :
   Installez [Npcap 1.87](https://npcap.com/dist/npcap-1.87.exe) si vous souhaitez capturer du trafic réseau.

### Linux (AppImage, DEB et RPM)

Avant la première capture, assurez-vous que `libpcap` est disponible sur votre système.

```bash
sudo apt install libpcap-dev
```

#### Debian / Ubuntu (.deb)

1. **Téléchargement** :
   Récupérez le package `.deb` depuis la [page de téléchargement](/doc/download).
2. **Installation** :
   ```bash
   sudo apt install ./sonar*.deb
   ```

#### Fedora / CentOS / RHEL (.rpm)

1. **Téléchargement** :
   Téléchargez le fichier `.rpm` depuis la [page de téléchargement](/doc/download).
2. **Installation** :
   ```bash
   sudo dnf install ./sonar*.rpm
   ```

#### Exécution portable (.AppImage)

1. Téléchargez le fichier `.AppImage` depuis la [page de téléchargement](/doc/download).
2. Rendez-le exécutable :
   ```bash
   chmod +x SONAR*.AppImage
   ```
3. Lancez-le :
   ```bash
   ./SONAR*.AppImage
   ```

### macOS (DMG)

1. **Téléchargement** :
   Récupérez le fichier `.dmg` depuis la [page de téléchargement](/doc/download).
2. **Installation** :
   Double-cliquez sur le fichier `.dmg`, puis faites glisser l'application SONAR dans `Applications`.
3. **Première exécution** :
   Si macOS bloque l'application, autorisez SONAR depuis les réglages de sécurité du système.

### Mode CLI / headless

Les versions récentes de SONAR exposent aussi un mode sans interface graphique pour certains usages automatisés.

```bash
sonar --headless
```

## Ressources supplémentaires

- Consultez la [documentation technique](/doc/guides/utilisation/) pour des détails avancés.
- En cas de problème, ouvrez un ticket sur [GitHub](https://github.com/Sonar-team/Sonar_desktop_app).
