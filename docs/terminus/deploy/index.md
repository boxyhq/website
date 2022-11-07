# Deploy

There are two main ways of using terminus. Either by starting the services via docker compose or individually.

## Via [Docker Compose](https://docs.docker.com/compose/)

### Intro
The easiest way to get started with Terminus is by running it via docker compose. Terminus' services are deployed automatically in 4 containers comprising:

+ [Proxy service](../architecture/#proxy-service) with the embedded model management UI
+ Proxy persistence container
+ [Vault service](../architecture/#vault-service) container
+ [Vault persistence](../architecture/#persistence-vault) container

The four services run on the same private network and can see each other. Additionally they expose the relevant ports for API interactions and communications.

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


`docker ps` yells
```
CONTAINER ID   IMAGE                          COMMAND                  CREATED              STATUS              PORTS                    NAMES
8e0997bb1b5f   boxyhq/terminus-proxy:latest   "./proxyservice"         About a minute ago   Up About a minute   0.0.0.0:3002->3002/tcp   terminus_proxy_service
5be9dc1614e8   boxyhq/terminus-vault:latest   "./vault"                About a minute ago   Up About a minute   0.0.0.0:3005->3005/tcp   terminus_vault_service
bf314b23c59d   postgres:14.4                  "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:5432->5432/tcp   terminus_vault_persistence
491d81df72fd   postgres:14.4                  "docker-entrypoint.s…"   11 days ago          Up 19 minutes       5432/tcp, 0.0.0.0:5433->5433/tcp   terminus_proxy_persistence
```

## Via Separate Native Services

Terminus can be run as separate services for the proxy, the vault and the persistence store.

The main services  `go <service_name>.go` or via compiled Go program

### [Proxy service](../architecture/#proxy-service) 

The proxy service can be run via `go` as follows:
```
cd cmd/proxyservice
go run proxyservice.go
```

Alternative it can also be bundled in a binary application. Refer to this [dockerfile](https://github.com/boxyhq/terminus/blob/main/cmd/proxyservice/Dockerfile) for detailed information, since it requires the directory structure with configurations and CUE files in the relevant locations.

The configuration is as specified in the [proxy configuration](../architecture/proxy#configuration).


**Note**: [Terminus' UI](https://github.com/boxyhq/terminus-ui) must be bundled and deployed along with the proxy. See [deploy_dev.sh](https://github.com/boxyhq/terminus-ui/blob/main/deploy_dev.sh).
Check out both terminus and terminus-ui repositories under the same directory and then run terminus-ui's `deploy_dev.sh`.

### Proxy Persistence

The proxy persistence layer is currently provided by default via PostgreSQL. 

As such, an instance of PostgreSQL must be running and the Proxy Service configured to point at it.

The easiest way to get started with PostgreSQL is to run it as a docker container:

```
docker run --name postgresProxy -p 5433:5433 -e POSTGRES_PASSWORD=postgres -d postgres -p 5433
```


### [Vault service](../architecture/#vault-service) 

The vault service can be run via `go` as follows:
```
cd cmd/vaultServer
go run vault.go
```

Alternative it can also be bundled in a binary application. Refer to this [dockerfile](https://github.com/boxyhq/terminus/blob/main/cmd/vaultServer/Dockerfile) for detailed information, since it requires the directory structure with configurations and CUE files in the relevant locations.

The configuration is as specified in the [vault configuration](../architecture/vaultservice#configuration).

### [Vault persistence](../architecture/#persistence-vault)

The vault persistence layer is currently provided by default via PostgreSQL. 

As such, an instance of PostgreSQL must be running and the Vault Service configured to point at it.

The easiest way to get started with PostgreSQL is to run it as a docker container:

```
docker run --name postgresVault -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```
