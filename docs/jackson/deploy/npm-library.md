# NPM Library

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SAML Jackson is available as an [npm package](https://www.npmjs.com/package/@boxyhq/saml-jackson) that can be integrated into any **Node.js** based web application framework.

Install the SDK using the command below.

```bash
npm install @boxyhq/saml-jackson
```

---

## Configuration Options

Please note that the initialization of `@boxyhq/saml-jackson` is async, you cannot run it at the top level.

```js
import jackson, {
  type IConnectionAPIController,
  type IOAuthController,
} from "@boxyhq/saml-jackson";


let oauth: IOAuthController;
let connection: IConnectionAPIController;

(async function init() {
  const jackson = await require('@boxyhq/saml-jackson').controllers({
    externalUrl: "https://your-app.com",
    samlAudience: "https://saml.boxyhq.com",
    oidcPath: "/sso/oidc",
    samlPath: "/sso/acs"
    db: {
      engine: "sql",
      type: "postgres",
      url: "postgres://postgres:postgres@localhost:5432/postgres",
    },
  });

  oauth = jackson.oauthController;
  connection = jackson.connectionAPIController;
})();
```

---

## Single Sign-On Connections

### Create SAML Connection

Create a new SAML Single Sign-On connection.

<Tabs>
<TabItem value="01" label="Request" default>

```js
await connection.createSAMLConnection({
  tenant: 'boxyhq',
  product: 'your-app',
  rawMetadata: '<raw-saml-metadata>', // Visit https://mocksaml.com to download Metadata
  redirectUrl: ['https://your-app.com/*'],
  defaultRedirectUrl: 'https://your-app.com/sso/callback',
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "defaultRedirectUrl": "https://your-app.com/sso/callback",
  "redirectUrl": ["https://your-app.com/*"],
  "tenant": "boxyhq",
  "product": "your-app",
  "clientID": "f7c909a5c72a5535847acf32558b2429a5172dd6",
  "clientSecret": "cc6ba07bc42c2f449c9b0a3cc41c256dea08f705e1b44fdc",
  "forceAuthn": false,
  "idpMetadata": {
    "sso": {
      "postUrl": "https://mocksaml.com/api/saml/sso",
      "redirectUrl": "https://mocksaml.com/api/saml/sso"
    },
    "slo": {},
    "entityID": "https://saml.example.com/entityid",
    "thumbprint": "d797f3829882233d3f01e49643f6a1195f242c94",
    "validTo": "Jul  1 21:46:38 3021 GMT",
    "loginType": "idp",
    "provider": "saml.example.com"
  },
  "certs": {
    "publicKey": "-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----\r\n",
    "privateKey": "-----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----\r\n"
  }
}
```

</TabItem>
</Tabs>

### Update SAML Connection

Update a SAML Single Sign-On connection.

<Tabs>
<TabItem value="01" label="Request" default>

```js
await connection.updateSAMLConnection({
  tenant: 'boxyhq',
  product: 'your-app',
  rawMetadata: '<raw-saml-metadata>',
  redirectUrl: ['https://your-app.com/*'],
  defaultRedirectUrl: 'https://your-app.com/sso/callback-updated',
  clientID: 'f7c909a5c72a5535847acf32558b2429a5172dd6',
  clientSecret: 'cc6ba07bc42c2f449c9b0a3cc41c256dea08f705e1b44fdc',
});
```

</TabItem>

</Tabs>

### Create OIDC Connection

Create a new OIDC Single Sign-On connection.

<Tabs>
<TabItem value="01" label="Request" default>

```js
await connection.createOIDCConnection({
  tenant: 'boxyhq',
  product: 'your-app',
  redirectUrl: ['https://your-app.com/*'],
  defaultRedirectUrl: 'https://your-app.com/sso/callback',
  oidcDiscoveryUrl:
    'https://accounts.google.com/.well-known/openid-configuration',
  oidcClientId: '<OpenID Client ID>',
  oidcClientSecret: '<OpenID Client Secret>',
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "defaultRedirectUrl": "https://your-app.com/sso/callback",
  "redirectUrl": ["https://your-app.com/*"],
  "tenant": "boxyhq",
  "product": "your-app",
  "clientID": "749f95c4bd02b4adb6c0633249e70d5ad45b75e2",
  "clientSecret": "2d730ac71c74e7d49dccf362c9a61005b6246cc65d6d0fa4",
  "oidcProvider": {
    "discoveryUrl": "https://accounts.google.com/.well-known/openid-configuration",
    "clientId": "<OpenID Client ID>",
    "clientSecret": "<OpenID Client Secret>",
    "provider": "accounts.google.com"
  }
}
```

</TabItem>
</Tabs>

### Update OIDC Connection

Update an OIDC Single Sign-On connection.

<Tabs>
<TabItem value="01" label="Request" default>

```js
await connection.updateOIDCConnection({
  tenant: 'boxyhq',
  product: 'your-app',
  redirectUrl: ['https://your-app.com/*'],
  defaultRedirectUrl: 'https://your-app.com/sso/callback',
  oidcDiscoveryUrl:
    'https://accounts.google.com/.well-known/openid-configuration',
  oidcClientId: '<OpenID Client ID>',
  oidcClientSecret: '<OpenID Client Secret>',
  clientID: '749f95c4bd02b4adb6c0633249e70d5ad45b75e2',
  clientSecret: '2d730ac71c74e7d49dccf362c9a61005b6246cc65d6d0fa4',
});
```

</TabItem>

</Tabs>

### Get SAML/OIDC Connections

Get the details of an existing SAML or OIDC Single Sign-On connection.

<Tabs>
<TabItem value="01" label="Request" default>

```js
// Using tenant and product
await connection.getConnections({
  tenant: 'boxyhq',
  product: 'your-app',
});

// Using the client ID
await connection.getConnections({
  clientID: 'f7c909a5c72a5535847acf32558b2429a5172dd6',
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
[
  {
    "defaultRedirectUrl": "https://your-app.com/sso/callback",
    "redirectUrl": ["https://your-app.com/*"],
    "tenant": "boxyhq",
    "product": "your-app",
    "clientID": "f7c909a5c72a5535847acf32558b2429a5172dd6",
    "clientSecret": "cc6ba07bc42c2f449c9b0a3cc41c256dea08f705e1b44fdc",
    "forceAuthn": false,
    "idpMetadata": {
      "sso": {
        "postUrl": "https://mocksaml.com/api/saml/sso",
        "redirectUrl": "https://mocksaml.com/api/saml/sso"
      },
      "slo": {},
      "entityID": "https://saml.example.com/entityid",
      "thumbprint": "d797f3829882233d3f01e49643f6a1195f242c94",
      "validTo": "Jul  1 21:46:38 3021 GMT",
      "loginType": "idp",
      "provider": "saml.example.com"
    },
    "certs": {
      "publicKey": "-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----\r\n",
      "privateKey": "-----BEGIN RSA PRIVATE KEY----- ... -----END RSA PRIVATE KEY-----\r\n"
    }
  }
]
```

</TabItem>
</Tabs>

### Delete SAML/OIDC Connection

Update a SAML or OIDC Single Sign-On connection.

<Tabs>
<TabItem value="01" label="Request" default>

```js
// Using tenant and product
await connection.deleteConnections({
  tenant: 'boxyhq',
  product: 'your-ap',
});

// Using client ID and client secret
await connection.deleteConnections({
  clientID: 'f7c909a5c72a5535847acf32558b2429a5172dd6',
  clientSecret: 'cc6ba07bc42c2f449c9b0a3cc41c256dea08f705e1b44fdcp',
});
```

</TabItem>

</Tabs>

---

## Single Sign-On Authentication

### Handle OAuth 2.0 (or OIDC) Authorization request

To initiate the flow, the application must trigger an OAuth 2.0 (or OIDC) redirect to the authorization endpoint of your app. You'll use the `authorize` method within the authorization handler.

`authorize` will resolve the SSO URL (`redirect_url`) based on the connection configured for the tenant/product. The app needs to redirect the user to this URL. Keep in mind that the SSO URL structure is different based on the type of SSO Connection. For a SAML Connection, this will contain the `SAMLRequest` whereas for an OIDC Connection the SSO URL will be the Authorization endpoint with the OIDC request params (scope, response_type, etc.) attached.

<Tabs>
<TabItem value="01" label="Request" default>

```ts
await oauth.authorize({
  tenant: "boxyhq",
  product: "your-app",
  redirect_uri: "https://your-app.com/sso/callback",
  state: "c38ee339-6b82-43d3-838f-4036820acce9",
  response_type: 'code';
  code_challenge: string;
  code_challenge_method: 'plain' | 'S256' | '';
  scope?: string;
  nonce?: string;
  idp_hint?: string;
  prompt?: string;
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "redirect_url": "https://mocksaml.com/api/saml/sso?RelayState=boxyhq_jackson_...&SAMLRequest=nVbZkqs4En33V1T4...",
  "authorize_form": ""
}
```

</TabItem>
</Tabs>

### Handle IdP Response

The response is sent back to your app after authentication at IdP. After the handling of the response, the profile of the authenticated user is extracted and stored against a short-lived code that is then sent back to the app.

#### SAML Response

Handle the response from the SAML Identity Provider. After successful authentication, IdP sends back (via browser POST) the `SAMLResponse` and `RelayState` to the Assertion Consumer Service (ACS) URL of the app. You'll use the `samlResponse` method within your ACS endpoint. This will parse and validate the SAML Response after which the user profile is extracted.

<Tabs>
<TabItem value="01" label="Request" default>

```js
await oauth.samlResponse({
  SAMLResponse: '...',
  RelayState: '...',
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "redirect_url": "https://your-app.com/sso/callback?code=5db7257fde94e062f6243572e31818d6e64c3097&state=c38ee339-6b82-43d3-838f-4036820acce9"
}
```

</TabItem>
</Tabs>

#### OIDC Response

Handle the response from the OIDC Identity Provider. After successful authentication, IdP sends back (via browser redirect) the `code` and `state` to the redirect URL (`oidcPath`) that handles the OIDC response. You'll use the `oidcAuthzResponse` method within your `oidcPath` handler. This will exchange the `code` for "token and userinfo" from the OIDC Provider.

<Tabs>
<TabItem value="01" label="Request" default>

```js
await oauth.oidcAuthzResponse({
  code: '...',
  state: '...',
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "redirect_url": "https://your-app.com/sso/callback?code=5db7257fde94e062f6243572e31818d6e64c3097&state=c38ee339-6b82-43d3-838f-4036820acce9"
}
```

</TabItem>
</Tabs>

### Request Access Token

Requests an `access_token` by passing the authorization `code` from the previous step along with other authentication details. The redirect URL will contain `code` and `state` as query strings.

<Tabs>
<TabItem value="01" label="Request" default>

```js
const tenant = 'boxyhq';
const product = 'your-app';

await oauth.token({
  code: '5db7257fde94e062f6243572e31818d6e64c3097',
  redirect_uri: 'https://your-app.com/sso/callback',
  client_id: `tenant=${tenant}&product=${product}`,
  client_secret: 'dummy',
  grant_type: 'authorization_code',
});
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "access_token": "6b81f03b60c34e46e740d96c7e6242923736a2d1",
  "token_type": "bearer",
  "expires_in": 300
}
```

</TabItem>
</Tabs>

### Fetch User Profile

Once the `access_token` has been fetched, you can use it to retrieve the user profile from the Identity Provider.

<Tabs>
<TabItem value="01" label="Request" default>

```js
const accessToken = '6b81f03b60c34e46e740d96c7e6242923736a2d1';

await oauth.userInfo(accessToken);
```

</TabItem>

<TabItem value="02" label="Response">

```json
{
  "raw": {
    "id": "1dda9fb491dc01bd24d2423ba2f22ae561f56ddf2376b29a11c80281d21201f9",
    "email": "samuel@example.com",
    "firstName": "Samuel",
    "lastName": "Jackson",
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": "samuel@example.com"
  },
  "id": "1dda9fb491dc01bd24d2423ba2f22ae561f56ddf2376b29a11c80281d21201f9",
  "email": "samuel@example.com",
  "firstName": "Samuel",
  "lastName": "Jackson",
  "requested": {
    "client_id": "f7c909a5c72a5535847acf32558b2429a5172dd6",
    "state": "c38ee339-6b82-43d3-838f-4036820acce9",
    "redirect_uri": "https://your-app.com/sso/callback",
    "tenant": "boxyhq",
    "product": "your-app",
    "scope": []
  }
}
```

</TabItem>
</Tabs>
