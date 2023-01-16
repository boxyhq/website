---
title: With Docker Compose
description: With Docker Compose
---

# With Docker Compose

## Clone the project

`git clone https://github.com/retracedhq/retraced && cd retraced`

Make sure you have set the environment variables in **docker-compose** file for `Jackson` & `ADMIN_ROOT_TOKEN`.

## Run Retraced

`docker-compose up`

## Run Retraced (Without Elasticsearch)

You can set `PG_SEARCH=1` under **x-common-variables** in `docker-compose.yaml`.

## See it in action

Use the postman collection located at `./postman/Retraced.postman_collection.json`.
You can import the json file in postman and use the API calls to test Retraced.

`Make sure that the bootstrap & migrations are finished before makeing api calls.`
