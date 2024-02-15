---
title: Getting Started with SAML Jackson
description: Getting Started with SAML Single Sign-On authentication
sidebar_label: Overview
---

SAML Jackson can be used with any web application to integrate the **Single Sign-On (SSO) authentication**.

There are two ways to integrate SAML Jackson with an application. Depending on your use case, you can choose either one of them.

## As a [separate service](./service.md)

The advantage of running a separate service is that you get all of our UI tooling (Next.js application Admin Portal) out of the box to handle the SSO and Directory Sync connections with the service. The disadvantage is that you have to manage the operations of a separate service. If you are not using Node.js then this is the only option available to you.

## As an [NPM library](./npm-library.md)

This is available if you are already developing your application using Node.js.

The advantage of embedding Jackson as an npm library is that you do not have to manage the operations of a separate service. The disadvantage is that you do not readily get our UI tooling (like the Admin Portal) with this method.
