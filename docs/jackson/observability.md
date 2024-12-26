---
title: Observability for Enterprise SSO
description: Enterprise SSO provides first-class observability on the back of OpenTelemetry.
sidebar_label: Observability
---

# Observability

Jackson provides first-class observability on the back of OpenTelemetry. Currently we support the following metrics. Traces and logs are coming soon.

Please check the [Environment Variables](./deploy/env-variables.md#opentelemetry-configuration) to configure to enable this feature.

## Metrics

| Name                        | Description                              | Type  | Tags |
| --------------------------- | ---------------------------------------- | ----- | ---- |
| `jackson.connection.create` | Number of SSO Connection create requests | Count | ---- |
| `jackson.connection.get`    | Number of SSO Connection get requests    | Count | ---- |
| `jackson.connection.delete` | Number of SSO Connection delete requests | Count | ---- |
| `jackson.oauth.authorize`   | Number of oauth authorize requests       | Count | ---- |
| `jackson.oauth.token`       | Number of oauth token requests           | Count | ---- |
| `jackson.oauth.userinfo`    | Number of oauth user info requests       | Count | ---- |

From `v1.35.1` the following additional metrics are available:

| Name                        | Description                              | Type  | Tags |
| --------------------------- | ---------------------------------------- | ----- | ---- |
| `jackson.oauth.authorize.error`   | Number of oauth authorize errors         | Count | **protocol**: `saml`,`oidc`,`saml-federated`,`oidc-federated` ; **login_type**: `sp-initiated`,`idp-initiated` |
| `jackson.oauth.token.error`       | Number of oauth token errors             | Count | **protocol**: `saml`,`oidc`,`saml-federated`,`oidc-federated` ; **login_type**: `sp-initiated`,`idp-initiated` |
| `jackson.oauth.userinfo.error`    | Number of oauth user info errors         | Count | **protocol**: `saml`,`oidc`,`saml-federated`,`oidc-federated` ; **login_type**: `sp-initiated`,`idp-initiated` |
| `jackson.oauth.response.error`    | Number of oauth response errors          | Count | **protocol**: `saml`,`oidc`,`saml-federated`,`oidc-federated` ; **login_type**: `sp-initiated`,`idp-initiated` |
