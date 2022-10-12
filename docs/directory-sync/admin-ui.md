---
title: Directory Sync Admin UI
sidebar_label: Admin UI
---

# Admin UI

This guide outline how to manage your directory connections via the Jackson Admin UI.

![Directories](/img/dsync/admin/directories.png)

---

### Create directory sync connection

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. Click **Create New**.
3. Enter the following information:
   - Enter **Directory name**
   - Select the **Directory provider** from the list of [available providers](providers).
   - Add the **Tenant**
   - Add the **Product**
   - Enter the **Webhook URL**
   - Enter the **Webhook secret**

![Create Directory](/img/dsync/admin/create-directory.png)

---

### Update directory sync connection

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click edit icon.
3. You can update the following information:
   - Enter **Directory name**
   - Enter the **Webhook URL**
   - Enter the **Webhook secret**
   - Toggle **Enable Webhook events logging**

![Update Directory](/img/dsync/admin/update-directory.png)

---

### View directory users

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Users**.
4. Click the eye icon to view the user raw JSON data.

![Users](/img/dsync/admin/users.png)

---

### View directory groups

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Groups**.
4. Click the eye icon to view the group raw JSON data.

![Groups](/img/dsync/admin/groups.png)

---

### View webhook events

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Webhook Events**.
4. Click the eye icon to view the event raw JSON data.

![Logs](/img/dsync/admin/logs.png)

Click the button **Clear Events** to delete all events from the database.

---

### Enable webhook events logging

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click edit icon.
3. You can enable or disable the **Enable Webhook events logging**.

By default, the webhook events are not logged.
