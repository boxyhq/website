---
title: Directory Sync
sidebar_label: APIs & SDK
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# APIs & SDK

## On this page

- [Initialize SAML Jackson Directory Sync](apis.md#initialize-saml-jackson-directory-sync)
- [Create a new directory](apis.md#create-a-new-directory)
- [List directories](apis.md#list-directories)
- [Get a directory](apis.md#get-a-directory)
- [List directory users](apis.md#list-directory-users)
- [Get a directory user](apis.md#get-a-directory-user)
- [List directory groups](apis.md#list-directory-groups)
- [Get a directory group](apis.md#get-a-directory-group)

### Initialize SAML Jackson Directory Sync

```javascript
const opts = {
  externalUrl: 'https://my-cool-app.com',
  db: {
    engine: 'mongo',
    url: 'mongodb://localhost:27017/my-cool-app',
  },
};

let directorySyncController;

// Please note that the initialization of @boxyhq/saml-jackson is async, you cannot run it at the top level
// Run this in a function where you initialize the express server.
async function init() {
  const jackson = await require('@boxyhq/saml-jackson').controllers(opts);

  directorySyncController = jackson.directorySyncController;
}
```

### Directory

#### Properties

- `name`: The name of the directory
- `tenant`: The tenant ID of the tenant you want to create the directory for
- `product`: The product ID of the product you want to create the directory for
- `type`: The directory provider type. See the [Directory Providers](./providers.md) for more information.
- `webhook_url`: The webhook URL to which the directory connection will POST the events
- `webhook_secret`: The webhook secret used to sign the webhook payload

### Create a new directory

Create a new directory connection.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const directory = await directorySyncController.directories.create({
  name: 'BoxyHQ SCIM App',
  tenant: 'boxyhq',
  product: 'flex',
  type: 'okta-scim-v2',
  webhook_url: 'https://my-cool-app.com/webhook',
  webhook_secret: 'my-secret',
});
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request POST \
  --url http://localhost:5225/api/v1/directory-sync \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "BoxyHQ SCIM App",
	"tenant": "boxyhq",
	"product": "flex",
	"type": "okta-scim-v2",
	"webhook_url": "https://my-cool-app.com/webhook",
	"webhook_secret": "my-secret"
}'
```

</TabItem>
</Tabs>

### List directories

List all the available directory connections.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const directories = await directorySyncController.directories.list({});
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url http://localhost:5225/api/v1/directory-sync \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

### Get a directory

Get the details of a directory for a given tenant and product.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const tenant = 'boxyhq';
const product = 'flex';

const directories =
  await directorySyncController.directories.getByTenantAndProduct(
    tenant,
    product
  );
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync?tenant=boxyhq&product=flex' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

### List directory users

List all the users in a directory.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const tenant = 'boxyhq';
const product = 'flex';

const users = await directorySyncController.users
  .setTenantAndProduct(tenant, product)
  .list({});
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/users?tenant=boxyhq&product=flex' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

### Get a directory user

Get the details of a directory user for a given tenant and product.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const tenant = 'boxyhq';
const product = 'flex';
const userId = '465d9002-b356-46a8-9da3-fb5213d9fe8f';

const users = await directorySyncController.users
  .setTenantAndProduct(tenant, product)
  .get(userId);
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/users/465d9002-b356-46a8-9da3-fb5213d9fe8f?tenant=boxyhq&product=flex' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

### List directory groups

List all the groups in a directory.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const tenant = 'boxyhq';
const product = 'flex';

const users = await directorySyncController.groups
  .setTenantAndProduct(tenant, product)
  .list({});
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/groups?tenant=boxyhq&product=flex' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

### Get a directory group

Get the details of a directory group for a given tenant and product.

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript
const tenant = 'boxyhq';
const product = 'flex';
const groupId = 'e8867304-7e61-426f-bebd-11012696ea5d';

const users = await directorySyncController.groups
  .setTenantAndProduct(tenant, product)
  .get(groupId);
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/groups/e8867304-7e61-426f-bebd-11012696ea5d?tenant=boxyhq&product=flex' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>
