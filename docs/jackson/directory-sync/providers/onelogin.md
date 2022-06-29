---
title: OneLogin SCIM v2.0
sidebar_label: OneLogin SCIM v2.0
---

# OneLogin SCIM v2.0

The following video will walk you through the process of configuring SAML Jackson to use the OneLogin SCIM v2.0 directory provider.

TODO: Add video link here.

---

### Create OneLogin Application

Click **Applications** from the top navigation menu and click **Add App** button.

![img alt](/img/dsync/onelogin/1.png)

Search for **SCIM** from the search box and choose the app called **SCIM Provisioner with SAML (SCIM V2 Enterprise)** from the list of apps.

![img alt](/img/dsync/onelogin/2.png)

Give the app a name and click the **Save** button.

![img alt](/img/dsync/onelogin/3.png)

At this stage, you've successfully created the OneLogin SCIM app.

---

### Enable OneLogin SCIM Provisioning

In your application, click the **Configuration** tab on the left.

Enter the following information:

- SCIM Base URL
- SCIM Bearer Token

You'll receive these information from Jackson when you create the directory sync connection either via the API or the Admin UI.

Click the button **Enable** to test the connection to see if the credentials are correct and click the button to **Save** to save the creditentials.

![img alt](/img/dsync/onelogin/4.png)

Next click the **Provisioning** tab and check the **Enable provisioning** checkbox. Click the **Save** button to save the changes.

![img alt](/img/dsync/onelogin/5.png)

Next click the **Parameters** tab and select the row **Groups** from the table.

![img alt](/img/dsync/onelogin/6.png)

In the popup window, check the box **Include in User Provisioning** and click the **Save** button.

![img alt](/img/dsync/onelogin/7.png)

---

### Assign Users

---

### Push Groups
