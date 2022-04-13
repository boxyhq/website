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

> **sessions.server.ts:**
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


> **auth.server.ts:**
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
Otherwise, fret not 🤗, we have a hosted instance (details below) of `Jackson`, that can be readily used without any configuration.

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


**auth.saml.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.tsx**
> ```typescript
> ...
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

**auth.saml.callback.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.callback.tsx**
> ```tsx
> ...
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

Setup `JacksonProvider`. Calling this function returns the controllers (`oauthController` and `apiController`) needed to orchestrate the SAML flow. Create the following file under `app`:  

**auth.jackson.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/auth.jackson.server.ts**

> ```typescript
> 
> const opts =  {
>  ...
>  // clientSecretVerifier will be checked when requesting token
>  // 👉🏻 https://boxyhq.com/docs/jackson/deploy/env-variables#client_secret_verifier
>  clientSecretVerifier: process.env.CLIENT_SECRET_VERIFIER 
>  ...
> }
> 
> ...
> 
> async function JacksonProvider({
>   appBaseUrl,
> }: {
>   appBaseUrl: string;
> }): Promise<{
>   apiController: IAPIController;
>   oauthController: IOAuthController;
> }> {
>   const _opts = { ...opts, externalUrl: appBaseUrl, samlAudience: appBaseUrl };
>   // this is needed because in development we don't want to restart
>   // the server with every change, but we want to make sure we don't
>   // create a new connection to the DB with every change either.
>   if (process.env.NODE_ENV === "production") {
>     const controllers = await jackson(_opts);
>     apiController = controllers.apiController;
>     oauthController = controllers.oauthController;
>   } else {
>     if (!global.__apiController && !global.__oauthController) {
>       const controllers = await jackson(_opts);
>       global.__apiController = controllers.apiController;
>       global.__oauthController = controllers.oauthController;
>     }
>     apiController = global.__apiController;
>     oauthController = global.__oauthController;
>   }
> 
>   return { apiController, oauthController };
> }
>
> ...
> 
> ```

Next, create the api files for [OAuth2.0 flow](https://boxyhq.com/docs/jackson/saml-flow#3-oauth-20-flow) and [SAML Configuration](https://boxyhq.com/docs/jackson/saml-flow#2-saml-config-api):

```bash
app/routes $ mkdir api && cd api
routes/api $ touch oauth.\$slug.ts v1.saml.config.ts
```

 **oauth.$slug.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/api/oauth.%24slug.ts**
> ```typescript
>
> ...
>  
> // Handles GET /api/oauth/authorize, GET /api/oauth/userinfo
> export const loader: LoaderFunction = async ({ params, request }) => {
>
>   ... // Some validation logic
>   const operation = params.slug;
>   const url = new URL(request.url);
> 
>   const { oauthController } = await JacksonProvider({
>     appBaseUrl: url.origin,
>   });
> 
>   // rightmost query param will win in case of multiple ones with same name
>   const queryParams = Object.fromEntries(url.searchParams.entries());
> 
>   switch (operation) {
>     case "authorize": {
>       ...
>       try {
>         const { redirect_url, authorize_form } =
>           await oauthController.authorize(
>             queryParams as unknown as OAuthReqBody
>           );
>         ...
>       } catch (err: any) {
>         ... // error handling
>       }
>     }
>     case "userinfo": {
>      ... // token validation
>       try {
>         const profile = await oauthController.userInfo(token);
>         return json(profile);
>       } catch (error: any) {
>         ... // error handling
>       }
>     }
>   }
> };
>
> // Handles POST /api/oauth/saml, POST /api/oauth/token
> export const action: ActionFunction = async ({ params, request }) => {
> 
>   ... // Some validation logic
>   const operation = params.slug;
>   const url = new URL(request.url);
> 
>   const { oauthController } = await JacksonProvider({
>     appBaseUrl: url.origin,
>   });
>   switch (operation) {
>     case "saml": {
>       try {
>         const { redirect_url } = await oauthController.samlResponse(body);
>         return redirect(redirect_url, 302);
>       } catch (err: any) {
>         ... // error handling
>       }
>     }
>     case "token": {
>       try {
>         const tokenRes = await oauthController.token(body);
>         return json(tokenRes);
>       } catch (error: any) {
>         ... // error handling
>       }
>     }
>   }
> };
> ```

**v1.saml.config.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/api/v1.saml.config.ts**

> ```typescript
>  export const loader: LoaderFunction = async ({ request }) => {
>   const url = new URL(request.url);
>   const queryParams = Object.fromEntries(
>     url.searchParams.entries()
>   ) as unknown as { clientID?: string; tenant?: string; product?: string };
>   ...// Validate apiKey
>   const { apiController } = await JacksonProvider({ appBaseUrl: url.origin });
> 
>   try {
>     return json(await apiController.getConfig(queryParams));
>   } catch (error: any) {
>     ... // error handling
>   }
> };
> 
> export const action: ActionFunction = async ({ request }) => {
>   const url = new URL(request.url);
>   const contentType = request.headers.get("Content-Type");
>   ... // Validate body,apiKey
>   const { apiController } = await JacksonProvider({ appBaseUrl: url.origin });
> 
>   try {
>     switch (request.method) {
>       case "POST":
>         return json(await apiController.config(body));
>       case "PATCH":
>         await apiController.updateConfig(body);
>         return new Response(null, { status: 204 });
>       case "DELETE":
>         await apiController.deleteConfig(body);
>         return new Response(null, { status: 204 });
>     }
>   } catch (error: any) {
>     ... // error handling
>   }
> };
> ```


#### Strategy usage

**auth.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/auth.server.ts**

> ```typescript
>  // issuer could be set from env
>  const BOXYHQSAML_ISSUER = process.env.BOXYHQSAML_ISSUER;
>  // Strategy use for the embedded saml service provider goes here
>  auth.use(
>    new BoxyHQSAMLStrategy(
>      {
>        issuer: BOXYHQSAML_ISSUER, //same as the APP URL
>        clientID: "dummy",
>        clientSecret: process.env.CLIENT_SECRET_VERIFIER || "dummy",
>        callbackURL: new URL("/auth/saml/embed/callback", BASE_URL).toString(),
>      },
>      async ({ profile }) => {
>        return profile;
>      }
>    ),
>    "boxyhq-saml-embed" // use a name here when using the same strategy again
>  );
> ```

#### Routes

We need 2 routes:   
~> [/auth/saml/embed](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.tsx) - Action handler for login  
~> [/auth/saml/embed/callback](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.callback.tsx) - Loader which handles the callback from the IdP  

Create the following files under `app/routes`:  

**auth.saml.embed.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.tsx &nbsp;**

> ```tsx
> ...
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
>   return await auth.authenticate("boxyhq-saml-embed", request, {
>     successRedirect: "/private",
>     failureRedirect: "/login",
>     context: {
>       clientID: `tenant=${tenant}&product=${product}`,
>       clientSecret: process.env.CLIENT_SECRET_VERIFIER || "dummy",
>     },
>   });
> };
> ```

**auth.saml.embed.callback.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.callback.tsx &nbsp;**
> ```tsx
> ...
> export const loader: LoaderFunction = async ({ request, params }) => {
>   return auth.authenticate("boxyhq-saml-embed", request, {
>     successRedirect: "/private",
>     failureRedirect: "/login",
>   });
> };
> ```

## App routes
### Login/Logout

For the `Login` page we need a form that can accept email (for deriving tenant) and product. In the demo app, the email and product are hard coded. We also change the form action for the `embedded SAML provider` button

**login.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/login.tsx &nbsp;**
> ```tsx
>  export const loader: LoaderFunction = async ({ request }) => {
>    // check if authenticated then redirect to /private
>    await auth.isAuthenticated(request, { successRedirect: "/private" });
>    // return form error data from session
>  }
>
>   export default function Login() {
>     return ( 
>       ...
>       <Form
>        method="post"
>        action="/auth/saml"
>        reloadDocument
>        >
>        ... // input fields for email and product
>        <button type="submit">Continue with SAML SSO (Hosted SAML Provider)</button>
>        <button type="submit" formAction="/auth/saml/embed">Continue with SAML SSO (Embedded SAML Provider)</button>
>       </Form>
>       ...
>     )
> ```

**logout.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/logout.ts &nbsp;**
> ```typescript
>  export const loader: LoaderFunction = async ({ request }) => {
>    await auth.logout(request, { redirectTo: "/login" });
>  };
> ```

### Private

This page simply displays the logged in user profile.

**private.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/private.tsx &nbsp;**
>```tsx
>  export const loader: LoaderFunction = async ({ request }) => {
>    const profile = await auth.isAuthenticated(request, {
>      failureRedirect: "/login",
>    });
>  
>    return json<LoaderData>({ profile });
>  };
>  
>  export default function Private() {
>    const { profile } = useLoaderData<LoaderData>();
>    return (
>      <>
>        <h1 className="text-primary mb-4 font-bold md:text-3xl">Raw profile</h1>
>        <pre>
>          <code>{JSON.stringify(profile, null, 2)}</code>
>        </pre>
>      </>
>    );
>  }
>```

### Error page