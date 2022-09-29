# NPM Library

Jackson is available as an [npm package](https://www.npmjs.com/package/@boxyhq/saml-jackson) that can be integrated into any web application framework (like Express.js for example). Please file an issue or submit a PR if you encounter any issues with your choice of framework.

```bash
npm i @boxyhq/saml-jackson
```

Integrating SAML Jackson with a Node.js app involves the following steps.

See the [GitHub repo](https://github.com/boxyhq/jackson-examples/tree/main/apps/express) to see the source code for the Express integration

## Express.js example

### Requirements

- Node.js version 14 or newer
- A [supported database](./service.md#database)
- An Express.js based app to add SAML Jackson

### Install SAML Jackson library

```bash
npm i --save @boxyhq/saml-jackson
```

### Add Express Routes

```javascript
// express
const express = require('express');
const router = express.Router();
const cors = require('cors'); // needed if you are calling the token userinfo endpoints from the frontend

// Set the required options. Refer to `Environment Variables` for the full list
const opts = {
  externalUrl: 'https://my-cool-app.com',
  samlAudience: 'https://my-cool-app.com',
  samlPath: '/sso/oauth/saml',
  oidcPath: '/sso/oauth/oidc',
  db: {
    engine: 'mongo',
    url: 'mongodb://localhost:27017/my-cool-app',
  },
};

let connectionAPIController;
let oauthController;
let logoutController;
let oidcDiscoveryController;
// Please note that the initialization of @boxyhq/saml-jackson is async, you cannot run it at the top level
// Run this in a function where you initialize the express server.
async function init() {
  const ret = await require('@boxyhq/saml-jackson').controllers(opts);
  connectionAPIController = ret.connectionAPIController;
  oauthController = ret.oauthController;
  logoutController = ret.logoutController;
  oidcDiscoveryController = ret.oidcDiscoveryController;
}
```

- Add your app base URL as `externalUrl`
- `samlPath` becomes part of the ACS URL. The ACS URL is an endpoint on the SP where the IdP will redirect to with its authentication response. For example: If `externalUrl` is `http://localhost`, and `samlPath` is `/sso/acs`, the ASC URL will be `http://localhost/sso/acs`
- `oidcPath` is the endpoint which recieves the authentication response from an OIDC IdP. The `code` contained in the response is then exchanged to retrieve token/userprofile.

### Add API routes for SSO Connections

[API Reference](../sso-flow/index.md#2-sso-connection-api)

```javascript
// express.js middlewares are needed to parse json and x-www-form-urlencoded
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

export const strategyChecker = (req) => {
  const isSAML = 'rawMetadata' in req.body || 'encodedRawMetadata' in req.body;
  const isOIDC = 'oidcDiscoveryUrl' in req.body;
  return { isSAML, isOIDC };
};


// SSO connections API. You should pass this route through your authentication checks, do not expose this on the public interface without proper authentication in place.
router.post('/api/v1/connections', async (req, res) => {
  const { isSAML, isOIDC } = strategyChecker(req);
  try {
    // apply your authentication flow (or ensure this route has passed through your auth middleware)
    ...
    if (isSAML) {
     res.json(await connectionAPIController.createSAMLConnection(req.body));
    } else if (isOIDC) {
      res.json(await connectionAPIController.createOIDCConnection(req.body))
    } else {
      throw 'strategy not supported'
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
// update connection
router.patch('/api/v1/connections', async (req,res) => {
  const { isSAML, isOIDC } = strategyChecker(req);
   try {
    // apply your authentication flow (or ensure this route has passed through your auth middleware)
    ...
  if (isSAML) {
     res.json(await connectionAPIController.updateSAMLConnection(req.body));
    } else if (isOIDC) {
      res.json(await connectionAPIController.updateOIDCConnection(req.body))
    } else {
      throw 'strategy not supported'
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
})
// fetch connection
router.get('/api/v1/connections', async (req, res) => {
  try {
    // apply your authentication flow (or ensure this route has passed through your auth middleware)
    ...

    res.json(await connectionAPIController.getConnections(req.query));
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
// delete connection
router.delete('/api/v1/connections', async (req, res) => {
  try {
    // apply your authentication flow (or ensure this route has passed through your auth middleware)
    ...

    // only when properly authenticated, call the connection function
    await connectionAPIController.deleteConnections(req.body);
    res.status(200).end();
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
```

### OAuth: Authorize URL

The OAuth flow begins with redirecting your user to the authorize URL. The response contains the `redirect_url` to which you should redirect the user. The returned `redirect_url` is the authorization endpoint on the IdP end, where user authentication takes place.

[API Reference](../sso-flow/index.md#31-authorize)

```javascript
// OAuth 2.0 / OpenID Connect 1.0 flow
router.get('/oauth/authorize', async (req, res) => {
  try {
    const { redirect_url, authorize_form } = await oauthController.authorize(
      req.query
    );
    if (redirect_url) {
      res.redirect(302, redirect_url);
    } else {
      // For SAML Post Binding
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.send(authorize_form);
    }
  } catch (err) {
    const { message, statusCode = 500 } = err;

    res.status(statusCode).send(message);
  }
});
```

### Handle Response from IdP

#### SAML

Add a method to handle the SAML Response from IdP. Once the SAML response is validated and user profile extracted, Jackson will generate the authorization response (authorization code) for the client.

##### IdP-initiated SAML flow

To enable IdP-initiated SAML flow set https://boxyhq.com/docs/jackson/deploy/env-variables#idp_enabled. If [idpDiscoveryPath](https://boxyhq.com/docs/jackson/deploy/env-variables#idp_discovery_path) is not set then always the first connection will be chosen in case of multiple matches.

If `oauthController.samlResponse` returns `app_select_form` with no `redirect_url`, then we have hit the case where the IdP-initiated flow has multiple matches for the same IdP. Users can select an app and the flow is resumed with the `idp_hint` containing the user selection. For reference on how to add an IdP selection page, see: https://github.com/boxyhq/jackson/blob/main/pages/idp/select.tsx

:::info
SAML Response - IdP issues an HTTP POST request to SP's Assertion Consumer Service (ACS URL) with 2 fields `SAMLResponse` and `RelayState`.
:::

```javascript
router.post('/sso/oauth/saml', async (req, res) => {
  try {
    const { redirect_url, app_select_form } =
      await oauthController.samlResponse(req.body);

    if (redirect_url) {
      res.redirect(302, redirect_url);
    } else {
      // For IdP initiated SAML login where multiple apps are configured for same IdP. Here user choice is required to complete the flow
      res.set('Content-Type', 'text/html; charset=utf-8');
      res.send(app_select_form);
    }
  } catch (err) {
    const { message, statusCode = 500 } = err;

    res.status(statusCode).send(message);
  }
});
```

#### OIDC

Add a method to handle OIDC authentication response from IdP. Once the response is processed and the user profile is retrieved, Jackson will generate the authorization response (authorization code) for the client.

:::info
OIDC Response - The successful Authentication response from the OIDC IdP contains the `authorization code` and `state` from original authorization request (sent from jackson). Jackson will use the `authorization code` to obtain the token which is then exchanged for userprofile. The user profile is stored against a code which is then set in the returned `redirect_url`. In case of authorization failure at IdP the `error` and `error_description` from IdP will be set in the returned `redirect_url`
:::

```javascript
router.post('/sso/oauth/oidc', async (req, res) => {
  try {
    const { redirect_url } = await oauthController.oidcAuthzResponse(req.query);
    if (redirect_url) {
      res.redirect(302, redirect_url);
    }
  } catch (err) {
    const { message, statusCode = 500 } = err;

    res.status(statusCode).send(message);
  }
});
```

### OAuth: Code Exchange

The code can then be exchanged for a token by making the following request. You should validate that the state matches the one you sent in the authorize request.

[API Reference](../sso-flow/index.md#32-code-exchange)

```javascript
router.post('/oauth/token', cors(), async (req, res) => {
  try {
    const result = await oauthController.token(req.body);

    res.json(result);
  } catch (err) {
    const { message, statusCode = 500 } = err;

    res.status(statusCode).send(message);
  }
});
```

### OAuth: Get User Profile

The short-lived access token can now be used to request the user's profile.

[API Reference](../sso-flow/index.md#33-profile-request)

```javascript
router.get('/oauth/userinfo', async (req, res) => {
  try {
    let token = extractAuthToken(req);

    // check for query param
    if (!token) {
      token = req.query.access_token;
    }

    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
    }

    const profile = await oauthController.userInfo(token);

    res.json(profile);
  } catch (err) {
    const { message, statusCode = 500 } = err;

    res.status(statusCode).json({ message });
  }
});

// set the router
app.use('/sso', router);
```

### SLO: Create Logout Request

Create the logout request by calling the method `createRequest()`.

```javascript
router.get('/logout', async (req, res, next) => {
  const { logoutUrl, logoutForm } = await logoutController.createRequest({
    nameId: 'google-oauth2|108149256146623609101',
    tenant: 'boxyhq.com',
    product: 'demo',
    redirectUrl: 'http://localhost:3000',
  });

  // HTTP-Redirect binding
  if (logoutUrl) {
    return res.redirect(logoutUrl);
  }

  // HTTP-POST binding
  if (logoutForm) {
    return res.send(logoutForm);
  }
});
```

### SLO: Handle the Response

IdP will send a response back to a specific URL. You need to register this URL on the IdP to handle the response properly.

```javascript
router.post('/logout/callback', async (req, res, next) => {
  const { SAMLResponse, RelayState } = req.body;

  const { redirectUrl } = await logoutController.handleResponse({
    SAMLResponse,
    RelayState,
  });

  return res.redirect(redirectUrl);
});
```

### OpenID Connect: Discovery endpoints

To enable support for OpenID Connect clients (or Relying Parties), we must expose the location and other [metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata) of Jackson (OpenID Issuer).

Jackson exports `oidcDiscoveryController` which can be used to construct service endpoints for OIDC discovery as shown below.

```javascript
// https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig
router.get('/.well-known/openid-configuration', async (req, res, next) => {
  try {
    const config = oidcDiscoveryController.openidConfig();
    const response = JSON.stringify(config, null, 2);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});
// jwks_uri
router.get('/oauth/jwks', async (req, res, next) => {
  try {
    const jwks = await oidcDiscoveryController.jwks();
    const response = JSON.stringify(jwks, null, 2);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});
```

Make sure you have configured the OpenID environment variables mentioned in [Environment Variables](env-variables.md#openid-configuration).
