---
sidebar_position: 12
---

# Software Bill Of Materials (SBOM) Reports

You can find the SBOM reports (SPDX and CycloneDX formats) as artifacts in our container registry at the locations below. They are updated every time there is change in the codebase and tagged by the exact version we release.

| Location                                   | Files                         | Context                               |
| ------------------------------------------ | ----------------------------- | ------------------------------------- |
| `ghcr.io/boxyhq/jackson/service:<version>` | `sbom.spdx`, `sbom.cyclonedx` | SAML Jackson service                  |
| `ghcr.io/boxyhq/jackson/npm:<version>`     | `sbom.spdx`, `sbom.cyclonedx` | NPM package                           |
| `ghcr.io/boxyhq/jackson/docker:<version>`  | `sbom.spdx`, `sbom.cyclonedx` | Docker Image for SAML Jackson service |

You can use [oras](https://oras.land/cli) (or a similar OCI artifacts tool) to retrieve these files.
```bash
oras pull ghcr.io/boxyhq/jackson/service:<version>
```
