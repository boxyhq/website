---
title: Add SAML SSO to AdonisJS App with BoxyHQ
sidebar_label: AdonisJS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add SAML SSO to AdonisJS App

This guide assumes that you have a AdonisJS app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

Visit the [GitHub repository](https://github.com/boxyhq/jackson-examples/tree/main/apps/adonisjs) to see the source code for the AdonisJS SAML SSO integration.

Adding SAML Single Sign-On to an app involves the following steps.

- Install SAML Jackson
- Configure SAML Jackson
- Enable SAML Single Sign-On
- Authenticating with SAML Single Sign-On

## Install SAML Jackson

```bash
npm i --save @boxyhq/saml-jackson
```

## Configure SAML Jackson

```js title="/lib/jackson.ts"
import { type JacksonOption } from '@boxyhq/saml-jackson';

export const appUrl = `http://${Env.get('HOST')}:${Env.get('PORT')}`;
export const samlAudience = 'https://saml.boxyhq.com';
export const acsUrl = `${appUrl}/sso/acs`;
export const redirectUrl = `${appUrl}/sso/callback`;

export const options: JacksonOption = {
  externalUrl: appUrl,
  samlAudience,
  samlPath: '/sso/acs',
  db: {
    engine: 'sql',
    type: 'postgres',
    url: 'postgres://postgres:postgres@localhost:5432/postgres',
  },
};
```

```js title="/providers/JacksonProvider.ts"
import type { ApplicationContract } from '@ioc:Adonis/Core/Application';

import { options } from '../lib/jackson';

export default class JacksonProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const jackson = await require('@boxyhq/saml-jackson').default(options);

    this.app.container.singleton('BoxyHQ/Jackson', () => {
      const { connectionAPIController, oauthController } = jackson;

      return {
        connectionAPIController,
        oauthController,
      };
    });
  }

  public register() {
    // Register your own bindings
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
```

```js title="/contracts/jackson.ts"
declare module '@ioc:BoxyHQ/Jackson' {
  import { type IOAuthController, type IConnectionAPIController } from '@boxyhq/saml-jackson';

  export const connectionAPIController: IConnectionAPIController;
  export const oauthController: IOAuthController;
}
```

## Enable SAML Single Sign-On

This step allows your customers to configure the SAML SSO with their chosen IdP.

- Add UI to configure SAML SSO
- Save the SAML connection
- Mention about displaying SP and delete connection

## Authenticate with SAML Single Sign-On

We suggest you read the following articles before jumping into adding [SAML Single Sign-On](/enterprise-sso) to your app. These articles summarize some of the best practices other apps followed to enable SAML SSO for enterprise customers.

- Article 1
- Article 2

### Make Authorization Request

```js title="/apps/adonisjs/start/routes.ts"
import LoginController from 'App/Controllers/Http/LoginController';

Route.get('/login', async (ctx) => {
  return ctx.view.render('login');
});

Route.post('/login', async (ctx) => {
  return new LoginController().store(ctx);
});
```

```js title="/app/Controllers/Http/LoginController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthReq } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

const product = 'saml-demo.boxyhq.com';

export default class LoginController {
  public async store({ request, response }: HttpContextContract) {
    const tenant = request.input('tenant');

    const { redirect_url } = await oauthController.authorize({
      tenant,
      product,
      state: 'a-random-state-value',
      redirect_uri: redirectUrl,
    } as OAuthReq);

    return response.redirect(redirect_url as string);
  }
}
```

### User Authorizes Application

[WIP]

### Receives SAML Response

```js title="/apps/adonisjs/start/routes.ts"
import SSOController from 'App/Controllers/Http/SSOController';

Route.post('/sso/acs', async (ctx) => {
  return new SSOController().acs(ctx);
});
```

```js title="/app/Controllers/Http/SSOController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthTokenReqWithCredentials } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

const tenant = 'boxyhq.com';
const product = 'saml-demo.boxyhq.com';

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

```js title="/apps/adonisjs/start/routes.ts"
import SSOController from 'App/Controllers/Http/SSOController';

Route.post('/sso/callback', async (ctx) => {
  return new SSOController().callback(ctx);
});
```

```js title="/app/Controllers/Http/SSOController.ts"
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

import { oauthController } from '@ioc:BoxyHQ/Jackson';
import { type OAuthTokenReqWithCredentials } from '@boxyhq/saml-jackson';
import { redirectUrl } from '../../../lib/jackson';

const tenant = 'boxyhq.com';
const product = 'saml-demo.boxyhq.com';

export default class SSOController {
  public async callback({ request, response, auth }: HttpContextContract) {
    const { code, state } = request.qs();

    // TODO: Validate the returned `state` value.

    // Exchange the `code` for `access_token`
    const { access_token } = await oauthController.token({
      code,
      client_id: `tenant=${tenant}&product=${product}`,
      client_secret: 'dummy',
      redirect_uri: redirectUrl,
    } as OAuthTokenReqWithCredentials);
  }
}
```

### Fetch User Profile

Once the `access_token` has been fetched, you can use it to retrieve the user profile from the identity provider.

```js
const user = await oauthController.userInfo(access_token);
```

### Authenticate User

Once the user has been retrieved from the identity provider, you may determine if the user exists in your application and authenticate the user. If the user does not exist in your application, you will typically create a new record in your database to represent the user.
