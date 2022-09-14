# Automated Audit Events

When an end customer uses a Viewer or Enterprise token to view logs directly from the Retraced API, Retraced will record the read event in your audit log.

You can configure these events with the optional `view_log_action` parameter when you create a new Viewer or Enterprise token through the Publisher API. The default action is "audit.log.view". Viewer tokens also require an `actor_id` parameter at creation time, while Enterprise token audit events generate an `actor.id` from the token.

## Viewer Example

Suppose a viewer token was created with `group_id=example.com`, `actor_id=user@example.com` and `action=viwer.view_logs`. When the token is used, an event like this will be inserted into your audit log:

```json
{
  "action": "viewer.view_logs",
  "crud": "r",
  "actor": {
    "id": "user@example.com"
  },
  "group": {
    "id": "example.com"
  },
  "description": "GET http://localhost:3000/auditlog/viewer/v1/graphql",
  "source_ip": "1.1.0.180"
}
```

## Enterprise Example

An Enterprise token created with `group_id` "example.com" and no `view_log_action` would generate an event similar to this when used:

```json
{
  "action": "audit.log.view",
  "crud": "r",
  "actor": {
    "id": "enterprise:1234567"
  },
  "group": {
    "id": "example.com"
  },
  "description": "GET http://localhost:3000/auditlog/enterprise/v1/graphql",
  "source_ip": "1.1.0.180"
}
```

## Viewer Enterprise Token Self-Management

Another instance where Viewers can perform actions bypassing your API is when creating, retrieiving, updating, or deleting their own Enterprise tokens. Retraced will add these events to your audit log on your behalf. Note that Retraced does not insert audit events when Enterprise tokens are managed through the Publisher API, since you have the option of sending your own audit events for these actions.

An example of an event logged when a Viewer creates their own Enterpise token is:

```json
{
  "action": "eitapi_token.create",
  "crud": "c",
  "actor": {
    "id": "user@example.com"
  },
  "group": {
    "id": "example.com"
  },
  "description": "POST http://localhost:3000/auditlog/viewer/v1/project/02211171900c4172b4a80d23855961c5/eitapi_token",
  "source_ip": "1.1.0.180"
}
```
