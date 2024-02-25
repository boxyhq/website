---
title: Retraced Architecture
sidebar_label: Overview
---

# Overview

Retraced is more than a traditional database to store and retrieve objects. The "Architecture" documentation provides an overview of some of the features that Retraced provides to provide immutability and verifiability of your audit log data.

![Audit logs Architecture](/images/docs/retraced/audit-logs-architecture.png)

## Cryptographically Guarantee Immutability

Retraced implements industry standard and provable digest algorithms to ensure the data you send into an audit log is the data that was received. The same algorithms can be used in the future to verify that none of the data has changed since it was written. This works automatically when using our [SDKs](/docs/retraced/sdks/available-sdks), and can be implemented manually if you use the API directly.

Details of how we guarantee immutability are discussed in detail on the [immutability guarantee](/docs/retraced/architecture/immutability-guarantee) page.
