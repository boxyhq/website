---
slug: getting-started-with-saml-jackson-on-heroku
title: Getting Started with SAML Jackson on Heroku
author: Kiran K
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/tokirankrishnan
author_image_url: https://avatars.githubusercontent.com/u/4593041?s=400&v=4
tags: [enterprise-readiness, engineering, saml, saml-jackson, integrations]
---

This guide will walk you through the configuration and deployment of SAML Jackson on Heroku.

## Prerequisites

- A Heroku user account. Signup is free and instant.
- Familiarity with the Node.js, React, SAML, OAuth 2.0.

## Install SAML Jackson

Go to the SAML Jackson [Github repository](https://github.com/boxyhq/jackson) and click the **Deploy to Heroku** button from the README section.

You can read more about the environment variables on the [Jackson Doc](https://boxyhq.com/docs/jackson/deploy/env-variables).

Give your new application a name and then fill the **Config Vars**.

- `CLIENT_SECRET_VERIFIER`: dummary
- `DB_CLEANUP_LIMIT`: 1000
- `DB_ENGINE`: sql
- `DB_TTL`: 300
- `DB_TYPE`: postgres
- `EXTERNAL_URL`: https://<HEROKU_APP_NAME>.herokuapp.com (For example: https://samljackson-demo-app.herokuapp.com)
- `NEXTAUTH_ACL`: Access Control List which is an array of emails or glob patterns. Only these users will be allowed access to the Admin UI. Example: `tom@example.com` or `*@example.com`
- `NEXTAUTH_SECRET`: Set this to a random string
- `NEXTAUTH_URL`: Same as `EXTERNAL_URL`

Jackson uses Magic Links (via email) to authenticate users to the UI. For sending emails, Jackson requires you to set your SMTP details. We'll use the [Mailtrap](https://mailtrap.io/) to send emails but you can use any other SMTP services (Mailgun, Postmark, Sendinblue, etc).

Please note that Mailtrap is a testing tool and is not designed to deliver emails to real addresses. 

Fill in the remaining Config Vars on the Heroku:

- `SMTP_HOST` : smtp.mailtrap.io
- `SMTP_PORT` : 2525
- `SMTP_FROM` : Jackson
- `SMTP_USER` : <MAILTRAP_SMTP_USER_NAME>
- `SMTP_PASSWORD` : <MAILTRAP_SMTP_PASSWORD>

After you've filled everything click the **Deploy app** button. It will take around 1-2 minutes by the Heroku to deploy your app.

You can visit the path `/api/hello` on your app to see if the Jackson was started successfully! If the installation was successful, you'll see the following output on the screen.

```javascript
{ name: 'Jules Winnfield' }
```

For example https://boxyhq-saml.herokuapp.com/api/hello

## Sign into SAML Jackson Admin UI

To signin, visit the path `/api/auth/signin` on your app. The page will display a sign-in page with a text box to enter the email address. 

Enter the email address that matches the `NEXTAUTH_ACL` and click the button **Sign in with Email**.

Open the Mailtrap inbox and you'll see an email from Jackson.

Open that email and click the button **Sign in**. Now you've successfully logged into the SAML Jackson admin UI.

## Add SAML Configuration

Next, we’ll add a SAML configuration for an IdP.

We'll use [Mock SAML](https://mocksaml.com/), a free SAML 2.0 Identity Provider (IdP) for testing SAML SSO integrations. You can follow this tutorial with any other IdPs (Auth0, Okta, etc) of your choice.

Download the XML Metadata from Mock SAML and follow the below steps.

- Go to "SAML Configurations" and click the button "New"
- Give your new configuration a name
- Add your **Tenant** (Eg: boxyhq.com) and **Product** (Eg: flex)
- Add **Allowed redirect URLs**
- Add **Default redirect URL**
- Paste the **Raw IdP XML**
- Click the button **Save Changes**

Now you've successfully installed SAML Jackson and added your first SAML configuration.