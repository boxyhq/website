# Deploy - WIP

There are two main ways of using terminus. Either by starting the services via docker compose or individually.

## Via [Docker Compose](https://docs.docker.com/compose/)

### Intro
The easiest way to get started with Terminus is by running it via docker compose. Terminus' services are deployed automatically in 3 containers comprising:

+ [Proxy service](../architecture/#proxy-service) with the embedded model management UI
+ [Vault service](../architecture/#vault-service) container
+ [Vault persistence](../architecture/#persistence-vault) container

The three services run on the same private network and can see each other. Additionally they expose the relevant ports for API interactions and communications.

The main entry point to Terminus is via the Proxy service. By default it runs here [http://localhost:3002](http://localhost:3002)

See [API](../architecture/proxy#api) for Terminus' programatic APIs.

### Deployment

+ Pre-requisites: with `docker compose` support
+ The docker assembly files and the default configuration. They can be downloaded from [Terminus' repository](https://github.com/boxyhq/terminus):
    + [.env](https://github.com/boxyhq/terminus/blob/main/.env) file
    + [docker compose](https://github.com/boxyhq/terminus/blob/main/docker-compose.yml) file

To run:
    1. Add your lightstep OTEL token in the `.env` file:
        
        + VAULT_SERVICE_OTEL_LIGHTSTEP_ACCESS_TOKEN
        + PROXY_SERVICE_OTEL_LIGHTSTEP_ACCESS_TOKEN
        
        (NOTE: to be replaced with generic OTEL provider)

    2. $ docker compose up -d


---------------

There are two ways to use Jackson.

The advantage of running a separate service is that you get all of our UI tooling (like the Admin UI) with the service. The disadvantage is that you have to manage the operations of a separate service. If you are not using Node.js then this is the only option available to you.

This is available if you are already developing your application using Node.js.

The advantage of embedding Jackson as an npm library is that you do not have to manage operations of a separate service. The disadvantage is that you do not readily get our UI tooling (like the Admin UI) with this method.
