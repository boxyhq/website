---
title: Connect the SAML SSO to a Express.js app
sidebar_label: Express.js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Express.js

This guide explains how to connect the SAML SSO to an Express.js app using SAML Jackson.

Visit the [GitHub repo](https://github.com/boxyhq/express-jackson-demo) to see the source code for the Express.js SAML SSO integration.

## Add SAML SSO to your app

Let’s start by building the SAML SSO authentication workflow into your Express.js app.

### Install SAML Jackson

```bash
npm i --save @boxyhq/saml-jackson
```

### Initialize SAML Jackson

```javascript
const opts = {
  externalUrl: 'https://my-cool-app.com',
  samlAudience: 'https://my-cool-app.com',
  samlPath: '/sso/acs', // The path to the SAML ACS endpoint
  db: {
    engine: 'mongo',
    url: 'mongodb://localhost:27017/my-cool-app',
  },
};

let oauthController;

// Please note that the initialization of @boxyhq/saml-jackson is async, you cannot run it at the top level
// Run this in a function where you initialize the express server.
async function init() {
  const ret = await require('@boxyhq/saml-jackson').controllers(opts);

  oauthController = ret.oauthController;
}
```

### Add route to initiate SSO

The authenticate flow begins with redirecting your user to the authorize URL. The response contains the `redirect_url` to which you should redirect the user.

<Tabs>
<TabItem value="01" label="With Tenant and Product" default>

```javascript
router.get('/sso/authorize', async (req, res) => {
  const redirectURI = ''; // The callback URI the app should redirect to after the authentication
  const state = ''; // Create a random state and store on your app
  const tenant = ''; // The tenant ID of the tenant you want to authenticate against
  const product = ''; // The product ID of the product you want to authenticate against

  const { redirect_url } = await oauthController.authorize({
    tenant: tenant,
    product: product,
    redirect_uri: redirectURI,
    state: state,
  });

  res.redirect(redirect_url);
});
```

</TabItem>

<TabItem value="02" label="With Client ID">

```javascript
router.get('/sso/authorize', async (req, res) => {
  const redirectURI = ''; // The callback URI JACKSON should redirect to after the authentication
  const state = ''; // Create a random state and store on your app
  const clientID = ''; // The client ID of your SAML configuration

  const { redirect_url } = await oauthController.authorize({
    client_id: clientID,
    redirect_uri: redirectURI,
    state: state,
  });

  res.redirect(redirect_url);
});
```

</TabItem>
</Tabs>

### Add route to handle response from IdP

Add a route to handle the SAML Response from IdP.

```javascript
router.post('/sso/acs', async (req, res) => {
  const { SAMLResponse, RelayState } = req.body;

  const { redirect_url } = await oauthController.samlResponse({
    SAMLResponse: SAMLResponse,
    RelayState: RelayState,
  });

  res.redirect(redirect_url);
});
```

### Add route to handle the callback

Add the route to handle the redirect endpoint which will handle the callback after a user has authenticated. This endpoint should exchange the authorization code with the authenticated user's profile.

<Tabs>
<TabItem value="01" label="With Tenant and Product" default>

```javascript
router.get('/sso/callback', async (req, res) => {
  const { code, state } = req.query;

  const tenant = ''; // The tenant ID of the tenant
  const product = ''; // The product ID of the product

  const clientID = `tenant=${tenant}&product=${product}`;
  const clientSecret = 'dummy';

  // TODO: Verify the `state` matches the state you stored on your app

  const { access_token } = await oauthController.token({
    code: code,
    client_id: clientID,
    client_secret: clientSecret,
  });

  const profile = await oauthController.userInfo(access_token);

  // You can use the `profile` information for further business logic.

  res.redirect('/');
});
```

</TabItem>

<TabItem value="02" label="With Client ID and Secret">

```javascript
router.get('/sso/callback', async (req, res) => {
  const { code, state } = req.query;

  const clientID = ''; // The client ID of your SAML configuration
  const clientSecret = ''; // The client secret of your SAML configuration

  // TODO: Verify the `state` matches the state you stored on your app

  const { access_token } = await oauthController.token({
    code: code,
    client_id: clientID,
    client_secret: clientSecret,
  });

  const profile = await oauthController.userInfo(access_token);

  // You can use the `profile` information for further business logic.
});
```

</TabItem>

</Tabs>

## Next steps

- Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
