# Hashing Formula

When both the sender and the receiver of a message independently calculate a digest of the message, it's a proven way to ensure that both sides have the same content. But both sides needs to have a reference that describes how to calculate the digest. This document describes the specification that the Retraced API uses to calculate a message digest.

To calculate the digest, Retraced will build a colon (:) delimited string of all the fields, and then calculate a SHA256 digest. Empty or missing fields are not ignored, but are included in the digest as empty strings. Individual fields are percent-escaped before being added to the string.

The order of the fields is important, and is defined as:

1. `event_id`: The string ID that is returned from the Retraced API when calling create event.
1. `action`: The [action](/docs/retraced/how-to-audit-log/actions/) parameter provided when creating an event.
1. `target_id`: The ID of the [target](/docs/retraced/how-to-audit-log/targets/) parameter provided when creating an event. If no target was provided, this is an empty string.
1. `actor_id`: The ID of the [actor](/docs/retraced/how-to-audit-log/actors/) parameter provided when creating an event. If no actor was provided, this is an empty string.
1. `group_id`: The ID of the [group]/(/docs/retraced/architecture/groups/) parameter provided when creating an event. If no group was provided, this is an empty string.
1. `source_ip`: The IP address sent with the event. If no IP address was known, this is an empty string.
1. `is_failure`: An integer ("1" or "0") representation of the is_failure parameter provided when creating an event. This is required, and will default to "0".
1. `is_anonymous`: An integer ("1" or "0") representation of the is_anonymous parameter provided when creating an event. This is required, and will default to "0".
1. `fields`: A semicolon (`;`) separated list of the field=value parameters provided in the event. The fields are sorted alphabetically by the key name before encoding. A trailing `;` is included, if there are fields. If there are no fields, a single colon (`:`) should be appended in place of the fields list.

## Examples

### Simple Event

Given the following login audit event:

```json
{
  "action": "user.login",
  "group": {
    "id": "group-id",
    "name": "group-name"
  },
  "created": "2017-01-01T00:00:00.000000000Z",
  "crud": "c",
  "description": "User \"someone@someplace.com\" logged in",
  "source_ip": "8.8.8.8",
  "actor": {
    "id": "actor-id",
    "name": "actor-name",
    "type": "user",
    "url": "https://my.site.com/account/actor-id"
  },
  "is_failure": false,
  "is_anonymous": false
}
```

A string is built with the fields, as described above:

```
event-id:user.login::actor-id:group-id:8.8.8.8:0:0:
```

Finally, a SHA256 digest of the above string returns:

```
1ee7c214a6bc2ab3e4f921b7c98a148357eebb56081fd68d88bd25acdec45332
```

### With Fields

Given the following audit event:

```json
{
  "action": "document.share",
  "group": {
    "id": "group-id",
    "name": "group-name"
  },
  "created": "2017-01-01T00:00:00.000000000Z",
  "crud": "u",
  "target": {
    "id": "target-id",
    "name": "document-name",
    "type": "document",
    "url": ""
  },
  "description": "Shared document with \"another@user.com\"",
  "source_ip": "8.8.8.8",
  "actor": {
    "id": "actor-id",
    "name": "a@user.com",
    "type": "user",
    "url": "https://my.site.com/account/actor-id"
  },
  "fields": {
    "resulting_permission": "view,edit",
    "permission_granted": "view"
  },
  "is_failure": false,
  "is_anonymous": false
}
```

A string is built with the fields, as described above:

```
event-id:document.share:target-id:actor-id:group-id:8.8.8.8:0:0:permission_granted=view;resulting_permission=view,edit;
```

Finally, a SHA256 digest of the above string returns:

```
e3412f11c1ed3b592d5333441880373ede3b774bc62914ed9317d3affaec9048
```

### Escaping Hash Parameters

Any values used for hashing should have the following replacements applied:

1. `%` -- any percent symbols (`%`) should be converted to `%25`
1. `:` -- any colons (`:`) should be converted to `%3A`

Further, any values in the `fields` section should also have the following escapes applied in a second pass:

1. `=` -- any equals signs (`=`) should be converted to `%3D`
1. `;` -- any semicolons (`;`) should be converted to `%3B`
