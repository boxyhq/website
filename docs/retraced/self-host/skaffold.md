---
title: Skaffold
description: Skaffold
---

# Skaffold

## Clone the project

`git clone https://github.com/retracedhq/retraced && cd retraced`

You can change the environment variables from `/kustomize/overlays/dev/secrets.yaml`.

## Run Retraced

`skaffold dev --status-check=false --force=true`

## See it in action

Use the postman collection located at `./postman/Retraced.postman_collection.json`.
You can import the json file in postman and use the API calls to test Retraced.

`Make sure that the bootstrap & migrations are finished before makeing api calls.`
