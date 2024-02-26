---
slug: changelog-retraced-2023
title: 'BoxyHQ 2023 Changelog: Enhancing Security with Retraced-Powered Audit Logs'
author: Schalk Neethling
author_title: Customer Success, Community, DevRel - @BoxyHQ
author_url: https://github.com/schalkneethling
author_image_url: /images/authors/schalk.jpg
tags_disabled: [changelog]
image: /img/blog/retraced-2023-changelog.jpg
---

BoxyHQ's audit logs are powered by [Retraced](https://github.com/retracedhq/retraced) which, in the true spirit of open source, is also a collaboration between us and [Replicated](https://www.replicated.com/). While this project did not have the same level of [activity as SAML Jackson](2024-01-16-changelog-saml-jackson-2023.md), it is a critical component of our offering and we are excited to share some of the highlights from 2023.

Instead of doing a list by quarter, for this one we will just do a list of notable new features, fixes, and changes in chronological order starting in February 2023.

## The growth of Retraced in 2023

- Switched to an Alpine Linux base image for the Retraced container.
- If Maxmind key is provided then Geo data download is initialized on startup instead of waiting for the first cron event.
- As with SAML Jackson, we added some anonymous analytics to better understand the usage of our product. At the same time, we put the controls in your hands by allowing you to turn all analytics off using `RETRACED_NO_ANALYTICS=1`. Even when enabled, we do not collect any information that identifies users or machines.
- Switched from Elasticsearch library to [OpenSearch](https://opensearch.org/) library to support both Elastic and OpenSearch.
- Statsd support has been switched with [OpenTelemetry](https://opentelemetry.io/).
- Added env var `RETRACED_DISABLE_GEOSYNC` to explicitly turn off geo sync
- Optimized storage of logs to save up to 40% storage over previous versions.
- MaxMind GeoIP update can now [alternatively be done via their MMDB format](https://boxyhq.com/docs/retraced/self-host/env-variables#geoipupdate_use_mmdb), skipping our current method of storing Geo data in a Postgres table.
- API to remove viewer session
- Postgres SSL support
- We take the security of our users seriously and addressed a potential DoS vulnerability.
- Support JWT value in request headers and queries for data export.

> **NOTE:** Audit logs is currently a self-hosted only feature.

## Conclusion

As we reflect on the significant strides made with Retraced in 2023, it's evident that this project, born from the collaborative efforts of BoxyHQ and Replicated, has been pivotal in our pursuit of delivering top-tier security solutions. Though it may not have matched SAML Jackson in activity, its role in our toolset is indispensable. Each development, from the Alpine Linux transition to the OpenTelemetry integration, underscores our commitment to innovation and operational efficiency.

The evolution of Retraced symbolizes more than just technical enhancements; it represents our dedication to security and efficiency. With features like enhanced PostgreSQL SSL support and improvements in log storage, we continue to raise the bar in open-source security tools. Moreover, the real-world impact of these advancements is best exemplified by our clients' success stories. For instance, discover how [BoxyHQ's SSO and Audit Logs helped Unicis accelerate towards SOC2 compliance](https://boxyhq.com/success-stories/boxyhqs-sso-&-audit-logs-accelerate-unicis-towards-soc2-compliance), showcasing the tangible benefits of our solutions in achieving crucial compliance goals.

As we forge ahead into 2024, we are energized by your support, feedback, and contributions. Join us on this journey of continuous innovation and help us write more success stories like Unicis's. Together, let's set new standards for security and efficiency in the open-source community.
