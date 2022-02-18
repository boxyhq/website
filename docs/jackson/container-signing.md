---
sidebar_position: 13
---

# Container Signing and Verification

Jackson container images are signed are signed and can be verified using [cosign](https://github.com/sigstore/cosign).

## Fetching our public key

You can use [oras](https://oras.land/cli) (or a similar OCI artifacts tool) to fetch our public key  or download it from our website [here](https://boxyhq.com/.well-known/cosign.pub).

```bash
oras pull ghcr.io/boxyhq/jackson/cosign.pub:latest
```

## Container verification

Our container images are hosted on [Docker Hub](https://hub.docker.com/r/boxyhq/jackson/tags). You can verify it by using the following command.

```bash
cosign verify --key cosign.pub boxyhq/jackson:<version>
```
