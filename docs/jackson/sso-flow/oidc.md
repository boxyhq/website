# OpenId Connect (OIDC)

**Note:** All the APIs below support both `application/x-www-form-urlencoded` and `application/json` content types. Examples below use `application/x-www-form-urlencoded`.

**Note:** OAuth 2.0 protocol uses underscore casing for the parameters, we use camel casing for all our APIs. For example, it's `client_id` in the OAuth 2.0 flow and `clientID` in our APIs.

## 1. Setting up OIDC client/app with your IdP

#### TODO

## 2. OIDC connection API

### 2.1 OIDC add connection API

Once your customer has set up the OIDC app on their Identity Provider, the Identity Provider will generate a clientId and clientSecret.

You will need to provide a place in the UI for your customers (The account settings page is usually a good place for this) to configure this and then call the API below.

The following API call sets up the connection in Jackson:

```bash
curl --location --request POST 'http://localhost:5225/api/v1/oidc/connection' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'encodedRawMetadata=Base64(<IdP/SP metadata XML>)' \
--data-urlencode 'defaultRedirectUrl=http://localhost:3366/login/saml' \
--data-urlencode 'oidcDiscoveryUrl=<well-known url of OIDC Provider>' \
--data-urlencode 'oidcClientId=<clientId of IdP Registered App>' \
--data-urlencode 'oidcClientSecret=<clientSecret of IdP Registered App>' \
--data-urlencode 'redirectUrl=http://localhost:3366/*' \
--data-urlencode 'redirectUrl=http://localhost:3000/*' \
--data-urlencode 'tenant=boxyhq.com' \
--data-urlencode 'product=demo' \
--data-urlencode 'name=demo-connection' \
--data-urlencode 'description=Demo SAML connection'
```

- `oidcDiscoveryUrl`: OpenId Providers supporting discovery make the metadata available at the endpoint obtained by concatenating issuer and /.well-known/openid-configuration
- `oidcClientId`: The client identifier issued to the client during the IdP registration process.
- `oidcClientSecret`: The client secret issued to the client during the IdP registration process.
- `defaultRedirectUrl`: The redirect URL to use in the IdP login flow. Jackson will call this URL after completing an IdP login flow
- `redirectUrl`: Allowed redirect URL. Repeat this field multiple times to allow multiple redirect URLs. Jackson will disallow any redirects not on this list (or not the default URL above).
- `tenant`: Jackson supports a multi-tenant architecture, this is a unique identifier you set from your side that relates back to your customer's tenant. This is normally an email, domain, an account id, or user-id
- `product`: Jackson support multiple products, this is a unique identifier you set from your side that relates back to the product your customer is using
- `name`: A friendly name to identify the SAML connection
- `description`: A short description with some information of the connection

The response returns a JSON with `clientID` and `clientSecret` that can be stored against your tenant and product for a more secure OAuth 2.0 flow. If you do not want to store the `clientID` and `clientSecret` you can alternatively use `client_id=tenant=<tenantID>&product=<productID>` and use `dummy` (or the value you set for the [secret verifier](../deploy/env-variables.md#client_secret_verifier) env) as the value for `client_secret` when setting up the OAuth 2.0 flow. Additionally a `idpMetadata.provider` attribute is also returned which indicates the domain of your Identity Provider.
