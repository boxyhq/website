---
title: Add SAML SSO to React App with BoxyHQ
description: Add SAML SSO to React App with BoxyHQ
sidebar_label: React
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add SAML SSO to React App

This guide assumes that you have a React app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

Visit the [GitHub repository](https://github.com/boxyhq/saas-starter-kit) to see the source code for the React SAML SSO integration.

Integrating SAML SSO into an app involves the following steps.

- Configure SAML Single Sign-On
- Authenticate with SAML Single Sign-On

## Configure SAML Single Sign-On

This step allows your tenants to configure SAML connections for their users. Read the following guides to understand more about this.

- [UI Best Practices for Configuring SAML Single Sign-On](/guides/jackson/configuring-saml-sso)
- [SSO Connection API](/docs/jackson/sso-flow/)

## Authenticate with SAML Single Sign-On

Once you add a SAML connection, the app can use this SAML connection to initiate the SSO authentication flow using SAML Jackson. The following sections focuses more on the SSO authentication side.

### Deploy SAML Jackson

The first step is to deploy the SAML Jackson service. Follow the [deployment docs](/docs/jackson/deploy/service) to install and configure the SAML Jackson.

### Setup SAML Jackson

We'll use the client library `@bity/oauth2-auth-code-pkce` to implement the authentication process. It is a zero-dependency OAuth 2.0 client supporting only the authorization code grant with PKCE for client-side protection.

```bash
npm i --save @bity/oauth2-auth-code-pkce
```

Let's configure the client library to use the SAML Jackson service endpoint for the authentication.

```js title="jackson.ts"
import { OAuth2AuthCodePKCE } from '@bity/oauth2-auth-code-pkce';

const jacksonUrl = 'http://localhost:5225';
const apiUrl = 'http://localhost:3000';
const appUrl = 'http://localhost:3366';

export const oAuth2AuthCodePKCE = (tenant: string, product: string) => {
  return new OAuth2AuthCodePKCE({
    authorizationUrl: `${jacksonUrl}/api/oauth/authorize`,
    tokenUrl: `${jacksonUrl}/api/oauth/token`,
    clientId: `tenant=${tenant}&product=${product}`,
    redirectUrl: `${appUrl}/login`,
    scopes: [],
    onAccessTokenExpiry(refreshAccessToken) {
      // Expired! Access token needs to be renewed.
      // We will try to get a new access token via grant code or refresh token.
      return refreshAccessToken();
    },
    onInvalidGrant(refreshAuthCodeOrRefreshToken) {
      // Expired! Auth code or refresh token needs to be renewed.
      // Redirecting to auth server to obtain a new auth grant code.
      return refreshAuthCodeOrRefreshToken();
    },
  });
};
```

### Make Authentication Request

```js title="login.tsx"
import { useState, useEffect } from 'react';
import { oAuth2AuthCodePKCE, authenticate } from '../lib/jackson';

const product = 'saml-demo.boxyhq.com';

const Login = () => {
  const [tenant, setTenant] = useState('');

  const oauth = oAuth2AuthCodePKCE(tenant, product);

  useEffect(() => {
    oauth
      .isReturningFromAuthServer()
      .then(async (hasAuthCode: boolean) => {
        return oauth.getAccessToken().then(async (token) => {
          // await authenticate(token.token?.value);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Start the authorize flow
  const authorize = () => {
    oauth.fetchAuthorizationCode();
  };

  return (
    <form method="POST" onSubmit={authorize}>
      <input
        type="text"
        name="tenant"
        required
        onChange={(e) => setTenant(e.target.value)}
      />
      <button type="submit">Continue with SAML SSO</button>
    </form>
  );
};

export default Login;
```

### Fetch User Profile

```js
export const authenticate = async (token: string | undefined) => {
  if (!token) {
    throw new Error('Access token not found.');
  }

  await fetch(`${apiUrl}/api/authenticate?access_token=${token}`, {
    method: 'GET',
    credentials: 'include',
  });
};
```

The entire response will look something like this:

```json
{
  "id":"<id from the Identity Provider>",
  "email": "jackson@coolstartup.com",
  "firstName": "SAML",
  "lastName": "Jackson",
  "requested": {
    "tenant": "<tenant>",
    "product": "<product>",
    "client_id": "<client_id>",
    "state": "<state>"
  },
  "raw": {
    ...
  }
}
```

### Authenticate User

Once the user has been retrieved from the Identity Provider, you may determine if the user exists in your application and authenticate the user. If the user does not exist in your application, you will typically create a new record in your database to represent the user.
