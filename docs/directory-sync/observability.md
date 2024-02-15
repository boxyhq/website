---
title: Observability for Directory Sync
description: Directory Sync provides first-class observability on the back of OpenTelemetry.
sidebar_label: Observability
---

# Observability

Jackson provides first-class observability on the back of OpenTelemetry. Currently we support the following metrics. Traces and logs are coming soon.

Please check the [Environment Variables](../jackson/deploy/env-variables#opentelemetry-configuration) to configure to enable this feature.

## Metrics

| Name                              | Description                                         | Type  |
| --------------------------------- | --------------------------------------------------- | ----- |
| `jackson.dsync.connection.create` | Number of directory sync connection create requests | Count |
| `jackson.dsync.connection.get`    | Number of directory sync connection get requests    | Count |
| `jackson.dsync.connection.delete` | Number of directory sync connection delete requests | Count |
