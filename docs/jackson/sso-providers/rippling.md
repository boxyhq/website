---
title: Set up your own custom SAML application for Rippling SAML
sidebar_label: Rippling SAML
---

# Rippling SAML SSO

This section will show you how to set up your own custom SAML application for Rippling SAML.

## Create Application

You'll need to create a new **Custom App** from your Rippling account if the app is not already in the Rippling app directory.

Go to **IT Management** > **Custom App** from the left navigation menu.

![Rippling SAML Step 1](/images/docs/jackson/sso-providers/rippling/1.png)

Click **Create New App** button to create a new application.

From the next screen, fill in the following fields:

- **App Name**
- **Select Categories**
- **Upload Logo**
- **What type of app would you like to create?** - Make sure you select **Single Sign-On (SAML)** from the list.

![Rippling SAML Step 2](/images/docs/jackson/sso-providers/rippling/2.png)

## Configure Application

Copy the **IdP Metadata URL** or **IdP Metadata XML** from the next screen. You'll need this value to configure your SAML connection in SAML Jackson.

![Rippling SAML Step 3](/images/docs/jackson/sso-providers/rippling/3.png)

You'll need to enter the **ACS URL** and **Entity ID**. You'll get these values from SAML Jackson.

![Rippling SAML Step 4](/images/docs/jackson/sso-providers/rippling/4.png)

Make sure that **Service Provider Entity ID** matches the **SAML Audience (SP Entity ID)** value from SAML Jackson.

From the **Settings** tab of custom app you just created. Go to **Advanced SAML Settings** section and check the box for **Disable InResponseTo field in assertions for IdP initiated SSO**.

This is because Rippling sends dummy values for the **InResponseTo** field and SAML Jackson will try to validate the **InResponseTo** field if it is present.

![Rippling SAML Step 5](/images/docs/jackson/sso-providers/rippling/5.png)

## Next steps

You've successfully configured your custom SAML application for Rippling SAML. At this stage, you can assign users to your application and start using it.

## Resources

- [Rippling](https://www.rippling.com/) official website
- Visit [Rippling documentation](https://developer.rippling.com/)

:::tip
Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
:::
