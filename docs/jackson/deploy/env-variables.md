---
title: Environment Variables (Enterprise SSO)
sidebar_label: Environment Variables
description: Environment Variables for Enterprise SSO
---

# Environment Variables

The env vars are only applicable to the Jackson service. If you are using the npm library then look for the options below when initializing the library.

## General configuration

### **HOST_URL**

The URL to bind to.
Default: `localhost`

### **PORT**

The port to bind to.
Default: `5225`

### **EXTERNAL_URL**

The public URL to reach this service. This is used internally to construct the callback url at which the SAML/OIDC IdP sends back the authorization response.

Default: `http://{HOST_URL}:{PORT}`

NPM library option: `externalUrl`

### **JACKSON_API_KEYS**

A comma separated list of API keys that will be validated when serving the API requests for SSO connection (`/api/v1/connections`) and Directory Sync (`/api/v1/directory-sync`).

For example `JACKSON_API_KEYS=key1,key2,key3`

The API requests will then need to specify an `Authorization` header which contains one of the API keys above in this format: `Api-Key key1`

### **SAML_AUDIENCE**

The value of this setting (same as SP EntityID of Jackson) allows the Jackson instance to verify that it is the intended recipient of a SAML response. The same value is also set in the SAML App created on the IdP end by your customers. Once set do not change this value unless you get your customers to reconfigure their SAML App again. It is case-sensitive. This does not have to be a real URL.

Default: `https://saml.boxyhq.com`

NPM library option: `samlAudience`

### **samlPath**

> **_NOTE:_** This is only applicable to our npm library.

The ACS path at which the [saml response](./npm-library#handle-saml-response) is sent back from the SAML IdP. Set this when using the npm package.

NPM library option: `samlPath`

For example: `/api/oauth/saml`

### **oidcPath**

> **_NOTE:_** This is only applicable to our npm library.

The `redirect_uri` at which the Authorization response is sent back from the OpenID Connect IdP. Set this when using the npm package.

NPM library option: `oidcPath`

For example: `/api/oauth/oidc`

### **IDP_DISCOVERY_PATH**

This is the path for showing the IdP Selection screen in case there are multiple SSO Connections for the same `tenant` and `product`.
This path is also used to show the App Selection screen in the case of IdP-initiated SAML login (Different apps using the same SAML IdP).
Set this when using the npm package.

NPM library option: `idpDiscoveryPath`

For example: `/idp/select` - You can find an implementation of IdP/App Selection at https://github.com/boxyhq/jackson/blob/main/pages/idp/select.tsx.

### **CLIENT_SECRET_VERIFIER**

When `tenant` and `product` are used for the SAML flow (and PKCE is not being used) then we use `dummy` as placeholders for `client_id` and `client_secret`. This is not a security issue because SAML is tenanted and hence your Identity Provider will block access to anyone trying to log into your SAML tenant. However for additional security you should set `CLIENT_SECRET_VERIFIER` to a random secret and use that value as the `client_secret` during the OAuth 2.0 flow.

Default: `dummy`

NPM library option: `clientSecretVerifier`

### **IDP_ENABLED**

Set to true to enable IdP initiated login for SAML. SP initiated login is the only recommended flow but you might have to support IdP login at times.

Default: `false`

NPM library option: `idpEnabled`

### **PUBLIC_KEY**

This is the public key of the private key used to sign the SAML requests. Jackson expects the public key to be base64 encoded.

NPM library option: `certs.publicKey`

### **PRIVATE_KEY**

This is the private key used to sign the SAML requests. Jackson expects the private key to be base64 encoded.

NPM library option: `certs.privateKey`

To generate a private key and public key pair you can use the following command:

```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out public.crt -sha256 -days 365 -nodes

# Convert the public key to base64
cat public.crt | base64

# Convert the private key to base64
cat key.pem | base64
```

## OpenID configuration

For supporting OpenID flow, we need to set the algorithm and keys used to sign the ID token JWT.

### **OPENID_JWS_ALG**

The algorithm used to sign the id_token. Jackson uses [jose](https://github.com/panva/jose) to create the ID token. Supported algorithms can be found at https://github.com/panva/jose/issues/114#digital-signatures.

Default: `RS256`

NPM library option: `openid.jwsAlg`

### **OPENID_RSA_PRIVATE_KEY**

Base64 value of private key.
To generate one:

```bash
openssl genrsa -out private-key.pem 3072
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in private-key.pem -out private_key.pem
cat private_key.pem | base64
```

NPM library option: `openid.jwtSigningKeys.private`

### **OPENID_RSA_PUBLIC_KEY**

Base64 value of public key.
You can generate the public key from the private key as shown below:

```bash
openssl rsa -in private_key.pem -pubout -out public_key.pem
cat public_key.pem | base64
```

NPM library option: `openid.jwtSigningKeys.public`

## Database configuration

### **DB_ENGINE**

Supported values are `redis`, `sql`, `mongo`, `mem`, `planetscale`, `dynamodb`

Default: `sql`

NPM library option: `db.engine`

> **_NOTE:_** If you are using DynamoDB then you also need to set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. For additional options like region and capacity units check [this section](#db_dynamodb_region)

### **DB_TYPE**

Only needed when DB_ENGINE is sql. Supported values are `postgres`, `mysql`, `mariadb`, `mssql`

Default: `postgres`

NPM library option: `db.type`

### **DB_URL**

The database URL to connect to. If you are using self-signed certificates then pass `sslmode=noverify` instead of `sslmode=require` in the `DB_URL`. This is because self-signed certs will be rejected as unauthorized in strict mode. Also set `DB_SSL=true` and `DB_SSL_REJECT_UNAUTHORIZED=false` (see env vars below for more details).

Example: `postgres://postgres:postgres@localhost:5432/postgres` or `postgres://postgres:postgres@localhost:5432/postgres?sslmode=no-verify`

For `mssql` the URL takes the form of `sqlserver://localhost:1433;database=<db name>;username=<username>;password=<password>;encrypt=true`

> **_NOTE:_** If you are using DynamoDB then you also need to set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. For additional options like region and capacity units check [this section](#db_dynamodb_region)

NPM library option: `db.url`

### **DB_SSL**

This needs to be set to `true` if you are using SSL with your database (You should definitely be using SSL if the database needs to be access via a public url).

Default: `false`

### **DB_SSL_REJECT_UNAUTHORIZED**

If you are using a self-signed certificate then set this to `false`, otherwise it will be rejected due to Certificate Authority checks.

Default: `true`

### **DB_TTL**

TTL for the code, session and token stores (in seconds)

Default: `300`

NPM library option: `db.ttl`

### **DB_CLEANUP_LIMIT**

Limit cleanup of TTL entries to this number

Default: `1000`

NPM library option: `db.cleanupLimit`

### **DB_ENCRYPTION_KEY**

To encrypt data at rest specify a 32 character key

You can use openssl to generate a random 32 character key:

```bash
openssl rand -base64 24
```

NPM library option: `db.encryptionKey`

### **PGSSLMODE**

If you use Heroku to deploy Postgres (or use self-signed certs for Postgres) then set this to `no-verify`. See [Heroku docs](https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js) for more details

### **DB_DYNAMODB_REGION**

If you are using DynamoDB then you can specify the region.

Default: `us-east-1`

NPM library option: `db.dynamodb.region`

### **DB_DYNAMODB_RCUS**

If you are using DynamoDB then you can specify the read capacity units. Check [AWS docs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html) for more details

Default: 5

NPM library option: `db.dynamodb.readCapacityUnits`

### **DB_DYNAMODB_WCUS**

If you are using DynamoDB then you can specify the write capacity units.

Default: 5

NPM library option: `db.dynamodb.writeCapacityUnits`

## Webhook configuration

### **WEBHOOK_URL**

Specify a webhook URL to receive events about sso and directory connections.

NPM library option: `webhook.endpoint`

### **WEBHOOK_SECRET**

Specify a secret to be used to sign the webhook payload. This is used to verify the authenticity of the webhook payload.

NPM library option: `webhook.secret`

Both the `WEBHOOK_URL` and `WEBHOOK_SECRET` are required to enable webhook events.

## Pre-loaded Connections

### **PRE_LOADED_CONNECTION**

If you only need a single tenant or a handful of pre-configured tenants then this config will help you read and load IdP (both OpenID and SAML)connections. It works well with the mem DB engine so you don't have to configure any external databases for this to work (though it works with those as well). This is a path (absolute or relative) to a directory that contains files organized in the format described in the next section. Check [this section](./pre-loaded-connections.md) for more details

NPM library option: `preLoadedConnection`

## Opentelemetry configuration

Jackson supports observability via OpenTelemetry. The following env vars are available for configuration (along with the rest of the [supported ones](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md))

### **OTEL_EXPORTER_OTLP_ENDPOINT** or **OTEL_EXPORTER_OTLP_METRICS_ENDPOINT**

Target URL to which the exporter is going to send metrics.

Example: `https://ingest.lightstep.com:443/metrics/otlp/v0.6`

### **OTEL_EXPORTER_OTLP_HEADERS** or **OTEL_EXPORTER_OTLP_METRICS_HEADERS**

Headers relevant for the endpoint, useful for specifying authentication details for providers.

Example: `lightstep-access-token=<token>,...`

### **OTEL_EXPORTER_OTLP_PROTOCOL** or **OTEL_EXPORTER_OTLP_METRICS_PROTOCOL**

The transport protocol. Options MUST be one of: `grpc`, `http/protobuf` or `http/json`.

### **OTEL_EXPORTER_DEBUG**

Set this to `true` to enable debug logs for Opentelemetry. This is only meant for purposes of debugging otel locally.

## Admin Portal configuration

Below variables are used to enable [Magic link](https://next-auth.js.org/providers/email) based authentication for Admin Portal. The **SMTP\_** variables are used for sending email which contain the magic link (one-time use) for sign in.

### **SMTP_HOST**

The SMTP host like `smtp.example.com`.

### **SMTP_PORT**

The SMTP server port like `587`.

### **SMTP_USER**

Username for the SMTP server.

### **SMTP_PASSWORD**

Password for the SMTP server.

### **SMTP_FROM**

_From_ address used to send mail like: `noreply@example.com`.

### **NEXTAUTH_URL**

When running locally this will point to the local server: `http://localhost:5225`. When deploying to production, set this to the canonical URL of the site. More details [here](https://next-auth.js.org/configuration/options#nextauth_url).

### **NEXTAUTH_SECRET**

Set this to a random string. You can use `openssl rand -base64 32` to get one. This secret is used to encrypt JWT and hash the email verification token. More details [here](https://next-auth.js.org/configuration/options#nextauth_secret).

### **NEXTAUTH_ACL**

Set this to a comma separated string of email addresses or glob patterns like: `tonystark@gmail.com,*@marvel.com`. Access will be denied to email addresses which don't match. If you don't specify any value access is denied to all.

### **NEXTAUTH_ADMIN_CREDENTIALS**

Set this to a comma separated string of the pattern `email:password` to enable login to the Admin Portal, for example `NEXTAUTH_ADMIN_CREDENTIALS=deepak@boxyhq.com:Password123`. If you don't specify any value access is denied to all.

### **ADMIN_PORTAL_SSO_TENANT**

This will be used as the tenant for the SSO connections (added from Settings tab) used to login into the Admin portal itself. Set this to a value that is less likely to conflict with the main Enterprise SSO connections.

Default: `_jackson_boxyhq`

### **ADMIN_PORTAL_SSO_PRODUCT**

This will be used as the product for the SSO connections (added from Settings tab) used to login into the Admin portal itself. Set this to a value that is less likely to conflict with the main Enterprise SSO connections.

Default: `_jackson_admin_portal`

### **RETRACED_HOST_URL**

If you'd like to use the Admin Portal to manage our Audit Logs service ([Retraced](https://github.com/retracedhq/retraced)) then set this env var to the URL of the service.

### **RETRACED_EXTERNAL_URL**

If you'd like to use the Admin Portal to manage our Audit Logs service ([Retraced](https://github.com/retracedhq/retraced)) then set this env var to the Public URL of the service. If this is the same as `RETRACED_HOST_URL` above then you can skip this and it will default to the value of `RETRACED_HOST_URL`.

Default: It is set to `RETRACED_HOST_URL` if `RETRACED_EXTERNAL_URL` is not defined.

### **RETRACED_ADMIN_ROOT_TOKEN**

you need to set the admin root token for Retraced so that we can connect to Retraced and fetch projects and audit logs.

## Anonymous Analytics

### **BOXYHQ_NO_TELEMETRY** or **DO_NOT_TRACK**

Set one of these to `1` or `true` to turn off our anonymous analytics. We only track usage events once per day and it does not contain any information that can identify you in any form.
