---
title: Enterprise SSO Docs
---

# Enterprise SSO

Jackson is our Single Sign-On (SSO) service for SAML/OIDC Identity Providers [SSO in a box from BoxyHQ].

Jackson implements SSO as an OAuth 2.0 flow, abstracting away all the complexities of the underlying SAML/OIDC protocol. Check out our [GitHub repo](https://github.com/boxyhq/jackson).

## Architecture

![Enterprise SSO Architecture](/images/docs/jackson/enterprise-sso-arch.png)

We have developed Jackson from scratch adopting a modular architecture as shown below. The business logic is separated into controllers which helps us in incremental adoption of features.

![Implementation Architecture](/images/docs/jackson/jackson-architecture.png)

## Key Features

### Own your own data​

- An open-source solution that allows you to keep control of your data
- Supports Bring Your Own Database (BYOD) and can be used with any database
- Built-in support for MySQL, MariaDB, Postgres, MongoDB, Redis, PlanetScale
- Works great with databases from popular hosting providers

### Flexible and easy to use​

- Designed to work with OAuth 2.0 / OpenID Connect 1.0 flow
- Integrate with your existing OAuth 2.0 / OpenID Connect 1.0 library

### Support

Reach out to the maintainer at one of the following places:

- [GitHub Discussions](https://github.com/boxyhq/jackson/discussions)
- [GitHub Issues](https://github.com/boxyhq/jackson/issues)
- The email which is located [in GitHub profile](https://github.com/deepakprabhakara)

### Community

- [Discord](https://discord.gg/uyb7pYt4Pa)
- [Twitter](https://twitter.com/boxyhq)

### License

[Apache 2.0 License](https://github.com/boxyhq/jackson/blob/main/LICENSE)
