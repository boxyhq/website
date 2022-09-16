# Upgrade Guide

## Upgrading to 1.3.0

1. Landed support for OpenId Identity Provider.
2. New API paths have been introduced for setting up SSO Connection. **Note:** The old API path for SAML IdP `/api/v1/saml/config` would continue to work.

   - `/api/v1/saml/connection`
   - `/api/v1/oidc/connection`

3. Renamed env variable `PRE_LOADED_CONFIG` to [`PRE_LOADED_CONNECTION`](deploy/env-variables.md#pre_loaded_connection) for Jackson service. In the case of npm `preLoadedConfig` becomes`preLoadedConnection`.
4. Make sure to set the value for [`oidcPath`](deploy/env-variables.md#oidc_path) in case you are using the npm.

## Backups

Please remember to take backups before upgrading Jackson. We cannot stress how important this step is, although we take precautions to avoid bugs they sometimes do slip by us. Having backups will not only help you recover from these rare events but should be part of your disaster recovery process. If you need any help around this please do not hesitate to reach out to us.
