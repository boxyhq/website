# Pre-loaded Connections

If PRE_LOADED_CONNECTION is set then it should point to a directory with the following structure (example below):-

```bash
boxyhq.js
boxyhq.xml
anothertenant.js
anothertenant.xml
```

The JS file has the following structure:-

```javascript
module.exports = {
  defaultRedirectUrl: 'http://localhost:3366/login/saml',
  redirectUrl: '["http://localhost:3366/*"]',
  tenant: 'boxyhq.com',
  product: 'demo',
  name: 'testConnection',
  description: 'Just a test connection',
};
```

The XML file (should share the name with the .js file) is the raw XML metadata file you receive from your Identity Provider. Please ensure it is saved in the `utf-8` encoding.

The config and XML above correspond to the [SAML API config](../sso-flow/saml.md#2-saml-connection-api).

# Pre-loaded OIDC Connection

For a connection backed by OpenId IdP create the \*.js file at PRE_LOADED_CONNECTION as shown below:-

```javascript
module.exports = {
  defaultRedirectUrl: 'http://localhost:3366/sso/oauth/oidc',
  redirectUrl: '["http://localhost:3366"]',
  tenant: 'oidc.example.com',
  product: 'crm',
  name: 'OIDC connection for oidc.example.com',
  description: 'OIDC connection for oidc.example.com',
  oidcDiscoveryUrl:
    'https://accounts.google.com/.well-known/openid-configuration',
  oidcClientId: '<ClientId from the OpenId IdP>',
  oidcClientSecret: '<ClientSecret from the OpenId IdP>',
};
```
