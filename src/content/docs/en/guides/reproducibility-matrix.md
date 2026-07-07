---
title: Reproducibility matrix
description: Current reproducibility status of SONAR artifacts.
---

# Reproducibility matrix

Current status (revalidated by the `publish-smoke` workflow).

| Artifact | Current status | Notes |
| --- | --- | --- |
| Linux `sonar` binary | OK | Primary reproducibility baseline. |
| `.deb` | OK | Rebuild + hash comparison in CI. |
| `.msi` | OK | Dedicated packaging path is reproducible in CI. |
| NSIS `setup.exe` | In progress | Residual drift still observed in some environments. |
| `.rpm` | In progress | Packaging drift still under investigation. |
| `.dmg` | In progress | `hdiutil` container output can still vary. |

## Scope

Reproducibility checks target **unsigned artifacts** for byte-for-byte
comparison. Signing, provenance and SBOM are validated in a separate trust
chain step.

## Source of truth

- CI workflow: `publish-smoke`
- Changelog: `/doc/changelog`
- Internal sprint/repro documentation in the SONAR repository.
