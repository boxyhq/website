---
title: Add SAML SSO to Next.js App with BoxyHQ
description: Add SAML SSO to Next.js App with BoxyHQ
sidebar_label: Next.js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add SAML SSO to Next.js App

This guide assumes that you have a Next.js app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

Visit the [GitHub repository](https://github.com/boxyhq/saas-starter-kit) to see the source code for the Next.js SAML SSO integration.

Integrating SAML SSO into an app involves the following steps.

- Configure SAML Single Sign-On
- Authenticate with SAML Single Sign-On

## Configure SAML Single Sign-On

This step allows your tenants to configure SAML connections for their users. Read the following guides to understand more about this.

- [UI Best Practices for Configuring SAML Single Sign-On](/guides/jackson/configuring-saml-sso)
- [SSO Connection API](/docs/jackson/sso-flow/)

## Authenticate with SAML Single Sign-On

Once you add a SAML connection, the app can use this SAML connection to initiate the SSO authentication flow using SAML Jackson. The following sections focuses more on the SSO authentication side.

### Install SAML Jackson

To get started with SAML Jackson, use the Node Package Manager to add the package to your project's dependencies.

```bash
npm i --save @boxyhq/saml-jackson
```

### Setup SAML Jackson

Setup the SAML Jackson to work with Next.js app.

```bash title=".env"
NEXTAUTH_URL=https://your-app.com
NEXTAUTH_SECRET= #A random string is used to hash tokens, sign/encrypt cookies and generate cryptographic keys.
```

```js title="lib/jackson.ts"
import jackson, {
  type IOAuthController,
  type JacksonOption,
} from "@boxyhq/saml-jackson";

const samlAudience = "https://saml.boxyhq.com";
const samlPath = "/api/auth/saml/acs";

const opts: JacksonOption = {
  externalUrl: `${process.env.NEXTAUTH_URL}`,
  samlAudience,
  samlPath,
  db: {
    engine: "sql",
    type: "postgres",
    url: "postgres://postgres:postgres@localhost:5432/postgres",
  },
};

let oauthController: IOAuthController;

const g = global as any;

export default async function init() {
  if (!g.oauthController) {
    const ret = await jackson(opts);

    oauthController = ret.oauthController;
    g.oauthController = oauthController;
  } else {
    oauthController = g.oauthController;
  }

  return {
    oauthController,
  };
}
```

`samlPath` is where the identity provider POST the SAML response after authenticating the user.

We'll use [NextAuth.js](https://next-auth.js.org/) for the authentication. NextAuth is a complete open-source authentication solution for Next.js applications.

Let's add a custom provider called `saml-jackson` to the NextAuth.

```js title="pages/api/auth/[...nextauth].ts"
import NextAuth, { type NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'saml-jackson',
      name: 'BoxyHQ',
      type: 'oauth',
      checks: ['pkce', 'state'],
      authorization: {
        url: `${process.env.NEXTAUTH_URL}/api/auth/saml/authorize`,
        params: {
          scope: '',
          response_type: 'code',
          provider: 'saml',
        },
      },
      token: {
        url: `${process.env.NEXTAUTH_URL}/api/auth/saml/token`,
        params: { grant_type: 'authorization_code' },
      },
      userinfo: `${process.env.NEXTAUTH_URL}/api/auth/saml/userinfo`,
      profile: (profile) => {
        return {
          id: profile.id || '',
          firstName: profile.firstName || '',
          lastName: profile.lastName || '',
          email: profile.email || '',
          name: `${profile.firstName || ''} ${profile.lastName || ''}`.trim(),
          email_verified: true,
        };
      },
      options: {
        clientId: 'dummy',
        clientSecret: 'dummy',
      },
    },
  ],
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
```

### Make Authentication Request

Let's add a route to begin the authenticate flow; this route initiates the SAML SSO flow by redirecting the users to their configured Identity Provider.

```js title="pages/api/auth/saml/authorize.ts"
import type { NextApiRequest, NextApiResponse } from "next";
import type { OAuthReq } from "@boxyhq/saml-jackson";

import jackson from "../../../../lib/jackson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { oauthController } = await jackson();

  const { redirect_url } = await oauthController.authorize(
    req.query as unknown as OAuthReq
  );

  return res.redirect(302, redirect_url as string);
}
```

### Receives SAML Response

After successful authentication, Identity Provider POST the SAML response to the Assertion Consumer Service (ACS) URL.

Let's add a route to handle the SAML response. Ensure the route matches the value of the `samlPath` you configured while initializing the SAML Jackson library and should be able to receives POST request.

```js title="pages/api/auth/saml/acs.ts"
import type { NextApiRequest, NextApiResponse } from "next";

import jackson from "../../../../lib/jackson";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { oauthController } = await jackson();

  const { RelayState, SAMLResponse } = req.body;

  const { redirect_url } = await oauthController.samlResponse({
    RelayState,
    SAMLResponse,
  });

  return res.redirect(302, redirect_url as string);
}
```

### Request Access Token

Let's add another route for receiving the callback after the authentication.

The NextAuth requests an `access_token` by passing the authorization `code` along with authentication details, including the `grant_type`, `redirect_uri`, and `code_verifier`.

```js title="pages/api/auth/saml/token.ts"
import type { NextApiRequest, NextApiResponse } from 'next';

import jackson from '../../../../lib/jackson';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { oauthController } = await jackson();

  const response = await oauthController.token(req.body);

  return res.json(response);
}
```

### Fetch User Profile

Once the `access_token` has been fetched, NextAuth can use it to retrieve the user profile from the Identity Provider. The `userInfo` method returns a response containing the user profile if the authorization is valid.

```js title="pages/api/auth/saml/userinfo.ts"
import type { NextApiRequest, NextApiResponse } from 'next';

import jackson from '../../../../lib/jackson';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { oauthController } = await jackson();

  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    throw new Error('Unauthorized');
  }

  const token = authHeader.split(' ')[1];

  const user = await oauthController.userInfo(token);

  return res.json(user);
}
```

The entire response will look something like this:

```json
{
  "id":"<id from the Identity Provider>",
  "email": "jackson@coolstartup.com",
  "firstName": "SAML",
  "lastName": "Jackson",
  "requested": {
    "tenant": "<tenant>",
    "product": "<product>",
    "client_id": "<client_id>",
    "state": "<state>"
  },
  "raw": {
    ...
  }
}
```

### Authenticate User

Once the user has been retrieved from the Identity Provider, you may determine if the user exists in your application and authenticate the user. If the user does not exist in your application, you will typically create a new record in your database to represent the user.

### Starts OAuth sign-in flow

You can use NextAuth's `signIn` method to initiate the authentication with `saml-jackson` provider.

You can pass the `tenant` and `product` as additional parameters to the `/api/auth/saml/authorize` endpoint through the third argument of signIn().

```js title="pages/login.tsx"
import type { NextPage } from 'next';
import { useSession, signIn } from 'next-auth/react';

const Login: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>Loading...</>;
  }

  if (status === 'authenticated') {
    return <>Authenticated</>;
  }

  // Starts OAuth sign-in flow
  signIn('saml-jackson', undefined, {
    tenant: 'boxyhq.com',
    product: 'saml-demo.boxyhq.com',
  });

  return <>Unauthenticated</>;
};

export default Login;
```
