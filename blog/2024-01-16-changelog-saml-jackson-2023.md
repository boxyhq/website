---
slug: changelog-saml-jackson-2023
title: 'BoxyHQ Changelog: Transforming Enterprise SSO and Directory Sync in 2023 with SAML Jackson'
author: Schalk Neethling
author_title: Customer Success, Community, DevRel - @BoxyHQ
author_url: https://github.com/schalkneethling
author_image_url: /images/authors/schalk.jpg
tags_disabled: [changelog]
image: /img/blog/saml-jackson-2023-changelog.jpg
---

2023 was a landmark year for [BoxyHQ's SAML Jackson project](https://github.com/boxyhq/jackson), marked by a [series of innovative updates](https://github.com/boxyhq/jackson/releases?page=1) that have redefined how we approach Single Sign-On (SSO) and Directory Sync. In this roundup, we celebrate not just our achievements but the invaluable contributions of our vibrant community. From introducing our first enterprise feature, SAML Federation, to enhancing user experience with improved UI/UX for SAML setup, every step we took was aimed at empowering developers and organisations around the globe.

Our journey through the year saw remarkable milestones such as the integration of [RFC9207](https://datatracker.ietf.org/doc/html/rfc9207) support for OIDC connections, the introduction of configurable Setup Link expiry times, and giving you control over your privacy with `DO_NOT_TRACK` and `BOXYHQ_NO_ANALYTICS`. In addition, we've made strides in strengthening security and simplifying the troubleshooting process with features like the SAML Tracer for debugging SAML configuration errors.

In response to user feedback, we've also [introduced a Software as a Service (SaaS) option](https://app.eu.boxyhq.com/auth/join), catering to those who prefer a hosted solution. As an open-core company, we are excited to complement our offerings with this proprietary SaaS solution, meeting the diverse needs of our user base.

As we look back at these pivotal moments, we are reminded of the collective spirit that drives open-source innovation. Each release encapsulates our commitment to delivering robust, user-friendly, and scalable solutions, thanks to the feedback and contributions from users like you.

Join us as we delve into these highlights from 2023 and the first sparks of 2024, showcasing how BoxyHQ's Jackson continues to evolve, ensuring secure and efficient identity management for all.

## Notable releases during the first quarter of 2023

### SAML Jackson 1.6.0

- Enterprise SSO login support for Admin Portal
- We demonstrate our commitment to privacy by adding anonymous analytics to better understand the usage of our product. At the same time, we put the controls in your hands by allowing you to turn all analytics off using `DO_NOT_TRACK` or `BOXYHQ_NO_ANALYTICS`. Even when enabled, we do not collect any information that identifies users or machines.
- Admin Portal now supports our Audit Logs service ([Retraced](https://github.com/retracedhq/retraced))
- Added our first enterprise feature, SAML Federation, which allows one single SAML connection to be multiplexed to a federation of SAML connections.
- Setup Links now provides an easy way to share a unique link with your customers so they can configure their SSO and Directory Sync connections

### SAML Jackson 1.7.0

- Support for multiple Directory Sync connections per tenant and product

### SAML Jackson 1.8.0

- Friendly mappings for well-known SSO providers (instead of showing the domain names)
- Updated schema for MySQL, MariaDB, and MS-SQL to prevent `ER_TOO_LONG_KEY` error.

### SAML Jackson 1.9.0

- Added fallback for OIDC discovery URL when configuring OIDC connection.
- Added UI for our [Data Privacy Vault](https://boxyhq.com/privacy-vault) product (private beta)

## Notable releases during the second quarter of 2023

### SAML Jackson 1.10.0

- Added a new feature that eases debugging of SAML configuration errors. You can access this from the SAML Tracer tab in the Admin Portal. View all errors that happen during the SAML login flow and get all the context you need to resolve the issue.
- Support for DynamoDB as a storage engine
- Batch operations from Azure AD Directory Sync are now fully supported
- Webhook events for SSO and Directory Sync connection operations
- Ability to activate/deactivate SSO and Directory Sync connections
- New provider support for Directory Sync: Google Workspace. Google's SCIM 2.0 support is minimalistic so we instead tie in directly into their APIs to give you all the Directory Sync features

## Notable releases during the third quarter of 2023

### SAML Jackson 1.11.0

- New APIs to fetch SSO and Directory Sync connections by product
- [Breaking change] DELETE APIs no longer accept body on next.js (as per spec), query params are now used instead
- Setup Links API
- API to filter SAML traced by product

### SAML Jackson 1.12.0

- SAML setup UI/UX improvements
- Windows local build setup
- [Open Telemetry](https://opentelemetry.io/) metrics for Directory Sync

## Notable releases during the final quarter of 2023

### SAML Jackson 1.13.0

- OIDC issuer is now set correctly to the external URL and matches RFC.
- APIs for managing SAML Federation connections

### SAML Jackson 1.14.0

- The database schema has been updated to introduce a new column called namespace to speed up scans.
- Directory Sync: connection update API
- Error logging when health check fails
- Support for multiple certificates in metadata and validation when no cert is present in the SAML response

### SAML Jackson 1.15.0

- Batching of Directory Sync events to handle heavy traffic which can be enabled with the DSYNC_WEBHOOK_BATCH_SIZE flag.
- Added `Strict-Transport-Security`, `X-Frame-Options` and `X-Content-Type-Options` headers.
- Attach friendly provider names to OIDC connections as well
- Support fallback to certificates that don't come with the signing attribute
- Fixed setup link URL creation for embedded npm
- Fixed SCIM implementation to pass all the Okta Runscope tests

## During the first two weeks of 2024

Since the start of the year, we have landed a couple of great new features and have a lot more planned.

- Setup Link expiry time is now configurable (`SETUP_LINK_EXPIRY_DAYS` env var or by passing in an expiryDays attribute in the API call)
- RFC9207 support for OIDC connections
- Added close function to controller and DB interfaces, this can be used to terminate the database connection
- Support product branding (Enterprise Edition feature)

## Conclusion

As we reflect on the remarkable journey of BoxyHQ's Jackson in 2023 and early 2024, we're filled with a sense of pride and gratitude. Our journey, highlighted by groundbreaking features and continuous improvements, is a true testament to the power of collaboration and the open-source ethos. We extend our heartfelt thanks to every member of our community for their invaluable contributions, feedback, and trust in SAML Jackson.

Looking ahead, we're excited to continue this journey with you, further innovating and enhancing our solutions to meet the ever-evolving challenges of identity management. If you find value in our projects, consider [giving us a star on GitHub](https://github.com/boxyhq/jackson) – it's a great way to show support and help more people discover our work. And if you know someone who could benefit from our tools, we'd be honoured if you spread the word.

Stay tuned for more updates as we forge ahead, committed to empowering developers and organisations with the best in SSO and Directory Sync technologies.
