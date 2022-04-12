---
slug: authenticate-nextjs-app-using-saml-jackson-and-nextauth
title: Authenticate users in your Next.js apps using SAML Jackson and NextAuth.js
author: Kiran K
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/tokirankrishnan
author_image_url: https://avatars.githubusercontent.com/u/4593041?s=400&v=4
tags: [enterprise-readiness, engineering, saml, saml-jackson, integrations]
---

In this article, you'll learn to authenticate users in your Next.js apps using SAML SSO. We'll use SAML Jackson along with NextAuth.js. Let’s get started!

You can also access the full code at the GitHub repository.

[NextAuth.js](https://next-auth.js.org/) is an open-source authentication solution for Next.js apps. It is designed to work with any OAuth services and supports both JSON Web Tokens and database sessions.

[SAML Jackson](https://boxyhq.com/docs/jackson/introduction) is a SAML SSO service designed as an OAuth 2.0 flow. It helps you integrate SAML into your apps with just a few lines of code.

## Prerequisites

To follow along with this article, you’ll need the following:

- Node.js installed on your computer
- Knowledge about Next.js and NextAuth.js
- Knowledge about SAML SSO and OAuth 2.0

## Install SAML Jackson

SAML Jackson comes with two installation options.

1. Install SAML Jackson into your Node.js based app as an NPM package
2. Install SAML Jackson as a standalone service.

Before you begin this article, you should have Jackson installed on your server. You can learn how to install SAML Jackson by following our guide on [Getting Started with SAML Jackson on Heroku](/)

The advantage of using Jackson as a standalone service is that you can use Jackson with any standard OAuth 2.0 supported library in any language. Jackson has been designed to abstract the SAML login flow as a pure OAuth 2.0 flow.

## Add SAML Config

[TODO: Add a notes on how to add SAML Config]

## Project Setup

We'll use our [Next.js boilerplate](https://github.com/boxyhq/jackson-nextjs) and integrate the SAML SSO into it.

The Next.js boilerplate comes with 3 default routes:

- `index.tsx` : A static home page
- `login.tsx` : A simple login page
- `me.tsx` : A route to display user profile

Launch a terminal and clone the Github repo:

```sh
git clone https://github.com/boxyhq/jackson-nextjs
```

```sh
cd jackson-nextjs
```

Now, install the dependencies:

```sh
npm install
```

Start the application to see the welcome screen:

```sh
npm run dev
```

![img alt](/img/blog/jackson-nextjs-nextauth/nextjs-jackson-home.png)

## Install NextAuth.js

Now let's install the NextAuth.js by using the below command:

```sh
npm install --save next-auth
```

## Configure BoxyHQ SAML Provider

To add NextAuth.js to your app, create a file called `[...nextauth].ts` in `pages/api/auth`. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.

```javascript
// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';

export default NextAuth({
  providers: [
    // We will add the BoxyHQ SAML Provider here in the next step
  ],
});
```

Now let's configure the [BoxyHQ SAML Provider](https://next-auth.js.org/providers/boxyhq-saml).

```javascript
// pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import BoxyHQSAMLProvider from 'next-auth/providers/boxyhq-saml';

export default NextAuth({
  providers: [
    BoxyHQSAMLProvider({
      issuer: 'JACKSON_BASE_URL',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }),
  ],
});
```

The `issuer` should be the base URL to your Jackson server instance. For example, if you deployed the Jackson on Heroku, the `issuer` should be `https://<your-app-name>.herokuapp.com`. Don't add a trailing slash.

Replace the `YOUR_CLIENT_ID` with `Client Id` copied from Jackson Admin UI.

Replace the `YOUR_CLIENT_SECRET` with `Client Secret` copied from Jackson Admin UI.

And that's it! You've now setup the server side of your Next.js application.

## Configure Shared Session

To setup the client side, wrap your `pages/_app.ts` component in the `SessionProvider` component.

This allows other components that call `useSession()` anywhere in your application to access the `session` object.

```javascript
// pages/_app.ts

import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
```

## Add Login Page

SAML login requires a configuration for every tenant of yours. One common method is to use the domain for an email address to figure out which tenant they belong to. You can also use a unique tenant ID (string) for this, typically some kind of account or organization ID.

Open the login page at http://localhost:3000/login

You'll see a input field for email with a button. The users can enter their tenant identifier (in this case the domain name), and Jackson will redirect the users to their IdP.

Let's wire up the NextAuth on the client side.

Open the `pages/login.tsx` and make the following changes.

```javascript
import { signIn } from "next-auth/react";


const handleSignin = (event) => {
    //event.preventDefault();
    //signIn("boxyhq-saml", {}, { tenant, product });
}

...
```

Instances of useSession will then have access to the session data and status.

## Display User Profile

The useSession() React Hook in the NextAuth.js client is the easiest way to check if someone is signed in.

```javascript
import { useSession } from 'next-auth/react';

// {session.user}
```
