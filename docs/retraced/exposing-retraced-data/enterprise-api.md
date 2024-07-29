# Using The Enterprise API

The Retraced Enterprise API enables users to consume audit log data programmatically and integrate it with an external monitoring or security system.

## Creating and Managing Enterprise Tokens

Enterprise Tokens can be created and managed via the [Embedded Viewer](/docs/retraced/exposing-retraced-data/viewer/)

**Note**: If you're a vendor integrating Retraced as your audit log, you can also manage and distribute Enterprise Tokens using the [Publisher API](/docs/retraced/apis/publisher-api/).

## Graphql

The quickest way to start getting events is using the GraphQL API. Below is an example request:

```sh
curl -sSL 'http://localhost:3000/auditlog/enterprise/v1/graphql' \
  -H 'Authorization: token=<YOUR_ENTERPRISE_TOKEN>' \
  -H 'Content-Type: application/json' \
  --data-binary '{
  "variables": {
    "before": "",
    "last": 3,
    "query": "action:document.edit received:2017-11-01,2017-12-01"
  },
  "query": "query Search($query: String!, $last: Int, $before: String) { search(query: $query, last: $last, before: $before) { totalCount pageInfo { hasPreviousPage } edges { cursor node { id action crud created actor { name }}}}}"
}'
```

There are five things to pay attention to here:

- We send our Enterpise API Token in a header of the form `Authorization: token=...`
- `variables.last` is the number of events we're requesting, in this case we only want the last 3 events
- `variables.query` is a free-text or structured search query, as you'd use in [The Embedded Viewer](/docs/retraced/exposing-retraced-data/viewer/#search).
- `variables.before` allows us to specify a cursor for paging through events. Since we just want the most recent events, we'll leave this blank for now.
- In the `query` field, we describe the structure and parameters of the GraphQL query.

The response will look something like

```json
{
  "data": {
    "search": {
      "edges": [
        {
          "cursor": "MTUxMDg3MjgwNzAxMyxmMzc4MDNkZDdlOTY0NmUzYTRkZjQyZjdiNGUzOWRjMQ==",
          "node": {
            "action": "license.update",
            "actor": {
              "name": "customertowne+xyz@mycompany.com"
            },
            "created": "2017-11-16T22:53:27Z",
            "crud": "u",
            "id": "f37803dd7e9646e3a4df42f7b4e39dc1"
          }
        },
        {
          "cursor": "MTUxMDg3Mjc5ODUyNiwyZWFiYzA2NDI5NTc0YWEzOWNmNmI4MWYxNTQ1NzFlMQ==",
          "node": {
            "action": "license.update",
            "actor": {
              "name": "jane.smith@company.com"
            },
            "created": "2017-11-16T22:53:18Z",
            "crud": "u",
            "id": "2eabc06429574aa39cf6b81f154571e1"
          }
        },
        {
          "cursor": "MTUxMDg2Nzc3MzMxNiw5Y2M2NTM3ZGRjZTk0ZGEyODI0NTA4ZTc4M2EzOGRjNQ==",
          "node": {
            "action": "application.branding.update",
            "actor": {
              "name": "john.doe@company.com"
            },
            "created": "2017-11-16T21:29:33Z",
            "crud": "u",
            "id": "9cc6537ddce94da2824508e783a38dc5"
          }
        }
      ],
      "pageInfo": {
        "hasPreviousPage": true
      },
      "totalCount": 2411
    }
  }
}
```

The query itself is in the `query` field of the json body:

```
query Search($query: String!, $last: Int, $before: String) { search(query: $query, last: $last, before: $before) { totalCount pageInfo { hasPreviousPage } edges { cursor node { id action crud created actor { name }}}}}
```

The same query is expanded below for readability. In general use, the first few lines won't change for every request, the interesting part is under `node`, where you're able to select which fields you'd like to receive.

```
query Search($query: String!, $last: Int, $before: String) {
  search(query: $query, last: $last, before: $before) {
    totalCount
    pageInfo {
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        action
        crud
        created
        actor {
          name
        }
      }
    }
  }
}
```

This example only requests a few event fields: `id`, `action`, `crud`, `created`, and `actor.name`, but there are many other fields available, as described in the [Event Schema](/docs/retraced/apis/graphql/#event).

The GraphQL APIs for consuming events are specified fully in [GraphQL API Guide](/docs/retraced/apis/graphql/). There are example queries and usage in the [Go SDK](https://github.com/retracedhq/retraced-go/blob/master/graphql.go#L216) and the [Javascript SDK](https://github.com/retracedhq/retraced-js/blob/master/src/graphql.ts#L334)

<!-- ## SSH Event Stream

You can also use your Enterprise API Token to stream events over SSH in real time. You can use your token as the username, and ssh `tail.retraced.io`:

```sh
$ ssh <YOUR_ENTERPRISE_TOKEN>@tail.retraced.io
PTY allocation request failed on channel 0
584fad6b2a204326857c9eef7704d31f,,1510939272892,POST /viewer/v1/graphql,35.186.223.140,audit.log.view,r,"{""action"":""audit.log.view"",""crud"":""r"",""actor"":{""id"":""27c92eb3f5ce849b9866edd12f8fdef8""},""group"":{""id"":""1ff0ab86bcb8f9fcd67936db08b80600""},""description"":""POST /viewer/v1/graphql"",""source_ip"":""35.186.223.140""}",1ff0ab86bcb8f9fcd67936db08b80600,51e79795f89b4454a883a3a49d03d6ea,7a691d01114a494ba9d77eb302edce6a,BoxyHQ QA,16132,1494456302651,1510939272911,27c92eb3f5ce849b9866edd12f8fdef8,dexter+qa@boxyhq.com,51e79795f89b4454a883a3a49d03d6ea,7a691d01114a494ba9d77eb302edce6a,,1498682746392,1498682746393,1510939272927,,,,,,,,,
20e3371bb3ab4b7c8e0dfdda4b86de11,,1510939274311,POST /viewer/v1/graphql,35.186.223.140,audit.log.view,r,"{""action"":""audit.log.view"",""crud"":""r"",""actor"":{""id"":""27c92eb3f5ce849b9866edd12f8fdef8""},""group"":{""id"":""1ff0ab86bcb8f9fcd67936db08b80600""},""description"":""POST /viewer/v1/graphql"",""source_ip"":""35.186.223.140""}",1ff0ab86bcb8f9fcd67936db08b80600,51e79795f89b4454a883a3a49d03d6ea,7a691d01114a494ba9d77eb302edce6a,BoxyHQ QA,16133,1494456302651,1510939274324,27c92eb3f5ce849b9866edd12f8fdef8,dexter+qa@boxyhq.com,51e79795f89b4454a883a3a49d03d6ea,7a691d01114a494ba9d77eb302edce6a,,1498682746392,1498682746393,1510939274334,,,,,,,,,
```

The default format is csv, but JSON is also available, by appending `?format=json` to the token:

```sh
$ ssh f66bfe98f22648ae94b08c6c38e9ba7f?format=json@tail.retraced.io
PTY allocation request failed on channel 0
{"action":"audit.log.view","actor":{"created":1498682746392,"environment_id":"7a691d01114a494ba9d77eb302edce6a","first_active":1498682746393,"id":"27c92eb3f5ce849b9866edd12f8fdef8","last_active":1510939425326,"name":"dexter+qa@boxyhq.com","project_id":"51e79795f89b4454a883a3a49d03d6ea"},"crud":"r","description":"POST /viewer/v1/graphql","group":{"created_at":1494456302651,"environment_id":"7a691d01114a494ba9d77eb302edce6a","event_count":"16134","id":"1ff0ab86bcb8f9fcd67936db08b80600","last_active":1510939425315,"name":"BoxyHQ QA","project_id":"51e79795f89b4454a883a3a49d03d6ea"},"id":"8d14443a55dc4b7d87939917019a520d","raw":"{\"action\":\"audit.log.view\",\"crud\":\"r\",\"actor\":{\"id\":\"27c92eb3f5ce849b9866edd12f8fdef8\"},\"group\":{\"id\":\"1ff0ab86bcb8f9fcd67936db08b80600\"},\"description\":\"POST /viewer/v1/graphql\",\"source_ip\":\"35.186.223.140\"}","received":1510939425299,"source_ip":"35.186.223.140","target":{}}
```

Events will continue to appear as long as the ssh session is open. These events can now be piped to a file, or to any other program to ingest them into your monitoring or security systems.

**Note**: SSH Streaming may not be available in all Retraced environments.

For more information, check out [SSH Streaming](/docs/retraced/advanced/ssh-streaming/). -->

## Saved Searches

The Enterprise API includes several endpoints for saving a search and maintaining a persistent cursor across search queries.

The general workflow is:

- Create a "Saved Search" with desired query parameters
- Create an "Active Search" from the saved search's ID
- Use the "Pump Active Search" endpoint whenever you want to get more events from your search.
  - Pump active search will always return only the events that occurred since the last time it was queried, so it can be called as often as every few seconds, or as infrequently as every few months

**Note**: Saved Search functionality may not be available in all Retraced environments.

The endpoints for managing Saved Searches are described in the [Enterprise API Guide](/docs/retraced/apis/enterprise-api/). There's also an [OpenAPI/Swagger specification](https://raw.githubusercontent.com/retracedhq/retraced/release/swagger.json) and [interactive API console](https://boxyhq.com/audit-logs-api#/tag/admin-api/POST/admin/v1/project/{projectId}/invite).
