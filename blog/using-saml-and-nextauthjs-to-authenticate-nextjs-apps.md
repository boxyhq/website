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

The advantage of using Jackson as a standalone service is that you can use Jackson with any standard OAuth 2.0 supported library in any language. Jackson has been designed to abstract the SAML login flow as a pure OAuth 2.0 flow.

[TODO]

https://{}/api/hello

Now we've everything ready, let's move to the next step.

[How to install SAML Jackson as a service - Use the one-click deploy button]

## Add SAML Config

We'll use [Mock SAML](https://mocksaml.com/), a free SAML 2.0 Identity Provider (IdP) for testing SAML SSO integrations. You can follow this tutorial with any other IdPs (Auth0, Okta, etc) of your choice.

Go to "SAML Configurations"
Click the button "New"
Give your new configuration a name
Add your tenant (Eg: boxyhq.com) and product (Eg: flex)
Allowed redirect URLs
Default redirect URL
Raw IdP XML

## Project Setup 

We'll use a Next.js boilerplate and integrate the SAML SSO into it.

The Next.js boilerplate comes with [3 default routes](https://github.com/boxyhq/jackson-nextjs/tree/main/pages):

- index.tsx: A static home page
- login.tsx: A simple login page
- me.tsx: A route to display user profile

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

[ADD: Welcome screen screenshot]

## Install NextAuth.js

Now let's install the NextAuth.js by using the below command:

```sh
npm install --save next-auth
```

## Configure BoxyHQ SAML Provider

To add NextAuth.js to your app, create a file called [...nextauth].js in pages/api/auth. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.

```javascript
import NextAuth from "next-auth"

export default NextAuth({
  providers: [
  ],
})
```

Now let's configure the [BoxyHQ SAML Provider](https://next-auth.js.org/providers/boxyhq-saml).

```javascript
import NextAuth from "next-auth"
import BoxyHQSAMLProvider from "next-auth/providers/boxyhq-saml"

providers: [
  BoxyHQSAMLProvider({
    issuer: "http://localhost:5225",
    clientId: "dummy", // The dummy here is necessary since we'll pass tenant and product custom attributes in the client code
    clientSecret: "dummy", // The dummy here is necessary since we'll pass tenant and product custom attributes in the client code
  })
}
```

## Add Login Routes

## Add Protected Routes

## Display User Profile
