---
title: SAML Federation
sidebar_label: SAML Federation
---

# SAML Federation

SAML Federation is an enterprise feature and you need to have an enterprise license to use this feature.

From the **Admin Portal** go to **Enterprise SSO** > **SAML Federation**.

## Create SAML Federation App

- Click **New App**.
- Enter the following information:
  - **Name**
  - **Tenant**
  - **Product**
  - **ACS URL** (ACS URL of the SP)
  - **Entity ID** (Entity ID of the SP)

![Create SAML Federation App](/img/saml-federation/admin/create-saml-federation-app.png)

---

## Update SAML Federation App

- From the list of SAML Federation Apps, click on the **Edit** icon of the app you want to update.
- You can update the following information:
  - **Name**
  - **ACS URL** (ACS URL of the SP)
  - **Entity ID** (Entity ID of the SP)

![Update SAML Federation App](/img/saml-federation/admin/update-saml-federation-app.png)

---

## View IdP Configuration

Click **View IdP Configuration** button to view the IdP configuration for the SAML Federation App. You need to provide the SP with the following information:

- **SSO URL**
- **Entity ID / Audience URI / Audience Restriction**
- **X.509 Certificate**

![View IdP Configuration](/img/saml-federation/admin/view-idp-configuration.png)
