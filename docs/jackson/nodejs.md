---
sidebar_position: 3
---

# NodeJS Integration

Integrating SAML Jackson with a Node.js app involves the following steps.

See the [Github repo](https://github.com/boxyhq/express-jackson-demo) to see the Express integration

### Requirements

- Node.js version 14 or newer
- A database. [Database supported](deploy.md#database)
- An Node.js based app to add SAML Jackson

## Install SAML Jackson

```bash
npm i @boxyhq/saml-jackson
```

## Add Environment Variables

The following environment variables MUST be available to configure SAML Jackson. 

See the complete list of [Environment Variables](env-variables.md).

```
SAML_AUDIENCE=https://saml.boxyhq.com
DB_ENGINE=sql
DB_TYPE=<postgres or mysql or mariadb>
DB_URL=<database connection url>
```

## Initialize Jackson

```javascript
let apiController;
let oauthController;

const opts = {
  externalUrl: 'http://localhost',
  samlPath: '/sso/acs',
  samlAudience: process.env.SAML_AUDIENCE,
  db: {
    engine: process.env.DB_ENGINE,
    type: process.env.DB_TYPE,
    url: process.env.DB_URL,
  }
};

async function init() {
  const jackson = await require('@boxyhq/saml-jackson')(opts);

  apiController = jackson.apiController;
  oauthController = jackson.oauthController;
}
```

- Add your app base URL as `externalUrl` 
- `samlPath` becomes part of the ACS URL. The ACS URL is an endpoint on the SP where the IdP will redirect to with its authentication response. For example: If `externalUrl` is `http://localhost`, and `samlPath` is `/sso/acs`, the ASC URL will be `http://localhost/sso/acs`

## Configure Identity Provider (IdP)

[Follow this guide](configure-saml-idp.md)

## Setup API

### Add SAML Config

```javascript
const body = {
    rawMetadata: '<XML Metadata>',
    defaultRedirectUrl: '<http://example.com/redirect>',
    redirectUrl: '["http://example.com"]',
    tenant: '<tenant>',
    product: '<product>',
}

const result = await apiController.config(body)
```

[API Reference](getting-started.md#2-saml-config-api)

### OAuth: Authorize URL

The OAuth flow begins with redirecting your user to the authorize URL. The response contains the `redirect_url` to which you should redirect the user.

```javascript
const body = {
    response_type: 'code',
    client_id: '<client_id>',
    redirect_uri: '<redirect_uri>',
    state: '<state>',
}

const { redirect_url } = await oauthController.authorize(body)
```

[API Reference](getting-started.md#4-authorize)

### Handle SAML Response

Add a method to handle the SAML Response from IdP. 

```javascript
const body = {
    SAMLResponse: '<SAMLResponse>',
    RelayState: '<RelayState>'
}

const { redirect_url } = await oauthController.samlResponse(body)
```

:::info
SAML Response - IdP issues an HTTP POST request to SP's Assertion Consumer Service (ACS URL) with 2 fields `SAMLResponse` and `RelayState`.
:::

### OAuth: Code Exchange

The code can then be exchanged for a token by making the following request. You should validate that the state matches the one you sent in the authorize request.

```javascript
const body = {
    client_id: '<client_id>',
    client_secret: '<client_secret>',
    redirect_uri: '<redirect_uri>',
    code: '<code>'
}

const result = await oauthController.token(body)
```

[API Reference](getting-started.md#5-code-exchange)

### OAuth: Get User Profile

The short-lived access token can now be used to request the user's profile.

```javascript
const token = '<token>'

const profile = await oauthController.userInfo(token)
```

[API Reference](getting-started.md#6-profile-request)