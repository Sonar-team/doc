---
title: Matrice de reproductibilité
description: Statut de reproductibilité des artefacts SONAR.
---

# Matrice de reproductibilité

Statut actuel (réévalué à chaque exécution du workflow `publish-smoke`).

| Artefact | Statut actuel | Commentaire |
| --- | --- | --- |
| `sonar` binaire Linux | OK | Cible de référence de reproductibilité. |
| `.deb` | OK | Vérifié via rebuild + comparaison hash. |
| `.msi` | OK | Build script dédié reproductible en CI. |
| `setup.exe` (NSIS) | En cours | Dérive résiduelle observée selon environnement. |
| `.rpm` | En cours | Dérive packaging à stabiliser. |
| `.dmg` | En cours | `hdiutil` peut produire des variations conteneur. |

## Périmètre

La reproductibilité vise les artefacts **non signés** pour la comparaison
byte-à-byte. La signature, la provenance et la SBOM sont vérifiées dans une
phase séparée de la chaîne de confiance.

## Source de vérité

- Workflow CI: `publish-smoke`
- Changelog: `/doc/changelog`
- Documentation interne sprint/repro dans le dépôt SONAR.
