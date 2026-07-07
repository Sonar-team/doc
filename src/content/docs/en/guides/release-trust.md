---
title: Release trust
description: Verify integrity and provenance of SONAR release artifacts.
---

# Release trust

This page explains how to verify that a downloaded SONAR artifact is authentic
and traceable to the official release pipeline.

## What is published

For each release, SONAR publishes:

- build artifacts (`setup.exe`, `msi`, `dmg`, `deb`, `rpm`, etc.)
- SHA256 manifests
- SBOM files
- build provenance attestations
- Sigstore bundles (`.sigstore.json`) and related signatures

## Minimum verification steps

1. Compare your local SHA256 against the published manifest.
2. Validate provenance attestation from GitHub Actions.
3. Verify signature evidence with `cosign verify-blob`.

## Where to verify

- Official releases:  
  `https://github.com/Sonar-team/Sonar_desktop_app/releases`
- Artifacts + SHA256 + Sigstore bundles: release assets.
- Provenance attestations: linked GitHub Actions release workflow run.

## Command examples

### 1) SHA256 hash

```bash
sha256sum sonar_*.deb
```

Compare with the published manifest (`release-hashes-*.md` or `SHA256SUMS-*`).

### 2) Cosign blob verification

```bash
cosign verify-blob \
  --bundle sonar_*.sigstore.json \
  --certificate-identity-regexp "https://github.com/Sonar-team/Sonar_desktop_app/.*" \
  --certificate-oidc-issuer "https://token.actions.githubusercontent.com" \
  sonar_*.deb
```

### 3) SBOM

- Ensure the SBOM file is present for the artifact.
- Ensure SBOM and artifact belong to the same release.

## Recommended practice

- Download only from the official GitHub release.
- Do not redistribute unverified local builds.
- Store SHA256/provenance/Sigstore evidence alongside delivered binaries.

## References

- Changelog: `/doc/changelog`
- Download: `/doc/en/download`
