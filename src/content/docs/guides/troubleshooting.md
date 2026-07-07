---
title: Dépannage
description: Résolution rapide des problèmes courants d'installation et de capture.
---

# Dépannage

## La capture ne démarre pas

- Vérifier que l'interface réseau choisie est correcte.
- Vérifier les droits de capture (`libpcap` / permissions système).
- Sous Windows, vérifier que Npcap est installé.

## Aucun paquet n'apparaît dans la matrice

- Vérifier qu'il y a du trafic réel sur l'interface sélectionnée.
- Désactiver temporairement les filtres pour confirmer le flux entrant.
- Redémarrer la capture après changement d'interface.

## L'application ne démarre pas après installation

- Re-télécharger l'artefact depuis la release officielle.
- Vérifier le SHA256 de l'artefact téléchargé.
- Consulter les logs applicatifs si disponibles.

## Erreurs de build local

- Vérifier les versions cibles Rust/Node/Deno.
- Vérifier les dépendances système (`libpcap`, prérequis Tauri).
- Refaire une installation dépendances propre.

## Où ouvrir un ticket

- Dépôt principal:  
  `https://github.com/Sonar-team/Sonar_desktop_app/issues`
