# Software Bill Of Materials (SBOM) Reports

[SBOM](https://en.wikipedia.org/wiki/Software_bill_of_materials) is a list of components in a piece of software. It is like a list of ingredients of a product. Is it quickly becoming a standard for software supply chain risk and the ecosystem is growing with tools that help you verify, scan and monitor all your dependencies.

## Report Standards

SBOM reports primarily use [SPDX](https://en.wikipedia.org/wiki/Software_Package_Data_Exchange) & [CycloneDX](https://cyclonedx.org/) standards.

## Reports

**Note:** This is supported for all versions >=0.3.8

You can find the SBOM reports as artifacts in our container registry at the locations below. They are updated every time there is change in the codebase and tagged by the exact version we release.

| Location                                        | Files                         | Context                           |
| ----------------------------------------------- | ----------------------------- | --------------------------------- |
| `ghcr.io/retracedhq/retraced/service:<version>` | `sbom.spdx`, `sbom.cyclonedx` | Retraced service                  |
| `ghcr.io/retracedhq/retraced/docker:<version>`  | `sbom.spdx`, `sbom.cyclonedx` | Docker Image for Retraced service |

You can use [oras](https://oras.land/cli) (or a similar OCI artifacts tool) to retrieve these files.

```bash
oras pull ghcr.io/retracedhq/retraced/service:<version>
```
