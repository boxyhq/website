---
sidebar_position: 8
---

# Admin UI

If you are running Jackson as a [service](deploy#as-a-separate-service), we also provide an **Admin UI** out of the box. 
You can [add](http://localhost:4000/docs/jackson/getting-started#2-saml-config-api), edit or [delete](http://localhost:4000/docs/jackson/getting-started#22-saml-delete-config-api) SAML configurations from this UI.
### SignIn

We are using [Magic Links](https://next-auth.js.org/providers/email) to authenticate users to the UI. 

You'll need to set the below in the [environment](env-variables#admin-ui):
   1. SMTP Server details.
   2. Access Control List which is an array of emails or glob patterns: ```tonystark@gmail.com,*@marvel.com```.
