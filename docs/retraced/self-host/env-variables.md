---
title: Environment Variables (Audit Logs)
sidebar_label: Environment Variables
description: Environment Variables for Audit Logs
---

# Environment Variables (Audit Logs)

The environment variables are set in `.env` or `docker-compose` files.

The service always respects `.env` file but in case of compose based deployments you can override the variables using docker-compose file `x-common-variables` section.

The codebase has most of the things configured, we expect users to configure `ADMIN_ROOT_TOKEN` variable for security reasons.

So just set the `ADMIN_ROOT_TOKEN` and you are good to go for your first run of Audit log service.

You can check the complete list of environment variables below,

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

### **RETRACED_API_LOG_FILE**

If set to a valid file path, Retraced will use the file to save `Retraced API` logs.

### **RETRACED_PROCESSOR_LOG_FILE**

If set to a valid file path, Retraced will use the file to save `Retraced processor` logs.

### **RETRACED_API_SCHEMES**

The api schema to used for swagger.

Default: `http,https`

### **PROCESSOR_NORMALIZE_REPAIRER_MIN_AGE_MS**

The minimum age in microseconds used by processor to select audit logs to process.

Default: `120000`

### **PROCESSOR_NORMALIZE_REPAIRER_MAX_EVENTS**

The maximum number of events processor will select to process.

Default: `10000`

### **RETRACED_DB_NO_CACHE**

If set to true, Retraced disables db level caching.<br />
Caching is used for `Actor`, `Target` & `Groups` SELECT queries of audit log.

### **TMPDIR**

The path of the temporary folder used for Geo data sync.<br />
Retraced looks for `"GeoLite2` files to import IP address and location data.

### **RETRACED_APP_BASE**

The base path of the Retraced instance which is used for links in the emails.

## [MaxMind](https://www.maxmind.com/) Geo IP Configuration

There are two modes for Geo IP download, lookup & updates.

- Using GeoLite2 file downloads
- Using [geoipupdate](https://github.com/maxmind/geoipupdate) to download mmdb file

For GeoLite2 file downloads only `GEOIPUPDATE_LICENSE_KEY` is required.
For mmdb downloads `GEOIPUPDATE_USE_MMDB`, `GEOIPUPDATE_LICENSE_KEY` and `GEOIPUPDATE_ACCOUNT_ID` are mandatory & `GEOIPUPDATE_DB_DIR` is optional.

### **GEOIPUPDATE_LICENSE_KEY**

The `MaxMind` license key to fetch `"GeoLite2"` data or mmdb file.

### **GEOIPUPDATE_USE_MMDB**

Indicates whether the service should use the `mmdb format`` for Geo IP database download.

### **GEOIPUPDATE_ACCOUNT_ID**

The `MaxMind` account id to download/update `"GeoLite2"` mmdb file.

### **GEOIPUPDATE_DB_DIR**

Custom path of `mmdb` file directory which will be used for Geo IP lookups. **(Default: `/etc/mmdb`)**

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

### **NSQ_CIRCUIT_BREAKER_THRESHOLD**

The circuit breaker threshold used for NSQ client.

## [Elasticsearch](https://www.elastic.co/) Configuration

### **ELASTICSEARCH_NODES**

Elasticsearch node address or a `comma seperated` list of Elasticsearch nodes.

Ex:<br />
`https://localhost:9200`<br />
or <br />
`https://localhost:9200,https://localhost:9201,https://localhost:9202`

### **ELASTICSEARCH_CAFILE**

The CA file to use when connecting with `SSL enabled Elasticsearch`.

### **ELASTICSEARCH_REQUEST_RETRIES**

Max retries for Elasticsearch client.

### **ELASTICSEARCH_REQUEST_TIMEOUT**

Request timeout for Elasticsearch client.

### **ELASTICSEARCH_BACKOFF**

The backoff interval for retries used by `internal wrapper of Elasticsearch`.

### **ELASTICSEARCH_TOTAL_TIMEOUT**

The total timeout used by wrapper for `all Elasticsearch requests` & `retries with backoffs`.

## Headless Mode configuration

`Headless mode bootstraps the db configuration required for a tenant to use Retraced right away.`

### **HEADLESS_ENV_ID**

Environment Id to be used in the headless mode.

### **HEADLESS_API_KEY**

API key to be used in the headless mode.

### **HEADLESS_PROJECT_ID**

Project Id to be used in the headless mode.

### **HEADLESS_PROJECT_ENV**

Environment Id to be used for Project in the headless mode.

## [Bugsnag](https://www.bugsnag.com) configuration ([Error Reporting](https://docs.bugsnag.com/api/error-reporting/))

### **BUGSNAG_TOKEN**

Token to be used for bugsnag [error reporting](https://docs.bugsnag.com/api/error-reporting/).

### **STAGE**

[ReleaseStage](https://docs.bugsnag.com/product/releases/#configuring-the-release-stage) configuration to be used for bugsnag.

## [Signal Sciences](https://www.signalsciences.com/) configuration

`Signal Sciences is used for edge security & API protection`

### **SIGSCI_RPC_ADDRESS**

The RPC address to be used for Signal Sciences API protection.

## **ADMIN_ROOT_TOKEN**

When this is set, Retraced makes api `/admin/v1/user/_login` available.
Admin can make a post request to above api with `token=<ADMIN_ROOT_TOKEN>` in Authorization Header to create users.

## SSL configuration

Used to enable https mode of Retraced.

### **SSL_SERVER_CERT_PATH**

The path of the ssl certificate file.

### **SSL_SERVER_KEY_PATH**

The path of the ssl private key file.

## Statsd Reporter configuration

### **STATSD_HOST**

The hostpath for the statsd reporter.

### **STATSD_PORT**

The port for the statsd reporter.

<!-- ## [SSH EVENT STREAMING](/docs/retraced/advanced/ssh-streaming/) configuration

### **WARP_PIPE_REDIS_DB**

The Redis DB to be used for SSH streaming.

## [Redis](https://redis.io/) configuration

### **REDIS_URI**

The URI to be used for Redis. -->

## Opentelemetry configuration

Retraced supports observability via OpenTelemetry. The following env vars are available for configuration (along with the rest of the [supported ones](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md))

### **OTEL_EXPORTER_OTLP_ENDPOINT** or **OTEL_EXPORTER_OTLP_METRICS_ENDPOINT**

Target URL to which the exporter is going to send metrics.

Example: `https://ingest.lightstep.com:443/metrics/otlp/v0.6`

### **OTEL_EXPORTER_OTLP_HEADERS** or **OTEL_EXPORTER_OTLP_METRICS_HEADERS**

Headers relevant for the endpoint, useful for specifying authentication details for providers.

Example: `lightstep-access-token=<token>,...`

### **OTEL_EXPORTER_OTLP_PROTOCOL** or **OTEL_EXPORTER_OTLP_METRICS_PROTOCOL**

The transport protocol. Options MUST be one of: `grpc`, `http/protobuf` or `http/json`.

### **OTEL_EXPORTER_DEBUG**

Set this to `true` to enable debug logs for Opentelemetry. This is only meant for purposes of debugging otel locally.

## Email configuration

### **EMAIL_FROM**

The email address to be used to send email from Retraced.

Default: `Retraced <retraced@boxyhq.com>`

### **SMTP_CONNECTION_URL**

SMTP connection url to be used to send emails using [nodemailer](https://www.npmjs.com/package/nodemailer).

### **MANDRILL_KEY**

The API key to be used to send emails using [Mandrill By Mailchimp](https://mailchimp.com/en-gb/features/transactional-email/?utm_source=mandrill&utm_medium=mc-site&utm_campaign=aoc_product-mktg_tnx_redirect_wld_20200515).

## Publisher configuration

### **PUBLISHER_BULK_CREATE_MAX_EVENTS**

The limit of the events that can be created using bulk api.

default: `50`

### **PUBLISHER_CREATE_EVENT_TIMEOUT**

The timeout used by publisher for delay while registering events.

default: `1000`

## [Analytics-node](https://segment.com/docs/connections/sources/catalog/libraries/server/node/) configuration

### **SEGMENT_WRITE_KEY**

The write keys used for [Analytics](https://segment.com/docs/connections/sources/catalog/libraries/server/node/#identify). Reports the project as a `user segment`.

## Anonymous Analytics

### **RETRACED_NO_TELEMETRY** or **DO_NOT_TRACK**

Set one of these to `1` or `true` to turn off our anonymous analytics. We only track usage events once per day and it does not contain any information that can identify you in any form.
