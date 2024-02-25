---
title: Set up your own custom SAML application for Google SAML
sidebar_label: Google SAML
---

# Google SAML SSO

In this section, we will show you how to set up your own custom SAML application for Google SAML.

## Create Application

From your Google Admin console, click **Apps** from the sidebar then click **Web and mobile apps** from the list.

If your application is already created, choose it from the list and move to the section [Configure Application](#configure-application)

If you haven't created a SAML application, click **Add custom SAML app** from the menu.

![Google SAML Step 1](/images/docs/jackson/sso-providers/google/1.png)

Give your application an **App name** and click **Continue**.

![Google SAML Step 2](/images/docs/jackson/sso-providers/google/2.png)

## Configure Application

From the next screen, click **DOWNLOAD METADATA** to download the metadata XML file, then click **Continue**.

![Google SAML Step 3](/images/docs/jackson/sso-providers/google/3.png)

Enter the following values in the **Service provider details** section:

- **ACS URL**
- **Entity ID**

Replace the values with the ones you have received from SAML Jackson and click **Continue** to save the configuration.

![Google SAML Step 4](/images/docs/jackson/sso-providers/google/4.png)

## Attribute Mapping

Under the **Attributes** section, you have to configure the following attributes:

| App attributes | Google directory attributes |
| -------------- | --------------------------- |
| email          | Primary email               |
| firstName      | First name                  |
| lastName       | Last name                   |

See the screenshot below.

After you have configured the attributes, click **Finish** to save the configuration.

![Google SAML Step 5](/images/docs/jackson/sso-providers/google/5.png)

From the next screen, click **User access** to configure the application to allow users to log in.

![Google SAML Step 6](/images/docs/jackson/sso-providers/google/6.png)

Check the **ON for everyone** checkbox and click **Save**.

![Google SAML Step 7](/images/docs/jackson/sso-providers/google/7.png)

## Next steps

You've successfully configured your custom SAML application for Google SAML. At this stage, you can assign users to your application and start using it.

## Resources

- [Google Admin Console](https://admin.google.com/)

:::tip
Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
:::
