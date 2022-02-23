---
sidebar_position: 8
---

# Admin UI

If you are running Jackson as a [service](./deploy/service.md), we also provide an **Admin UI** out of the box. You can [add](./saml-flow.md#2-saml-config-api), [edit](./saml-flow.md#22-saml-update-config-api) or [delete](./saml-flow.md#22-saml-delete-config-api) SAML configurations from this UI.

## Login

We use [Magic Links](https://next-auth.js.org/providers/email) to authenticate users to the UI.

You'll need to set the following configuration in the [environment](./deploy/env-variables.md#admin-ui-configuration):

   1. SMTP Server details, so we can send you the email with the magic link.
   2. Access Control List which is an array of emails or glob patterns. Only these users will be allowed access to the Admin UI. Example: ```tonystark@gmail.com,*@marvel.com```.

Open the endpoint for jackson service ([http://localhost:5225](http://localhost:5225) if running locally) in the browser. On entering the valid email, you'll receive an email containing the link to login.
