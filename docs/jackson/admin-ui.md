---
sidebar_position: 8
---

# Admin UI

If you are running Jackson as a [service](deploy#as-a-separate-service), we also provide an **Admin UI** out of the box. 
You can [add](saml-flow#2-saml-config-api), [edit](saml-flow#22-saml-update-config-api) or [delete](saml-flow#22-saml-delete-config-api) SAML configurations from this UI.
### SignIn


We are using [Magic Links](https://next-auth.js.org/providers/email) to authenticate users to the UI. 

You'll need to set the below in the [environment](env-variables#admin-ui):
   1. SMTP Server details.
   2. Access Control List which is an array of emails or glob patterns: ```tonystark@gmail.com,*@marvel.com```.

Open the endpoint for jackson service (http://localhost:5000 if running locally) in the browser. On entering the valid email, you'll receive an email containing the link to login. 