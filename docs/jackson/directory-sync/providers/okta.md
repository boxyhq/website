---
title: Okta SCIM v2.0
sidebar_label: Okta SCIM v2.0
---

# Okta SCIM v2.0

The following guide will walk you through the process of configuring SAML Jackson to use the Okta as a directory sync provider.

TODO: Add video link here.

---

### Create Okta Application

Click **Applications** from the left navigation menu and click **Browse App Catalog** button.

![img alt](/img/dsync/okta/1.png)

Search for **SCIM 2.0 Test App (Oauth Bearer Token)** from the search box and choose the app called **SCIM 2.0 Test App (Oauth Bearer Token)**.

![img alt](/img/dsync/okta/2.png)

From the app page, click the **Add Integration** button.

![img alt](/img/dsync/okta/3.png)

Give the app a name and click the **Next** button. Click **Done** to finish the creation of the app.

![img alt](/img/dsync/okta/4.png)

---

### Enable Okta SCIM Provisioning

In your application, click the **Provisioning** tab and click **Configure API Integration**.

![img alt](/img/dsync/okta/5.png)

Check the **Enable API Integration** checkbox and enter the following information:

- SCIM 2.0 Base URL
- OAuth Bearer Token

You'll receive these information from Jackson when you create the directory sync connection either via the API or the Admin UI.

Click **Test API Creditentials** to test the connection to see if the credentials are correct and click the button to **Save** to save the creditentials.

![img alt](/img/dsync/okta/6.png)

You'll see a new setting page, click **To App** and enable the following settings:

![img alt](/img/dsync/okta/7.png)

At this stage, you've successfully configured the Okta SCIM API integration.

---

### Assign Users

In your application, click the **Assignments** tab and select **Assign to People** from the dropdown **Assign**.

![img alt](/img/dsync/okta/8.png)

Select users you want to assign to the app and click the **Assign** button.

![img alt](/img/dsync/okta/9.png)

After you click the **Assign** button, you'll see a new popup window with various fields. Confirm the field values and click the **Save and Go Back** button.

![img alt](/img/dsync/okta/10.png)

---

### Push Groups

Navigate to the tab **Push Groups** and select **Find group by name** from the dropdown **Push Groups**.

![img alt](/img/dsync/okta/11.png)

Find the group you want to assign to the app and click the **Save** button.

![img alt](/img/dsync/okta/12.png)
