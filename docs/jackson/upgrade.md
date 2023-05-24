# Upgrade Guide

## Upgrading to v1.9.7

We discovered and fixed a database connection leak introduced in v1.9.1, if you are using versions 1.9.1 to 1.9.6 then please upgrade to v1.9.7

## Upgrading to v1.8.0

1. We support bringing your own database (BYOD), this is a very tricky feature to support and we are still iterating on the schema which works as seamlessly as possible across the range of databases we support. Unfortunately not everything goes smoothly here and we have encountered some length issues on newer versions of MySQL and MariaDB. The best way forward was to change the schema of the keys we use from length 1500 to 250 which is compatible with the newer versions. As a result this will break your updates if you are using MySQL, MariaDB or MS SQL Server. If you encounter this please reach out and we'll guide you through the update process. If you haven't gone into production yet then please update to v1.8.0 before you deploy it to production.

## Upgrading to v1.3.10

1. For users of our npm library, `directorySync` has been renamed to `directorySyncController`.

## Upgrading to v1.3.6

1. `samlSPConfig.get()` is now async since we introduced a global certificate instead of per tenant certificate to ease the SAML setup process.

## Upgrading to v1.3.0

1. Landed support for OpenID Identity Providers.
2. Landed new API (`/api/v1/connections`) to support setting up both SAML/OIDC SSO Connections.

   **Note:** The previous API for SAML configuration `/api/v1/saml/config` has been deprecated, and would be completely removed in a future release.

3. Renamed env variable `PRE_LOADED_CONFIG` to [`PRE_LOADED_CONNECTION`](deploy/env-variables.md#pre_loaded_connection) for Jackson service. In the case of npm `preLoadedConfig` becomes`preLoadedConnection`.
4. Make sure to set the value for [`oidcPath`](deploy/env-variables.md#oidc_path) in case you are using the npm.

## Backups

Please remember to take backups before upgrading Jackson. We cannot stress how important this step is, although we take precautions to avoid bugs they sometimes do slip by us. Having backups will not only help you recover from these rare events but should be part of your disaster recovery process. If you need any help with this please do not hesitate to reach out to us.
