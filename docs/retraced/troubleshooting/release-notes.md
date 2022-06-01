# Release Notes

## 17.11.1 | 2017-11-29
### New Features
- Optionally disable Warp Pipe by settting the `NO_WARP_PIPE` env var in
  processor, which removes a dependency on Redis.

### Bug Fixes
- Improved Redis reconnections from processor.
- Moved viewer descriptor store from Redis to Postgres.
- Separated Postgres migrations for Postgres 10 when being used as replacement
  for ElasticSearch.
- Fixed CSV export when using Postgres search.

## 17.11. | 2017-11-20

### New Features
-  Optionally toggle on Prometheus metrics and serve them on the default http
   port by setting the `RETRACED_ENABLE_PROMETHEUS` env var. Statsd metrics will
   continue to be reported.
-  Optionally replace ElasticSearch with Postgres search by setting the
   `PG_SEARCH` env var.

## 17.10. | 2017-10-26

### Bug Fixes
- Fix a bug in Search indexing that could cause new events to not be searchable
  in a few cases

### Retraced On Prem | 1.1.9
- Add flag `RETRACED_DISABLE_GEOSYNC` to disable monthly GeoIP database syncing.
  This flag should be set to a non-empty value in the `cron` deployment to disable syncing.
- Retraced On Prem now provides experimental support for Alpine-based images.
  These images can be pulled by adding `-alpine` to image tag. e.g. `retracedhq/api:1.1.9-alpine`
- `retracedctl create-template` now replaces any existing templates


## 17.10.0 | 2017-10-18

### New Features
- The API now supports TLS when SSL_SERVER_CERT_PATH and SSL_SERVER_KEY_PATH
  env vars are defined.

### Bug Fixes
- Replace cron Node container with supercronic. This fixes an issue where cron
  jobs would stop without logging an error.

### Retraced On Prem | 1.1.8
- Add a few `retracedctl` commands to the `api` container. Run `api`
  with command set to `bin/retracedctl --help` for more info

## 17.08.0 | 2017-08-31

### Bug Fixes
- Fix a bug where emails sent for requesting an environment deletion contained
  broken links


### Retraced On-Prem 1.1.5
- Convert to structed json logging, allow configuring a log file for `api` and `proccessor` via `RETRACED_API_LOG_FILE` and `RETRACED_PROCESSOR_LOG_FILE`
- If a request includes a header `X-Request-UUID`, a portion of the UUID will be included
  in logs
- Apply several schema improvements to ensure indexes are performing properly

## 17.09.2 | 2017-09-14

### New Features
- The Publisher API /event endpoint queues new events when slow writes are detected. The PUBLISHER_CREATE_EVENT_TIMEOUT (default 1000ms) env var is read to trigger the queue.

## 17.09 | 2017-09-11

### Bug Fixes
- Implement Redis client pooling in the API
- Fix a bug that allowed groups within a project to view all saved exports within the project. This required deleting all existing saved exports.

## 17.07.2 | 2017-07-31

### New Features
- Switch between projects in the Admin UI
- Logout in the Admin UI
- Delete environments flow in the Admin UI and Admin API
- Postgres client pool size is configurable with POSTGRES_POOL_SIZE environment variable

### Bug Fixes
- Reconnect to NSQ when connections are lost
- Fix authentication bug with invitations
- Fix searches for viewer descriptors containing a target ID
- Improve performance of recurring task to normalize old events

## 17.07 | 2017-07-12

### Bug Fixes
- Fixes a bug in the Embedded Viewer where exporting events would not work for saved searches returning a high number of very old events.

## 17.06.5 | 2017-06-17

### New Features
- Add controls for switching projects on the Admin site
- Add the ability to log out from the Admin site
- Add controls to disable/enable API tokens on the Admin site

### Bug Fixes
- Fix a bug that caused the environment selector in the Admin UI to render incorrectly in Microsoft Edge
- Add 404 page for missing or unknown routes in Admin site
- Fix a bug around resolution of group names for events that were sent with a `group.id` but without a `group.name`

## 17.06.4 | 2017-05-31

### New Features
- Navigating to https://app.retraced.io will resume an active session if it exists, instead of requiring a user to log in again
- Official Retraced SDKs now include methods for creating and sending queries to [GraphQL endpoints](/docs/retraced/apis/graphql)
- Expose Project Name and Project Id in the Admin UI under "Settings"
- New Publisher API endpoint to support POST'ing multiple events in a single call at `/project/:projectId/event/bulk`

### Bug Fixes
- Improved error handling in Publisher API endpoints

### Documentation Updates
- [Segmenting data with Projects, Environments, and Groups](/docs/retraced/how-to-audit-log/segments)
- [More GraphQL Examples](/docs/retraced/apis/graphql)

## 17.06.3 | 2017-05-25

### New Features
- Navigating to https://app.retraced.io will resume an active session if it exists, instead of requiring a user to log in again
- Backend updates to improve event search performance and reliability

### Bug Fixes
- Accepting a Retraced invite is now handled by https://app.retraced.io instead of https://preview.retraced.io
- Improved error handling in Publisher API endpoints


### Retraced On-Prem 
- On-Premise components now support SMTP as an email transport as an alternative to mandrill via `SMTP_CONNECTION_URL` and `EMAIL_FROM`
- On-Premise components now support an additional `STATSD_PREFIX` parameter for prefixing statsd metrics
- On-Premise components now report statsd metrics in a dot-delimited `ClassName.methodName.metric.aggregation` format. The previous [Sysdig-style key-value tagging scheme](https://support.sysdig.com/hc/en-us/articles/204376099-Metrics-integrations-StatsD) can still be enabled by setting `STATSD_USE_SYSDIG_NAME_REWRITER`

## 17.06.2 | 2017-05-22

### New Features
- Users can now log into the app directly from the admin site at [app.retraced.io](https://app.retraced.io) instead of having to navigate to the public site at [preview.retraced.io](https://preview.retraced.io)
- API tokens in the Admin UI are now hidden by default
- Usage of viewer tokens and Enterprise API tokens will now generate Audit events for the corresponding Group


### Bug Fixes
- Fix for `created` field validation when using `POST /publisher/v1/project/:id/event`, this field should be a valid ISO8601 date string, as described in the updated swagger spec for the [Publisher API](/docs/retraced/apis/publisher-api)
    
### Documentation Updates
- [Public Ips](/docs/retraced/troubleshooting/public-ips)
- [Tracking Application Versions](/docs/retraced/advanced-retraced/tracking-application-versions)
- [Automatic Auditing](/docs/retraced/advanced-retraced/automated-audit-events)
- Updates to [Hashing Formula](/docs/retraced/architecture/hashing-formula) regarding escaping of reserved characters


## 17.06.1 | 2017-05-11

### New Features
- Group Name is now displayed in the Events table at [app.retraced.io](https://app.retraced.io)
- By default, Publisher API tokens are now hidden in the UI at [app.retraced.io](https://app.retraced.io) 
- Top Actor and Group stats are now available via GraphQL endpoints
- `target.fields` and `actor.fields` are now accessible from [Display Templates](/docs/retraced/advanced-retraced/display-templates) and [GraphQL endpoints](/docs/retraced/apis/graphql)
- `target.id` and `actor.id` are now searchable in the Events table at [app.retraced.io](https://app.retraced.io)
- Several infrastructure improvements for faster and more reliable event processing and delivery

### Bug Fixes
- Small UI fixes for the Embedded Viewer 
- Improved display for events without a Target in the Events table and in [Display Templates](/docs/retraced/advanced-retraced/display-templates) 
