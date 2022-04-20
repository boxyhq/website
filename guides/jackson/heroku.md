---
title: Deploy SAML Jackson on Heroku
sidebar_label: Heroku
slug: /jackson/heroku
---

# Heroku

This guide will walk you through the configuration and deployment of SAML Jackson on Heroku. We'll be using the **Deploy to Heroku** button that enables users to deploy apps to Heroku without leaving the web browser and with little or no configuration.

If you don’t have a Heroku account, create one [here](https://signup.heroku.com/).

## Install SAML Jackson

- Go to the SAML Jackson [Github repository](https://github.com/boxyhq/jackson) and click the **Deploy to Heroku** button from the README section.
- Give your new application a **name**.
- Fill the **Config Vars** as per the [documentation](/docs/jackson/deploy/env-variables).
- After you've filled everything click the **Deploy app** button.

You can visit the path `/api/hello` on your app to see if the Jackson was started successfully! If the installation was successful, you'll see the following output on the screen.

```javascript
{
  name: 'Jules Winnfield';
}
```

For example https://boxyhq-saml.herokuapp.com/api/hello

## Sign into Admin UI

SAML Jackson comes with an Admin interface that enables you to manage SAML configurations via UI.

Follow the below steps to login into the Admin dashboard.

- Visit the path `/api/auth/signin` on your app. The page will display a sign-in page with a text box to enter the email address.
- Enter the email address that matches the `NEXTAUTH_ACL` and click the button **Sign in with Email**.
- Open the inbox and you'll see an email from Jackson.
- Open that email and click the button **Sign in**. Now you've successfully logged into the SAML Jackson admin UI.

## Add SAML Configurations

To start using the SAML Jackson, you've to add at least one SAML configuration. Once you've set up the SAML app on your Identity Provider, the Identity Provider will generate a SAML Metadata file.

The SAML metadata file contains information about the various SAML Authorities that can be used in SAML 2.0 protocol message exchanges. This metadata identifies Identity Provider endpoints and the certificates to secure SAML 2.0 message exchanges.

Download the SAML Metadata file from your IdP and follow the below steps for adding the SAML configuration.

- Go to **SAML Configurations** and click the button **New**
- Give your new configuration a **name**
- Add your **Tenant** (Eg: boxyhq.com) and **Product** (Eg: flex)
- Add **Allowed redirect URLs**
- Add **Default redirect URL**
- Paste the **Raw IdP XML**
- Click the button **Save Changes**

Now you've successfully installed SAML Jackson and added your first SAML configuration.
