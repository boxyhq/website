# Container Signing and Verification for Retraced

Retraced container images are signed and can be verified using [cosign](https://github.com/sigstore/cosign).

## Fetching our public key

You can use [oras](https://oras.land) (or a similar OCI artifacts tool) to fetch our public key or download it from our website [here](https://boxyhq.com/.well-known/cosign.pub).

```bash
oras pull ghcr.io/boxyhq/cosign.pub:latest
```

## Container verification

**Note:** This is supported for all versions >=1.5.0

Our container images are hosted on [Docker Hub](https://hub.docker.com/r/retracedhq/retraced/tags). You can verify it by using the following command.

```bash
cosign verify --key cosign.pub retracedhq/retraced:<version>
```
