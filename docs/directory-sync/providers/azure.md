---
title: Azure AD SCIM v2.0
sidebar_label: Azure SCIM v2.0
---

# Azure AD SCIM v2.0

The following guide will walk you through the process of configuring SAML Jackson to use the Azure AD SCIM v2.0 directory provider.

---

### Create Azure Application

Click **Azure Active Directory** from the Microsoft Azure Portal.

![img alt](/img/dsync/providers/azure/1.png)

Click **Enterprise Applications** from the left navigation menu.

![img alt](/img/dsync/providers/azure/2.png)

If your application is already created, choose it from the list and move to the section [Enable SCIM Provisioning](#enable-azure-scim-provisioning)

If you haven't created your application yet, click **New application** button.

![img alt](/img/dsync/providers/azure/9.png)

From the next screen, click **Create your own application**, give your application a **name** and click the **Create** button.

![img alt](/img/dsync/providers/azure/3.png)

---

### Enable Azure SCIM Provisioning

Click **Provisioning** from the left navigation menu then click **Get started**.

![img alt](/img/dsync/providers/azure/4.png)

Select **Automatic** from the **Provisioning Mode** dropdown and enter the following information under **Admin Credentials** section:

- Tenant URL
- Secret Token

Next, click the **Test Connection** button to test the connection to see if the credentials are correct, then click **Save** to save the credentials.

![img alt](/img/dsync/providers/azure/5.png)

Expand the **Mappings** section and ensure group and user attribute mappings are enabled for your app. The default mapping should work.

![img alt](/img/dsync/providers/azure/7.png)

Expand the **Settings** section and make the following changes:

- Select **Sync only assigned users and groups** from the **Scope** dropdown.
- Confirm the **Provisioning Status** is set to **On**.

![img alt](/img/dsync/providers/azure/8.png)

At this stage, you've successfully configured the Azure AD SCIM API integration.

---

### Assign Users

From your application, click the **Users and groups** from the left navigation menu and click **Add user/group**.

![img alt](/img/dsync/providers/azure/11.png)

Select **None Selected** under the **Users**.

From the right side of the screen, select the users you want to assign to the app and click the **Select** button, then click **Assign** to those users to the app.

![img alt](/img/dsync/providers/azure/12.png)
