---
sidebar_position: 6
---

# Pre-loaded SAML Configuration

If PRE_LOADED_CONFIG is set then it should point to a directory with the following structure (example below):-

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
};
```

The XML file (should share the name with the .js file) is the raw XML metadata file you receive from your Identity Provider. Please ensure it is saved in the `utf-8` encoding.

The config and XML above correspond to the [SAML API config](saml-flow.md#2-saml-config-api).
