---
sidebar_position: 10
---

# Observability

Jackson provides first-class observability on the back of OpenTelemetry. Currently we support the following metrics. Traces and logs are coming soon.

Please check the [Environment Variables](env-variables#opentelemetry) to configure to enable this feature.

## Metrics

| Name                      | Description                             | Type     |
| ------------------------- | --------------------------------------- | -------- |
| `jackson.config.create`   | Number of SAML config create requests   | Count    |
| `jackson.config.get`      | Number of SAML config get requests      | Count    |
| `jackson.config.delete`   | Number of SAML config delete requests   | Count    |
| `jackson.oauth.authorize` | Number of SAML oauth authorize requests | Count    |
| `jackson.oauth.token`     | Number of SAML oauth token requests     | Count    |
| `jackson.oauth.userinfo`  | Number of SAML oauth user info requests | Count    |
