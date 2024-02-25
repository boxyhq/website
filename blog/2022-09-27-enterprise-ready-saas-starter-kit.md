---
slug: enterprise-ready-saas-starter-kit
title: Enterprise-ready SaaS Starter Kit
author: Kiran K
author_title: Senior Developer @BoxyHQ
author_url: https://twitter.com/tokirankrishnan
author_image_url: /images/authors/kiran.jpg
tags_disabled: [enterprise-readiness, nextjs-template, saas-starter-kit]
---

Enterprise-ready SaaS Starter Kit is a **Next.js** based SaaS Starter Kit that can save hundreds of development hours while building [enterprise-ready SaaS apps](/blog/enterprise-readiness-made-simple).

[Kickstart your enterprise app development with Next.js SaaS Starter Kit](https://github.com/boxyhq/saas-starter-kit)

Check out the [video tutorial](https://youtu.be/oF8QIwQIhyo) that walks through setting up your local environment and running enterprise-ready features the SaaS kit offers.

## SAML SSO

SAML stands for Security Assertion Markup Language. It is an XML-based open standard for transferring identity data between an identity provider (IdP) and a service provider (SP).

[Single Sign On (SSO)](/blog/understanding-saml-sso-the-basics-from-the-solution-providers-side) allows your customers to manage their team's users outside your built-in user table.

SAML SSO is integrated with the help of [SAML Jackson](https://github.com/boxyhq/jackson)

## Directory Sync (SCIM)

[Directory sync](/blog/understanding-scim-and-directory-sync) helps organizations automate the provisioning and de-provisioning of their users.

As a result, it streamlines the user lifecycle management process by saving valuable organizational hours, creating a single truth source of the user identity data, and facilitating them to keep the data secure.

Directory Sync is integrated with the help of [SAML Jackson](https://github.com/boxyhq/jackson#directory-sync)

## Audit Logs

Provide enterprise customers with the ability to record and search events that happen within your application. With our simple integration, you can become compliant fast and save your team from building complex solutions from scratch.

Organizations gain the ability to monitor the flow of data and be alerted to any breaches. Audit logs help to pinpoint any misuse of information and ensure that data policies are followed.

## Webhooks & Events

Webhooks are a way for systems to notify external applications that a specific event has occurred in your SaaS app without receiving a request.

Webhooks are a great solution if the client does not know when an event will occur and wants to be notified in real-time.

Webhook is integrated with the help of [Svix](https://github.com/svix/svix-webhooks)

## Team Management

Teams describe the functionality that enables modern software to be coordinated and managed.

Through Teams, SaaS app users invite others to collaboratively use the application with them by creating an account.

## Other Features

Now, let's take a look at the other conventional features that the SaaS kit provides. 🥇

- Create account
- Sign in with Email and Password
- Sign in with Magic Link
- Sign in with SAML SSO
- Sign in with Google [[Setting up Google OAuth](https://support.google.com/cloud/answer/6158849?hl=en)]
- Sign in with GitHub [[Creating a Github OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)]
- Directory Sync (SCIM)
- Update account
- Create team
- Invite users to the team
- Manage team members
- Update team settings
- Webhooks & Events
- Internationalization
- Audit logs
- Roles and Permissions
- Dark mode

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

Contributions make the open-source community a fantastic place to learn, inspire, and create. Any contributions are greatly appreciated by the whole community.

We encourage and invite users and community members to contribute to the [saas-starter-kit](https://github.com/boxyhq/saas-starter-kit) repository.

For more help or if you have a question about getting started building a SaaS app please join our [Community Discord.](https://discord.boxyhq.com)
