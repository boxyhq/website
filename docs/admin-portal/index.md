---
title: Get Started with Admin Portal
sidebar_label: Get Started
---

# Get Started with Admin Portal

SAML Jackson comes with an Admin Portal that allows you to manage **Enterprise SSO**, **Directory Sync**, and **Setup Link** via an easy to use web interface.

To enable the Admin Portal, make sure you deploy the [Jackson as a service](../jackson/deploy/service).

## Configure Admin Portal

We use [Magic Links](https://next-auth.js.org/providers/email) to authenticate users to the Admin Portal.

You'll need to set the following configuration in the [environment](../jackson/deploy/env-variables#admin-ui-configuration)

- SMTP Server details, so we can send you the email with the magic link.
- Access Control List which is an array of emails or glob patterns. Only these users will be allowed access to the Admin Portal. For example: `NEXTAUTH_ACL=tonystark@gmail.com,*@marvel.com`.

## Sign into Admin Portal

Follow the below steps to login into the Admin Portal.

- Visit the path `/api/auth/signin` on your app. The page will display a sign-in page with a text box to enter the email address.
- Enter the email address that matches the `NEXTAUTH_ACL` and click the button **Sign in with Email**.
- Open the inbox and you'll see an email from SAML Jackson.
- Open that email and click the button **Sign in**. Now you've successfully logged into the SAML Jackson Admin Portal.
