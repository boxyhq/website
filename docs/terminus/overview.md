# Terminus

Terminus: A service providing advanced encryption and PII in a box from BoxyHQ.

Terminus provides a no code advanced encryption and privacy vault exposed via a simple API.

Terminus is as highly customizable and extendable as it is easy to configure. It abstracts away all the complexities of multiple encryption mechanisms, data masking, data modeling, data access policies and highly efficient storage.

Check our our [Github repo](https://github.com/boxyhq/terminus/).

> :warning: **Terminus is in Beta release**: Things will be extended and will evolve. Mainly around encryption mechanisms, policy and access control and the configuration UI.

## About Terminus

[Terminus](<https://en.wikipedia.org/wiki/Terminus_(god)>) is about boundaries. It is about enabling the segregation of highly sensitive and private data away from the main data stores. It is about zero visibility and zero trust. It is about un-observability of the data stored unless by the relevant authorized parties. It is about access control. It is about easy integration with existing systems. It is about performance. It is about allowing you to focus on the business logic, not on how to protect your sensitive data and be regulation compliant.

### Own your own data​

- An open-source solution that allows you to keep control of your most sensitive data and the access to it
- Supports Bring Your Own Database (BYOD) and can be used with any database
- Built-in support for Postgres - more to come
- Works with databases from popular hosting providers

### Own your privacy vault

- Designed to be run anywhere
- Designed with data and responsibilities segregation between components as a fundamental building block.

### Flexible and easy to use​

- Designed to work with most advanced encryption mechanisms - currently supporting AES, more to come
- Integrate with your existing logic and separate your highly sensitive data with ease
- Define your encryption models representing your business requirements in a visual no-code-way
- One-click deployment of new encryption strategies

### Data encryption and PII made simple

Terminus is composed of three main components

- The persistence vault, where the data is stored.
- The vault service, which interfaces and optimizes access to the persistence vault and implements system level vault encryption on the data.
- The proxy service, responsible for domain specific data models, the encryption strategies at different granularity (object, field), the masking strategies for restricted viewing access, the visual data model and masking editor and the access policies.

### Support > :warning: **TODO: EXTEND THIS SECTION**

Reach out to the maintainer at one of the following places:

- [GitHub Discussions](https://github.com/boxyhq/jackson/discussions)
- [GitHub Issues](https://github.com/boxyhq/jackson/issues)
- The email which is located [in GitHub profile](https://github.com/deepakprabhakara)

### Community

- [Discord](https://discord.gg/uyb7pYt4Pa)
- [Twitter](https://twitter.com/boxyhq)

### License

[Apache 2.0 License](https://github.com/boxyhq/jackson/blob/main/LICENSE)
