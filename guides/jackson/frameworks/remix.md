---
title: Add SAML Single Sign On to a remix app
sidebar_label: Remix
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remix

Let's look at how to authenticate users in a remix app using SAML Single-Sign-On (SSO).

If you wish to dive straight into the source, Checkout: https://github.com/boxyhq/jackson-remix-auth

## App Setup

### Create remix app

```bash
npx create-remix@latest
```

You can go with the Remix App Server as the deployment target. Feel free to choose either 'Typescript' or "Javascript". All the code samples in this guide are in typescript.

### Install the dependencies

```bash
npm i remix-auth @boxyhq/remix-auth-saml
```

[`remix-auth`](https://github.com/sergiodxa/remix-auth) is a complete open-source authentication solution for Remix applications. [`@boxyhq/remix-auth-saml`](https://github.com/boxyhq/remix-auth-saml) provides a remix-auth strategy to interact with the SAML Service provider.

## Authenticator

First, we need an `Authenticator` instance from `remix-auth`. `Authenticator` exposes the API for login and logout.

### Create sessionStorage for `Authenticator`

app/sessions.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/sessions.server.ts

> **NOTE: We will be relying on cookie-based sessions See: [createCookieSessionStorage](https://remix.run/docs/en/v1/api/remix#createcookiesessionstorage) from remix. **

```typescript
import { createCookieSessionStorage } from 'remix';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: process.env.COOKIE_SECRETS!.split(','),
    secure: process.env.NODE_ENV === 'production',
  },
});

const { getSession, commitSession, destroySession } = sessionStorage;
const JACKSON_ERROR_COOKIE_KEY = 'jackson_error';

export default sessionStorage;
export { getSession, commitSession, destroySession, JACKSON_ERROR_COOKIE_KEY };
```

### Create the `Authenticator` instance

app/auth.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/auth.server.ts

> **NOTE: We haven't initialised the strategy use yet. That will be done in following sections**

```typescript
import { Authenticator } from 'remix-auth';
import {
  BoxyHQSAMLStrategy,
  type BoxyHQSAMLProfile,
} from '@boxyhq/remix-auth-saml';
import invariant from 'tiny-invariant';
import sessionStorage from './sessions.server';

let auth: Authenticator;
declare global {
  var __auth: Authenticator | undefined;
}

function createAuthenticator() {
  const auth = new Authenticator<BoxyHQSAMLProfile>(sessionStorage);

  // Strategy use for the hosted saml service provider goes here

  // Strategy use for the embedded saml service provider goes here

  return auth;
}

if (process.env.NODE_ENV === 'production') {
  auth = createAuthenticator();
} else {
  //  In development we don't want to recreate the Authenticator for every change
  if (!global.__auth) {
    global.__auth = createAuthenticator();
  }
  auth = global.__auth;
}

export { auth };
```

## Strategy Usage

Our strategy usage depends on how we integrate the SAML Service Provider into the app. With [SAML Jackson](https://github.com/boxyhq/jackson) Provider you've got 2 options up your sleeve.

1. Host SAML SP as a separate service.
2. Embed SAML SP functionality leveraging remix resource routes.

#### Setup

<Tabs>
<TabItem value="01" label="Host SAML SP as a separate service">

To get going, you'll need a hosted instance of "SAML Jackson".  
Refer to the [documentation](https://boxyhq.com/docs/jackson/deploy/service) in case you're planning to deploy `Jackson` to your favorite hosting provider.  
Otherwise, fret not 🤗, we have a hosted instance of [`Jackson`](https://jackson-demo.boxyhq.com), that can be readily used without any configuration.

</TabItem>
<TabItem value="02" label="Embed SAML SP">

We'll be using SAML Jackson npm to setup some API routes ([resource routes](https://remix.run/docs/en/v1/guides/resource-routes) in remix terminology) to handle the SAML SP flows.

##### Install jackson

Install `@boxyhq/saml-jackson` first:

```bash
npm i @boxyhq/saml-jackson
```

Before you proceed,set up a [database](https://boxyhq.com/docs/jackson/deploy/service#database) for jackson. Refer to [db environment variables](https://boxyhq.com/docs/jackson/deploy/env-variables#database-configuration) for the npm library options.

##### Setup `JacksonProvider`

app/auth.jackson.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/auth.jackson.server.ts

> **NOTE: [clientSecretVerifier](https://boxyhq.com/docs/jackson/deploy/env-variables#client_secret_verifier) set below will be matched against client_secret coming from Authenticator &nbsp;**

```typescript
 const opts =  {
  ...
   db: {
    engine: "sql",
    url: "postgresql://postgres:postgres@localhost:5432/postgres",
    type: "postgres",
  },
  clientSecretVerifier: process.env.CLIENT_SECRET_VERIFIER
  ...
 }

 ...

 async function JacksonProvider({
   appBaseUrl,
 }: {
   appBaseUrl: string;
 }): Promise<{
   apiController: IAPIController;
   oauthController: IOAuthController;
 }> {
   const _opts = { ...opts, externalUrl: appBaseUrl, samlAudience: appBaseUrl };
   // this is needed because in development we don't want to restart
   // the server with every change, but we want to make sure we don't
   // create a new connection to the DB with every change either.
   if (process.env.NODE_ENV === "production") {
     const controllers = await jackson(_opts);
     apiController = controllers.apiController;
     oauthController = controllers.oauthController;
   } else {
     if (!global.__apiController && !global.__oauthController) {
       const controllers = await jackson(_opts);
       global.__apiController = controllers.apiController;
       global.__oauthController = controllers.oauthController;
     }
     apiController = global.__apiController;
     oauthController = global.__oauthController;
   }

   return { apiController, oauthController };
 }

 ...

```

##### Resource routes

Next, create the api files for [OAuth2.0 flow](https://boxyhq.com/docs/jackson/saml-flow#3-oauth-20-flow) and [SAML Configuration](https://boxyhq.com/docs/jackson/saml-flow#2-saml-config-api):

```bash
app/routes $ mkdir api && cd api
routes/api $ touch oauth.\$slug.ts v1.saml.config.ts
```

oauth.$slug.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/api/oauth.%24slug.ts

```typescript
...

// Handles GET /api/oauth/authorize, GET /api/oauth/userinfo
export const loader: LoaderFunction = async ({ params, request }) => {

  ... // Some validation logic
  const operation = params.slug;
  const url = new URL(request.url);

  const { oauthController } = await JacksonProvider({
    appBaseUrl: url.origin,
  });

  // rightmost query param will win in case of multiple ones with same name
  const queryParams = Object.fromEntries(url.searchParams.entries());

  switch (operation) {
    case "authorize": {
      ...
      try {
        const { redirect_url, authorize_form } =
          await oauthController.authorize(
            queryParams as unknown as OAuthReqBody
          );
        ...
      } catch (err: any) {
        ... // error handling, redirect to /error page
      }
    }
    case "userinfo": {
     ... // token validation
      try {
        const profile = await oauthController.userInfo(token);
        return json(profile);
      } catch (error: any) {
        ... // error handling
      }
    }
  }
};

// Handles POST /api/oauth/saml, POST /api/oauth/token
export const action: ActionFunction = async ({ params, request }) => {

  ... // Some validation logic
  const operation = params.slug;
  const url = new URL(request.url);

  const { oauthController } = await JacksonProvider({
    appBaseUrl: url.origin,
  });
  switch (operation) {
    case "saml": {
      try {
        const { redirect_url } = await oauthController.samlResponse(body);
        return redirect(redirect_url, 302);
      } catch (err: any) {
        ... // error handling
      }
    }
    case "token": {
      try {
        const tokenRes = await oauthController.token(body);
        return json(tokenRes);
      } catch (error: any) {
        ... // error handling
      }
    }
  }
};
```

v1.saml.config.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/api/v1.saml.config.ts

```typescript
  export const loader: LoaderFunction = async ({ request }) => {
   const url = new URL(request.url);
   const queryParams = Object.fromEntries(
     url.searchParams.entries()
   ) as unknown as { clientID?: string; tenant?: string; product?: string };
   ...// Validate apiKey
   const { apiController } = await JacksonProvider({ appBaseUrl: url.origin });

   try {
     return json(await apiController.getConfig(queryParams));
   } catch (error: any) {
     ... // error handling
   }
 };

 export const action: ActionFunction = async ({ request }) => {
   const url = new URL(request.url);
   const contentType = request.headers.get("Content-Type");
   ... // Validate body,apiKey
   const { apiController } = await JacksonProvider({ appBaseUrl: url.origin });

   try {
     switch (request.method) {
       case "POST":
         return json(await apiController.config(body));
       case "PATCH":
         await apiController.updateConfig(body);
         return new Response(null, { status: 204 });
       case "DELETE":
         await apiController.deleteConfig(body);
         return new Response(null, { status: 204 });
     }
   } catch (error: any) {
     ... // error handling
   }
 };
```

</TabItem>
</Tabs>

#### Initialise Strategy

Use the strategy with the `Authenticator` as shown below.The clientID/Secret values are expected to be set dynamically from the client side. For now set them to the value `dummy`.
<Tabs>
<TabItem value="01" label="Host SAML SP as a separate service">

Point the `issuer` to the jackson service url.

auth.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/auth.server.ts

```typescript
invariant(process.env.BASE_URL, 'Expected BASE_URL to be set in env');
invariant(
  process.env.BOXYHQSAML_ISSUER,
  'Expected BOXYHQSAML_ISSUER to be set in env'
);

const BASE_URL = process.env.BASE_URL;
const BOXYHQSAML_ISSUER = process.env.BOXYHQSAML_ISSUER;
// Strategy use for the hosted saml service provider goes here
auth.use(
  new BoxyHQSAMLStrategy(
    {
      issuer: BOXYHQSAML_ISSUER, // Set BOXYHQSAML_ISSUER in env to "https://jackson-demo.boxyhq.com"
      clientID: 'dummy',
      clientSecret: 'dummy',
      callbackURL: new URL('/auth/saml/callback', BASE_URL).toString(),
    },
    async ({ profile }) => {
      return profile;
    }
  )
);
```

</TabItem>
<TabItem value="02" label="Embed SAML SP">

Point the `issuer` to the app url. We are also setting a name for the strategy here in order for us to point to the right one.

auth.server.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/auth.server.ts

> **BOXYHQSAML_ISSUER in env is set to point to the app url: http://localhost:3366 or the actual url once hosted. Take a look at [.env.example](https://github.com/boxyhq/jackson-remix-auth/blob/main/.env.example) file &nbsp;**

```typescript
invariant(process.env.BASE_URL, 'Expected BASE_URL to be set in env');
invariant(
  process.env.BOXYHQSAML_ISSUER,
  'Expected BOXYHQSAML_ISSUER to be set in env'
);

const BASE_URL = process.env.BASE_URL;
const BOXYHQSAML_ISSUER = process.env.BOXYHQSAML_ISSUER;
// Strategy use for the embedded saml service provider goes here
auth.use(
  new BoxyHQSAMLStrategy(
    {
      issuer: BOXYHQSAML_ISSUER, //same as the APP URL
      clientID: 'dummy',
      clientSecret: process.env.CLIENT_SECRET_VERIFIER || 'dummy',
      callbackURL: new URL('/auth/saml/embed/callback', BASE_URL).toString(),
    },
    async ({ profile }) => {
      return profile;
    }
  ),
  'boxyhq-saml-embed' // use a name here when using the same strategy again
);
```

</TabItem>
</Tabs>

#### Routes

We need 2 routes:  
<Tabs>
<TabItem value="01" label="Host SAML SP as a separate service">

~> [/auth/saml](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.tsx) - Action handler for login  
~> [/auth/saml/callback](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.callback.tsx) - After successful authorization, user is redirected here with the authorization code. The `code` is then exchanged to get the `token` and further the user profile.

Create the following files under `app/routes`:

app/routes/auth.saml.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.tsx

```typescript
...
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const product = formData.get("product");

  ... // Add some validation logic

  // extracting the tenant from email is one way to set it
  const tenant = email.split("@")[1];

  return await auth.authenticate("boxyhq-saml", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
    context: {
      clientID: `tenant=${tenant}&product=${product}`,
      clientSecret: "dummy",
    },
  });
};
```

app/routes/auth.saml.callback.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.callback.tsx

```tsx
...
export const loader: LoaderFunction = async ({ request, params }) => {
  return auth.authenticate("boxyhq-saml", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
  });
};
```

</TabItem>
<TabItem value="02" label="Embed SAML SP">

~> [/auth/saml/embed](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.tsx) - Action handler for login  
~> [/auth/saml/embed/callback](https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.callback.tsx) - After successful authorization, user is redirected here with the authorization code. The `code` is then exchanged to get the `token` and further the user profile.

Create the following files under `app/routes`:

app/routes/auth.saml.embed.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.tsx

```tsx
...
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const product = formData.get("product");

  ... // Add some validation logic

  // extracting the tenant from email is one way to set it
  const tenant = email.split("@")[1];

  return await auth.authenticate("boxyhq-saml-embed", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
    context: {
      clientID: `tenant=${tenant}&product=${product}`,
      clientSecret: process.env.CLIENT_SECRET_VERIFIER || "dummy",
    },
  });
};
```

app/routes/auth.saml.embed.callback.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/auth.saml.embed.callback.tsx

```tsx
...
export const loader: LoaderFunction = async ({ request, params }) => {
  return auth.authenticate("boxyhq-saml-embed", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
  });
};
```

</TabItem>
</Tabs>

## SAML configuration

<Tabs>
<TabItem value="01" label="Host SAML SP as a separate service">

```bash
client_id         : tenant=boxyhq.com&product=saml-demo.boxyhq.com
Identity Provider : https://mocksaml.com
```

We'll be using the above [pre-configured](https://boxyhq.com/docs/jackson/saml-flow#2-saml-config-api) tenant/product pointing to https://mocksaml.com as the IdP.
</TabItem>
<TabItem value="02" label="Embed SAML SP">

[Add a SAML config](https://boxyhq.com/docs/jackson/saml-flow#21-saml-add-config-api) for [mocksaml.com](https://mocksaml.com). You can start the app and call the config API as shown below:

<details>
<summary>Below adds a SAML IdP config for https://mocksaml.com</summary>
<pre>
curl --location --request POST 'http://localhost:3366/api/v1/saml/config'
--header 'Authorization: Api-Key __JACKSON_API_KEY__'
--header 'Content-Type: application/x-www-form-urlencoded'
--data-urlencode 'encodedRawMetadata=PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxFbnRpdHlEZXNjcmlwdG9yIHhtbG5zOm1kPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6bWV0YWRhdGEiIGVudGl0eUlEPSJodHRwczovL3NhbWwuZXhhbXBsZS5jb20vZW50aXR5aWQiIHZhbGlkVW50aWw9IjIwMjYtMDYtMjJUMTg6Mzk6NTMuMDAwWiI+CiAgPElEUFNTT0Rlc2NyaXB0b3IgV2FudEF1dGhuUmVxdWVzdHNTaWduZWQ9ImZhbHNlIiBwcm90b2NvbFN1cHBvcnRFbnVtZXJhdGlvbj0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj4KICAgIDxLZXlEZXNjcmlwdG9yIHVzZT0ic2lnbmluZyI+CiAgICAgIDxLZXlJbmZvIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj4KICAgICAgICA8WDUwOURhdGE+CiAgICAgICAgICA8WDUwOUNlcnRpZmljYXRlPk1JSUM0akNDQWNvQ0NRQzMzd255YlQ1UVpEQU5CZ2txaGtpRzl3MEJBUXNGQURBeU1Rc3dDUVlEVlFRR0V3SlYKU3pFUE1BMEdBMVVFQ2d3R1FtOTRlVWhSTVJJd0VBWURWUVFEREFsTmIyTnJJRk5CVFV3d0lCY05Nakl3TWpJNApNakUwTmpNNFdoZ1BNekF5TVRBM01ERXlNVFEyTXpoYU1ESXhDekFKQmdOVkJBWVRBbFZMTVE4d0RRWURWUVFLCkRBWkNiM2g1U0ZFeEVqQVFCZ05WQkFNTUNVMXZZMnNnVTBGTlREQ0NBU0l3RFFZSktvWklodmNOQVFFQkJRQUQKZ2dFUEFEQ0NBUW9DZ2dFQkFMR2ZZZXR0TXNjdDFUNnRWVXdUdWROSkg1UG5iOUdHbmtYaTlady9lNng0NUREMApSdVJPTmJGbEoyVDRSakFFL3VHK0FqWHhYUThvMlNaZmI5K0dnbUNIdVRKRk5nSG9aMW5GVlhDbWIvSGc4SHBkCjR2T0FHWG5kaXhhUmVPaXEzRUg1WHZwTWpNa0ozKzgrOVZZTXpNWk9qa2dRdEFxTzM2ZUFGRmZOS1g3ZFRqM1YKcHdMa3Z6Ni9LRkNxOE9Bd1krQVVpNGVabTVKNTdEMzFHempId2ZqSDlXVGVYME15bmRtbk5CMXFWNzVxUVIzYgoyL1c1c0dIUnYrOUFhcmdnSmtGK3B0VWtYb0x0VkE1MXdjZlltNmhJTHB0cGRlNUZRQzhSV1kxWXJzd0JXQUVaCk5meXJSNEplU3dlRWxOSGc0TlZPczRUd0dqT1B3V0dxelRmZ1RsRUNBd0VBQVRBTkJna3Foa2lHOXcwQkFRc0YKQUFPQ0FRRUFBWVJsWWZsU1hBV29acEZmd05pQ1FWRTVkOXpaMERQek5kV2hBeWJYY1R5TWYwejVtRGY2RldCVwo1R3lvaTl1M0VNRURuekxjSk5rd0pBQWMzOUFwYTRJMi90bWwrSnkyOWRrOGJUeVg2bTkzbmdtQ2dkTGg1WmE0CmtodVUzQU0zTDYzZzdWZXhDdU83a3dramgvK0xxZGNJWHNWR082WERmdTJRT3MxWHBlOXpJekxwd20vUk5ZZVgKVWpiU2o1Y2UvamVrcEF3N3F5VlZMNHhPeWg4QXRVVzFlazN3SXcxTUp2RWdFUHQwZDE2b3NoV0pwb1MxT1Q4TApyLzIyU3ZZRW8zRW1TR2RUVkdnazN4M3MrQTBxV0FxVGN5anI3UTRzL0dLWVJGZm9tR3d6MFRaNEl3MVpOOTlNCm0wZW8yVVNsU1JUVmw3UUhSVHVpdVNUaEhwTEtRUT09CjwvWDUwOUNlcnRpZmljYXRlPgogICAgICAgIDwvWDUwOURhdGE+CiAgICAgIDwvS2V5SW5mbz4KICAgIDwvS2V5RGVzY3JpcHRvcj4KICAgIDxOYW1lSURGb3JtYXQ+dXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6MS4xOm5hbWVpZC1mb3JtYXQ6ZW1haWxBZGRyZXNzPC9OYW1lSURGb3JtYXQ+CiAgICA8U2luZ2xlU2lnbk9uU2VydmljZSBCaW5kaW5nPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YmluZGluZ3M6SFRUUC1SZWRpcmVjdCIgTG9jYXRpb249Imh0dHBzOi8vbW9ja3NhbWwuY29tL2FwaS9zYW1sL3NzbyIvPgogICAgPFNpbmdsZVNpZ25PblNlcnZpY2UgQmluZGluZz0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmJpbmRpbmdzOkhUVFAtUE9TVCIgTG9jYXRpb249Imh0dHBzOi8vbW9ja3NhbWwuY29tL2FwaS9zYW1sL3NzbyIvPgogIDwvSURQU1NPRGVzY3JpcHRvcj4KPC9FbnRpdHlEZXNjcmlwdG9yPg=='
--data-urlencode 'defaultRedirectUrl=http://localhost:3366'
--data-urlencode 'redirectUrl=["http://localhost:3366/*"]'
--data-urlencode 'tenant=boxyhq.com'
--data-urlencode 'product=saml-demo.boxyhq.com'
--data-urlencode 'name=demo-config'
--data-urlencode 'description=Demo SAML config'
</pre>
</details>
</TabItem>
</Tabs>

## App routes

### Login/Logout

For the `Login` page we need a form that can accept email (for deriving tenant) and product. We also change the form action for the `embedded SAML provider` button.

**login.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/login.tsx &nbsp;**

```tsx
  export const loader: LoaderFunction = async ({ request }) => {
    // check if authenticated then redirect to /private
    await auth.isAuthenticated(request, { successRedirect: "/private" });
    // return form error data from session
  }

   export default function Login() {
     return (
       ...
       <Form
        method="post"
        action="/auth/saml"
        reloadDocument
        >
        ... // input fields for email and product
        <button type="submit">Continue with SAML SSO (Hosted SAML Provider)</button>
        <button type="submit" formAction="/auth/saml/embed">Continue with SAML SSO (Embedded SAML Provider)</button>
       </Form>
       ...
     )
```

**logout.ts: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/logout.ts &nbsp;**

```typescript
export const loader: LoaderFunction = async ({ request }) => {
  await auth.logout(request, { redirectTo: '/login' });
};
```

### Private

This page renders the logged-in user profile.

**private.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/private.tsx &nbsp;**

```tsx
export const loader: LoaderFunction = async ({ request }) => {
  const profile = await auth.isAuthenticated(request, {
    failureRedirect: '/login',
  });

  return json<LoaderData>({ profile });
};

export default function Private() {
  const { profile } = useLoaderData<LoaderData>();
  return (
    <>
      <h1 className="text-primary mb-4 font-bold md:text-3xl">Raw profile</h1>
      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre>
    </>
  );
}
```

### Error page (needed only for embedded SAML SP)

For errors occuring in the SAML flow (/api/oauth/authorize and /api/oauth/saml), the user get's [redirected](https://github.com/boxyhq/jackson-remix-auth/blob/e75cb4a9c340b088749ec63d6932f2f4b206a07d/app/routes/api/oauth.%24slug.ts#L63) to an error page.

Create one at `/error`:

**error.tsx: https://github.com/boxyhq/jackson-remix-auth/blob/main/app/routes/error.tsx &nbsp;**

```tsx
export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const { statusCode, message } = session.get(JACKSON_ERROR_COOKIE_KEY) || {
    statusCode: null,
    message: '',
  };
  return json({ statusCode, message });
};

export default function Error() {
  const { statusCode, message } = useLoaderData<LoaderData>();

  let statusText = '';
  if (typeof statusCode === 'number') {
    if (statusCode >= 400 && statusCode <= 499) {
      statusText = 'client-side error';
    }
    if (statusCode >= 500 && statusCode <= 599) {
      statusText = 'server error';
    }
  }

  if (statusCode === null) {
    return null;
  }

  return (
    <div className="h-full">
      <div className="h-[20%] translate-y-[100%] px-[20%] text-[hsl(152,56%,40%)]">
        <svg
          className="mb-5 h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-xl font-extrabold md:text-6xl">{statusCode}</h1>
        <h2 className="uppercase">{statusText}</h2>
        <p className="mt-6 inline-block">SAML error: </p>
        <p className="mr-2 text-xl font-bold">{message}</p>
      </div>
    </div>
  );
}
```

## Ready to go

At this stage you are ready to accept SAML users into your app. 🎉

## Next steps

- Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
