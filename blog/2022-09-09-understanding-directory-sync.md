---
slug: understanding-scim-and-directory-sync
title: Understanding SCIM and Directory Sync
author: Kiran K
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/tokirankrishnan
author_image_url: /images/authors/kiran.jpg
tags_disabled:
  [enterprise-readiness, engineering, saml-jackson, directory-sync, scim]
image: /images/docs/jackson/directory-sync-flow.png
---

This article will walk you through everything you should know about SCIM and Directory Sync.

## What is SCIM?

System for Cross-domain Identity Management (SCIM) is an open standard that allows for the automation of user provisioning (Directory Sync).

SCIM facilitates user identity data communication between Identity Providers (Okta, OneLogin, etc.) and Service Providers (Enterprise SaaS apps).

## Why should you care about SCIM?

Many companies manually onboard and offboard users, which consumes many IT resources and time.

User lifecycle management (ULM) begins when employees start their job and continue until they leave the company. ULM is all about provisioning and de-provisioning users when they join an organization.

For IT departments, this means creating an account for the new employees in the cloud apps they need to use after starting their job. Also, IT departments must ensure that when those employees leave, they revoke access to those accounts.

Smaller organizations might address these procedures manually, but the process can become error-prone and time-consuming when done at scale. This is where the SCIM and Directory Sync come to the organization's rescue.

## What is Directory Sync?

Directory sync helps organizations automate the provisioning and de-provisioning of their users.

As a result, it streamlines the user lifecycle management process by saving valuable organizational hours, creating a single truth source of the user identity data, and facilitating them to keep the data secure.

## How does the Directory Sync work?

Directory sync allows programmatic access to the user identity data via a standard protocol (SCIM).

Directory sync implementation typically involves a client and a server. A client is an identity provider (IDP) with a directory of user identities. A service provider (SP) is an enterprise SaaS app that needs a subset of data from those identities.

When you make changes to the user identities, the changes are automatically synced to the SP according to the SCIM protocol. SP can now process this data according to the way they want.

Some common user identity changes include adding new users to the organization, updating existing users, removing users from the organization, adding users to groups, etc.

Technically, SCIM is a set of APIs that allows you to manipulate the users and group objects and expose these data as JSON through the REST endpoints.

## How to add Directory Sync to your SaaS app?

Building Directory sync implementation yourself can be tedious and time-consuming for any engineering team.

Below are some questions the engineering team should answer before starting building Directory sync.

- How do we support multiple identity providers?
- How much effort should the team put into support & maintenance?
- Do we have developers with good knowledge of SCIM and its security?
- Is it worth building the Directory sync ourselves?

In short, building Directory sync yourself is not a good idea. It requires a lot of tedious engineering work and ongoing maintenance.

The best alternative is an open-source dedicated Directory Sync implementation provider like SAML Jackson from BoxyHQ.

## Directory Sync from BoxyHQ

BoxyHQ can help enterprises to add Directory Sync to any SaaS app with just a few lines of code.

Enterprise SaaS apps can provide a Webhook endpoint to SAML Jackson, and Jackson will notify the Webhook every time a change occurs in the user identity data within the IDP.

![Directory Sync Flow](/images/docs/jackson/directory-sync-flow.png)

In short, Jackson hides all the complexities involved with Directory Sync implementation and makes your integration easier.

BoxyHQ's Directory Sync implementation supports identity providers such as Okta, OneLogin, Azure AD, and JumpCloud. We're looking forward to adding more identity providers in future releases.

Here are a few critical aspects that make [BoxyHQ's Directory Sync implementation](/docs/directory-sync/overview) stand out.

- An open-source solution.
- Allows you to keep control of your data.
- Support multiple identity providers.
- Allows you to listen to six critical SCIM events.

## Final Thoughts

Directory Sync is a valuable investment for every organization seeking efficiency and security in their user lifecycle management system.

If you are interested in becoming enterprise-ready without the hassle, then let's chat! You can book a free consultation call and talk with our CEO about how we can help. So let's start the journey together.
