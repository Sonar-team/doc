---
title: Fonctionnalités
description: Fonctionnalités de SONAR.
sidebar:
  order: 303
---

# Fonctionnalités de SONAR

SONAR est une application de **capture et d’inventorisation de flux réseau**, développée en **Rust + Tauri + Vue.js**, conçue pour faciliter la compréhension et la visualisation des communications sur un réseau informatique.  
Cette page décrit l’ensemble des fonctionnalités actuelles et prévues du logiciel.

---

## 🧩 1. Capture de paquets (fonctionnalité principale)

### Contrôle de la capture
- **Démarrer** la capture réseau <img src="/src/assets/logo_sonar.png" alt="Logo SONAR" style="width: 25px; display: inline; vertical-align: middle; margin-left: 10px;" />
- **Stopper** la capture 🛑
- **Réinitialiser** (`reset`) la capture et la visualisation associée 🔄
<img src="/src/assets/topbar.png"  alt="topbar"  /> 

### Visualisation en temps réel
- Affichage en direct des paquets capturés
<img src="/src/assets/realtime.png"  alt="Realtime frames"  /> 

- Compteurs en temps réel :
  - Nombre de paquets lus 📥
  - Nombre de paquets ajoutés à la matrice 📊
  - Nombre de paquets ratés (par le code ❌ ou la carte réseau 🚫)
- Indicateur de **saturation** (alerte en cas de perte de paquets 🚨)
- Chronomètre de relevé (durée de capture ⏱️)
<img src="/src/assets/status.png"  alt="status bar"  /> 


### Filtrage
- Filtrage **à la capture** (BPF ou équivalent)
- ⚠️ Aucun filtrage post-capture : l’utilisateur doit trier ses données dans le relevé exporté
<img src="/src/assets/filters.png"  alt="filter"  /> 


### Configuration avancée ⚙️
- Sélection de l’**interface réseau**
- Paramètres ajustables :
  - Taille du **buffer de capture** (libpcap)
  - Taille du **buffer du channel** (capture → traitement)
  - **Timeout** de vidage du buffer interne
  - **Snaplen** (taille maximale capturée par paquet)

### Comportement au reset
- Le `reset` réinitialise la capture **et** la **visualisation graphique** correspondante.

---

## 🌐 2. Inventorisation des flux (matrice de flux)

### Génération et affichage
- Agrégation automatique des paquets en **matrice de flux** (source/destination/protocole)
- **Visualisation graphique** des communications sous forme de graphe dynamique
- **Export CSV** de la matrice
- **Export PNG** de la représentation graphique

### Édition et labeling
- Possibilité d’**éditer les nœuds** du graphe pour leur attribuer des **labels** (ex. `serveur 1`)
- Ces labels sont enregistrés dans une **colonne dédiée** du CSV exporté

### Placement des nœuds
- Moteur de gravité (force-directed layout)
- Option pour **désactiver** la gravité et **placer manuellement** les nœuds

### Zoom adaptatif
- Zoom fluide permettant d’afficher plus ou moins de détails selon le niveau de zoom :
  - Vue globale → nœuds et liens principaux
  - Zoom fort → affichage des **ports** et **protocoles**

---

## 📂 3. Import et conversion

- **Import de fichiers PCAP 📄**
- Conversion automatique du PCAP en **matrice de flux**
- Visualisation et édition de la matrice importée (identique à une capture live)

---

## 💾 4. Sauvegarde, export et journaux

- Export des **logs applicatifs 📒**
- Export des **matrices 💾** au format CSV
- Export de la **vue graphique 📸** en PNG
- Message de confirmation lors de la fermeture de l’application :
  > “Êtes-vous sûr de vouloir quitter sans sauvegarder ?”

---

## ℹ️ 5. Informations et aide

- Panneau **À propos** :
  - Version de l’application
  - Contact en cas d’incident
  - Mentions légales / licence
- Accès à la **documentation** utilisateur (guide d’utilisation, support)

---

## ⚙️ 6. Monitoring et performance

- Surveillance de l’utilisation **CPU**
- Compteurs techniques :
  - Paquets lus
  - Paquets ajoutés à la matrice
  - Paquets ratés (code / carte réseau)
- Indicateur de **saturation** en cas de surcharge réseau

---

## 🚧 7. Règles de fonctionnement

- Les filtres ne s’appliquent **que pendant la capture**
- Le `reset` efface la capture et la visualisation graphique associée
- Les labels utilisateurs sont persistés dans les exports CSV pour traçabilité
- En cas de forte charge, SONAR prévient l’utilisateur des pertes potentielles de paquets

---

## 🔍 8. Points techniques et qualité

- Cohérence entre buffers (libpcap / channel / pool)
- Tests de charge (validation des compteurs de pertes)
- Validation des schémas d’export CSV :
  - `mac_source`, `mac_destination`, `ip_source`, `ip_destination`, `protocol_transport`, `application_protocol`, `label_source`, `label_destination`, `count`, `total_bytes`, `last_seen`, etc.
- Les exports PNG incluent les métadonnées : date, version SONAR, filtre actif
- Round-trip import/export : l’import d’un CSV/PCAP doit restituer la même matrice et les mêmes labels

---

## 🧠 Objectif général

SONAR vise à **simplifier la compréhension des flux réseau** sur un périmètre donné.  
L’application ne tire **aucune conclusion** automatique : elle restitue fidèlement les échanges observés, laissant à l’utilisateur (auditeur, technicien ou analyste) le soin d’interpréter les flux et d’en tirer les conclusions nécessaires.

---

> **Auteur principal :** Cyprien Avico  
> **Projet :** SONAR – Surveillance Optimisée des Nœuds pour Analyse Réseau  
> **Langages :** Rust, Tauri, Vue.js  
> **Licence :** AGPLv3  
> **Organisation :** ERDT-CYBER / SSF Toulon


