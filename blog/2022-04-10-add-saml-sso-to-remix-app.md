---
slug: add-saml-sso-to-remix-app
title: Add SAML Federated Identity to a remix app
author: Aswin V
author_title: Senior Software Engineer (Open Source Dev Tools) @BoxyHQ
author_url: https://twitter.com/av__2021
author_image_url: https://avatars.githubusercontent.com/u/3107922?v=4
tags: [enterprise-readiness, saml, federated-identity, saml-jackson, integrations, remix]
---
Ever since it was first [launched](https://remix.run/blog/remix-v1), "remix" has made a mark of its own as an edge-first web framework that moves the bulk of the JavaScript workload from the user's browser to a server closer to the user. In doing so, it embraces platform features like [Web Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and augments the good old HTML forms to support data mutations. The result is a super-fast user experience, all the while shipping less code to the browser. And we thought it would be cool to plug SAML auth into a remix app.  

Let's get started 🚀.  

If you wish to dive straight into the source, Checkout: https://github.com/boxyhq/jackson-remix-auth

## Setting up the remix app

Run `create-remix`. You can go with the Remix App Server as the deployment target for this tutorial. Feel free to choose either "Typescript" or "Javascript". All the code samples in this tutorial are in typescript (We ❤️ typescript )

```bash
npx create-remix@latest
```

We are going to need a few dependencies along the way. First, let's install the [`@boxyhq/remix-auth-saml`](https://github.com/boxyhq/remix-auth-saml) package. This package is a wrapper around [`remix-auth-oauth2`](https://github.com/sergiodxa/remix-auth-oauth2), enabling us to set the tenant/product in a multi-tenant app. 

```bash
npm i @boxyhq/remix-auth-saml
```

## Authenticator

Next we need an `Authenticator` instance from `remix-auth`.  
Before that just a small primer on [remix-auth](https://github.com/sergiodxa/remix-auth).

> Remix Auth is a complete open-source authentication solution for Remix.run applications.

> Heavily inspired by Passport.js, but completely rewrote it from scratch to work on top of the Web Fetch API. Remix Auth can be dropped in to any Remix-based application with minimal setup.

> As with Passport.js, it uses the strategy pattern to support the different authentication flows. Each strategy is published individually as a separate npm package.



## SAML Service Provider

To get saml working, we need a service provider (SP) that constructs the SAML request, redirects the app to Identity Provider (IdP), and parses the SAML response coming from the IdP. 

> 💡 SAML uses the front-channel or browser to send/receive the request/response XML.

It turns out you don't need to do the heavy lifting (of building a full-blown SP) yourself 🤗. We've got it covered with an open-source npm module [SAML Jackson](https://github.com/boxyhq/jackson). With "SAML Jackson" you've got 2 options up your sleeve.

1. Host SAML SP as a separate service.
2. Embed SAML SP functionality leveraging remix resource routes.

### Host SAML SP as a separate service

#### Setup

To get going, you'll need a hosted instance of "SAML Jackson".  
Refer the [documentation](https://boxyhq.com/docs/jackson/deploy/service) in case you're planning to deploy Jackson into your favorite hosting provider.  
Otherwise fret not 🤗, we have a hosted instance (details below) of jackson which you can readily use to test out the SAML flow.

`Hosted Service URL`:&nbsp;&nbsp; **https://jackson-demo.boxyhq.com**  
`client_id`: &nbsp;&nbsp; **tenant=boxyhq.com&product=saml-demo.boxyhq.com**

We'll be using the above pre-configured tenant/product pointing to https://mocksaml.com as the IdP.

#### Routes



### Embed SAML Service Provider functionality