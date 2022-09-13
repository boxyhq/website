---
title: Directory Sync Webhook Events
sidebar_label: Events
---

# Events and Types

SAML Jackson uses webhooks to notify your application any time changes are made to directory users and groups.

We'll notify you of the following 8 events.

<details>
  <summary>user.created - New user has been assigned to the app.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "user.created",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "038e767b-9bc6-4dbd-975e-fbc38a8e7d82",
    "first_name": "Deepak",
    "last_name": "Prabhakara",
    "email": "deepak@boxyhq.com",
    "active": true,
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
      "userName": "deepak@boxyhq.com",
      "name": {
        "givenName": "Deepak",
        "familyName": "Prabhakara"
      },
      "emails": [
        {
          "primary": true,
          "value": "deepak@boxyhq.com",
          "type": "work"
        }
      ],
      "title": "CEO",
      "displayName": "Deepak Prabhakara",
      "locale": "en-US",
      "externalId": "00u1ldzzogFkXFmvT5d7",
      "groups": [],
      "password": "7zy5TgxX",
      "active": true,
      "id": "038e767b-9bc6-4dbd-975e-fbc38a8e7d82"
    }
  }
}
```

  </p>

</details>

<details>
  <summary>user.updated - A user's properties has been updated.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "user.updated",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
    "first_name": "Kiran",
    "last_name": "Krishnan",
    "email": "kiran@boxyhq.com",
    "active": true,
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
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
      "password": "XJkEp0O6",
      "active": true,
      "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
      "groups": []
    }
  }
}
```

  </p>
</details>

<details>
  <summary>user.deleted - A user has been removed from the IdP.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "user.deleted",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
    "first_name": "Kiran",
    "last_name": "Krishnan",
    "email": "kiran@boxyhq.com",
    "active": false,
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
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
      "password": "XJkEp0O6",
      "active": false,
      "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
      "groups": []
    }
  }
}
```

  </p>
</details>

<details>
  <summary>group.created - New group has been added to the app.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "group.created",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6",
    "name": "dev",
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
      "displayName": "dev",
      "members": [],
      "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6"
    }
  }
}
```

  </p>
</details>

<details>
  <summary>group.updated - A group's properties has been updated.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "group.updated",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6",
    "name": "developers",
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
      "displayName": "developers",
      "members": [],
      "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6"
    }
  }
}
```

  </p>
</details>

<details>
  <summary>group.deleted - A group has been removed from the app.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "group.deleted",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6",
    "name": "developers",
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
      "displayName": "developers",
      "members": [],
      "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6"
    }
  }
}
```

  </p>
</details>

<details>
  <summary>group.user_added - A user has been added to a directory group.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "group.user_added",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
    "first_name": "Kiran",
    "last_name": "Krishnan",
    "email": "kiran@boxyhq.com",
    "active": true,
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
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
      "password": "XJkEp0O6",
      "active": true,
      "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
      "title": "Developer",
      "groups": []
    },
    "group": {
      "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6",
      "name": "developers",
      "raw": {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
        "displayName": "developers",
        "members": [],
        "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6"
      }
    }
  }
}
```

  </p>
</details>

<details>
  <summary>group.user_removed - A user has been removed from a directory group.</summary>
  <p>

```json
{
  "directory_id": "58b5cd9dfaa39d47eb8f5f88631f9a629a232016",
  "event": "group.user_removed",
  "tenant": "boxyhq",
  "product": "jackson",
  "data": {
    "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
    "first_name": "Kiran",
    "last_name": "Krishnan",
    "email": "kiran@boxyhq.com",
    "active": true,
    "raw": {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
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
      "password": "XJkEp0O6",
      "active": true,
      "id": "ebc31d6e-7d62-4f81-b9e5-eb5f1a04ee92",
      "title": "Developer",
      "groups": []
    },
    "group": {
      "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6",
      "name": "developers",
      "raw": {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
        "displayName": "developers",
        "members": [],
        "id": "29e3adde-b4bb-45fc-bf65-2b44f29fd6f6"
      }
    }
  }
}
```

  </p>
</details>
