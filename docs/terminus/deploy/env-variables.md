# Environment Variables

The env vars are split into:

- Docker Compose variables. Only relevant when running Terminus on docker
- Terminus services configuration variables:

  - The vault persistence layer
  - The vault service
  - The proxy persistence layer
  - The proxy service

When running via docker compose, all variables can be set in the [.env](https://docs.docker.com/compose/env-file/) file as well as environment variables.

---

## Docker Compose

### **VAULT_DB_IMAGE**

See [vault](#vault-persistence-layer).

The PostgreSQL docker image to use.

Default: `postgres:14.4`

### **VAULT_DB_VOLUME**

The mapping of the DB volume on the host file system.

Default: `./terminus-volumes/terminus-vault-data`

### **PROXY_DB_IMAGE**

See [proxy persistence](#proxy-persistence-layer).

The PostgreSQL docker image to use.

Default: `postgres:14.4`

### **PROXY_DB_VOLUME**

The mapping of the DB volume on the host file system.

Default: `./terminus-volumes/terminus-proxy-persistence-data`

### **UI_VERSION**

Terminus' UI version to use.

Defaut: `latest`

### **UI_IMAGE**

Terminus' admin UI to be bundled with the proxy for model and policy management.

Default: `boxyhq/terminus-ui:${UI_VERSION}`

### **VERSION**

Terminus' image versions for the vault and the proxy services.

Default: `latest`

### **VAULT_SERVICE_IMAGE**

The Vault Service docker image to pull when running on docker.

Default: `boxyhq/terminus-vault:${VERSION}`

### **VAULT_SERVICE_VOLUME**

The mapping of the Vault service volume on the host file system.

Default: `./terminus-volumes/terminus-vault-conf`

### **VAULT_SERVICE_LOGS_VOLUME**

The mapping of the logs vault service volume on the host file system.

Default: `./terminus-volumes/terminus-vaultservice-logs`

### **PROXY_SERVICE_IMAGE**

The Proxy Service docker image to pull when running on docker.

Default: `boxyhq/terminus-proxy:${VERSION}`

### **PROXY_SERVICE_VOLUME**

The mapping of the Proxy service volume on the host file system.

Default: `./terminus-volumes/terminus-proxy-data`

### **PROXY_SERVICE_LOGS_VOLUME**

The mapping of the logs Proxy service volume on the host file system.

Default: `./terminus-volumes/terminus-proxyservice-logs`

---

## Vault: Persistence Layer

Terminus' vault persistence layer (or DB) currently uses [GORM](https://gorm.io/) with a default configuration using PostgreSQL as a provider.

### **VAULT_DB_NAME**

The hostname or URL of Terminus' vault DB server. When running on the same docker compose network, it is the name of the container.

Default: `terminus_vault_persistence`

### **VAULT_DB_PORT**

The port where Terminus' vault DB server runs. When running in docker is both the internal and external port.

Default: `5432`

### **VAULT_DB_USER**

The username of the DB.

Default: `postgres`

### **VAULT_DB_PASSWORD**

The password of the DB.

Default: `postgres`

### **VAULT_DB_DBNAME**

The DB name within the server.

Default: `postgres`

---

## Vault: Service

> :warning: \*_NOTE_: The vault service requires the following configuration to connect to the persistence layer. If running via docker compose, all will already be set. If running Terminus across different hosts, this needs to be set: VAULT_DB_USER, VAULT_DB_PASSWORD, VAULT_DB_DBNAME, VAULT_DB_NAME, VAULT_DB_PORT

### **VAULT_SERVICE_NAME**

The name of the docker container if running on docker or the hostname of the vault service.

Default: `terminus_vault_service`

### **VAULT_SERVICE_PORT**

The port where Terminus' vault server runs. When running in docker is both the internal and external port.

Default: `3005`

### **VAULT_SERVICE_ENCR_AES**

Whether the vault performs AES based encryption and a B64 encoding on the data sent to it prior to persisting it.

Default: `true`

### **VAULT_SERVICE_KEY_AES**

The 32 byte key to perform the vault service encryption.

Default: `passphrasewhichneedstobe32byzes!`

### **VAULT_SERVICE_SERVICE_NAME**

The vault service name for Open Telemetry (OTEL).

Default: `terminus-vault-service`

### **VAULT_SERVICE_OTEL_LIGHTSTEP_ACCESS_TOKEN**

The vault service Lightstep key for OTEL launcher. Currently being moved to a more generic OTEL provider.

Default: No default.

---

## Proxy: Persistence Layer

Terminus' proxy persistence layer (or DB) currently uses [GORM](https://gorm.io/) with a default configuration using PostgreSQL as a provider.

### **PROXY_DB_NAME**

The hostname or URL of Terminus' proxy DB server. When running on the same docker compose network, it is the name of the container.

Default: `terminus_proxy_persistence`

### **PROXY_DB_PORT**

The port where Terminus' vault DB server runs. When running in docker is both the internal and external port.

Default: `5433`

### **PROXY_DB_USER**

The username of the DB.

Default: `postgres`

### **PROXY_DB_PASSWORD**

The password of the DB.

Default: `postgres`

### **PROXY_DB_DBNAME**

The DB name within the server.

Default: `postgres`

---

## Proxy: Service

### **VAULT_SERVICE_ENDPOINT**

The URL of Terminus' vault service endpoint.

Default: `http://${VAULT_SERVICE_NAME}:${VAULT_SERVICE_PORT}`

> :warning: \*_NOTE_: The proxy service requires the following configuration to connect to the vault service. If running via docker compose, all will already be set. If running Terminus across different hosts, this needs to be set: VAULT_SERVICE_NAME, VAULT_SERVICE_PORT. Alternatively, hardcode the VAULT_SERVICE_ENDPOINT to the relevant endpoint.

### **PROXY_SERVICE_NAME**

The name of the docker container if running on docker or the hostname of the proxy service.

Default: `terminus_proxy_service`

### **PROXY_SERVICE_PORT**

The port where Terminus' proxy service runs. When running in docker is both the internal and external port.

Default: `3002`

### **PROXY_SERVICE_SERVICE_NAME**

The proxy service name for Open Telemetry (OTEL).

Default: `terminus-proxy-service`

### **PROXY_SERVICE_OTEL_LIGHTSTEP_ACCESS_TOKEN**

The proxy service Lightstep key for OTEL launcher. Currently being moved to a more generic OTEL provider.

Default: No default.

### **PROXY_SERVICE_CONF_DEFAULT_AES_KEK**

By default, this is Terminus' KEK. Terminus encryption proxy is configured with AES. This is the 32 byte key to encrypt the DEKs generated via the relevant API.
> :warning: \*_NOTE_: To be extended

Default: `passphrasethatnneedstobe32byzes!`
