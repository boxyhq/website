# SAML Jackson

SAML/OIDC Single Sign-On (SSO) service [SSO in a box from BoxyHQ]. Check out our [GitHub repo](https://github.com/boxyhq/jackson).

## Architecture

Jackson takes a multi-tenanted approach to implementing SSO, abstracting away all the complexities of the underlying SAML/OIDC protocol. What this means is you can enable SSO for all (your) customers across products from a single instance of jackson, and works with both SAML and OIDC Identity Provider(IdP)s.

Consider this scenario for a customer `acme.com` who is using two of your SaaS offerings. For now let's call them `CRM (Customer Relationship Management)` and `HRM (Human Resource Management)`. `CRM` happens to integrate with the customer (of acme.com) facing SAML Identity Provider (Azure AD), while HRM happens to integrate with the Google workspace account of `acme.com` employees. Let's see how SSO works in this scenario.

![img alt](/img/sso-flow.png)

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
