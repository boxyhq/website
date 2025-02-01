---
slug: sbom-explained-an-enterprise-guide-to-security-risk-management
title: 'SBOM Explained: An enterprise guide to security risk management'
author: Nathan Tarbert
author_title: Community Success Engineer @BoxyHQ
author_url: https://github.com/NathanTarbert
author_image_url: /images/authors/nathan.jpg
tags_disabled: [open-source]
image: /img/blog/security-lock.jpg
---

In this age of technology, software companies are quickly shifting towards a strict compliance posture. You may ask yourself, why is that and what has changed over the last several years? This can be due to multiple factors but can mainly be boiled down into four categories.

- Security
- Product Development
- Compliance
- Supply Chain & Risk Management

## What is an SBOM or Software Bill of Materials?

You can think of your modern application as a cake you are baking. The list of ingredients you use to bake that cake would be the SBOM (Software Bill of Materials). In the case of software, it's open-source or private dependencies and third-party components. This list can be massive and can range from hundreds to thousands, especially when you factor in transitive dependencies (an indirect dependency of the component it relies on). This list gets very complex and is impossible to manage at scale at the enterprise level. Gone are the days when most enterprises or smaller-scale organizations would write applications from scratch. Rather, most applications are assembled using pre-built software packages, i.e open-source. Over the past decade, this has led to the rise and use of publicly available software components and agile development at an enormous rate.

## Security

More organizations now have security top-of-mind due to cyber attacks on business infrastructure becoming almost a daily occurrence. Companies are faced with major decisions that affect cost, efficiency, and productivity. There is an enormous risk and liability where a company’s code base lives in the cloud. This could be private or public but a good rule of thumb when you think about risk is not if we’re breached, but when. So precautions need to be taken to add layers of protection to software infrastructure.

An SBOM would provide better visibility to companies in identifying and tracking security vulnerabilities that could enable timely patches. Updates in code should prompt a newly generated report (SBOM).

We could go a lot deeper around all the various ways precautions could be taken like scanning your application for vulnerabilities or penetration testing. A [minimum viable secure product](https://mvsp.dev/) is of course recommended for all enterprise-ready organizations. It could be as simple as having [audit logs](https://boxyhq.com/audit-logs) in place to record and search events internally on your application.

## Product Development

SBOMs can improve and help software development processes by providing a comprehensive list of all open-source dependencies and components used in a product. From an organizational standpoint, it is crucial to ensure that all software and related components are up-to-date and licensed correctly. Having this clear understanding is key to risk mitigation when it comes to understanding what is in a product and how it is constructed.
Therefore, development teams can quickly improve transparency, communication, and collaborative decision-making with a faster time-to-market while ensuring industry compliance standards and regulations.

![matrix finger](/img/blog/matrix-finger.jpg)

## Compliance

In 2021 the US Government issued an [executive order](https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/information-technology-category/it-security/executive-order-14028) mandating all software companies that do business with the US government must provide a detailed inventory list (software bill of materials or SBOM) of all components related to the software they have produced and sold to any federal agency. The legislation is geared towards transparency with a view to the enhancement of security for our supply chain infrastructure. This has quickly prompted other countries to consider similar legislation.

## Supply Chain & Risk Management

It’s vital to take a proactive approach and have a top-down understanding of all software components that live in a software ecosystem. With that in mind, SBOMs are quickly becoming a standard for software supply chain risk management. With the expansion of sophisticated attacks, it’s more important than ever to take a systematic approach when it comes to the security of your organization.

The ecosystem is growing with tools that help you verify, scan and monitor all your components and manifest files.

If you have an open-source product to sell to enterprises or the public sector, you will need to anticipate compliance and build an SBOM into your product. Especially if you are targeting entities in heavily regulated industries. Taking this into consideration, that’s what we did at BoxyHQ for each of our four products with guides that will help you navigate these decisions (Enterprise Single Sign On, Directory Sync, Audit Logs, and Data Privacy Vault). We chose to build [Cosign](https://www.sigstore.dev/) right into our tool - but many more are available. Here is a [curated list of SBOM-related tools.](https://github.com/awesomeSBOM/awesome-sbom)

Please visit BoxyHQ’s website to learn more about producing an SBOM for your products. E.g. SBOM for our enterprise SSO: [BoxyHQ](https://boxyhq.com/docs/jackson/sbom)
