# Admin UI

SAML Jackson comes with an Admin interface that allows you to manage SSO Connections via UI. To enable the Admin UI, make sure you deploy the [Jackson as a service](./deploy/service.md).

You can `add`, `update` or `delete` SSO Connections from the UI. For API Reference see [SSO Flow > SSO Connection API ](./sso-flow/index.md#2-sso-connection-api)

## Sign into Admin UI

We use [Magic Links](https://next-auth.js.org/providers/email) to authenticate users to the UI.

You'll need to set the following configuration in the [environment](./deploy/env-variables.md#admin-ui-configuration):

1. SMTP Server details, so we can send you the email with the magic link.
2. Access Control List which is an array of emails or glob patterns. Only these users will be allowed access to the Admin UI. Example: `tonystark@gmail.com,*@marvel.com`.

Follow the below steps to login into the Admin dashboard.

- Visit the path `/api/auth/signin` on your app. The page will display a sign-in page with a text box to enter the email address.
- Enter the email address that matches the `NEXTAUTH_ACL` and click the button **Sign in with Email**.
- Open the inbox and you'll see an email from Jackson.
- Open that email and click the button **Sign in**. Now you've successfully logged into the SAML Jackson admin UI.

## Add SSO Connections

To start using SAML Jackson, you need to add SSO Connections. Refer to the steps below on adding [SAML](#saml) / [OIDC](#oidc) connections.

### SAML

Once you've set up the SAML app on your Identity Provider, the Identity Provider will generate a SAML Metadata file.

The SAML metadata file contains information about the various SAML Authorities that can be used in SAML 2.0 protocol message exchanges. This metadata identifies Identity Provider endpoints and the certificates to secure SAML 2.0 message exchanges.

Download the SAML Metadata file from your IdP and follow the below steps for adding the SAML connection.

- Go to **SSO Connections** in the Admin UI and click the button **New Connection**.
- Choose **SAML** as the type.
- Give your new connection a **name**.
- Add your **Tenant** (Eg: boxyhq.com) and **Product** (Eg: flex).
- Add **Allowed redirect URLs**.
- Add **Default redirect URL**.
- Paste the **Raw IdP XML**.
- If **ForceAuthn** is checked, it means that the user will be forced to re-authenticate at SAML IdP, even if they have an active session.
- Click the button **Save Changes**.

Now you've successfully added your first SAML connection.

### OIDC

Once you've registered the OIDC app on your Identity Provider, the Identity Provider will generate a clientId and clientSecret.

The clientSecret will be used to authenticate the oidc client (in this case jackson) and obtain the access_token.

Also get the OpenID provider [discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig) endpoint (usually ending in `/.well-known/openid-configuration`) and follow the below steps for adding the OIDC connection.

- Go to **SSO Connections** in the Admin UI and click the button **New Connection**.
- Choose **OIDC** as the type.
- Give your new connection a **name**.
- Add your **Tenant** (Eg: boxyhq.com) and **Product** (Eg: flex).
- Add **Allowed redirect URLs**.
- Add **Default redirect URL**.
- Enter the URL for OpenID Provider discovery which exposes the Provider Metadata.
- Paste the **clientId** and **clientSecret** values into Client ID [OIDC Provider]/Client Secret [OIDC Provider] fields in the UI.
- Click the button **Save Changes**.

Now you've successfully added your first OIDC connection.
