---
title: Directory Sync Webhooks
sidebar_label: Webhooks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

A webhook is an HTTP request, triggered by an event in a source system and sent to a destination system (Eg: your app), often with a payload of data.

SAML Jackson use webhooks to notify your application any time changes are made to directory users and groups. You can use webhooks to trigger actions in your application, such as creating a new user in your application, or updating a user in your application based on the changes made in the directory.

## Configure Webhooks

SAML Jackson allows you to configure a webhook and secret while creating a directory sync connection either in the Admin Portal or the API. You can change the webhook and secret at any time.

- [Admin Portal](../admin-portal/directory-sync)
- [API Reference](api-reference#create-a-new-directory)

## Receive Events

SAML Jackson will make a POST request to your webhook endpoint when a change is made to a directory user or group. Your webhook endpoint should be able to receive the webhook request and respond with a 200 status code.

You can start receiving events in your app using the below steps:

- Create a webhook endpoint as an HTTP endpoint (URL) on your server.
- Create a directory sync connection and configure a webhook endpoint.
- Configure the SCIM app on your Identity Provider.
- Handle the webhook request and respond with a 200 status code.

To see the full list of events, please see the [Events and Types](events) page.

Here is a sample webhook request look like:

```json
POST /your-webhook-endpoint
Content-Type: application/json
BoxyHQ-Signature: t=xxx,s=xxxx

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
    "raw": {...}
  }
}
```

:::caution
If the webhook request fails, SAML Jackson will not retry the webhook request. A log will be created in the SAML Jackson Admin Portal if you've enabled webhook event logging.
:::

## Secure Webhooks

Use the webhook signature (**BoxyHQ-Signature**) to verify the webhook request is from SAML Jackson. The signature is generated using the **webhook secret** you configured in the directory sync connection.

Signature contains comma separated values of the following:

- **t** The timestamp of the webhook request.
- **s** The signature of the webhook request.

An example of the webhook signature is below:

```
BoxyHQ-Signature: t=1545010989801,s=xxxx
```

## Verify Webhooks Signature

You can verify the webhook signature by using the following steps:

- Extract the **t** and **s** values from the webhook signature.
- Create the signed payload string by concatenating:
  - The timestamp (t)
  - The character `.`
  - The actual JSON payload
- Compute the `HMAC-SHA256` hash of the signed payload string using your webhook secret.
- Compare the signature in the request header with the computed signature.

Once the signature is verified, you can use the webhook payload to perform any action in your application.

```javascript showLineNumbers
// Your webhook secret
const secret = 'your-secret-here';

// The signature header from the webhook request.
const signatureHeader =
  't=1657016083300,s=9ece981128a8f2a96f95e3d0be68c37b825d5c15f5b8982e0b7e198a76621866';

// JSON body from the webhook request.
const body = {...}

const [t, s] = signatureHeader.split(',');

const timestamp = t.split('=')[1];
const signature = s.split('=')[1];

const signedPayload = `${timestamp}.${JSON.stringify(body)}`;

const expectedSignature = crypto
  .createHmac('sha256', secret)
  .update(signedPayload)
  .digest('hex');

// Compare the expectedSignature to the signature
if(signature === expectedSignature) {
  // The webhook request is valid
} else {
  // The webhook request is invalid
}
```
