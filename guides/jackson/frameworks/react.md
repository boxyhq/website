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

Let's configure the React client library to use the SAML Jackson service for the authentication.

```js title="src/lib/jackson.ts"
import { OAuth2AuthCodePKCE } from '@bity/oauth2-auth-code-pkce';

// SAML Jackson service URL
const jacksonUrl = 'http://localhost:5225';

// React app URL
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

Let's add a page to begin the authenticate flow; this page initiates the SAML SSO flow by redirecting the users to their configured Identity Provider.

The user will be redirected to the IdP when clicking the "Continue with SAML SSO" button.

```js title="src/pages/login.tsx"
import { useState, useEffect } from 'react';
import { oAuth2AuthCodePKCE } from '../lib/jackson';

// Your product name
const product = 'saml-demo.boxyhq.com';

const Login = () => {
  const [tenant, setTenant] = useState('boxyhq.com');

  const oauth = oAuth2AuthCodePKCE(tenant, product);

  useEffect(() => {
    oauth
      .isReturningFromAuthServer()
      .then(async (hasAuthCode: boolean) => {
        if (!hasAuthCode) {
          return;
        }

        return oauth.getAccessToken().then(async (accessToken) => {
          // `accessToken` is available here.
          // We need to fetch the user profile using the `accessToken`.
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
        value={tenant}
      />
      <button type="submit">Continue with SAML SSO</button>
    </form>
  );
};

export default Login;
```

### Fetch User Profile

Once the `accessToken` has been fetched, the React app can use it to retrieve the user profile from the Identity Provider.

Typically you would use your backend service (Eg: Express.js) to call the SAML Jackson API to fetch the user profile using the `accessToken`.

Here is a sample Express route to fetch the user profile.

```js
app.get('/api/fetch-user-profile', async function (req, res, next) {
  const accessToken = req.query.access_token;

  if (!accessToken) {
    throw new Error('Access token not found.');
  }

  const response = await fetch(
    `${jacksonUrl}/api/oauth/userinfo?access_token=${accessToken}`,
    {
      method: 'GET',
    }
  );

  const profile = await response.json();

  // Once the user has been retrieved from the Identity Provider,
  // you may determine if the user exists in your application and authenticate the user.
  // If the user does not exist in your application, you will typically create a new record in your database to represent the user.

  res.json(profile);
});
```

The above API returns a response containing the user profile if the authorization is valid.

Now make the following changes to the `Login` page. We'll call the `/api/fetch-user-profile` API to fetch the user profile.

```js title="src/pages/login.tsx"
useEffect(() => {
  oauth
    .isReturningFromAuthServer()
    .then(async (hasAuthCode: boolean) => {
      if (!hasAuthCode) {
        return;
      }

      return oauth.getAccessToken().then(async (accessToken) => {
        const token = accessToken.token?.value;

        // highlight-start
        await fetch(
          `http://your-api-url/api/fetch-user-profile?access_token=${token}`,
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        const profile = await response.json();
        // highlight-end
      });
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
```

The profile will look something like this:

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
