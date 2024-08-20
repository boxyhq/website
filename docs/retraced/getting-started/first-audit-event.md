# The First Audit Event

Getting started with Retraced is easy. The best way to start is to pick a single event to start sending to confirm that everything is set up right. If your site has a login event, it's a perfect first event because it covers most of the scenarios that can be tricky when starting to audit log. Login events can have both a successful and failed response, it can be anonymous or authenticated and it may or may not belong to a group.

Remembering the basics of [how to audit log](/docs/retraced/how-to-audit-log), you should find a place in your code that is guaranteed to be executed after a login event.

## Publishing Guide

### Getting a Token

First step is to [get a token for the publisher api](/docs/retraced/apis/publisher-api#publisher-api-tokens) from
the Retraced admin site.

### Sending Events

Next, in your Login API handler, you'll want to add a call to the Publisher API's after each login attempt. The Create Event call can be made using one of the [Retraced SDKs](/docs/retraced/sdks/available-sdks), or by making a request to `POST /publisher/v1/project/{project_id}/event` as described in the [Publisher API Documentation](/docs/retraced/apis/publisher-api) and the [Publisher Swagger Specification](https://raw.githubusercontent.com/retracedhq/retraced/release/swagger.json).

### Verifying Event Hashes

The response from the Publisher API will include a hash of the received event computed according to the Retraced [event hashing formula](/docs/retraced/architecture/hashing-formula). You can choose to verify this hash to ensure
the event your api sent is identical to the one received by Retraced. If you are using one of the [Retraced SDKs](/docs/retraced/sdks/available-sdks), you can take advantage of built-in functionality for verifying event hashes.

![flow](https://www.lucidchart.com/publicSegments/view/a68dd763-6aa0-4835-be1f-91f7728befc7/image.png)
