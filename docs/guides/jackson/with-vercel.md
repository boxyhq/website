---
title: Deploy SAML Jackson on Vercel
sidebar_label: Vercel
slug: /jackson/guides/with-vercel
---

# Vercel

This guide will walk you through the configuration and deployment of SAML Jackson on Vercel. We'll be using the Vercel **Deploy Button** that enables users to deploy apps to Vercel without leaving the web browser and with little or no configuration.

If you don’t have a Vercel account, create one [here](https://vercel.com/signup).

## Install SAML Jackson

- Go to the SAML Jackson [Github repository](https://github.com/boxyhq/jackson) and click the **Deploy** button from the README section.
- Select your username under **GIT SCOPE**.
- Enter a **name** for your project, choose whether you want your repo `private` or `public`, and click **Create**.
- Fill the **Environment Variables** as per the [documentation](/docs/jackson/deploy/env-variables).
- After you've filled everything click the **Deploy** button.

You can visit the path `/api/hello` on your app to see if the Jackson was started successfully! If the installation was successful, you'll see the following output on the screen.

```javascript
{
  name: 'Jules Winnfield';
}
```

For example https://boxyhq-saml.herokuapp.com/api/hello
