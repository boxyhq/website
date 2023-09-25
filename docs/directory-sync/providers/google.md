---
title: Google Workspace Directory
sidebar_label: Google Workspace
---

# Google Workspace

The following guide will walk you through the process of configuring SAML Jackson to use Google Workspace as a directory sync provider.

---

Jackson requires a Google OAuth App to be configured to access the Google Workspace API. You can use your existing OAuth App or create a new one.

### Create OAuth App

Navigate to the [Google Cloud Console](https://console.cloud.google.com/) and select your project from the list.

![img alt](/img/dsync/providers/google/oauth/1.png)

Select **APIs & Services** from the left menu and then select **Credentials**.

Select **OAuth client ID** from the **CREATE CREDENTIALS** dropdown.

![img alt](/img/dsync/providers/google/oauth/2.png)

Give your credentials a name and select **Web application** as the **Application type**.

Add the following **Authorised redirect URIs** and then click **Create**.

`https://<your-jackson-domain>/api/scim/oauth/callback`

![img alt](/img/dsync/providers/google/oauth/3.png)

:::info
Note that the above callback URL works if you're using Jackson as a service.

If using Jackson as an NPM package, the Authorised redirect URIs will be a URL on your application that you'll need to configure. See [Google Directory Sync API](/docs/directory-sync/api-reference#google-directory-sync) for more information.
:::

Copy the **Client ID** and **Client secret** and save them for later.

![img alt](/img/dsync/providers/google/oauth/4.png)

See the [Environment Variables](/docs/directory-sync/api-reference#google-directory-sync) section to learn how to configure Jackson with these values.

Once configuring Jackson, you can authenticate the tenants with Google OAuth and sync their Workspace directory.

### Configure Jackson

### Assign Users

### Push Groups
