# Vault Service

The vault service acts as the middleware between the Proxy Service and the Persistence Vault. Amongst it's roles and responsibilities:
- Supports multi-tenancy and multi-product logical segregation via API URL paths
- It exposes the low-level API for the Proxy to interface with the persistence vault
    - Read entries
    - Write entries
- Implements internal logical encryption between the proxy and the database treating data as blobs
- Implements Access Control Policies
- It is not business model aware

It is written in [Go](https://go.dev/).

---
## Interaction with the Persistence Vault

Leverages [GORM](https://gorm.io/) to interface with the database. Currently is configured to use PostgreSQL but supports any persistence store supported by GORM.

Implements AES encryption against the data store.

>  :warning: **IMPORTANT**: changes on encryption keys of the logical encryption layer will render the data stored useless.

---
## Configuration
### Default vs Runtime
The Vault Service ships with default configurations for the service components
.
The `default` configuration ships in the `./conf/default` directory and it is copied on startup on the `./conf/runtime` directory IF such directory is empty.

The `./conf/runtime` directory is where the actual configurations are read from.

The configuration files are as follows:

### vault_conf.cue
CUE lang based configuration file containing the necessary variables. These can be set both in this file or as ENVIRONMENT variables.
If set as environment variables, those will take precedence over the runtime ones.

### access.cue

Defines:
- The access control policies to the APIs via CUE lang definition. Multiple ACPs can be defined, but only the one assigned to the `defaultPolicy` will be used.
```
///////////////////////////////////////////////////////////////////////
// API Definitions
///////////////////////////////////////////////////////////////////////
#apiSet1: acp.#APIsSet & {
	version: "v1"
	apis: {
		vaultStatus: {
			path: "/status"
			methods: [ "GET" ]
			permissions: [ "READ", "ADMIN", "WRITE" ]
		}
		createVaultEntries: {
			path: "/vault/{tenant}/{product}/"
			methods: [ "POST" ]
			permissions: [ "WRITE" ]
		}
		readOneVaultEntry: {
			path: "/vault/{tenant}/{product}/read/{token}"
			methods: [ "GET" ]
			permissions: [ "READ" ]
		}
		readVaultEntryMultiple: {
			path: "/vault/{tenant}/{product}/read"
			methods: [ "POST" ]
			permissions: [ "READ" ]
		}
	}
}

// this is the policy the systtem will read
defaultPolicy: #apiSet1


///////////////////////////////////////////////////////////////////////
// Policies
///////////////////////////////////////////////////////////////////////

// The request is filled by the calling system
apiRequest: acp.#APIRequest & {}

// Sample policy
access: acp.#AuthResponse & {
	allowed: acp.#defFalse
	request: apiRequest
	for permission in defaultPolicy.apis[request.apiName].permissions {
		if list.Contains(apiKeysAndPermissions[request.access_token], permission) {
			allowed: true
		}
	}
}
```
**NOTES**: 

- the paths in the API definitions are values accepted by Go's [Gorilla Mux's](https://github.com/gorilla/mux) specification.
- the names in the API definitions (i.e. `vaultStatus`) are mapped via code to the relevant handling functions.
- the `version` is used as part of the path. An example of the status endpoint served by a proxy running locally on port 3002 would be:
    http://127.0.0.1:3002/v1/status
    
---
---
- The API Keys and their role-based mapping
```
///////////////////////////////////////////////////////////////////////
// API Keys
///////////////////////////////////////////////////////////////////////
apiKeysAndPermissions: acp.#AuthTokens & {
	readAPIKey1: [ "READ" ]
	writeAPIKey1: [ "WRITE" ]
	adminAPIKey1: [ "ADMIN" ]
	allAPIKey1: [ "READ", "WRITE", "ADMIN" ]
	readwriteAPIKey1: [  "READ","WRITE" ]
}
```
**NOTE**: this will be removed and implemented either as an external service or fully integrated in an OPA or similar access control framework. Currently duplicates the proxy service configuration

---
## API

[Swagger API](https://github.com/boxyhq/terminus/blob/main/swagger/vault/swagger.json)