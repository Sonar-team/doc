---
title: Confiance release
description: Vérifier l'intégrité et la provenance des artefacts SONAR.
---

# Confiance release

Cette page décrit comment vérifier qu'un artefact SONAR téléchargé est bien
celui publié par l'équipe.

## Ce qui est publié

Pour chaque release, les éléments suivants sont publiés:

- artefacts de build (ex: `setup.exe`, `msi`, `dmg`, `deb`, `rpm`)
- relevés SHA256
- SBOM
- attestations de provenance
- bundles Sigstore (`.sigstore.json`) et signatures associées

## Vérifications minimales

1. Vérifier le hash SHA256 local contre le relevé publié.
2. Vérifier la provenance (attestation GitHub Actions).
3. Vérifier la signature Sigstore (`cosign verify-blob`).

## Où vérifier

- Release officielle:  
  `https://github.com/Sonar-team/Sonar_desktop_app/releases`
- Artefacts + SHA256 + bundles Sigstore: dans les assets de la release.
- Attestations de provenance: onglet Actions / run de release associé.

## Exemples de commandes

### 1) Hash SHA256

```bash
sha256sum sonar_*.deb
```

Comparer la valeur avec le manifeste publié (`release-hashes-*.md` ou `SHA256SUMS-*`).

### 2) Vérification cosign (blob)

```bash
cosign verify-blob \
  --bundle sonar_*.sigstore.json \
  --certificate-identity-regexp "https://github.com/Sonar-team/Sonar_desktop_app/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
  sonar_*.deb
```

### 3) SBOM

- Vérifier la présence du SBOM associé à l’artefact.
- Vérifier que le SBOM et l’artefact pointent vers la même release.

## Recommandation d'usage

- Utiliser les artefacts publiés sur la release GitHub officielle.
- Ne pas distribuer un artefact local non vérifié.
- Conserver les preuves (`SHA256`, attestation, bundle Sigstore) avec les
  livrables.

## Références

- Changelog: `/doc/changelog`
- Téléchargement: `/doc/download`
