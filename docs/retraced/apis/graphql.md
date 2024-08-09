# GraphQL Endpoint

The recommended way to search events using an API is to POST your query and variables to the appropriate Retraced GraphQL endpoint.

| API                                      | Endpoint                                                                                            |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Publisher                                | `http://localhost:3000/auditlog/publisher/v1/project/{project_id}/graphql`                          |
| Admin                                    | `http://localhost:3000/auditlog/admin/v1/project/{project_id}/environment/{environment_id}/graphql` |
| Enterprise                               | `http://localhost:3000/auditlog/enterprise/v1/graphql`                                              |
| Viewer                                   | `http://localhost:3000/auditlog/viewer/v1/graphql`                                                  |
| Viewer Paginated by page size and offset | `http://localhost:3000/auditlog/viewer/v1/graphql/paginated`                                        |

## Search

This query is used for the GraphQL API with cursor pagination.
The query root provides a search method. A fully-formed query for a subset of event fields would look like this:

```js
{
  search(query:"action:user.login location:Germany", last:50, before:"opaquecursor") {
    totalCount
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        action
        actor {
          name
        }
        created
        country
      }
    }
  }
}
```

### Variables

Use `query`, `last`, and `before` variables to enable reuse of your query templates. If you define a parameterized query like this...

```js
const searchQuery = `query Search($query: String!, $last: Int, $before: String) {
  search(query:"action:user.login location:Germany", last:50, before:"opaquecursor") {
    totalCount
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        action
        actor {
          name
        }
        created
        country
      }
    }
  }
}`;
```

... then you can execute searches like this:

```js
const vars = {
  query: 'action:user.login location:Germany',
  last: 50,
  before: 'opaquecursor',
};
const res = fetch(
  'http://localhost:3000/auditlog/publisher/v1/project/3hf140713bn302/graphql',
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token token=2ba3059ad7f14071b9befb2a7a2e195e',
    },
    body: JSON.stringify({
      query: searchQuery,
      variables: vars,
    }),
  }
);
```

## Search by page size and offset

For GraphQL API with page size & page limit based pagination, you can use the following query.

```js
{
  searchPaginated(query:"action:user.login location:Germany", pageOffset: 0, pageLimit: 20, startCursor: "", sortOrder: "desc") {
    totalCount
    edges {
      cursor
      node {
        action
        actor {
          name
        }
        created
        country
      }
    }
  }
}
```

### Variables

Use `query`, `pageOffset`, `pageLimit`, `sortOrder` and `startCursor` variables to enable reuse of your query templates. If you define a parameterized query like this...

```js
const searchQuery = `query SearchPaginated($query: String!, $pageOffset: Int!, $pageLimit: Int!, $startCursor: String, $sortOrder: sortOrder) {
  searchPaginated(query: $query, pageOffset: $pageOffset, pageLimit: $pageLimit, startCursor: $startCursor, sortOrder: $sortOrder) {
    totalCount
    edges {
      cursor
      node {
        action
        actor {
          name
        }
        created
        country
      }
    }
  }
}`;
```

... then you can execute searches like this:

```js
const vars = {
  query: 'action:user.login location:Germany',
  pageOffset: 0,
  pageLimit: 20,
  startCursor: 'opaquecursor',
  sortOrder: 'desc',
};
const res = fetch(
  'http://localhost:3000/auditlog/viewer/v1/graphql/paginated',
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhZjFmYzY5NzhhNzRmZGZhMWJmMzI3MjlmZjRhZTYyIiwicHJvamVjdElkIjoiZGV2IiwiZW52aXJvbmiu7nRJZCI6ImRldiIsImdyb3VwSWQiOiIyMmQ4NzVhMS01YTI3LTQ2NjMtOTBlYi1iNGU3Yjk3ZGFhODAiLCJ2aWV3T896QWN0aW9uIjoiYXVkaXQubG9nLnZpZXciLCJhY3RvcklkIjoiYWRtaW4iLCJjcmVhdGVkIjoxNzIyOTIyMzc3MDAwLCJzY29wZSI6IiIsImlwIjoiMTkyLjE2OC42NS4xIiwiaWF0IjoxNzIyOTIyMzgwfQ.MIzMboQLvQxI5Xh7g3L-qjTl8qR9sXu5po2psVmz-Y4',
    },
    body: JSON.stringify({
      query: searchQuery,
      variables: vars,
    }),
  }
);
```

# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

- Schema Types
  - [Query](#query)
  - [Objects](#objects)
    - [SearchEventEdge](#searcheventedge)
    - [SearchQueryResult](#searchqueryresult)
    - [PaginatedSearchQueryResult](#paginatedsearchqueryresult)
    - [Action](#action)
    - [Actor](#actor)
    - [Display](#display)
    - [Event](#event)
    - [Field](#field)
    - [Group](#group)
    - [PageInfo](#pageinfo)
    - [Target](#target)
  - [Enums](#enums)
    - [CRUD](#crud)
    - [SortOrder](#sortorder)
  - [Scalars](#scalars)
    - [Boolean](#boolean)
    - [ID](#id)
    - [Int](#int)
    - [String](#string)

</details>

## Query

The root query object of the Retraced GraphQL interface.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>search</strong></td>
<td valign="top"><a href="#searchqueryresult">SearchQueryResult</a></td>
<td>

Run an advanced search for events.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a></td>
<td>

The <a href="/docs/retraced/getting-started/searching-for-events/#structured-advanced-search">structured search operators</a> used to filter events.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">first</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The limit of events to return, sorted from oldest to newest. It can optionally be used with the <code>after</code> argument.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">after</td>
<td valign="top"><a href="#string">String</a></td>
<td>

A cursor returned from a previous query.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">last</td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The limit of events to return, sorted from newest to oldest. It can optionally be used with the <code>before</code> argument.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">before</td>
<td valign="top"><a href="#string">String</a></td>
<td>

A cursor returned from a previous query.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>searchPaginated</strong></td>
<td valign="top"><a href="#paginatedsearchqueryresult">PaginatedSearchQueryResult</a></td>
<td>
Run a paginated advanced search for events.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">query</td>
<td valign="top"><a href="#string">String</a></td>
<td>
The <a href="/docs/retraced/getting-started/searching-for-events/#structured-advanced-search">structured search operators</a> used to filter events.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageOffset</td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The number of events to offset from the start of the results.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">pageLimit</td>
<td valign="top"><a href="#int">Int</a></td>
<td>
The maximum number of results per page.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">startCursor</td>
<td valign="top"><a href="#string">String</a></td>
<td>
A cursor returned from the first event of the first page to make sure the window of events in maintained.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">sortOrder</td>
<td valign="top"><a href="#sortorder">SortOrder</a></td>
<td>
The order to sort the results in.

</td>
</tr>
</tbody>
</table>

## Objects

### Action

An action.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The action field of an event such as "user.login".

</td>
</tr>
</tbody>
</table>

### Actor

The agent who performed an event.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

A unique id representing this actor.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of this actor.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The URL associated with this actor.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#field">Field</a>]</td>
<td>

The set of fields associated with this actor.

</td>
</tr>
</tbody>
</table>

### Display

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>markdown</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Event

A single record in an audit log.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

A unique id representing this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>action</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The type of action that was taken to generate this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The description of the event that was taken.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>group</strong></td>
<td valign="top"><a href="#group">Group</a></td>
<td>

The group associated with this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>actor</strong></td>
<td valign="top"><a href="#actor">Actor</a></td>
<td>

The actor associated with this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>target</strong></td>
<td valign="top"><a href="#target">Target</a></td>
<td>

The target associated with this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>crud</strong></td>
<td valign="top"><a href="#crud">CRUD</a></td>
<td>

The classification of this event as create, read, update, or delete.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>display</strong></td>
<td valign="top"><a href="#display">Display</a></td>
<td>

The display text for this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>received</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The time that the Retraced API received this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>created</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The time that this event was reported as performed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>canonical_time</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The created time if specified; else the received time.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>is_failure</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Set to true if the event represents a failed use of permissions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>is_anonymous</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Set to true if the user was not logged in when performing this action.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>source_ip</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The IP address of the actor when the action was performed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>country</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The country that the actor was in when the action was performed.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loc_subdiv1</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The large area of the country the actor was in when the action was performed (State).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loc_subdiv2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The granular area of the country the actor was in when the action was performed (City).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>component</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

An identifier for the vendor app component that sent the event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>version</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

An identifier for the version of the vendor app that sent the event, usually a git SHA

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#field">Field</a>]</td>
<td>

The set of fields associated with this event.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>raw</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The raw event sent to the Retraced API.

</td>
</tr>
</tbody>
</table>

### SearchEventEdge

The event and cursor for a single result.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>node</strong></td>
<td valign="top"><a href="#event">Event</a></td>
<td>

The event object.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>cursor</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

An opaque cursor for paginating from this point in the search results. Use it as the <code>after</code> argument to paginate forward or the <code>before</code> argument to paginate backward.

</td>
</tr>
</tbody>
</table>

### SearchQueryResult

The results of a search query.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#searcheventedge">SearchEventEdge</a>]</td>
<td>

The events and cursors matching the query.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pageInfo</strong></td>
<td valign="top"><a href="#pageinfo">PageInfo</a></td>
<td>

Indications that more search results are available.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The total number of search results matched by the query.

</td>
</tr>
</tbody>
</table>

### PaginatedSearchQueryResult

The results of hte paginated search query.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>edges</strong></td>
<td valign="top">[<a href="#searcheventedge">SearchEventEdge</a>]</td>
<td>

The events and cursors matching the query.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>totalCount</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The total number of search results matched by the query.

</td>
</tr>
</tbody>
</table>

### Field

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The key for this field.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>value</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The value for this field.

</td>
</tr>
</tbody>
</table>

### Group

The group this event is associated with.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

A unique id representing this group.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of this group.

</td>
</tr>
</tbody>
</table>

### PageInfo

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>hasNextPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

When paging forward with <code>first</code>, indicates more results are available.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>hasPreviousPage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

When paging backward with <code>last</code>, indicates more results are available.

</td>
</tr>
</tbody>
</table>

### Target

The object an event is performed on.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

A unique id representing this target.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The name of this target.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The URL associated with this target.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The type of this target entity.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>fields</strong></td>
<td valign="top">[<a href="#field">Field</a>]</td>
<td>

The set of fields associated with this target.

</td>
</tr>
</tbody>
</table>

## Enums

### CRUD

Create | Read | Update | Delete

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>c</strong></td>
<td>

create

</td>
</tr>
<tr>
<td valign="top"><strong>r</strong></td>
<td>

read

</td>
</tr>
<tr>
<td valign="top"><strong>u</strong></td>
<td>

update

</td>
</tr>
<tr>
<td valign="top"><strong>d</strong></td>
<td>

delete

</td>
</tr>
</tbody>
</table>

### SortOrder

Ascending | Descending

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>asc</strong></td>
<td>

Ascending

</td>
</tr>
<tr>
<td valign="top"><strong>desc</strong></td>
<td>

Descending

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
