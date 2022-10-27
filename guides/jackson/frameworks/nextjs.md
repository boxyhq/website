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

Once you add a SAML connection, the app can use this SAML connection to initiate the SSO authentication flow using SML Jackson. The following sections focuses more on the SSO authentication side.

### Install SAML Jackson

To get started with SAML Jackson, use the Node Package Manager to add the package to your project's dependencies.

```bash
npm i --save @boxyhq/saml-jackson
```

### Setup SAML Jackson

Setup the SAML Jackson to work with Next.js app.

```js title="/lib/jackson.ts"
import jackson, {
  IOAuthController,
  JacksonOption,
} from '@boxyhq/saml-jackson';

const baseUrl = 'https://your-app.com';
const samlAudience = 'https://saml.boxyhq.com';
const samlPath = '/sso/acs';

const opts: JacksonOption = {
  externalUrl: baseUrl,
  samlAudience,
  samlPath,
  db: {
    engine: 'sql',
    type: 'postgres',
    url: 'postgres://postgres:postgres@localhost:5432/postgres',
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

`samlPath` is where the identity provider POST the SAML response after authenticating the user and `redirectUrl` is where the SAML Jackson redirects the user after authentication.

```js title="pages/api/auth/[...nextauth].ts"
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { OAuthTokenReqWithCredentials } from "@boxyhq/saml-jackson";

import jackson from "lib/jackson";

export const authOptions: NextAuthOptions = {
  adapter: ...,
  providers: [
    CredentialsProvider({
      id: "saml-sso",
      credentials: {
        code: { type: "text" },
        state: { type: "state" },
      },
      async authorize(credentials) {
        const code = credentials?.code;
        const state = credentials?.state;

        const { oauthController } = await jackson();

        const { access_token } = await oauthController.token({
          client_id: "dummy",
          client_secret: "dummy",
          code,
          redirect_uri: `${process.env.APP_URL}/sso/callback`,
        } as OAuthTokenReqWithCredentials);


        const profile = await oauthController.userInfo(access_token);

        // let user = await getUser({ email: profile.email });

        // if (user === null) {
        //   // Create user account if it doesn't exist
        //   user = await createUser({
        //     name: `${profile.firstName} ${profile.lastName}`,
        //     email: profile.email,
        //     password: await hashPassword(createRandomString()),
        //   });

        //   const team = await getTeam({
        //     id: profile.requested.tenant,
        //   });

        //   await addTeamMember(team.id, user.id, team.defaultRole);
        // }

        return profile;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
};

export default NextAuth(authOptions);
```

### Make Authentication Request

Let's add a route to begin the authenticate flow; this route initiates the SAML SSO flow by redirecting the users to their configured Identity Provider.

```js title="/pages/auth/sso.tsx"
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import axios from 'axios';

const SSO = () => {
  const [tenant, setTenant] = useState("");

  const handleSubmit = () => {
    const response = await axios.post(`/api/auth/sso`, {
      tenant,
    });

    const { data } = response.data;

    // Redirect to the Identity Provider
    if (data) {
      window.location.href = data.redirect_url;
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="tenant"
            placeholder="boxyhq"
            onChange={(e) => {setTenant(e.target.value)}}
          />
          <button type="submit">Continue with SAML SSO</Button>
        </form>
      </div>
    </>
  );
};

export default SSO;
```

```js title="/pages/api/auth/sso/index.ts"
import type { NextApiRequest, NextApiResponse } from 'next';

import jackson from 'lib/jackson';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'POST':
      return handlePOST(req, res);
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).json({
        data: null,
        error: { message: `Method ${method} Not Allowed` },
      });
  }
}

const handlePOST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { oauthController } = await jackson();

  const { tenant } = req.body;

  const response = await oauthController.authorize({
    tenant,
    product: 'your-product-name',
    redirect_uri: `${process.env.APP_URL}/sso/callback`,
    state: 'some-random-state',
  });

  return res.status(200).json(response);
};
```

The API route `api/auth/sso` takes care of redirecting the user to the Identity Provider. (Need change)

<Tabs>
<TabItem value="01" label="With Tenant and Product" default>

```js title="/pages/auth/sso.tsx"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthReq } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

export default class LoginController {
  public async store({ request, response }: HttpContextContract) {
    const tenant = 'boxyhq.com'; // The user's tenant
    const product = 'saml-demo.boxyhq.com'; // Your app or product name

    const { redirect_url } = await oauthController.authorize({
      tenant,
      product,
      state: 'a-random-state-value', // You can use the `state` parameter to restore application state between redirects.
      redirect_uri: redirectUrl,
    } as OAuthReq);

    return response.redirect(redirect_url as string);
  }
}
```

</TabItem>

<TabItem value="02" label="With Client ID">

```js title="/app/Controllers/Http/LoginController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthReq } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

export default class LoginController {
  public async store({ request, response }: HttpContextContract) {
    const clientId = '123456789'; // The tenant's client ID

    const { redirect_url } = await oauthController.authorize({
      client_id: clientId,
      state: 'a-random-state-value', // You can use the `state` parameter to restore application state between redirects.
      redirect_uri: redirectUrl,
    } as OAuthReq);

    return response.redirect(redirect_url as string);
  }
}
```

</TabItem>
</Tabs>

### Receives SAML Response

After successful authentication, Identity Provider POST the SAML response to the Assertion Consumer Service (ACS) URL.

Let's add a route to handle the SAML response. Ensure the route matches the value of the `samlPath` you configured while initializing the SAML Jackson library and should be able to receives POST request.

```js title="/apps/adonisjs/start/routes.ts"
import SSOController from 'App/Controllers/Http/SSOController';

Route.post('/sso/acs', async (ctx) => {
  return new SSOController().acs(ctx);
});
```

The `acs` method of `SSOController` takes care of handling the SAML response from the Identity Provider and redirecting the users to the `redirectUrl`.

```js title="/app/Controllers/Http/SSOController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { oauthController } from '@ioc:BoxyHQ/Jackson';

export default class SSOController {
  public async acs({ request, response }: HttpContextContract) {
    const relayState = request.input('RelayState');
    const samlResponse = request.input('SAMLResponse');

    const { redirect_url } = await oauthController.samlResponse({
      RelayState: relayState,
      SAMLResponse: samlResponse,
    });

    return response.redirect(redirect_url as string);
  }
}
```

### Requests Access Token

Let's add another route for receiving the callback after the authentication. Ensure the route matches the value of the `redirectUrl` you configured previously.

```js title="/apps/adonisjs/start/routes.ts"
import SSOController from 'App/Controllers/Http/SSOController';

Route.get('/sso/callback', async (ctx) => {
  return new SSOController().callback(ctx);
});
```

The application requests an `access_token` by passing the authorization `code` along with authentication details, including the `client_id`, `client_secret`, and `redirect_uri`.

The `callback` method of `SSOController` take care of this.

<Tabs>
<TabItem value="01" label="With Tenant and Product" default>

```js title="/app/Controllers/Http/SSOController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthTokenReqWithCredentials } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

export default class SSOController {
  public async callback({ request, response, auth }: HttpContextContract) {
    const { code, state } = request.qs();

    const tenant = 'boxyhq.com'; // The user's tenant
    const product = 'saml-demo.boxyhq.com'; // Your app or product name

    const clientId = `tenant=${tenant}&product=${product}`;
    const clientSecret = 'dummy';

    // Exchange the `code` for `access_token`
    const { access_token } = await oauthController.token({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUrl,
    } as OAuthTokenReqWithCredentials);
  }
}
```

</TabItem>

<TabItem value="02" label="With Client ID">

```js title="/app/Controllers/Http/SSOController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthTokenReqWithCredentials } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

export default class SSOController {
  public async callback({ request, response, auth }: HttpContextContract) {
    const { code, state } = request.qs();

    const clientId = '123456789'; // The tenant's client ID
    const clientSecret = 'dUdSOmGoxr'; // The tenant's client Secret

    // Exchange the `code` for `access_token`
    const { access_token } = await oauthController.token({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUrl,
    } as OAuthTokenReqWithCredentials);
  }
}
```

</TabItem>
</Tabs>

### Fetch User Profile

Once the `access_token` has been fetched, you can use it to retrieve the user profile from the Identity Provider. The `userInfo` method returns a response containing the user profile if the authorization is valid.

```js
const user = await oauthController.userInfo(access_token);
```

The entire response will look something like this:

```json
{
  "id":"<id from the Identity Provider>",
  "email": "sjackson@coolstartup.com",
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
