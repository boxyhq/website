# Admin API

### [Swagger JSON](https://api.replicated.com/auditlog/admin/v1/swagger.json) | [API Console](https://retraced.readme.io/v1.0/reference)

## Authentication

The Admin API expects a base64-ecoded hmac-signed [JSON Web Token](https://tools.ietf.org/html/rfc7519) in an `Authorization` header:

```
Authorization: WU9VUl9TSUdORURfSldUX1RPS0VOX18K...
```