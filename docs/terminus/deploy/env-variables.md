# Environment Variables

The env vars are split into: 

- Docker Compose assembly variables. Only relevant when running Terminus on docker
- Terminus services configuration variables:

    - The persistence layer
    - The vault service
    - The proxy service

When running via docker compose, all variables can be set in the [.env](https://docs.docker.com/compose/env-file/) file as well as environment variables.

## Docker Compose

### **TERMINUS_UI_VERSION**

Terminus' UI version to use.

Defaut: `latest`

### **TERMINUS_UI_IMAGE**

Terminus' admin UI to be bundled with the proxy for model and policy management.

Default: `boxyhq/terminus-ui:${TERMINUS_UI_VERSION}`

### **TERMINUS_VERSION**

Terminus' image versions for the vault and the proxy services.

Default: `latest`


## Vault: Persistence Layer

Terminus' vault persistence layer (or DB) currently uses [GORM](https://gorm.io/) with a default configuration using PostgreSQL as a provider. 

### **TERMINUS_VAULT_DB_IMAGE**

The PostgreSQL docker image to use.

Default: `postgres:14.4`

### **TERMINUS_VAULT_DB_HOSTNAME**

The hostname or URL of Terminus' vault DB server. When running on the same docker compose network, it is the name of the container.

Default: `terminus_vault_persistence`

### **TERMINUS_VAULT_DB_HOST_PORT**

The port where Terminus' vault DB server runs. When running in docker is the external port.

Default: `5432`

### **TERMINUS_VAULT_DB_CONTAINER_PORT**

The port where Terminus' vault DB server runs. 

Default: `5432`

### **TERMINUS_VAULT_DB_USER**

The username of the DB.

Default: `postgres`

### **TERMINUS_VAULT_DB_PASSWORD**

The password of the DB.

Default: `postgres`

### **TERMINUS_VAULT_DB_DBNAME**

The DB name within the server.

Default: `postgres`

### **TERMINUS_VAULT_DB_VOLUME**

The mapping of the DB volume on the host file system.

Default: `./terminus-volumes/terminus-vault-data`

## Vault: Service

### **TERMINUS_VAULT_SERVICE_NAME**

The name of the docker container if running on docker or the hostname of the vault service.

Default: `terminus_vault_service`

### **TERMINUS_VAULT_SERVICE_HOST_PORT**

The port where Terminus' vault service runs. When running in docker is the external port.

Default: `3005`

### **TERMINUS_VAULT_SERVICE_PORT**

The port where Terminus' vault service runs. 

Default: `3005`

### **TERMINUS_VAULT_SERVICE_ENDPOINT**

The URL of Terminus' service endpoint.

Default: `http://${TERMINUS_VAULT_SERVICE_NAME}:${TERMINUS_VAULT_SERVICE_PORT}`

### **TERMINUS_VAULT_SERVICE_IMAGE**

The Vault Service docker image to pull when running on docker.

Default: `boxyhq/terminus-vault:${TERMINUS_VERSION}`

### **TERMINUS_VAULT_SERVICE_ENCR_AES**

Whether the vault performs AES based encryption and a B64 encoding on the data sent to it prior to persisting it.

Default: `true`

### **TERMINUS_VAULT_SERVICE_KEY_AES**

The 32 byte key to perform the vault service encryption.

Default: `passphrasewhichneedstobe32byzes!`

### **TERMINUS_VAULT_SERVICE_VOLUME**

The mapping of the Vault service volume on the host file system.

Default: `./terminus-volumes/terminus-vault-conf`

### **TERMINUS_VAULT_SERVICE_LOGS_VOLUME**

The mapping of the logs vault service volume on the host file system.

Default: `./terminus-volumes/terminus-vaultservice-logs`

### **TERMINUS_VAULT_SERVICE_SERVICE_NAME**

The vault service name for Open Telemetry (OTEL).

Default: `terminus-vault-service`

### **TERMINUS_VAULT_SERVICE_OTEL_LIGHSTEP_ACCESS_TOKEN**

The vault service Lightstep key for OTEL launcher. Currently being moved to a more generic OTEL provider.

Default: No default.



## Proxy: Service

### **TERMINUS_PROXY_SERVICE_NAME**

The name of the docker container if running on docker or the hostname of the proxy service.

Default: `terminus_proxy_service`

### **TERMINUS_PROXY_SERVICE_IMAGE**

The Proxy Service docker image to pull when running on docker.

Default: `boxyhq/terminus-proxy:${TERMINUS_VERSION}`

### **TERMINUS_PROXY_SERVICE_PORT**

The port where Terminus' proxy service runs. 

Default: `3002`

### **TERMINUS_PROXY_SERVICE_HOST_PORT**

The port where Terminus' vault service runs. When running in docker is the external port.

Default: `3002`

### **TERMINUS_PROXY_SERVICE_VOLUME**

The mapping of the Proxy service volume on the host file system.

Default: `./terminus-volumes/terminus-proxy-data`

### **TERMINUS_PROXY_SERVICE_LOGS_VOLUME**

The mapping of the logs Proxy service volume on the host file system.

Default: `./terminus-volumes/terminus-proxyservice-logs`

### **TERMINUS_PROXY_SERVICE_SERVICE_NAME**

The proxy service name for Open Telemetry (OTEL).

Default: `terminus-proxy-service`

### **TERMINUS_PROXY_SERVICE_OTEL_LIGHSTEP_ACCESS_TOKEN**

The proxy service Lightstep key for OTEL launcher. Currently being moved to a more generic OTEL provider.

Default: No default.

### **TERMINUS_PROXY_SERVICE_CONF_KEY_AES**

By default, Terminus encryption proxy is configured with AES. This is the 32 byte key to perform all the cryptographic operations.

Default: `passphrasethatnneedstobe32byzes!`

