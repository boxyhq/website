---
title: Connect the SAML SSO to a Next.js app
sidebar_label: Next.js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Next.js

In this guide, you'll learn to authenticate users in your Next.js apps using SAML SSO. We'll use NextAuth.js which is complete open source authentication solution for Next.js applications.

NextAuth support SAML Jackson as an OAuth Provider in the name **BoxyHQ SAML Provider**.

Visit the [GitHub repo](https://github.com/boxyhq/jackson-next-auth) to see the source code for the Next.js SAML SSO integration.

## Add SAML SSO to your app

Let’s start by building the SAML SSO authentication workflow into your Next.js app.

### Project Setup

We'll use our [Next.js boilerplate](https://github.com/boxyhq/jackson-nextjs) and integrate the SAML SSO into it.

The Next.js boilerplate comes with 3 default routes:

- `index.tsx` : A static home page
- `login.tsx` : A simple login page
- `me.tsx` : A route to display user profile

Launch a terminal and clone the GitHub repo:

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

### Install NextAuth.js

Now let's install the NextAuth.js

```sh
npm install --save next-auth
```

### Configure BoxyHQ SAML Provider

To add NextAuth.js to your app, create a file called `[...nextauth].ts` in `pages/api/auth` and configure the [BoxyHQ SAML Provider](https://next-auth.js.org/providers/boxyhq-saml).

<Tabs>
<TabItem value="01" label="With Tenant and Product" default>

```javascript title="pages/api/auth/[...nextauth].ts"
import NextAuth from 'next-auth';
import BoxyHQSAMLProvider from 'next-auth/providers/boxyhq-saml';

const issuer = ''; // The issuer of the SAML request

export default NextAuth({
  providers: [
    BoxyHQSAMLProvider({
      issuer: issuer,
      clientId: 'dummy',
      clientSecret: 'dummy',
    }),
  ],
});

// The `dummy` here is necessary since we'll pass `tenant` and `product` as custom attributes on the client-side.
```

</TabItem>

<TabItem value="02" label="With Client ID and Secret">

```javascript title="pages/api/auth/[...nextauth].ts"
import NextAuth from 'next-auth';
import BoxyHQSAMLProvider from 'next-auth/providers/boxyhq-saml';

const issuer = ''; // The issuer of the SAML request
const clientID = ''; // The client ID of your SAML configuration
const clientSecret = ''; // The client secret of your SAML configuration

export default NextAuth({
  providers: [
    BoxyHQSAMLProvider({
      issuer: issuer,
      clientId: clientID,
      clientSecret: clientSecret,
    }),
  ],
});
```

</TabItem>

</Tabs>

You've now setup the server side of your Next.js application.

### Configure Shared Session

To setup the client side, wrap your `pages/_app.ts` component in the `SessionProvider` component.

This allows other components that call `useSession()` anywhere in your application to access the `session` object.

```javascript title="pages/_app.ts"
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // highlight-next-line
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
      // highlight-next-line
    </SessionProvider>
  );
}
export default MyApp;
```

### Add Login Component

Let's wire up the NextAuth on the client side.

Open the `pages/login.tsx` and make the following changes.

<Tabs>
<TabItem value="01" label="With Tenant and Product" default>

Here we'll use domain of the user entered email address to figure out which tenant they belong to. You can also use a unique tenant ID (string) for this, typically some kind of account or organization ID.

```javascript title="pages/login.tsx"
import type { NextPage } from 'next';
import Container from '../components/Container';
import { FormEvent, useState } from 'react';
// highlight-next-line
import { signIn } from 'next-auth/react';

const Login: NextPage = () => {
  const [state, setState] = useState({
    email: '',
  });

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  };

  // highlight-start
  const loginUser = async (event: FormEvent) => {
    event.preventDefault();

    const tenant = state.email.split('@')[1];
    const product = 'flex';

    signIn('boxyhq-saml', { callbackUrl: '/me' }, { tenant, product });
  };
  // highlight-end

  return (
    <Container title="Sign in">
      <div className="flex flex-col py-20 max-w-md mx-auto">
        <h2 className="text-center text-3xl mt-5">Log in to App</h2>
        <p className="text-center mt-4 font-medium text-gray-500">
          Click `Continue with SAML SSO` and you will be redirected to your
          third-party authentication provider to finish authenticating.
        </p>
        <div className="mt-3 mx-auto w-full max-w-sm">
          <div className="bg-white py-6 px-6 rounded">
            <form className="space-y-6" onSubmit={loginUser}>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600">
                  Work Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="username@boxyhq.com"
                    className="appearance-none text-sm block w-full border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 w-full border border-transparent rounded text-sm font-medium text-white bg-indigo-600 focus:outline-none"
                >
                  Continue with SAML SSO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
```

</TabItem>

<TabItem value="02" label="With Client ID and Secret">

```javascript title="pages/login.tsx"
import type { NextPage } from 'next';
import Container from '../components/Container';
import { FormEvent, useState } from 'react';
// highlight-next-line
import { signIn } from 'next-auth/react';

const Login: NextPage = () => {
  const [state, setState] = useState({
    email: '',
  });

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  };

  // highlight-start
  const loginUser = async (event: FormEvent) => {
    event.preventDefault();

    signIn('boxyhq-saml', { callbackUrl: '/me' });
  };
  // highlight-end

  return (
    <Container title="Sign in">
      <div className="flex flex-col py-20 max-w-md mx-auto">
        <h2 className="text-center text-3xl mt-5">Log in to App</h2>
        <p className="text-center mt-4 font-medium text-gray-500">
          Click `Continue with SAML SSO` and you will be redirected to your
          third-party authentication provider to finish authenticating.
        </p>
        <div className="mt-3 mx-auto w-full max-w-sm">
          <div className="bg-white py-6 px-6 rounded">
            <form className="space-y-6" onSubmit={loginUser}>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600">
                  Work Email
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="username@boxyhq.com"
                    className="appearance-none text-sm block w-full border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 w-full border border-transparent rounded text-sm font-medium text-white bg-indigo-600 focus:outline-none"
                >
                  Continue with SAML SSO
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
```

</TabItem>

</Tabs>

### Add User Profile Component

The `useSession()` React Hook in the NextAuth.js client is the easiest way to check if someone is signed in.

Open the `pages/me.tsx` and make the following changes.

```javascript title="pages/me.tsx"
import type { NextPage } from 'next';
import Link from 'next/link';
import Container from '../components/Container';
// highlight-next-line
import { useSession } from 'next-auth/react';

const Me: NextPage = () => {
  // highlight-start
  const { data: session, status } = useSession();

  // You can use the `session` information for further business logic.

  if (status === 'authenticated') {
    return (
      <Container title="Me">
        <div className="space-y-4">
          <h2 className="text-2xl mb-5">User Profile</h2>
          <p>Name: {session.user?.name}</p>
          <p>Email: {session.user?.email}</p>
        </div>
      </Container>
    );
  }
  // highlight-end

  return (
    <Container title="Me">
      <div className="space-y-4">
        <h2 className="text-2xl">Access Denied</h2>
        <p>
          <Link href="/login">
            <a className="underline underline-offset-4">
              You must be signed in to view this page
            </a>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Me;
```

## Next steps

- Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
