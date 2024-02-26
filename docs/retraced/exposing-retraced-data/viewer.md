# Using the Retraced Viewer

The Retraced embedded viewer is the easiest way consume and understand your audit log data. This guide will walk you through the viewer's features.

Note -- if you're a Software Vendor and you're looking to embed the viewer into your site, see the [Embedded Viewer Guide](/docs/retraced/getting-started/embedded-viewer/)

## Overview

The viewer exposes four core features:

1. Search
1. Filters
1. Export
1. API Token Management.

![Viewer](/images/docs/retraced/viewer-top.png)

### Search

The search box allows for free-text search of all audit events, but also supports some structured search operators. Some example searches:

- `edit` -- free text search
- `action:users.list` -- search by action
- `action:document.* location:Germany` -- search by action and location
- `actor.id:john.doe@mycompany.com` -- search by actor id
- `action:user.login,user.logout` -- search by multiple actions

### Filters

The filters section allows for filtering events by date range, and by Create/Read/Update/Delete actions.

### Export

Save searches and export them to CSV using the "Exports" section.

### API Tokens

Create and Manage Enterprise API tokens using the "API Tokens" section.

For a guide on using API Tokens, see [Using The Enterprise API](/docs/retraced/exposing-retraced-data/enterprise-api)
