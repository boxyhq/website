# Searching For Events

The Retraced interface supports searching for events. While it's presented as a single, simple input field, the Retraced search interface supports complex structured queries.

## Free Text Search

By default, the search query you type in the search box will search all fields for this value.

## Structured (Advanced) Search

If you use the advanced search syntax, you can perform very specific and exact searches to find the data you are looking for. The syntax for this is `key:value`. For example, to search for all events that have an action that starts with `user.` you could enter the following query: `action:user.*`

This table shows the supported advanced searches:

| Key | Description | Examples |
|---|---|---|
| action | Matches events with the action equal to the value. This supports trailing wildcards. | `action:user.login`<br />`action:user.*` |
| crud | Matches events with crud type equal to any of the values. | `crud:c,u,d`<br />`crud:r` |
| received | Matches events with the received field in the range. This accepts two comma-separated ISO 8601 datetimes. Either start or end may be omitted to search an unbounded time range.| `received:2017-05-01,2017-06-01`<br />`received:2017-05-01T12:30+07,2017-05-01T13:30+07`<br />`received:,2017-01-01`<br />`received:2017-01-01,` |
| created | Matches events with the created field in the range. | created:2017-05-01,2017-05-02 |
| actor.name | Matches events performed by an actor whose name contains the value. | actor:Smith |
| actor.id | Matches events performed by the actor with the exact id value. | actor:b82c4cfa428342ac822c42c1f6b89200 |
| description | Matches events with a description containing the terms in the value. | description:"elevated escalated" |
| location | Matches events performed in a geographic region equal to the value. | location:"Los Angeles" |
