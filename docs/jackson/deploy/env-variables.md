# Environment Variables

The env vars are only applicable to the Jackson service. If you are using the npm then look for the options below when initializing the library.

## General configuration

### **HOST_URL**

The URL to bind to.
Default: `localhost`

### **HOST_PORT**

The port to bind to.
Default: `5225`

### **EXTERNAL_URL**

The public URL to reach this service, need for constructing for the SAML request internally.

Default: `http://{HOST_URL}:{HOST_PORT}`
NPM library option: `externalUrl`

### **JACKSON_API_KEYS**

A comma separated list of API keys that will be validated when serving the Config API requests at `/api/v1/saml/config/`.

For example `JACKSON_API_KEYS=key1,key2,key3`

### **SAML_AUDIENCE**

This is just an identifier to validate the SAML audience, this value will also get configured in the SAML apps created by your customers. Once set do not change this value unless you get your customers to reconfigure their SAML again. It is case-sensitive. This does not have to be a real URL.

Default: `https://saml.boxyhq.com`
NPM library option: `samlAudience`

### **SAML_PATH**

The ACS path at which the [saml response](./npm-library#handle-saml-response) is sent back from the IdP. Set this when using the npm package.

NPM library option: `samlPath`

For example `/api/oauth/saml`

### **IDP_DISCOVERY_PATH**

This is the path for showing the IdP Selection screen in case there are multiple SAML IdP configs for the same `tenant` and `product`.
This path is also used to show the App Selection screen in the case of IdP-initiated SAML login (Different apps using the same SAML IdP).
Set this when using the npm package.

NPM library option: `idpDiscoveryPath`

For example: `/idp/select` - You can find an implemenation of IdP/App Selection at https://github.com/boxyhq/jackson/blob/main/pages/idp/select.tsx.


### **CLIENT_SECRET_VERIFIER**

When `tenant` and `product` are used for the SAML flow (and PKCE is not being used) then we use `dummy` as placeholders for `client_id` and `client_secret`. This is not a security issue because SAML is tenanted and hence your Identity Provider will block access to anyone trying to log into your SAML tenant. However for additional security you should set `CLIENT_SECRET_VERIFIER` to a random secret and use that value as the `client_secret` during the OAuth 2.0 flow.

Default: `dummy`
NPM library option: `clientSecretVerifier`

### **IDP_ENABLED**

Set to true to enable IdP initiated login for SAML. SP initiated login is the only recommended flow but you might have to support IdP login at times.

Default: `false`
NPM library option: `idpEnabled`

## OpenID configuration

For supporting OpenID flow, we need to set the algorithm and keys used to sign the ID token JWT.

### **OPENID_JWS_ALG**

The algorithm used to sign the id_token. Jackson uses [jose](https://github.com/panva/jose) to create the ID token. Supported algorithms can be found at https://github.com/panva/jose/issues/114#digital-signatures.

NPM library option: `openid.jwsAlg`

### **OPENID_RSA_PRIVATE_KEY**

Base64 value of private key. 
To generate one:
```bash
openssl genrsa -out private-key.pem 3072
cat private-key.pem | base64
```

NPM library option: `openid.jwtSigningKeys.private`

### **OPENID_RSA_PUBLIC_KEY**
Base64 value of public key. 
You can generate the public key from the private key as shown below:
```bash
openssl rsa -in private-key.pem -pubout -out public-key.pem
cat public-key.pem | base64
```

NPM library option: `openid.jwtSigningKeys.public`

## Database configuration

### **DB_ENGINE**

Supported values are `redis`, `sql`, `mongo`, `mem`

Default: `sql`
NPM library option: `db.engine`

### **DB_URL**

The database URL to connect to.

Example: `postgres://postgres:postgres@localhost:5432/postgres`

NPM library option: `db.url`

### **DB_TYPE**

Only needed when DB_ENGINE is sql. Supported values are `postgres`, `mysql`, `mariadb`

Default: `postgres`
NPM library option: `db.type`

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

## Pre-loaded Configuration

### **PRE_LOADED_CONFIG**

If you only need a single tenant or a handful of pre-configured tenants then this config will help you read and load SAML configs. It works well with the mem DB engine so you don't have to configure any external databases for this to work (though it works with those as well). This is a path (absolute or relative) to a directory that contains files organized in the format described in the next section. Check [this section](./pre-loaded-configuration.md) for more details

NPM library option: `preLoadedConfig`

## Opentelemetry configuration

Jackson supports observability via OpenTelemetry. The following env vars are available for configuration (along with the rest of the [supported ones](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md))

### **OTEL_EXPORTER_OTLP_METRICS_ENDPOINT**

Target URL to which the exporter is going to send metrics.

Example: `https://ingest.lightstep.com:443/metrics/otlp/v0.6`

### **OTEL_EXPORTER_OTLP_HEADERS**

Headers relevant for the endpoint, useful for specifying authentication details for providers.

Example: `lightstep-access-token=<token>,...`

## Admin UI configuration

Below variables are used to enable [Magic link](https://next-auth.js.org/providers/email) based authentication for Admin UI. The **SMTP\_** variables are used for sending email which contain the magic link (one-time use) for sign in.

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
