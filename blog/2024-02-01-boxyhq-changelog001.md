---
slug: changelog001
title: 'BoxyHQ Changelog, January 2024: SAML Jackson, Retraced, and More'
author: Schalk Neethling
author_title: Customer Success, Community, DevRel - @BoxyHQ
author_url: https://github.com/schalkneethling
author_image_url: /images/authors/schalk.jpg
tags_disabled: [changelog]
image: /images/blog/changelog001.jpg
---

Welcome to the first edition of the BoxyHQ Changelog! We are excited to share some of the highlights from the last two weeks, including notable updates to [SAML Jackson](https://github.com/boxyhq/jackson) (SSO and Directory Sync), [Retraced](https://github.com/retracedhq/retraced) (Audit Logs), and our [Open Source SaaS starter kit](https://github.com/boxyhq/saas-starter-kit).

## SAML Jackson

With SAML Jackson, our Single Sign-On (SSO) and Directory Sync solution, we are committed to delivering robust, user-friendly, and scalable solutions. In the last two weeks, we have made significant strides in this direction, here are some of the highlights of what landed between v1.16.1 and v1.18.2:

- Added privacy respecting analytics for the number of connections.
- Improvements to our custom branding support (add-on feature).
- SAML Federation now supports bridging to OIDC.
- Added error tracing for OIDC connections and related improvements.
- Added a new statistics API endpoint for SSO and Directory Sync connection count.
- Native integration with [Ory](https://www.ory.sh/).
- Added support to associate multiple tenants with SAML Federation apps. This is especially useful for large enterprises.
- General improvements to SAML Federation support.
- There were also several dependency updates to ensure the security and performance of SAML Jackson.

You can find the [complete changelog here on GitHub](https://github.com/boxyhq/jackson/releases).

## Retraced and the SaaS Starter Kit

Retraced, our Audit Logs solution, is a collaboration between BoxyHQ and [Replicated](https://www.replicated.com/). While this project did not have the same level of activity as SAML Jackson, it is a critical component of our offering. One exciting new feature that is coming soon to Retraced is SIEM (Security Information and Event Management) integration for those on the premium tier. This will allow you to send your audit logs to your SIEM of choice, such as [Splunk](https://www.splunk.com/).

You can always find the full changelog for Retraced [here on GitHub](https://github.com/retracedhq/retraced/releases).

> **NOTE:** Audit logs is currently a self-hosted only feature.

There has also been some improvements made to the [Open Source SaaS starter kit](https://github.com/boxyhq/saas-starter-kit) such as allowing a team to create an invite link making it easy for new members to join the team. We also landed several improvements to validation and error handling, and several dependency updates. If you are looking for a way to learn more about BoxyHQ and our various open source solution, [contributing to the SaaS starter kit](https://github.com/boxyhq/saas-starter-kit/issues) is a great way to get started. Consider this our invitation to you.

That is it for this edition of the BoxyHQ Changelog. We hope you enjoyed this roundup of the last two weeks. If you have any questions, please feel free to reach out to us on [Mastodon](https://hachyderm.io/@boxyhq), [GitHub](https://github.com/boxyhq), [Discord](https://discord.boxyhq.com/), or on [Twitter/X](https://twitter.com/boxyhq).
