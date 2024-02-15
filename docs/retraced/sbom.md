# Software Bill Of Materials (SBOM) Reports for Retraced

[SBOM](https://en.wikipedia.org/wiki/Software_bill_of_materials) is a list of components in a piece of software. It is like a list of ingredients of a product. Is it quickly becoming a standard for software supply chain risk and the ecosystem is growing with tools that help you verify, scan and monitor all your dependencies.

## Report Standards

SBOM reports primarily use [SPDX](https://en.wikipedia.org/wiki/Software_Package_Data_Exchange) & [CycloneDX](https://cyclonedx.org/) standards.

## Reports for Retraced

**Note:** This is supported for all versions >=1.5.3

You can find the SBOM reports as artifacts in our container registry at the locations below. They are updated every time there is change in the codebase and tagged by the exact version we release.

| Location                                             | Files                         | Context                           |
| ---------------------------------------------------- | ----------------------------- | --------------------------------- |
| `ghcr.io/retracedhq/retraced/sbom:service-<version>` | `sbom.spdx`, `sbom.cyclonedx` | Retraced service                  |
| `ghcr.io/retracedhq/retraced/sbom:docker-<version>`  | `sbom.spdx`, `sbom.cyclonedx` | Docker Image for Retraced service |

You can use [oras](https://oras.land) (or a similar OCI artifacts tool) to retrieve these files.

```bash
oras pull ghcr.io/retracedhq/retraced/sbom:service-<version>
```

## Reports for Javascript SDK

Located at [https://www.npmjs.com/package/@retracedhq/retraced](https://www.npmjs.com/package/@retracedhq/retraced)

**Note:** This is supported for all versions >=0.6.2

You can find the SBOM reports as artifacts in our container registry at the locations below. They are updated every time there is change in the codebase and tagged by the exact version we release.

| Location                                            | Files                         | Context         |
| --------------------------------------------------- | ----------------------------- | --------------- |
| `ghcr.io/retracedhq/retraced-js/sbom:npm-<version>` | `sbom.spdx`, `sbom.cyclonedx` | Retraced JS SDK |

You can use [oras](https://oras.land) (or a similar OCI artifacts tool) to retrieve these files.

```bash
oras pull ghcr.io/retracedhq/retraced-js/sbom:npm-<version>
```

## Reports for React Logs Viewer

Located at [https://www.npmjs.com/package/@retracedhq/logs-viewer](https://www.npmjs.com/package/@retracedhq/logs-viewer)

**Note:** This is supported for all versions >=2.4.6

You can find the SBOM reports as artifacts in our container registry at the locations below. They are updated every time there is change in the codebase and tagged by the exact version we release.

| Location                                            | Files                         | Context            |
| --------------------------------------------------- | ----------------------------- | ------------------ |
| `ghcr.io/retracedhq/logs-viewer/sbom:npm-<version>` | `sbom.spdx`, `sbom.cyclonedx` | Retraced React SDK |

You can use [oras](https://oras.land) (or a similar OCI artifacts tool) to retrieve these files.

```bash
oras pull ghcr.io/retracedhq/logs-viewer/sbom:npm-<version>
```
