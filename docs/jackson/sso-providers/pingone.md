---
title: Set up your own custom SAML application for PingOne SAML
sidebar_label: PingOne SAML
---

# PingOne SAML SSO

In this section, we will show you how to set up your own custom SAML application for PingOne SAML.

## Create Application

From your PingOne account, click **Connections** > **Applications** from left navigation menu.

If your application is already created, choose it from the list and move to the section [Configure Application](#configure-application)

If you haven't created a SAML application, click plus button to create a new application.

![PingOne SAML Step 1](/images/docs/jackson/sso-providers/pingone/1.png)

Give your application a **Application Name**, choose **SAML Application** from the **Application Type** and click **Configure**.

## Configure Application

![PingOne SAML Step 2](/images/docs/jackson/sso-providers/pingone/2.png)

From the next screen, you have to enter the following values in the **SAML Configuration** section:

- **ACS URLs**
- **Entity ID**

Replace the values with the ones you have received from SAML Jackson.

Click **Save** to save the configuration.

![PingOne SAML Step 3](/images/docs/jackson/sso-providers/pingone/3.png)

Click the **Configuration** tab from the top and click **Download Metadata** to download the metadata XML file.

![PingOne SAML Step 4](/images/docs/jackson/sso-providers/pingone/4.png)

## Attribute Mapping

Click the **Attribute Mappings** tab from the top and you have to configure the following attributes:

| SAML App  | PingOne       |
| --------- | ------------- |
| id        | User ID       |
| email     | Email Address |
| firstName | Given Name    |
| lastName  | Family Name   |

See the screenshot below.

![PingOne SAML Step 5](/images/docs/jackson/sso-providers/pingone/5.png)

Make sure you have enabled your app so that it can be used by the users. You can do this by clicking the **Toggle** button next to your app.

![PingOne SAML Step 6](/images/docs/jackson/sso-providers/pingone/6.png)

## Next steps

You've successfully configured your custom SAML application for PingOne SAML. At this stage, you can assign users to your application and start using it.

## Resources

- [Ping Identity Website](https://www.pingidentity.com/en.html)
- [Ping Identity Documentation](https://docs.pingidentity.com/)

:::tip
Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
:::
