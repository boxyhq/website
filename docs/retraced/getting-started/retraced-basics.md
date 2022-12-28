# Retraced Basics

At it's core, Retraced consists of 3 components:

- The [Publisher API](/docs/retraced/apis/publisher-api), which is used by a 
  vendor application to report audit events to Retraced.

- A [Logs Viewer](/docs/retraced/getting-started/embedded-viewer) which
  can be embedded in the frontend of a vendor application to allow end customers
  to view, search, and export logs.

- The [Enterprise IT Integration API](/docs/retraced/apis/enterprise-api) which
  be used by end customers to consume audit log events programmatically.

The first step in any Retraced integration is [sending an event to the Publisher API](/docs/retraced/getting-started/first-audit-event). Once events have been published to Retraced, they can be consumed either by embedding the logs viewer or by accessing the Enterprise IT Integration API.
