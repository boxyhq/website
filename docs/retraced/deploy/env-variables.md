# Environment Variables

The env vars are only applicable to the Jackson service. If you are using the npm then look for the options below when initializing the library.

## General configuration

### **API_BASE_URL_PATH**

The string to be added to the retraced API path.
Default: `""`

### **RETRACED_API_BASE**

The Retraced API base path.
Default: `localhost:3000`

### **HMAC_SECRET_ADMIN**

The secret to be used to encode & decode the [JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519) for [Admin APIs](/docs/retraced/apis/admin-api).

### **HMAC_SECRET_VIEWER**

The secret to be used to encode & decode the [JSON Web Token](https://datatracker.ietf.org/doc/html/rfc7519) for [Viewer APIs](/docs/retraced/getting-started/embedded-viewer).

### **LOG_LEVEL**

Sets the logging level of the application logs. Supported values `trace`, `debug`, `info`, `warn`, `error`

Default: `warn`

### **EXPORT_PAGE_SIZE_INTERNAL**

The `Page Size` to be used to fetch Audit Logs from `ElasticSearch` for the `Saved Export Report`.

Default: `10000`

### **PG_SEARCH**

If set `true` Retraced will use Postgres to `index & search` the audit logs instead of `Elasticsearch`.

Default: `false`

## [Postgres](https://www.postgresql.org/) Configuration

### **POSTGRES_HOST**

The hostname to use for Postgres connection.

Default: `""`

### **POSTGRES_PORT**

The port to use for Postgres connection.

Default: `""`

### **POSTGRES_USER**

The user to use for Postgres connection.

Default: `""`

### **POSTGRES_PASSWORD**

The password to use for Postgres connection.

Default: `""`

### **POSTGRES_DATABASE**

The Postgres database name to use for Retraced.

Default: `""`

### **POSTGRES_POOL_SIZE**

The number of connections to be used for Postgres pool.

Default: `20`

## [NSQD](https://github.com/nsqio/nsq) Configuration

### **NSQD_HTTP_PORT**

The http port to use for nsqd connection.

Default: `4151`

### **NSQD_HOST**

The hostname to use for nsqd connection.

Default: `""`

### **NSQD_TCP_PORT**

The tcp port to use for nsqd connection.

Default: `4150`

## [Supercronic](https://github.com/aptible/supercronic) Configuration

### **SUPERCRONIC_URL**

The release url of `supercronic`.

You can find more details [here](https://github.com/aptible/supercronic/releases/).

### **SUPERCRONIC_SHA1SUM**

Checksum to verify the `supercronic` binary.

You can find more details [here](https://github.com/aptible/supercronic/releases/).

### **SUPERCRONIC**

The name of the `supercronic` release according to the platform you are using.

You can find more details [here](https://github.com/aptible/supercronic/releases/).

## [Elasticsearch](https://www.elastic.co/) Configuration

### **ELASTICSEARCH_NODES**

Elasticsearch node address or a `comma seperated` list of Elasticsearch nodes.

Ex:<br />
 `https://localhost:9200`<br />
or <br />
`https://localhost:9200,https://localhost:9201,https://localhost:9202`

NPM library option: `preLoadedConfig`