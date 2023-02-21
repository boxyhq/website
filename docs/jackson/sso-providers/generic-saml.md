---
title: Set up your own custom SAML application for a Generic IdP
sidebar_label: Generic SAML 2.0 Provider
---

# Generic SAML

This guide explains the settings you’d need to use to configure SAML with your Identity Provider. Once this is set up you should get an XML metadata file that should then be configured using our [API (or calling the API controller connection method if using our NPM)](../sso-flow/index.md#21-add-connection).

> Please do not add a trailing slash at the end of the URLs.

Create them exactly as shown below:

- Assertion consumer service URL / Single Sign-On URL / Destination URL: `http://localhost:5225/api/oauth/saml`

- Entity ID / Identifier / Audience URI / Audience Restriction: `https://saml.boxyhq.com`

- Response: `Signed`

- Assertion Signature: `Signed`

- Signature Algorithm: `RSA-SHA256`

- Assertion Encryption: `Unencrypted`

## SAML profile/claims/attributes mapping

As outlined in the guide above we try and support 4 attributes in the SAML claims - `id`, `email`, `firstName`, `lastName`. This is how the common SAML attributes map over for most providers, but some providers have custom mappings. Please refer to the documentation on Identity Provider to understand the exact mapping.

| SAML Attribute                                                         | Jackson mapping |
| ---------------------------------------------------------------------- | --------------- |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier` | id              |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`   | email           |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`      | firstName       |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname`        | lastName        |
