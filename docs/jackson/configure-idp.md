---
sidebar_position: 5
---

# Configure Identity Provider

This guide explains the settings you’d need to use to configure SAML with your Identity Provider. Once this is set up you should get an XML metadata file that should then be uploaded to the product web app.

> Please do not add a trailing slash at the end of the URLs.

Create them exactly as shown below:

- Assertion consumer service URL / Single Sign-On URL / Destination URL: `http://localhost:5000/api/oauth/saml`

- Entity ID / Identifier / Audience URI / Audience Restriction: `https://saml.boxyhq.com`

- Response: `Signed`

- Assertion Signature: `Signed`

- Signature Algorithm: `RSA-SHA256`

- Assertion Encryption: `Unencrypted`

## SAML Attributes Mapping

- id -> user.id
- email -> user.email
- firstName -> user.firstName
- lastName -> user.lastName
