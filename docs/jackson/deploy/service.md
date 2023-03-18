# Service

## Health Check

The service offers a readiness and health check endpoint that can be configured in orchestration tools like Docker Compose and Kubernetes.

The `/api/health` GET endpoint returns a 200 when the service ready and healthy or a 5xx (typically 503) error if unhealthy. The response contains the current version of Jackson. For example: `{"version":"1.0.0"}`.

## With Docker

The docker container can be found at [boxyhq/jackson](https://hub.docker.com/r/boxyhq/jackson/tags). It is preferable to use a specific version instead of the `latest` tag.

Replace the values for `DB_URL`, `JACKSON_API_KEYS`, `NEXTAUTH_SECRET` and `NEXTAUTH_ADMIN_CREDENTIALS` with your own values before running docker run command.

```bash
docker run \
  -p 5225:5225 \
  -e DB_ENGINE="sql" \
  -e DB_TYPE="postgres" \
  -e DB_URL="postgres://postgres:postgres@postgres:5432/postgres" \
  -e JACKSON_API_KEYS="secret" \
  -e NEXTAUTH_URL="http://localhost:5225" \
  -e EXTERNAL_URL="http://localhost:5225" \
  -e NEXTAUTH_SECRET="super-secret" \
  -e NEXTAUTH_ADMIN_CREDENTIALS="admin@company.com:secretpassword" \
  -d boxyhq/jackson
```

OR

```bash
docker run \
  -p 5225:5225 \
  -e DB_ENGINE="mongo" \
  -e DB_URL="mongodb://localhost:27017/jackson" \
  -e JACKSON_API_KEYS="secret" \
  -e NEXTAUTH_URL="http://localhost:5225" \
  -e EXTERNAL_URL="http://localhost:5225" \
  -e NEXTAUTH_SECRET="super-secret" \
  -e NEXTAUTH_ADMIN_CREDENTIALS="admin@company.com:secretpassword" \
  -d boxyhq/jackson
```

See the complete list of [Environment Variables](./env-variables.md)

Kubernetes and docker-compose deployment files will be coming soon.

## Without Docker

Please follow the below instructions.

### Clone the repository

You can clone the source from the [Jackson GitHub repo](https://github.com/boxyhq/jackson/tree/release)

```bash
git clone https://github.com/boxyhq/jackson
```

```bash
cd jackson
```

### Install dependencies

```bash
npm install
```

### Add environment variables

```bash
cp .env.example .env
```

Update `.env` with your values. See the complete list of [Environment Variables](./env-variables.md)

### Build and run

```bash
npm run build
```

```bash
npm run start
```

## Test the service is running

Open a browser and visit [http://localhost:5225](http://localhost:5225).

If you see a page asking you to sign in, congrats 🎉 you are seeing the [Admin Portal](../../admin-portal/overview).

## Database

Jackson currently supports the following databases.

- Postgres
- MySQL
- Microsoft SQL Server
- MariaDB
- MongoDB
- Redis
- [PlanetScale](https://planetscale.com/) (MySQL compatible)
- [Neon](https://neon.tech) (Serverless Postgres)
- Amazon DynamoDB

### PlanetScale

To connect PlanetScale database with Jackson, follow the below steps:

1. Create a new database on PlanetScale
2. Get your database [connection URL from the PlanetScale](https://planetscale.com/docs/tutorials/deploy-to-netlify#get-your-connection-string-from-planetscale)
3. Set the following environment variables

   - `DB_ENGINE=planetscale`
   - `DB_TYPE=mysql`
   - `DB_SSL=true`
   - `DATABASE_URL=<PlanetScale connection URL>`

4. Run the database migration to create the tables required by SAML Jackson

```bash
cd npm && PLANETSCALE_URL=<PlanetScale connection URL> npm run db:migration:run:planetscale
```

Make sure you have `?ssl={"rejectUnauthorized":true}` at the end of the PlanetScale connection URL.

Now you are ready to start the service.

## Deployment Guides (Coming soon)

- Heroku
- DigitalOcean
- Vercel
- Docker
- Kubernetes
- AWS
- GCP
- Azure
