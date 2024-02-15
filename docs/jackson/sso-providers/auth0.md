---
title: Set up your own custom SAML application for Auth0 SAML
sidebar_label: Auth0 SAML
---

# Auth0 SAML SSO

In this section, we will show you how to set up your own custom SAML application for Auth0 SAML.

## Create Application

From your Auth0 dashboard, click **Applications** from the left navigation menu.

If your application is already created, choose it from the list and move to the section [Configure Application](#configure-application)

![img alt](/img/sso-providers/auth0/1.png)

If you haven't created a SAML application, click the **Create Application** button to create a new application.

Give your application a **Name** and click **Create**.

![img alt](/img/sso-providers/auth0/5.png)

## Configure Application

Click the tab **Addons** and enable **SAML2 WEB APP** addon.

![img alt](/img/sso-providers/auth0/2.png)

Enter your **Application Callback URL** on the next screen and click **Enable**.

Replace the values with the ones you have received from SAML Jackson.

![img alt](/img/sso-providers/auth0/3.png)

Click the tab **Usage** and download the **Identity Provider Metadata**.

![img alt](/img/sso-providers/auth0/4.png)

## Attribute Mapping

No additional attribute mapping is required for Auth0 SAML to work with SAML Jackson.

## Next steps

You've successfully configured your custom SAML application for Auth0 SAML. At this stage, you can assign users to your application and start using it.

## Resources

- [Auth0 Doc](https://auth0.com/docs)

:::tip
Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
:::
