# Observability

Jackson provides first-class observability on the back of OpenTelemetry. Currently we support the following metrics. Traces and logs are coming soon.

Please check the [Environment Variables](./deploy/env-variables.md#opentelemetry-configuration) to configure to enable this feature.

## Metrics

| Name                        | Description                              | Type  |
| --------------------------- | ---------------------------------------- | ----- |
| `jackson.connection.create` | Number of IdP connection create requests | Count |
| `jackson.connection.get`    | Number of IdP connection get requests    | Count |
| `jackson.connection.delete` | Number of IdP connection delete requests | Count |
| `jackson.oauth.authorize`   | Number of oauth authorize requests       | Count |
| `jackson.oauth.token`       | Number of oauth token requests           | Count |
| `jackson.oauth.userinfo`    | Number of oauth user info requests       | Count |
