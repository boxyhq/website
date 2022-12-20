---
title: Publisher API
sidebar_label: Publisher API
description: Publisher API
---

# Publisher API

### [Swagger JSON](http://localhost:3000/auditlog/publisher/v1/swagger.json) | [API Console](https://retraced.readme.io/v1.0/reference)

The Publisher API is the API that most applications will embed into a production system. This API contains the methods necessary to send new events into Retraced, create [viewer tokens](/docs/retraced/getting-started/embedded-viewer) and to programatically search events when the embedded viewer is not being used.

When possible, it's recommended to use one of the supported [SDKs](/docs/retraced/sdks/available-sdks) as these provide an easier way to get started.

To consume the Publisher API directly, we publish a Swagger spec that is both [documented](https://retraced.readme.io/reference) and available in a [raw json object](http://localhost:3000/auditlog/publisher/v1/swagger.json).
The endpoints for reporting events are `/project/{project_id}/event` and `/project/{project_id}/event/bulk`. The bulk endpoint is for reporting multiple events in a single call. Clients using the bulk endpoint should expect longer response times when submitting large numbers of events.

## Body

We send an event json to `/project/{project_id}/event` API.

Following are the `mandatory` fields.

```json
{
    "action": "action-name",
    "crud": "c" | "r" | "u" | "d",
    "actor": {
        "id": "actor-id",
        "name": "actor-name"
}
```

In case of `/project/{project_id}/event/bulk` API we will send an array of events like below,

```json
{
    "events": [
        {
            "action": "action-name",
            "crud": "c" | "r" | "u" | "d",
            "actor": {
                "id": "actor-id",
                "name": "actor-name"
            },
        },
        {
            "action": "action-name",
            "crud": "c" | "r" | "u" | "d",
            "actor": {
                "id": "actor-id",
                "name": "actor-name"
            }
        }
    ]
}
```

## Authentication

The Publisher API endpoints expect the token to be provided in a header of the form

```
Authorization: token=YOUR_PUBLISHER_TOKEN
```

## Publisher API Tokens

Publisher API tokens can be managed from the [Retraced admin website](https://app.retraced.io)
in the "Settings" section.
