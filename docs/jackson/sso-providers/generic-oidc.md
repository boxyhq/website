---
title: Set up app in your OpenID Connect Identity Provider
sidebar_label: OpenId Connect Provider
---

# OIDC Provider setup

To allow apps or clients to login using an OIDC Identity Provider, we must register an application with the IdP. The process might slightly vary from one IdP to another (refer your IdP documentation), but there are a few things in common.

- Callback URL: This will be the URL where Jackson recieves the OIDC Authorization response. Make sure to set the full HTTPS URL obtained by concatenating Jackson endpoint with [oidcPath](../deploy/env-variables.md#oidcpath) env. The default value set for `oidcPath` in Jackson service is `/api/oauth/oidc`.
- Cliend/Application ID: The OIDC Identity Provider normally will generate a unique identifier for the registered App. Make a note of this to be used later when creating the SSO connection with Jackson.
- Client Secret: Along with the Client ID, the IdP also generates a client secret which is used to authenticate the client while issuing tokens.

:::info
Since Jackson acts as a proxy between the app and the OIDC Identity Provider, here the application credentials are issued against Jackson
:::
