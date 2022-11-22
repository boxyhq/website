---
title: Add SAML SSO to React App with BoxyHQ
description: Add SAML SSO to React App with BoxyHQ
sidebar_label: React
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add SAML SSO to React App

This guide assumes that you have a React app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

If you wish to dive straight into the source, Checkout: https://github.com/boxyhq/jackson-examples/tree/main/apps/react

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

### Setup SAML Jackson Integration

We'll use the client library `@bity/oauth2-auth-code-pkce` to implement the authentication process. It is a zero-dependency OAuth 2.0 client supporting only the authorization code grant with PKCE for client-side protection.

```bash
npm i --save @bity/oauth2-auth-code-pkce
```

Let's configure the React client library to use the SAML Jackson service for authentication. Here we use a custom hook so that the `oauthClient` can be used elsewhere in the app.

```ts title="src/hooks/useOAuthClient.ts"
import { OAuth2AuthCodePKCE } from '@bity/oauth2-auth-code-pkce';
import { useEffect, useState } from 'react';

const JACKSON_URL = process.env.REACT_APP_JACKSON_URL;

interface OauthClientOptions {
  redirectUrl: string;
}
export default function useOAuthClient({
  redirectUrl,
}: OauthClientOptions): OAuth2AuthCodePKCE | null {
  const [oauthClient, setOauthClient] = useState<OAuth2AuthCodePKCE | null>(
    null
  );

  useEffect(() => {
    setOauthClient(
      new OAuth2AuthCodePKCE({
        authorizationUrl: `${JACKSON_URL}/api/oauth/authorize`,
        tokenUrl: `${JACKSON_URL}/api/oauth/token`,
        // Setting the clientId dummy here. We pass additional query params for
        // tenant and product in the authorize request.
        clientId: 'dummy',
        redirectUrl,
        scopes: [],
        onAccessTokenExpiry(refreshAccessToken) {
          console.log('Expired! Access token needs to be renewed.');
          alert(
            'We will try to get a new access token via grant code or refresh token.'
          );
          return refreshAccessToken();
        },
        onInvalidGrant(refreshAuthCodeOrRefreshToken) {
          console.log(
            'Expired! Auth code or refresh token needs to be renewed.'
          );
          alert('Redirecting to auth server to obtain a new auth grant code.');
          //return refreshAuthCodeOrRefreshToken();
        },
      })
    );
  }, [redirectUrl]);

  return oauthClient;
}
```

### Setup global Authentication primitives

#### AuthContext

We need a way to make the logged-in `user` as well as the `signIn`, `signOut` methods accessible globally. This along with the `setTenant` (method used to select the tenant for the SSO flow) and `authStatus` (boolean which helps us to conditionally render content based on whether the authenticated status is fully known or being loaded) are made available throughout the application by using `AuthContext`.

```tsx title="src/lib/AuthProvider.tsx"
import React, { useState, useEffect, ReactNode, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import useOAuthClient from '../hooks/useOAuthClient';
import { authenticate, getProfileByJWT } from './backend';
import devLogger from './devLogger';

interface ProviderProps {
  children: ReactNode;
}

interface AuthContextInterface {
  setTenant?: React.Dispatch<React.SetStateAction<string>>;
  authStatus: 'UNKNOWN' | 'FETCHING' | 'LOADED';
  user: any;
  signIn: () => void;
  signOut: (callback: VoidFunction) => void;
}

// localstorage key to store from url
const APP_FROM_URL = 'appFromUrl';

export const AuthContext = createContext<AuthContextInterface>(null!);
```

#### AuthProvider

We will wire up the flow inside the AuthProvider.

1. Once the app shell is rendered, we run an effect that uses the `authClient` from `useOAuthClient`. Two scenarios need to be handled here. The first one is the case where we have secured an access_token from the SSO provider (Jackson) in which case we can retrieve the logged-in user profile by passing in the cookie. The second one is the case where the browser gets redirected back to the app, after signing in at IdP. The authorization code in the redirect is exchanged for an access token which is then passed to the app backend complete the login.

```tsx title="src/lib/AuthProvider.tsx"
const AuthProvider = ({ children }: ProviderProps) => {
  const redirectUrl = process.env.REACT_APP_APP_URL + from;

  const authClient = useOAuthClient({ redirectUrl });

  useEffect(() => {
    let didCancel = false;

    const loadUser = async () => {
      if (!authClient) {
        return;
      }
      setAuthStatus('FETCHING');
      if (authClient.isAuthorized()) {
        devLogger(`authClient is already authorized`);
        const { data, error } = await getProfileByJWT();
        if (!didCancel && !error) {
          setUser(data);
          setAuthStatus('LOADED');
        }
      } else {
        try {
          const hasAuthCode = await authClient?.isReturningFromAuthServer();
          if (!hasAuthCode) {
            devLogger('no auth code detected...');
          } else {
            devLogger(authClient);
            const token = !didCancel
              ? await authClient?.getAccessToken()
              : null;
            token && localStorage.removeItem(APP_FROM_URL);
            const profile = await authenticate(token?.token?.value);
            if (!didCancel && profile) {
              setUser(profile);
            }
          }
        } catch (err) {
          console.error(err);
        } finally {
          setAuthStatus('LOADED');
        }
      }
    };

    devLogger(`running effect loadUser`);
    loadUser();
    return () => {
      devLogger(`cancelling effect`);
      didCancel = true;
    };
  }, [authClient]);

  const value = {
    authStatus,
    user,
    setTenant,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
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
