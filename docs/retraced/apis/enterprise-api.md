---
title: Enterprise API
sidebar_label: Enterprise API
description: Enterprise API
---

# Enterprise API

### [Swagger JSON](https://raw.githubusercontent.com/retracedhq/retraced/release/swagger.json) | [API Console](https://boxyhq.com/audit-logs-api#tag/enterprise-api)

## Overview

The Enterprise API is the API that the end customer (the enterprise IT administrator) will consume to pull their organization events and ingest it into their own internal systems.

## Authentication

The Enterprise API endpoints expect the token to be provided in a header of the form

```
Authorization: token=YOUR_ENTERPRISE_TOKEN
```

## Getting an Enterprise API Token

There are currently two ways to manage Enterprise API tokens.

- Most often, end customers create and manage Enterprise IT tokens using the UI in the [Embedded Viewer](/docs/retraced/getting-started/embedded-viewer)
- There are also endpoints in the [Publisher API](/docs/retraced/apis/publisher-api) that
  allow a vendor to create, edit, and delete Enterprise API tokens

Note that to allow end customers to manage Enterprise API tokens in the embedded viewer,
the `is_admin` query parameter must be set to `true` when [requesting a token to initialize the embedded viewer](https://boxyhq.com/audit-logs-api#/tag/publisher-api/POST/publisher/v1/project/{projectId}/group/{groupId}/enterprisetoken)
