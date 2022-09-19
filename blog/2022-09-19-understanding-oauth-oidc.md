---
slug: understanding-oauth-and-oidc
title: Technical bits on SAML, OAuth 2.0 and OpenID Connect
author: Aswin V
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/av__2021
author_image_url: https://boxyhq.com/img/team/aswin.jpg
tags: [sso, engineering, saml-jackson, oauth-2.0]
---

We have already covered SAML at a high level from both [user](2022-06-30-understanding-saml-sso-the-basics-from-the-user-side.md) and [application provider](2022-06-30-understanding-saml-sso-the-basics-from-the-solution-providers-side.md) point of views.

In this post, we'll take a dive into the technicalities of SAML, OAuth 2.0 and OpenID Connect building upon one another.

## SAML

SAML was designed for traditional web applications in early 2000's. The goal was to provide seamless user experience for applications by federating authentication to an IdP. This meant applications no longer had to maintain identities for users. All they had to do was to redirect the browser to the IdP which would then authenticate the user and return back an assertion about the logged-in user. This assertion in effect was a token, asserting that the user authenticated at the IdP and the assertion is valid for the set time period contained within it.

SAML gives us a solution to the problem of SSO or federated identity but does not address the issue of authorization.

## OAuth 2.0

## OpenID Connect

##
