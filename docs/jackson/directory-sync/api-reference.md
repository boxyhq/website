---
title: Directory Sync API Reference
sidebar_label: API Reference
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Reference

The following guides provide information about the APIs and SDKs that are available for the Directory Sync service.

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
- `type`: The directory provider type. See the [Directory Providers](./providers) for more information.
- `webhook_url`: The webhook URL to which the directory connection will POST the events
- `webhook_secret`: The webhook secret used to sign the webhook payload

### Create a new directory

Create a new directory connection.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
const { data, error } = await directorySyncController.directories.create({
  name: 'App',
  tenant: 'boxyhq',
  product: 'jackson',
  type: 'onelogin-scim-v2',
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
	"name": "App",
	"tenant": "boxyhq",
	"product": "jackson",
	"type": "onelogin-scim-v2",
	"webhook_url": "https://my-cool-app.com/webhook",
	"webhook_secret": "my-secret"
}'
```

</TabItem>
</Tabs>

#### Response

```javascript
{
  "data": {
    "id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
    "name": "App",
    "tenant": "boxyhq",
    "product": "jackson",
    "type": "onelogin-scim-v2",
    "log_webhook_events": false,
    "scim": {
      "path": "/api/scim/v2.0/58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
      "secret": "IJzAoevjD_liiiy-VkDtXg",
      "endpoint": "http://localhost:5225/api/scim/v2.0/58b5cd9dfaa39d47eb8f5f88631f9a629a232016"
    },
    "webhook": {
      "endpoint": "https://my-cool-app.com/webhook",
      "secret": "my-secret"
    }
  },
  "error": null
}
```

---

### List directories

List all the available directory connections.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
const { data, error } = await directorySyncController.directories.list({});
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

#### Response

```javascript
{
  "data": [
    {
      "id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
      "name": "App",
      "tenant": "boxyhq",
      "product": "jackson",
      "type": "onelogin-scim-v2",
      "log_webhook_events": false,
      "scim": {
        "path": "/api/scim/v2.0/58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
        "secret": "IJzAoevjD_liiiy-VkDtXg",
        "endpoint": "http://localhost:5225/api/scim/v2.0/58b5cd9dfaa39d47eb8f5f88631f9a629a232016"
      },
      "webhook": {
        "endpoint": "https://my-cool-app.com/webhook",
        "secret": "my-secret"
      }
    }
  ],
  "error": null
}
```

---

### Get a directory

Get the details of a directory connection.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
// Get the directory by tenant and product

const tenant = 'boxyhq';
const product = 'jackson';

const { data, error } =
  await directorySyncController.directories.getByTenantAndProduct(
    tenant,
    product
  );

// Get the directory by id

const directoryId = '58b5cd9dfaa39d47eb8f5f88631f9a629a232016';

const { data, error } = await directorySyncController.directories.get(
  directoryId
);
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
# Get the directory by tenant and product

curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync?tenant=boxyhq&product=jackson' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'

# Get the directory by id

curl --request GET \
  --url http://localhost:5225/api/v1/directory-sync/58b5cd9dfaa39d47eb8f5f88631f9a629a232016 \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'

```

</TabItem>
</Tabs>

#### Response

```javascript
{
  "data": {
    "id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
    "name": "App",
    "tenant": "boxyhq",
    "product": "jackson",
    "type": "onelogin-scim-v2",
    "log_webhook_events": false,
    "scim": {
      "path": "/api/scim/v2.0/58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
      "secret": "IJzAoevjD_liiiy-VkDtXg",
      "endpoint": "http://localhost:5225/api/scim/v2.0/58b5cd9dfaa39d47eb8f5f88631f9a629a232016"
    },
    "webhook": {
      "endpoint": "https://my-cool-app.com/webhook",
      "secret": "my-secret"
    }
  },
  "error": null
}
```

---

### List directory users

List all the users in a directory.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
const tenant = 'boxyhq';
const product = 'jackson';

const { data, error } = await directorySyncController.users
  .setTenantAndProduct(tenant, product)
  .list({});
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/users?tenant=boxyhq&product=jackson' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

#### Response

```javascript
{
  "data": [
    {
      "id": "6296f71e-15fd-4af4-86ee-d6623b3ef1a4",
      "first_name": "Aswin",
      "last_name": "Venugopal",
      "email": "aswin@boxyhq.com",
      "active": true,
      "raw": {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "userName": "aswin@boxyhq.com",
        "name": {
          "givenName": "Aswin",
          "familyName": "Venugopal",
          "honorificPrefix": "Sir"
        },
        "emails": [
          {
            "primary": true,
            "value": "aswin@boxyhq.com",
            "type": "work"
          }
        ],
        "displayName": "Aswin Venugopal",
        "addresses": [
          {
            "primary": true,
            "postalCode": "123"
          }
        ],
        "locale": "en-US",
        "externalId": "00u34iw1hm16RmjS95d7",
        "groups": [],
        "password": "fzXdD89d",
        "active": true,
        "id": "6296f71e-15fd-4af4-86ee-d6623b3ef1a4"
      }
    },
    {
      "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
      "first_name": "Kiran",
      "last_name": "Krishnan",
      "email": "kiran@boxyhq.com",
      "active": true,
      "raw": {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "userName": "kiran@boxyhq.com",
        "name": {
          "givenName": "Kiran",
          "familyName": "Krishnan"
        },
        "emails": [
          {
            "primary": true,
            "value": "kiran@boxyhq.com",
            "type": "work"
          }
        ],
        "displayName": "Kiran Krishnan",
        "addresses": [
          {
            "primary": true,
            "region": "Kerala"
          }
        ],
        "locale": "en-US",
        "externalId": "00u3e3cmpdDydXdzV5d7",
        "groups": [],
        "password": "XJkEp0O6",
        "active": true,
        "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92"
      }
    }
  ],
  "error": null
}
```

---

### Get a directory user

Get the details of a directory user.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
const tenant = 'boxyhq';
const product = 'flex';
const userId = 'ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92';

const users = await directorySyncController.users
  .setTenantAndProduct(tenant, product)
  .get(userId);
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/users/ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92?tenant=boxyhq&product=jackson' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

#### Response

```javascript
{
  "data": {
    "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
    "first_name": "Kiran",
    "last_name": "Krishnan",
    "email": "kiran@boxyhq.com",
    "active": true,
    "raw": {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
      ],
      "userName": "kiran@boxyhq.com",
      "name": {
        "givenName": "Kiran",
        "familyName": "Krishnan"
      },
      "emails": [
        {
          "primary": true,
          "value": "kiran@boxyhq.com",
          "type": "work"
        }
      ],
      "displayName": "Kiran Krishnan",
      "addresses": [
        {
          "primary": true,
          "region": "Kerala"
        }
      ],
      "locale": "en-US",
      "externalId": "00u3e3cmpdDydXdzV5d7",
      "groups": [],
      "password": "XJkEp0O6",
      "active": true,
      "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92"
    }
  },
  "error": null
}
```

---

### List directory groups

List all the groups in a directory.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
const tenant = 'boxyhq';
const product = 'jackson';

const users = await directorySyncController.groups
  .setTenantAndProduct(tenant, product)
  .list({});
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/groups?tenant=boxyhq&product=jackson' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

#### Response

```javascript
{
  "data": [
    {
      "id": "44d08c0e-d185-4a5e-80a6-b47a717ffaa5",
      "name": "Developers",
      "raw": {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:Group"
        ],
        "displayName": "Developers",
        "members": [
          {
            "value": "6296f71e-15fd-4af4-86ee-d6623b3ef1a4",
            "display": "aswin@boxyhq.com"
          },
          {
            "value": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
            "display": "kiran@boxyhq.com"
          }
        ],
        "id": "44d08c0e-d185-4a5e-80a6-b47a717ffaa5"
      }
    }
  ],
  "error": null
}
```

---

### Get a directory group

Get the details of a directory group.

#### Request

<Tabs>
<TabItem value="01" label="Node.js" default>

```javascript showLineNumbers
const tenant = 'boxyhq';
const product = 'jackson';
const groupId = '44d08c0e-d185-4a5e-80a6-b47a717ffaa5';

const users = await directorySyncController.groups
  .setTenantAndProduct(tenant, product)
  .get(groupId);
```

</TabItem>
<TabItem value="02" label="Shell">

```bash
curl --request GET \
  --url 'http://localhost:5225/api/v1/directory-sync/groups/44d08c0e-d185-4a5e-80a6-b47a717ffaa5?tenant=boxyhq&product=jackson' \
  --header 'Authorization: Bearer secret' \
  --header 'Content-Type: application/json'
```

</TabItem>
</Tabs>

#### Response

```javascript
{
  "data": {
    "id": "44d08c0e-d185-4a5e-80a6-b47a717ffaa5",
    "name": "Developers",
    "raw": {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group"
      ],
      "displayName": "Developers",
      "members": [
        {
          "value": "6296f71e-15fd-4af4-86ee-d6623b3ef1a4",
          "display": "aswin@boxyhq.com"
        },
        {
          "value": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
          "display": "kiran@boxyhq.com"
        }
      ],
      "id": "44d08c0e-d185-4a5e-80a6-b47a717ffaa5"
    },
    "members": [
      {
        "group_id": "44d08c0e-d185-4a5e-80a6-b47a717ffaa5",
        "user_id": "6296f71e-15fd-4af4-86ee-d6623b3ef1a4"
      },
      {
        "group_id": "44d08c0e-d185-4a5e-80a6-b47a717ffaa5",
        "user_id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92"
      }
    ]
  },
  "error": null
}
```
