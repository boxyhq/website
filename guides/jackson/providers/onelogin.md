---
title: Configure OneLogin as SAML Identity Provider
sidebar_label: OneLogin SAML
---

# Configure OneLogin as SAML Identity Provider

## Create Application

From your OneLogin account, click **Applications** from top navigation menu.

If your application is alread created, choose it from the list and move to the section [Configure Application](#configure-application)

Click **Add App** button to create a new application.

![img alt](/img/saml/onelogin/1.png)

Search for **SAML Test Connector** in the **Find Applications** section. Select **SAML Custom Connector (Advanced)** from the search results.

![img alt](/img/saml/onelogin/2.png)

Give your application a **Display Name** and click **Save**.

![img alt](/img/saml/onelogin/3.png)

## Configure Application

From your application, click **Configuration** tab on the left to configure the application.

You have to enter the following values in the **Application details** section:

- **Audience (Entity ID)**
- **ACS (Consumer) URL Validator**
- **ACS (Consumer) URL**
- Select the **Service Provider** from the **SAML initiator** dropdown.

Replace the values with the ones you have received from SAML Jackson.

Click **Save** to save the configuration.

![img alt](/img/saml/onelogin/4.png)

![img alt](/img/saml/onelogin/7.png)

Click the dropdown menu **More Actions** from the top right corner and click **SAML Metadata** to download the metadata XML file.

![img alt](/img/saml/onelogin/5.png)

## Attribute Mapping

From your application, click **Parameters** tab on the left.

You have to configure the following attributes:

| SAML Custom Connector Field | Value      |
| --------------------------- | ---------- |
| id                          | UUID       |
| email                       | Email      |
| firstName                   | First Name |
| lastName                    | Last Name  |

See the screenshot below.

![img alt](/img/saml/onelogin/6.png)

See the below screenshot to see how to map **id** attribute to **UUID**.

Enter **id** in the **Field name** input and check the **Include in SAML assertion** checkbox. Click **Save** to continue.

![img alt](/img/saml/onelogin/8.png)

On the next screen, select **UUID** from the **Value** dropdown and click **Save**.

![img alt](/img/saml/onelogin/9.png)

Do the same for the other attributes (email, firstName, lastName).

## Assign Users
