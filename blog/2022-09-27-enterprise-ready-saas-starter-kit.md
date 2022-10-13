---
slug: enterprise-ready-saas-starter-kit
title: Enterprise-ready SaaS Starter Kit
author: Kiran K
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/tokirankrishnan
author_image_url: https://boxyhq.com/img/team/kiran.jpg
tags: [enterprise-readiness, nextjs-template, saas-starter-kit]
---

Enterprise-ready SaaS Starter Kit is a **Next.js** based SaaS Starter Kit that can save hundreds of development hours while building [enterprise-ready SaaS apps](/blog/enterprise-readiness-made-simple).

[Kickstart your enterprise app development with Next.js SaaS Starter Kit](https://github.com/boxyhq/saas-starter-kit)

Let's look at some of the enterprise-ready features the SaaS kit offers.

## SAML SSO

SAML stands for Security Assertion Markup Language. It is an XML-based open standard for transferring identity data between an identity provider (IdP) and a service provider (SP).

[Single Sign On (SSO)](/blog/understanding-saml-sso-the-basics-from-the-solution-providers-side) allows your customers to manage their team's users outside your built-in user table.

SAML SSO is integrated with the help of [SAML Jackson](https://github.com/boxyhq/jackson)

## Directory Sync (SCIM)

[Directory sync](/blog/understanding-scim-and-directory-sync) helps organizations automate the provisioning and de-provisioning of their users.

As a result, it streamlines the user lifecycle management process by saving valuable organizational hours, creating a single truth source of the user identity data, and facilitating them to keep the data secure.

Directory Sync is integrated with the help of [SAML Jackson](https://github.com/boxyhq/jackson#directory-sync)

## Webhooks & Events

Webhooks are a way for systems to notify external applications that a specific event has occurred in your SaaS app without receiving a request.

Webhooks are a great solution if the client does not know when an event will occur and wants to be notified in real-time.

Webhook is integrated with the help of [Svix](https://github.com/svix/svix-webhooks)

## Team Management

Teams describe the functionality that enables modern software to be coordinated and managed.

Through Teams, SaaS app users invite others to collaboratively use the application with them by creating an account.

## Other Features

Let's also look at other standard features the SaaS kit offers.

- Create account
- Sign in with Email and Password
- Sign in with Magic Link
- Update account
- Manage team
- Manage team members
- Invite users to the team
- Accept invitation

## Getting Started

Please follow these simple steps to get a local copy up and running.

### 1. Setup

Clone or fork this GitHub repository

```bash
git clone https://github.com/boxyhq/saas-starter-kit.git
```

### 2. Go to the project folder

```bash
cd saas-starter-kit
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up your .env file

Duplicate `.env.example` to `.env`.

```bash
cp .env.example .env
```

### 5. Set up database schema

```bash
npx prisma db push
```

### 6. Start the server

In a development environment:

```bash
npm run dev
```

### 7. Start the Prisma Studio

Prisma Studio is a visual editor for the data in your database.

```bash
npx prisma studio
```

## Contributing guide

Contributions make the open-source community a fantastic place to learn, inspire, and create. Any contributions you make are greatly appreciated.

We also invite new supporters to contribute to the repository if you are interested.
