---
sidebar_position: 4
---

# SAML flow

## 1. Setting up SAML with your IdP

Please follow the instructions [here](./configure-saml-idp.md) to guide your customers in setting up SAML correctly for your product(s). You should create a copy of the doc and modify it with your custom settings, we have used the values that work for our demo apps.

**Note:** All the APIs below support both `application/x-www-form-urlencoded` and `application/json` content types. Examples below use `application/x-www-form-urlencoded`.

**Note:** OAuth 2.0 protocol uses underscore casing for the parameters, we use camel casing for all our APIs. For exampe it's `client_id` in the OAuth 2.0 flow and `clientID` in our APIs.

## 2. SAML config API

Once your customer has set up the SAML app on their Identity Provider, the Identity Provider will generate an IdP or SP metadata file. Some Identity Providers only generate an IdP metadata file but it usually works for the SP login flow as well. It is an XML file that contains various attributes Jackson needs to validate incoming SAML login requests. This step is the equivalent of setting an OAuth 2.0 app and generating a client ID and client secret that will be used in the login flow.

You will need to provide a place in the UI for your customers (The account settings page is usually a good place for this) to configure this and then call the API below.

The following API call sets up the configuration in Jackson:

```bash
curl --location --request POST 'http://localhost:5225/api/v1/saml/config' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'encodedRawMetadata=Base64(<IdP/SP metadata XML>)' \
--data-urlencode 'defaultRedirectUrl=http://localhost:3366/login/saml' \
--data-urlencode 'redirectUrl=http://localhost:3366/*' \
--data-urlencode 'redirectUrl=http://localhost:3000/*' \
--data-urlencode 'tenant=boxyhq.com' \
--data-urlencode 'product=demo' \
--data-urlencode 'name=demo-config' \
--data-urlencode 'description=Demo SAML config'
```

- `encodedRawMetadata`: Base64 encoding of the XML metadata your customer gets from their Identity Provider
- `defaultRedirectUrl`: The redirect URL to use in the IdP login flow. Jackson will call this URL after completing an IdP login flow
- `redirectUrl`: Allowed redirect URL. Repeat this field multiple times to allow multiple redirect URLs. Jackson will disallow any redirects not on this list (or not the default URL above).
- `tenant`: Jackson supports a multi-tenant architecture, this is a unique identifier you set from your side that relates back to your customer's tenant. This is normally an email, domain, an account id, or user-id
- `product`: Jackson support multiple products, this is a unique identifier you set from your side that relates back to the product your customer is using
- `name`: A friendly name to identify the SAML config
- `description`: A short description with some information of the configuration

The response returns a JSON with `clientID` and `clientSecret` that can be stored against your tenant and product for a more secure OAuth 2.0 flow. If you do not want to store the `clientID` and `clientSecret` you can alternatively use `client_id=tenant=<tenantID>&product=<productID>` and use `dummy` (or the value you set for the [secret verifier](./deploy/env-variables.md#client_secret_verifier) configuration) as the value for `client_secret` when setting up the OAuth 2.0 flow. Additionally a `idpMetadata.provider` attribute is also returned which indicates the domain of your Identity Provider.

### 2.1 SAML get config API

This endpoint can be used to return metadata about an existing SAML config. This can be used to check and display the details to your customers. You can use either `clientID` or `tenant` and `product` combination.

```bash
curl -G --location 'http://localhost:5225/api/v1/saml/config' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'tenant=boxyhq.com' \
--data-urlencode 'product=demo'
```

```bash
curl -G --location 'http://localhost:5225/api/v1/saml/config' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'clientID=<Client ID>'
```

The response returns a JSON with `idpMetadata.provider` indicating the domain of your Identity Provider. If an empty JSON payload is returned then we do not have any configuration stored for the attributes you requested.

### 2.2 SAML update config API

This endpoint can be used to update an existing SAML config.

```bash
curl --location --request PATCH 'http://localhost:5225/api/v1/saml/config' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'clientID=<Client ID>' \ /* Required */
--data-urlencode 'clientSecret=<Client Secret>' \ /* Required */
--data-urlencode 'encodedRawMetadata=Base64(<IdP/SP metadata XML>)' \
--data-urlencode 'defaultRedirectUrl=http://localhost:3366/login/saml' \
--data-urlencode 'redirectUrl=http://localhost:3366/*' \
--data-urlencode 'redirectUrl=http://localhost:3000/*' \
--data-urlencode 'tenant=boxyhq.com' \
--data-urlencode 'product=demo' \
--data-urlencode 'name=demo-config' \
--data-urlencode 'description=Demo SAML config'
```

### 2.3 SAML delete config API

This endpoint can be used to delete an existing IdP metadata.

```bash
curl -X "DELETE" --location 'http://localhost:5225/api/v1/saml/config' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'tenant=boxyhq.com' \
--data-urlencode 'product=demo'
```

```bash
curl -X "DELETE" --location 'http://localhost:5225/api/v1/saml/config' \
--header 'Authorization: Api-Key <Jackson API Key>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'clientID=<Client ID>'
--data-urlencode 'clientSecret=<Client Secret>'
```

## 3. OAuth 2.0 Flow

Jackson has been designed to abstract the SAML login flow as a pure OAuth 2.0 flow. This means it's compatible with any standard OAuth 2.0 library out there, both client-side and server-side. It is important to remember that SAML is configured per customer unlike OAuth 2.0 where you can have a single OAuth app supporting logins for all customers.

Jackson also supports the PKCE authorization flow (<https://oauth.net/2/pkce/>), so you can protect your SPAs.

If for any reason you need to implement the flow on your own, the steps are outlined below:

## 4. Authorize

The OAuth flow begins with redirecting your user to the `authorize` URL:

```bash
https://localhost:5225/api/oauth/authorize
  ?response_type=code&provider=saml
  &client_id=<clientID or tenant and product query params as described in the SAML config API section above>
  &redirect_uri=<redirect URL>
  &state=<randomly generated state id>
```

- `response_type`: `code` is the only supported type for now but maybe extended in the future
- `client_id`: Use the client_id returned by the SAML config API or use `tenant=<tenantID>&product=<productID>` to use the tenant and product IDs instead. **Note:** Please don't forget to URL encode the query parameters including `client_id`.
- `tenant`: Optionally you can provide use `dummy` as the value for `client_id` and specify the `tenant` and `product` custom attributes (if your OAuth 2.0 library allows it).
- `product`: Should be specified if specifying `tenant` above
- `redirect_uri`: This is where the user will be taken back once the authorization flow is complete
- `state`: Use a randomly generated string as the state, this will be echoed back as a query parameter when taking the user back to the `redirect_uri` above. You should validate the state to prevent XSRF attacks

## 5. Code Exchange

After successful authorization, the user is redirected back to the `redirect_uri`. The query parameters will include the `code` and `state` parameters. You should validate that the state matches the one you sent in the `authorize` request.

The code can then be exchanged for a token by making the following request:

```bash
curl --request POST \
  --url 'http://localhost:5225/api/oauth/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'grant_type=authorization_code' \
  --data 'client_id=<clientID or tenant and product query params as described in the SAML config API section above>' \
  --data 'client_secret=<clientSecret or any arbitrary value if using the tenant and product in the clientID>' \
  --data 'redirect_uri=<redirect URL>' \
  --data 'code=<code from the query parameter above>'
```

- `grant_type`: `authorization_code` is the only supported flow, for now. We might extend this in the future
- `client_id`: Use the client_id returned by the SAML config API or use `tenant=<tenantID>&product=<productID>` to use the tenant and product IDs instead. **Note:** Please don't forget to URL encode the query parameters including `client_id`.
- `client_secret`: Use the client_secret returned by the SAML config API or any arbitrary value if using the tenant and product in the clientID
- `redirect_uri`: This is where the user will be taken back once the authorization flow is complete. Use the same redirect_uri as the previous request

If everything goes well you should receive a JSON response that includes the access token. This token is needed for the next step where we fetch the user profile.

```json
{
  "access_token": <access token>,
  "token_type": "bearer",
  "expires_in": 300
}
```

## 6. Profile Request

The short-lived access token can now be used to request the user's profile. You'll need to make the following request:

```bash
curl --request GET \
  --url 'https://localhost:5225/api/oauth/userinfo' \
  --header 'authorization: Bearer <access token>'
```

If everything goes well you should receive a JSON response with the user's profile:

```json
{
  "id": <id from the Identity Provider>,
  "email": "sjackson@coolstartup.com",
  "firstName": "SAML",
  "lastName": "Jackson"
  "raw": {
    ...
  },
  "requested": {
    ...
  }
}
```

- `id`: The id of the user as provided by the Identity Provider
- `email`: The email address of the user as provided by the Identity Provider
- `firstName`: The first name of the user as provided by the Identity Provider
- `lastName`: The last name of the user as provided by the Identity Provider
- `raw`: This contains all claims attributes returned by the SAML provider
- `requested`: This contains the `tenant`, `product`, `client_id` and `state` from the authorize request. It can be used to reconcile context on the client side if needed
