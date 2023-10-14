# Renaming Properties

Some properties of an audit event can be renamed after the event is received. There is a limited amount of these and the original event is still [immutable](/docs/retraced/how-to-audit-log/immutable/). But data can change over time, and it's important to be able to link to and find events later.

## Actor

When sending an event, an [actor](/docs/retraced/how-to-audit-log/actors/) is a required field. The `id` property of the actor is immutable and is linked and cross referenced in Retraced to make it possible to search for and find all events that a specific actor performed. An actor object has additional fields including name, url and any other data you include. These fields are mutable and the values sent with an event will replace the global values for the actor in Retraced.

When requesting the [original events](/docs/retraced/architecture/immutability-guarantee/#future-verification-of-immutability), the original values sent when the event was created will be returned.
