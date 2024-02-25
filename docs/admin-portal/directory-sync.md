---
title: Manage Directory Sync using Admin Portal
sidebar_label: Directory Sync
---

# Manage Directories

On the Admin Portal **Directory Sync** menu, you can see the Directory connections.

## Create Directory Sync connection

1. From your Admin Portal, go to **Directory Sync**.
2. Click **Create New**.
3. Enter the following information:
   - Enter **Directory name**
   - Select the **Directory provider** from the list of [available providers](../directory-sync/providers/).
   - Add the **Tenant**
   - Add the **Product**
   - Enter the **Webhook URL**
   - Enter the **Webhook secret**

![Create Directory](/images/docs/admin-portal/dsync/create-directory.png)

---

## Update Directory Sync connection

1. From your Admin Portal, go to **Directory Sync**.
2. From the list of directory sync connections, click edit icon.
3. You can update the following information:
   - Enter **Directory name**
   - Enter the **Webhook URL**
   - Enter the **Webhook secret**
   - Toggle **Enable Webhook events logging**

![Update Directory](/images/docs/admin-portal/dsync/update-directory.png)

---

## View directory users

1. From your Admin Portal, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Users**.
4. Click the eye icon to view the user raw JSON data.

![Users](/images/docs/admin-portal/dsync/users.png)

---

## View directory groups

1. From your Admin Portal, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Groups**.
4. Click the eye icon to view the group raw JSON data.

![Groups](/images/docs/admin-portal/dsync/groups.png)

---

## View webhook events

1. From your Admin Portal, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Webhook Events**.
4. Click the eye icon to view the event raw JSON data.

![Logs](/images/docs/admin-portal/dsync/logs.png)

Click the button **Clear Events** to delete all events from the database.

---

## Enable webhook events logging

1. From your Admin Portal, go to **Directory Sync**.
2. From the list of directory sync connections, click edit icon.
3. You can enable or disable the **Enable Webhook events logging**.

By default, the webhook events are not logged.
