---
sidebar_position: 2
---

# Deploy

There are two ways to use Jackson.

- As an NPM library
- As a separate service

## As an NPM library

Jackson is available as an [npm package](https://www.npmjs.com/package/@boxyhq/saml-jackson) that can be integrated into any web application framework (like Express.js for example). Please file an issue or submit a PR if you encounter any issues with your choice of framework.

```bash
npm i @boxyhq/saml-jackson
```

[Example express.js integration](npm-library.md)

## As a separate service

The docker container can be found at [boxyhq/jackson](https://hub.docker.com/r/boxyhq/jackson/tags). It is preferable to use a specific version instead of the `latest` tag. Jackson uses two ports (configurable if needed, see below) 5000 and 6000. 6000 is the internal port and ideally should not be exposed to a public network.

```bash
docker run -p 5000:5000 -p 6000:6000 boxyhq/jackson:78e9099d
```

Kubernetes and docker-compose deployment files will be coming soon.

## Self Hosted Requirements

Information on the requirements that are needed to install and run Jackson on your servers.

### Database

Jackson currently supports the following databases.

- Postgres
- MySQL
- MariaDB
- MongoDB
- Redis

### Deployment Guides (Coming soon)

- Heroku
- DigitalOcean
- Vercel
- Docker
- Kubernetes
- AWS
- GCP
- Azure
