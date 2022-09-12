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

Terminus' image versions for the vault and the proxy services

Default: `latest`


## Vault Persistence Layer Configuration

Terminus' vault persistence layer currently uses [GORM](https://gorm.io/) with a default configuration using PostgreSQL as a provider. 

### **TERMINUS_VAULT_DB_IMAGE**

The docker image 
### **TERMINUS_VAULT_DB_HOSTNAME**
### **TERMINUS_VAULT_DB_USER**
### **TERMINUS_VAULT_DB_PASSWORD**
### **TERMINUS_VAULT_DB_DBNAME**
### **TERMINUS_VAULT_DB_HOST_PORT**
### **TERMINUS_VAULT_DB_CONTAINER_PORT**
### **TERMINUS_VAULT_DB_VOLUME**


### **HOST_URL**

The URL to bind to.
Default: `localhost`

### **HOST_PORT**

The port to bind to.
Default: `5225`

<!-- 


# Terminus Vault Persistence
TERMINUS_VAULT_DB_IMAGE=postgres:14.4
TERMINUS_VAULT_DB_HOSTNAME=terminus_vault_persistence
TERMINUS_VAULT_DB_USER=postgres
TERMINUS_VAULT_DB_PASSWORD=postgres
TERMINUS_VAULT_DB_DBNAME=postgres
TERMINUS_VAULT_DB_HOST_PORT=5432
TERMINUS_VAULT_DB_CONTAINER_PORT=5432
TERMINUS_VAULT_DB_VOLUME=./terminus-volumes/terminus-vault-data

# Terminus Vault Service 
TERMINUS_VAULT_SERVICE_NAME=terminus_vault_service
TERMINUS_VAULT_SERVICE_IMAGE=boxyhq/terminus-vault:${TERMINUS_VERSION}
TERMINUS_VAULT_SERVICE_ENCR_AES=true
TERMINUS_VAULT_SERVICE_KEY_AES=passphrasewhichneedstobe32byzes!
TERMINUS_VAULT_SERVICE_HOST_PORT=3005
TERMINUS_VAULT_SERVICE_PORT=3005
TERMINUS_VAULT_SERVICE_VOLUME=./terminus-volumes/terminus-vault-conf
TERMINUS_VAULT_SERVICE_LOGS_VOLUME=./terminus-volumes/terminus-vaultservice-logs
# OTEL
TERMINUS_VAULT_SERVICE_SERVICE_NAME=terminus-vault-service
TERMINUS_VAULT_SERVICE_OTEL_LIGHSTEP_ACCESS_TOKEN=xxx_addtoenvironment
# Vault external endpoint
TERMINUS_VAULT_SERVICE_ENDPOINT=http://${TERMINUS_VAULT_SERVICE_NAME}:${TERMINUS_VAULT_SERVICE_PORT}

# Terminus Proxy Service
TERMINUS_PROXY_SERVICE_NAME=terminus_proxy_service
TERMINUS_PROXY_SERVICE_IMAGE=boxyhq/terminus-proxy:${TERMINUS_VERSION}
TERMINUS_PROXY_SERVICE_CONF_KEY_AES=passphrasethatnneedstobe32byzes!
TERMINUS_PROXY_SERVICE_PORT=3002
TERMINUS_PROXY_SERVICE_HOST_PORT=3002
TERMINUS_PROXY_SERVICE_VOLUME=./terminus-volumes/terminus-proxy-data
TERMINUS_PROXY_SERVICE_LOGS_VOLUME=./terminus-volumes/terminus-proxyservice-logs
# OTEL
TERMINUS_PROXY_SERVICE_SERVICE_NAME=terminus-proxy-service
TERMINUS_PROXY_SERVICE_OTEL_LIGHSTEP_ACCESS_TOKEN=xxx_addtoenvironment -->
