
---
title: Installation de SONAR
description: Guide d'installation de SONAR sur différents systèmes d'exploitation.
---

## Installation de SONAR

Ce guide vous accompagne dans l'installation de SONAR en fonction de votre système d'exploitation. Choisissez le format correspondant à votre environnement.

### Windows (MSI)

1. **Téléchargement** :  
   Téléchargez le fichier MSI depuis la [page de téléchargement](/doc/download).
2. **Installation** :  
   - Double-cliquez sur le fichier `.msi` téléchargé.  
   - Suivez les instructions de l'assistant d'installation.  
   - Une connexion Internet peut être requise pour certaines dépendances.
3. **Dépendance requise** :  
   Installez [Npcap](https://npcap.com/dist/npcap-1.81.exe) si vous souhaitez capturer du trafic réseau.

### Linux (DEB et RPM)

#### Debian / Ubuntu (.deb)

1. **Téléchargement** :  
   Récupérez le package `.deb` depuis la [page de téléchargement](/doc/download).
2. **Installation** :  
   Exécutez la commande suivante dans un terminal :
   ```bash
   sudo dpkg -i sonar_x64.deb
   ```
3. **Dépendances** :  
   Si des dépendances sont manquantes, corrigez-les avec :
   ```bash
   sudo apt-get install -f
   ```

#### Fedora / CentOS / RHEL (.rpm)

1. **Téléchargement** :  
   Téléchargez le fichier `.rpm` depuis la [page de téléchargement](/doc/download).
2. **Installation** :  
   Utilisez `dnf` ou `yum` selon votre système :
   ```bash
   sudo dnf install sonar_x64.rpm
   ```
   ou
   ```bash
   sudo yum install sonar_x64.rpm
   ```

### macOS (DMG)

1. **Téléchargement** :  
   Récupérez le fichier `.dmg` depuis la [page de téléchargement](/doc/download).
2. **Installation** :  
   - Double-cliquez sur le fichier `.dmg`.  
   - Faites glisser l'application SONAR dans le dossier `Applications`.  
3. **Première exécution** :  
   Si macOS bloque l'application, allez dans `Préférences Système > Sécurité et confidentialité`, puis autorisez SONAR à s'exécuter.

## Ressources supplémentaires

- Consultez la [documentation technique](/doc/guides/example/) pour des détails avancés.  
- En cas de problème, ouvrez un ticket sur [GitHub](https://github.com/Sonar-team).  
