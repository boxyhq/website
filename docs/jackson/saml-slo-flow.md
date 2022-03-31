---
sidebar_position: 4
---

# SAML SLO flow

SLO is a SAML flow that allows an end-user to logout of a single session and be automatically logged out of all linked sessions created during the SSO process.

## With Jackson Service

The SLO flow begins with redirecting your user to the `/api/logout` endpoint.

```bash
https://localhost:5225/api/logout
  ?nameId=google-auth0-f92cc1834efc0f73e9c09
  &tenant=boxyhq.com
  &product=demo
  &redirectUrl=http://www.example.com/logout
```

- `nameId`: Identifies the subject of a SAML assertion (Typically the user who is authenticated)
- `tenant`: The tentant
- `product`: The product
- `redirectUrl`: Post logout redirect URL

IdP will send a response back to a specific URL for the logout request. You need to register this URL on the IdP `/api/logout/callback` to handle the response.

Jackson will redirect users to `redirectUrl` after the successful logout from the IdP.

## With NPM Package

### Create Logout Request

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

### Handle the Response

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
