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

We are going to need a few dependencies along the way. First, we need the [`remix-auth`](https://github.com/sergiodxa/remix-auth) package for the [`Authenticator`](#authenticator). Second one is the [`@boxyhq/remix-auth-saml`](https://github.com/boxyhq/remix-auth-saml) package exposing the `BoxyHQSAMLStrategy`. 
<!-- This package is a wrapper around [`remix-auth-oauth2`](https://github.com/sergiodxa/remix-auth-oauth2), enabling us to set the tenant/product in a multi-tenant app.  -->

```bash
npm i remix-auth @boxyhq/remix-auth-saml
```

## Authenticator

Next, we need an `Authenticator` instance from `remix-auth`. `Authenticator` exposes the API for login and logout. Before we go any further, let's do a small primer on [remix-auth](https://github.com/sergiodxa/remix-auth#overview).

> Remix Auth is a complete open-source authentication solution for Remix.run applications.
> Heavily inspired by Passport.js, but completely rewrote it from scratch to work on top of the Web Fetch API. Remix Auth can be dropped in to any Remix-based application with minimal setup.
> As with Passport.js, it uses the strategy pattern to support the different authentication flows. Each strategy is published individually as a separate npm package.

The `Authenticator` needs a sessionStorage instance to store the logged-in user. For this, we can rely on the `createCookieSessionStorage` from remix. 
<!-- For strategy, we'll be using the `BoxyHQSAMLStrategy` from `remix-auth-saml` installed in the previous step. -->

Create two files under `app` directory:    
~>  `sessions.server.ts` for `sessionStorage`.  
~>  `auth.server.ts` for `Authenticator`.

> sessions.server.ts:
> ```typescript
> import { createCookieSessionStorage } from "remix";
>
> const sessionStorage = createCookieSessionStorage({
>   cookie: {
>     name: "__session",
>     httpOnly: true,
>     path: "/",
>     sameSite: "lax",
>     secrets: process.env.COOKIE_SECRETS!.split(","),
>     secure: process.env.NODE_ENV === "production",
>   },
> });
> 
> const { getSession, commitSession, destroySession } = sessionStorage;
> const JACKSON_ERROR_COOKIE_KEY = "jackson_error";
> 
> export default sessionStorage;
> export { getSession, commitSession, destroySession, JACKSON_ERROR_COOKIE_KEY };
> ```


> auth.server.ts:
> ```typescript
> import { Authenticator } from "remix-auth";
> import {
>   BoxyHQSAMLStrategy,
>   type BoxyHQSAMLProfile,
> } from "@boxyhq/remix-auth-saml";
> import invariant from "tiny-invariant";
> import sessionStorage from "./sessions.server";
> 
> invariant(process.env.BASE_URL, "Expected BASE_URL to be set in env");
> invariant(
>   process.env.BOXYHQSAML_ISSUER,
>   "Expected BOXYHQSAML_ISSUER to be set in env"
> );
> 
> const BASE_URL = process.env.BASE_URL;
> const BOXYHQSAML_ISSUER = process.env.BOXYHQSAML_ISSUER;
> 
> let auth: Authenticator;
> declare global {
>   var __auth: Authenticator | undefined;
> }
> 
> function createAuthenticator() {
>   const auth = new Authenticator<BoxyHQSAMLProfile>(sessionStorage);
> 
>   // Strategy use for the hosted saml service provider goes here
>   
>   // Strategy use for the embedded saml service provider goes here
>   
>   return auth;
> }
> 
> if (process.env.NODE_ENV === "production") {
>   auth = createAuthenticator();
> } else {
>   if (!global.__auth) {
>     global.__auth = createAuthenticator();
>   }
>   auth = global.__auth;
> }
> 
> export { auth };
> ```


## SAML Service Provider

To get SAML working, we need a service provider (SP) that constructs the SAML request, redirects the app to Identity Provider (IdP), and parses the SAML response coming from the IdP. 

> 💡 SAML uses the front-channel or browser to send/receive the request/response XML.

It turns out you don't need to do the heavy lifting (of building a full-blown SP) yourself 🤗. We've got it covered with an open-source npm module [SAML Jackson](https://github.com/boxyhq/jackson). With "SAML Jackson" you've got 2 options up your sleeve.

1. [Host SAML SP as a separate service](#host-saml-sp-as-a-separate-service).
2. [Embed SAML SP functionality leveraging remix resource routes](#embed-saml-sp).

### Host SAML SP as a separate service

#### Setup

To get going, you'll need a hosted instance of "SAML Jackson".  
Refer to the [documentation](https://boxyhq.com/docs/jackson/deploy/service) in case you're planning to deploy `Jackson` to your favorite hosting provider.  
Otherwise, fret not 🤗, we have a hosted instance (details below) of `Jackson`, that can be readily used to test out the SAML flow.

```bash
Jackson Service : https://jackson-demo.boxyhq.com  
client_id       : tenant=boxyhq.com&product=saml-demo.boxyhq.com
```

We'll be using the above [pre-configured](https://boxyhq.com/docs/jackson/saml-flow#2-saml-config-api) tenant/product pointing to https://mocksaml.com as the IdP.

#### Strategy usage

Use the strategy with the `Authenticator` as shown below. Point the `issuer` to the jackson-demo url. The clientID/Secret values are expected to be set dynamically from the client side. For now set them to the value `dummy`.

> **auth.server.ts**
> ```typescript
> // Strategy use for the hosted saml service provider goes here
>  auth.use(
>    new BoxyHQSAMLStrategy(
>      {
>        issuer: "https://jackson-demo.boxyhq.com",
>        clientID: "dummy",
>        clientSecret: "dummy",
>        callbackURL: new URL("/auth/saml/callback", BASE_URL).toString(),
>      },
>      async ({ profile }) => {
>        return profile;
>      }
>    )
>  );
> ```

#### Routes
We need 2 routes:   
~> [/auth/saml](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.tsx) - Action handler for login  
~> [/auth/saml/callback](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.callback.tsx) - Loader which handles the callback from the IdP  
Create the following files under `app/routes`:  


> **auth.saml.tsx**
> ```typescript
> import { ActionFunction, redirect } from "remix";
> import { auth } from "~/auth.server";
> import { commitSession, getSession } from "~/sessions.server";
> import { validateEmail, validateProduct } from "~/utils.server";
> 
> export const action: ActionFunction = async ({ request }) => {
>   const formData = await request.formData();
>   const email = formData.get("email");
>   const product = formData.get("product");
> 
>   ... // Add some validation logic
> 
>   // extracting the tenant from email is one way to set it
>   const tenant = email.split("@")[1];
> 
>   return await auth.authenticate("boxyhq-saml", request, {
>     successRedirect: "/private",
>     failureRedirect: "/login",
>     context: {
>       clientID: `tenant=${tenant}&product=${product}`,
>       clientSecret: "dummy",
>     },
>   });
> };
> ``` 

> **auth.saml.callback.tsx**
> ```typescript
> import type { LoaderFunction } from "remix";
> import { auth } from "~/auth.server";
> 
> export const loader: LoaderFunction = async ({ request, params }) => {
>   return auth.authenticate("boxyhq-saml", request, {
>     successRedirect: "/private",
>     failureRedirect: "/login",
>   });
> };
> ```

### Embed SAML SP

#### Setup

We'll be using SAML Jackson npm to setup some API routes (resource routes in remix terminology) to handle the SAML SP flows.

Install `@boxyhq/saml-jackson` first:

```bash
npm i @boxyhq/saml-jackson
```

Next, create the api files:

```bash
app/routes $ mkdir api && cd api
routes/api $ touch oauth.\$slug.ts v1.saml.config.ts
```
#### Strategy usage


#### Routes