---
title: Directory Sync Docs
---

# Directory Sync

Directory sync helps organizations automate the provisioning and de-provisioning of their users. It is based on the System for Cross-domain Identity Management (SCIM) protocol.

As a result, it streamlines the user lifecycle management process by saving valuable organizational hours, creating a single truth source of the user identity data, and facilitating them to keep the data secure.

Directory Sync is part of our SAML Jackson service (and npm library) from v1.2.1 onwards. Follow the instructions in [SAML Jackson](../jackson/deploy/index.md) for details on deployment. Or check out our [GitHub repo](https://github.com/boxyhq/jackson#directory-sync).

We currently only support SCIM 2.0 protocol because SCIM 1.1 is deprecated and support will be discontinued on December 2nd, 2022. If you still need support for SCIM 1.1 and are unable to move away from it then please contact us.

![Directory Sync Flow](/images/docs/jackson/directory-sync-flow.png)

## Overview

- [API Reference](api-reference)
- [Admin Portal](../admin-portal/directory-sync)
- [Webhook](webhooks)
- [Events and Types](events)
- [Directory Sync Providers](providers)
