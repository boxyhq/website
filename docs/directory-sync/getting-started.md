---
title: Getting Started
sidebar_label: Getting Started
---

There are two ways to integrate the Directory Sync within your application.

## As a service

The advantage of running a separate service is that you get all of our UI tooling (like the Admin Portal) with the service. The disadvantage is that you have to manage the operations of a separate service.

**If you are not using Node.js then this is the only option available to you.**

Read more about [how to run the Jackson service](/docs/jackson/deploy/service)

Jackson use webhooks to notify your application any time changes are made to directory users and groups. You can use webhooks to trigger actions in your application, such as creating a new user in your application, or updating a user in your application based on the changes made in the directory.

## As an NPM library

This is available if you are already developing your application using Node.js.

The advantage of embedding Jackson as an NPM library is that you do not have to manage operations of a separate service.
The disadvantage is that you do not readily get our UI tooling (like the Admin Portal) with this method.

```bash
npm i --save @boxyhq/saml-jackson
```

See the [API Reference](/docs/directory-sync/api-reference) to understand more about the available methods.
