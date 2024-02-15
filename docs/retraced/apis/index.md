# API Documentation

Retraced API

## Version: 1.4.6

**License:** UNLICENSED

### /enterprise/v1/graphql

#### POST

##### Description:

Query events with [GraphQL](/docs/retraced/apis/admin-api)

##### Parameters

| Name          | Located in | Description                              | Required | Schema |
| ------------- | ---------- | ---------------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form Token token= ... | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200  | OK          |

null

### /enterprise/v1/search/active

#### POST

##### Description:

Initiate an active search. An active search will maintain
a persistent cursor that can be used at a later date to
retrieve additional events from the search.

Authenticate with an Enterprise API token.

##### Parameters

| Name          | Located in | Description                   | Required | Schema |
| ------------- | ---------- | ----------------------------- | -------- | ------ |
| Authorization | header     | header of the form token= ... | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201  | Created     |

null

### /enterprise/v1/search/saved

#### POST

##### Description:

Create a saved search.
Saved searches have an ID that can be used to initiate an active search.

Authenticate with an Enterprise API token.

##### Parameters

| Name          | Located in | Description                   | Required | Schema |
| ------------- | ---------- | ----------------------------- | -------- | ------ |
| Authorization | header     | header of the form token= ... | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201  | Created     |

null

### /publisher/v1/project/\{project_id\}/event

#### POST

##### Description:

Create an event. Returns the id of the created event, and
a cryptographic hash of the received event, as described [here](/docs/retraced/architecture/hashing-formula/).

##### Parameters

| Name          | Located in | Description                        | Required | Schema |
| ------------- | ---------- | ---------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ... | Yes      | string |
| project_id    | path       | the project id                     | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201  | Created     |

null

### /publisher/v1/project/\{project_id\}/event/bulk

#### POST

##### Description:

Create one or more events. Returns a list of the ids of the created event and
a cryptographic hash of each received events, as described [here](/docs/retraced/architecture/hashing-formula/).

##### Parameters

| Name          | Located in | Description                        | Required | Schema |
| ------------- | ---------- | ---------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ... | Yes      | string |
| project_id    | path       | the project id                     | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201  | Created     |

null

### /publisher/v1/project/\{project_id\}/viewertoken

#### GET

##### Description:

Create a token for use with the Retraced embedded viewer as described [here](/docs/retraced/getting-started/embedded-viewer/).

**Note**: At least one of `group_id` or `team_id` is required.

##### Parameters

| Name            | Located in | Description                                                                                              | Required | Schema |
| --------------- | ---------- | -------------------------------------------------------------------------------------------------------- | -------- | ------ |
| Authorization   | header     | auth header of the form token= ...                                                                       | Yes      | string |
| project_id      | path       | the project id                                                                                           | Yes      | string |
| actor_id        | query      |                                                                                                          | Yes      | string |
| group_id        | query      | The group identifier. Same as `team_id`. If both are passed, `group_id` will be used.                    | No       | string |
| is_admin        | query      | Whether to display the Enterprise Settings and API Token Management. Set to `true` to show the settings. | No       | string |
| target_id       | query      | If passed, only events relating to this target will be returned in a viewer that uses the token created  | No       | string |
| team_id         | query      | Same as `group_id`. If both are passed, `group_id` will be used. This field is deprecated.               | No       | string |
| view_log_action | query      | The action that will be logged when the token is used                                                    | No       | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201  | Created     |

null

### /publisher/v1/project/\{project_id\}/group/\{group_id\}/enterprisetoken

#### POST

##### Description:

Create a token for use with [Enterprise IT API](/docs/retraced/apis/enterprise-api/

##### Parameters

| Name          | Located in | Description                                                                      | Required | Schema |
| ------------- | ---------- | -------------------------------------------------------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ...                                               | Yes      | string |
| project_id    | path       | the project id                                                                   | Yes      | string |
| group_id      | path       | The group identifier. The generated token will be scoped to the specified group. | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201  | Created     |

null

#### GET

##### Description:

List all [Enterprise IT API](/docs/retraced/apis/enterprise-api/) tokens.

##### Parameters

| Name          | Located in | Description                        | Required | Schema |
| ------------- | ---------- | ---------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ... | Yes      | string |
| project_id    | path       | the project id                     | Yes      | string |
| group_id      | path       | The group identifier.              | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200  | OK          |

null

### /publisher/v1/project/\{project_id\}/group/\{group_id\}/enterprisetoken/\{token_id\}

#### GET

##### Description:

Retrieve an [Enterprise IT API](/docs/retraced/apis/enterprise-api/) token.

##### Parameters

| Name          | Located in | Description                        | Required | Schema |
| ------------- | ---------- | ---------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ... | Yes      | string |
| project_id    | path       | The project id.                    | Yes      | string |
| group_id      | path       | The group identifier.              | Yes      | string |
| token_id      | path       | The token id.                      | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200  | OK          |

null

#### PUT

##### Description:

Update an [Enterprise IT API](/docs/retraced/apis/enterprise-api/) token

##### Parameters

| Name          | Located in | Description                        | Required | Schema |
| ------------- | ---------- | ---------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ... | Yes      | string |
| project_id    | path       | the project id                     | Yes      | string |
| group_id      | path       | The group identifier.              | Yes      | string |
| token_id      | path       | The token to update.               | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200  | OK          |

null

#### DELETE

##### Description:

Delete an [Enterprise IT API](/docs/retraced/apis/enterprise-api/) token

##### Parameters

| Name          | Located in | Description                        | Required | Schema |
| ------------- | ---------- | ---------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form token= ... | Yes      | string |
| project_id    | path       | the project id                     | Yes      | string |
| group_id      | path       | The group identifier.              | Yes      | string |
| token_id      | path       | The token to delete.               | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 204  | Deleted     |

null

### /publisher/v1/project/\{project_id\}/graphql

#### POST

##### Description:

Query events with [GraphQL](/docs/retraced/apis/graphql/)

##### Parameters

| Name          | Located in | Description                              | Required | Schema |
| ------------- | ---------- | ---------------------------------------- | -------- | ------ |
| Authorization | header     | auth header of the form Token token= ... | Yes      | string |
| project_id    | path       | the project id                           | Yes      | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200  | OK          |

null
