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

### With Docker

The docker container can be found at [Docker Hub](https://hub.docker.com/r/boxyhq/jackson/tags). It is preferable to use a specific version instead of the `latest` tag. You can verify the container image, please refer [here](container-signing.md) for more details.

```bash
docker run \
  -p 5225:5225 \
  -e JACKSON_API_KEYS="secret" \
  -e DB_ENGINE="sql" \
  -e DB_TYPE="postgres" \
  -e DB_URL="postgres://postgres:postgres@postgres:5432/postgres" \
  -d boxyhq/jackson
```

OR

```bash
docker run \
  -p 5225:5225 \
  -e JACKSON_API_KEYS="secret" \
  -e DB_ENGINE="mongo" \
  -e DB_URL="mongodb://localhost:27017/jackson" \
  -d boxyhq/jackson
```

See the complete list of [Environment Variables](env-variables.md)

Kubernetes and docker-compose deployment files will be coming soon.

### Without Docker

Please follow the below instructions.

#### Clone the repository

You can clone the source from the [Jackson Github repo](https://github.com/boxyhq/jackson/tree/release)

```bash
git clone https://github.com/boxyhq/jackson
```

#### Install dependencies

```bash
npm install
```

#### Add environment variables

```bash
cp .env.example .env
```

Update `.env` with your values. See the complete list of [Environment Variables](env-variables.md)

#### Build and run

```bash
npm run build
```

```bash
npm run start
```

## Test the service is running

Open a browser and visit [http://localhost:5225/api/hello](http://localhost:5225/api/hello).

If you see a page that says `{ name: 'Jules Winnfield' }` then the Jackson service was started successfully!

## Database

Jackson currently supports the following databases.

- Postgres
- MySQL
- MariaDB
- MongoDB
- Redis

## Deployment Guides (Coming soon)

- Heroku
- DigitalOcean
- Vercel
- Docker
- Kubernetes
- AWS
- GCP
- Azure
