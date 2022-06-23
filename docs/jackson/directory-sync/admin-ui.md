# Admin UI

This guide outline how to manage your directory connections via the Jackson Admin UI.

![img alt](/img/dsync/directories.png)

---

## On this page

- [Create directory sync connection](admin-ui.md#create-directory-sync-connection)
- [Update directory sync connection](admin-ui.md#update-directory-sync-connection)
- [View directory users](admin-ui.md#view-directory-users)
- [View directory groups](admin-ui.md#view-directory-groups)
- [View webhook events](admin-ui.md#view-webhook-events)
- [Enable webhook events logging](admin-ui.md#enable-webhook-events-logging)

---

### Create directory sync connection

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. Click **Create New**.
3. Enter the following information:
   - Enter **Directory name**
   - Select the **Directory provider** from the list of [available providers](providers.md).
   - Add the **Tenant**
   - Add the **Product**
   - Enter the **Webhook URL**
   - Enter the **Webhook secret**

![img alt](/img/dsync/create-directory.png)

---

### Update directory sync connection

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click edit icon.
3. You can update the following information:
   - Enter **Directory name**
   - Enter the **Webhook URL**
   - Enter the **Webhook secret**
   - Toggle **Enable Webhook events logging**

![img alt](/img/dsync/update-directory.png)

---

### View directory users

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Users**.
4. Click the eye icon to view the user raw JSON data.

![img alt](/img/dsync/users.png)

---

### View directory groups

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Groups**.
4. Click the eye icon to view the group raw JSON data.

![img alt](/img/dsync/groups.png)

---

### View webhook events

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click database icon.
3. Click the tab **Webhook Events**.
4. Click the eye icon to view the event raw JSON data.

![img alt](/img/dsync/logs.png)

Click the button **Clear Events** to delete all events from the database.

---

### Enable webhook events logging

1. From your SAML Jackson Admin UI, go to **Directory Sync**.
2. From the list of directory sync connections, click edit icon.
3. You can enable or disable the **Enable Webhook events logging**.

By default, the webhook events are not logged.
