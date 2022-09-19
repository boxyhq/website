---
slug: understanding-oauth-and-oidc
title: Technical bits on SAML, OAuth 2.0 and OpenID Connect
author: Aswin V
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/av__2021
author_image_url: https://boxyhq.com/img/team/aswin.jpg
tags: [sso, engineering, saml-jackson, oauth-2.0]
---

We have already covered SAML at a high level from both [user](2022-06-30-understanding-saml-sso-the-basics-from-the-user-side.md) and [application provider](2022-06-30-understanding-saml-sso-the-basics-from-the-solution-providers-side.md) points of view.

In this post, we'll dive into the technicalities of SAML, OAuth 2.0 and OpenID Connect building upon one another.

## SAML

SAML was designed for traditional web applications in the early 2000s. The goal was to provide a seamless user experience for applications by federating authentication to an IdP. As a result, applications no longer had to maintain identities for users. All they had to do was to redirect the browser to the IdP which would then authenticate the user and return an assertion about the logged-in user. This assertion in effect was a token, asserting to the app that the user authenticated at the IdP and the assertion is valid for the set period contained within it.

While SAML gave us a solution to the problem of SSO or federated identity, it does not address the issue of authorization.

The need for authorization arose with the dawn of Single Page Apps (SPA) and native platforms such as mobile. More and more logic started moving from backend to frontend and an ecosystem of apps that could talk to one another (via HTTP(S)) sprung up. For eg:- You could reserve movie tickets and send invitations to your Facebook friends. This meant that applications started acting on behalf of the end-user and requested data (friend list) from third-party services (Facebook). One way we could solve it was by sharing our credentials with the app. Nothing could be more dangerous than this, because now the application can virtually do anything the user could do. This paved the path for standards like OAuth that provides us with a mechanism to grant controlled and limited access to resources on behalf of the user.

## OAuth 2.0

## OpenID Connect

##
