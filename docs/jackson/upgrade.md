# Upgrade Guide

## Upgrading to 1.3.0

1. Landed support for OpenId Identity Providers.
2. Landed new API (`/api/v1/connections`) to support setting up both SAML/OIDC SSO Connections.
   **Note:** The previous API for SAML configuration `/api/v1/saml/config` has been deprecated, and would be completely removed in a future release.

3. Renamed env variable `PRE_LOADED_CONFIG` to [`PRE_LOADED_CONNECTION`](deploy/env-variables.md#pre_loaded_connection) for Jackson service. In the case of npm `preLoadedConfig` becomes`preLoadedConnection`.
4. Make sure to set the value for [`oidcPath`](deploy/env-variables.md#oidc_path) in case you are using the npm.

## Backups

Please remember to take backups before upgrading Jackson. We cannot stress how important this step is, although we take precautions to avoid bugs they sometimes do slip by us. Having backups will not only help you recover from these rare events but should be part of your disaster recovery process. If you need any help with this please do not hesitate to reach out to us.
