---
title: Environment Variables (Audit Logs)
sidebar_label: Environment Variables
description: Environment Variables for Audit Logs
---

# Environment Variables (Audit Logs)

The environment variables are set in `.env` or `docker-compose` files.

The service always respects `.env` file but in case of compose based deployments you can override the variables using docker-compose file `x-common-variables` section.

The codebase has most of the things configured, we expect users to configure `ADMIN_ROOT_TOKEN` variable for security reasons.

So just set the `ADMIN_ROOT_TOKEN` and you are good to gofor your first run of Audit log service.

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

### **MAXMIND_GEOLITE2_LICENSE_KEY**

The `MaxMind` license key to fetch `"GeoLite2"` data.

### **TMPDIR**

The path of the temporary folder used for Geo data sync.<br />
Retraced looks for `"GeoLite2` files to import IP address and location data.

### **RETRACED_APP_BASE**

The base path of the Retraced instance which is used for links in the emails.

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
Admin can make a post request to above api with `token=<ADMIN_ROOT_TOKEN>` in Authorization Header to create users in case they does not exists.

## [Prometheus](https://prometheus.io/) configuration

### **RETRACED_PROMETHEUS_ENDPOINT**

Prometheus endpoint url to be used for export.

### **RETRACED_ENABLE_PROMETHEUS**

When this is set Retraced exposes an endpoint for Prometheus exporter. <br />
`/<RETRACED_PROMETHEUS_ENDPOINT>/metrics`

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

### **STATSD_INTERVAL_MILLIS**

The miliseconds time interval for the statsd reporter to send stats.

### **STATSD_PREFIX**

The prefix for the statsd reporter.

### **STATSD_USE_SYSDIG_NAME_REWRITER**

If set true, rewrite argument of the statsd reporter will be set to true.

## [Statuspage](https://www.statuspage.io) configuration

### **STATUSPAGEIO_TOKEN**

Token to be used for statuspage config.

### **STATUSPAGEIO_PAGE_ID**

Page ID to be used for statuspage config.

### **STATUSPAGEIO_URL**

URL to be used for statuspage config.

### **STATUSPAGEIO_INTERVAL_MILLIS**

Interval Milliseconds to be used for statuspage config.

## [SSH EVENT STREAMING](/docs/retraced/advanced/ssh-streaming/) configuration

### **NO_WARP_PIPE**

If not set, Retraced will enable SSH streaming of events.

### **WARP_PIPE_REDIS_DB**

The redis db id used for SSH streaming.

## [Redis](https://redis.io/) configuration

### **REDIS_URI**

The uri to be used for redis connection.

## Email configuration

### **EMAIL_FROM**

The email address to be used to send email from Retraced.

Default: `Retraced <retraced@boxyhq.com>`

### **SMTP_CONNECTION_URL**

SMTP connection url to be used to send emails using [nodemailer](https://www.npmjs.com/package/nodemailer).

### **MANDRILL_KEY**

The API key to be used to send emails using [Mandrill By Mailchimp](https://mailchimp.com/en-gb/features/transactional-email/?utm_source=mandrill&utm_medium=mc-site&utm_campaign=aoc_product-mktg_tnx_redirect_wld_20200515).

## [Auth0](https://auth0.com/) configuration

### **AUTH0_CLIENT_DOMAIN**

The domain to be used for Auth0 web auth.

### **AUTH0_CLIENT_ID**

The client id to be used for Auth0 web auth.

## Publisher configuration

### **PUBLISHER_BULK_CREATE_MAX_EVENTS**

The limit of the events that can be created using bulk api.

default: `50`

### **PUBLISHER_CREATE_EVENT_TIMEOUT**

The timeout used by publister for delay while registering events.

default: `1000`

## [Analytics-node](https://segment.com/docs/connections/sources/catalog/libraries/server/node/) configuration

### **SEGMENT_WRITE_KEY**

The write keys used for [Analytics](https://segment.com/docs/connections/sources/catalog/libraries/server/node/#identify). Reports the project as a `user segment`.
