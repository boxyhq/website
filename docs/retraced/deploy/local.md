---
title: Running Locally
description: Running Locally
---

# Running Locally

## Clone the project

`git clone https://github.com/boxyhq/retraced && cd retraced`

## Install Dependancies

`yarn install` or `npm i`

## Set the environment variables

Use `.env` file to set the [Environment Variables](/docs/retraced/deploy/env-variables).

## Tools (DBs, queues, etc.)

Make sure the tools configured in `.env` file are up & running.

### [Postgres](/docs/retraced/deploy/env-variables#postgres-configuration)

### [NSQ](/docs/retraced/deploy/env-variables#nsqd-configuration)

### [Elasticsearch](/docs/retraced/deploy/env-variables#elasticsearch-configuration)

### [Supercronic](/docs/retraced/deploy/env-variables#supercronic-configuration)

### [Redis](/docs/retraced/deploy/env-variables#redis-configuration)

## Postgres Migration

Create tables and indexes required for Retraced in Postgres.

`node -r ts-node/register src/_db/runner-lite.ts pg`

## Elastic Migration

Create tables and indexes required for Retraced in Elasticsearch.

`node -r ts-node/register src/_db/runner-lite.ts es`

## Bootstrap dev environment

`node -r ts-node/register src/retracedctl.ts bootstrap --projectName dev --projectId dev --environmentId dev --apiKey dev`

## Start the API

`node -r ts-node/register src/index.ts`

## Start the processor

`node -r ts-node/register src/_processor/index.ts`

## See it in action

Use the postman collection located at `./postman/Retraced.postman_collection.json`.
You can import the json file in postman and use the API calls to test Retraced.
