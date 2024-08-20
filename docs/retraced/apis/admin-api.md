---
title: Admin API
sidebar_label: Admin API
description: Admin API
---

# Admin API

### [Swagger JSON](https://raw.githubusercontent.com/retracedhq/retraced/release/swagger.json) | [API Console](https://boxyhq.com/audit-logs-api#/tag/admin-api)

## Login API

This endpoint authenticates an admin user and returns a user object along with a token for further API requests.

### HTTP Request

`POST http://localhost:3000/auditlog/admin/v1/user/_login`

### Headers

- `Authorization: token=dev`
- `Content-Type: application/json`

### Request Body

```json
{
  "claims": {
    "upstreamToken": "ADMIN_ROOT_TOKEN",
    "email": "user@boxyhq.com"
  }
}
```

### Response

```json
{
  "user": {
    "email": "user@boxyhq.com",
    "id": "9ad08d2411744fa0aa8fd06cfccb03ed",
    "timezone": "US/Pacific"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5YWQwOGQyNDExNzQ0ZmEwYWE4ZmQwNmNmY2NiMDNlZCIsImlhdCI6MTcyMTc0MTk2MywiZXhwIjoxNzIzNTU2MzYzfQ.yG0pyL1zOfEiRSW8MAD_nx8SXQJ68ApBzKYUDup9mdk",
  "adminToken": {
    "id": "dbbc691661e44a579a5dc700a30ca278",
    "userId": "9ad08d2411744fa0aa8fd06cfccb03ed",
    "tokenBcrypt": "$2a$12$uVSlNF1xuFF.IAKnJSN2aejUeEPSn.sGAt/iE8UoTelH3FrIu7ju2",
    "token": "678f793002c5496cb6130849a092970b",
    "disabled": false,
    "createdAt": "2024-07-23T13:39:23.543Z"
  }
}
```

## Authentication

After successful login, for further API requests, the Admin API expects a `Authorization` header with the value computed using the response of the login API.

You need to pass the `id` and `token` from the `adminToken` object in the response of the login API. Replace `admin_token` with the actual `ADMIN_ROOT_TOKEN` value.

```
Authorization: id=dbbc691661e44a579a5dc700a30ca278 token=678f793002c5496cb6130849a092970b admin_token=ADMIN_ROOT_TOKEN
```
