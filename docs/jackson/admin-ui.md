# Admin UI

If you are running Jackson as a [service](./deploy/service.md), we also provide an **Admin UI** out of the box. You can [add](./saml-flow.md#21-saml-add-config-api), [edit](./saml-flow.md#23-saml-update-config-api) or [delete](./saml-flow.md#24-saml-delete-config-api) SAML configurations from this UI.

SAML Jackson comes with an Admin interface that enables you to manage SAML configurations via UI.

We use [Magic Links](https://next-auth.js.org/providers/email) to authenticate users to the UI.

You'll need to set the following configuration in the [environment](./deploy/env-variables.md#admin-ui-configuration):

1.  SMTP Server details, so we can send you the email with the magic link.
2.  Access Control List which is an array of emails or glob patterns. Only these users will be allowed access to the Admin UI. Example: `tonystark@gmail.com,*@marvel.com`.

Open the endpoint for jackson service ([http://localhost:5225](http://localhost:5225) if running locally) in the browser. On entering the valid email, you'll receive an email containing the link to login.

## Sign into Admin UI

Follow the below steps to login into the Admin dashboard.

- Visit the path `/api/auth/signin` on your app. The page will display a sign-in page with a text box to enter the email address.
- Enter the email address that matches the `NEXTAUTH_ACL` and click the button **Sign in with Email**.
- Open the inbox and you'll see an email from Jackson.
- Open that email and click the button **Sign in**. Now you've successfully logged into the SAML Jackson admin UI.

## Add SAML Configurations

To start using the SAML Jackson, you've to add at least one SAML configuration. Once you've set up the SAML app on your Identity Provider, the Identity Provider will generate a SAML Metadata file.

The SAML metadata file contains information about the various SAML Authorities that can be used in SAML 2.0 protocol message exchanges. This metadata identifies Identity Provider endpoints and the certificates to secure SAML 2.0 message exchanges.

Download the SAML Metadata file from your IdP and follow the below steps for adding the SAML configuration.

- Go to **SAML Configurations** and click the button **New**
- Give your new configuration a **name**
- Add your **Tenant** (Eg: boxyhq.com) and **Product** (Eg: flex)
- Add **Allowed redirect URLs**
- Add **Default redirect URL**
- Paste the **Raw IdP XML**
- Click the button **Save Changes**

Now you've successfully installed SAML Jackson and added your first SAML configuration.
