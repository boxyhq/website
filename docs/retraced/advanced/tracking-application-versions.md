# Tracking Event Publisher Versions

When sending events to Retraced, consumers of the [Publisher API](/docs/retraced/apis/publisher-api)
may send event metadata like the name and version of the vendor component that is
sending the events. A minimal event payload that includes this metadata might look like

```json
{
  "action": "user.login",
  "crud": "c",
  "group": {
    "id": "7890123",
    "name": "some.customer"
  },
  "actor": {
    "id": "123456",
    "name": "user@example.com"
  },
  "component": "authentication-api",
  "version": "ae242df"
}
```

Where `component` describes a single versioned piece of a architecture like `authentication-api`
or `spreadsheet-processor` and `version` is usually one of

- A git SHA of the component's source code as in `ae242df`
- A semantic version for the component as in `1.0.3`
- A build number of the component as in `129`

Sending this information to Retraced will allow Retraced to give better
guarantees about time windows during which an event **did not** occur.

## Example

To better understand how this works, consider the following stream of events,
in which the `password.change` action at 12:35 is the very first `password.change`
event seen in Retraced, because a recent new release of the vendor app is the first
to start tracking `password.change` events.

| action            | received            |
| ----------------- | ------------------- |
| `email.change`    | 2017-01-01 11:14:00 |
| `user.login`      | 2017-01-01 11:30:00 |
| `email.change`    | 2017-01-01 12:01:00 |
| `user.login`      | 2017-01-01 12:12:00 |
| `password.change` | 2017-01-01 12:35:00 |
| `user.login`      | 2017-01-01 12:49:00 |
| `password.change` | 2017-01-01 12:52:00 |

Without any info about app versions, we can still say for certain that

- no `password.change` events occured between 12:35 and 12:52.

We cannot say anything about whether or not any `password.change` events
occurred before 12:35, because we have to assume that the vendor application
was not publishing these events until we see the first one at 12:35.

| action            | received            | component            | version   |
| ----------------- | ------------------- | -------------------- | --------- |
| `email.change`    | 2017-01-01 11:14:00 | `authentication-api` | `aeb22f1` |
| `user.login`      | 2017-01-01 11:30:00 | `authentication-api` | `aeb22f1` |
| `email.change`    | 2017-01-01 12:01:00 | `authentication-api` | `fd02eed` |
| `user.login`      | 2017-01-01 12:12:00 | `authentication-api` | `fd02eed` |
| `password.change` | 2017-01-01 12:35:00 | `authentication-api` | `fd02eed` |
| `user.login`      | 2017-01-01 12:49:00 | `authentication-api` | `fd02eed` |
| `password.change` | 2017-01-01 12:52:00 | `authentication-api` | `493ef1d` |

Since we know the version of the component sending each event, we can know for sure
that the app version that sends `password.change` events was sending `email.change` events as
early as 12:01. In addition to what we knew before, that

- no `password.change` events occured between 12:35 and 12:52

we now can also guarantee that

- no `password.change` events occurred between 12:01 and 12:35.

Note: Being able to make these guarantees relies on an assumption that application
versions change at the same time, and that there are never multiple versions of
a single component running in parallel for significant periods of time. If
Publisher API consumers rely on canary deploys or staged rollouts over several days,
then component names will need to be rotated during the rollout.

## Using SDKs

If you are using one of the official [Retraced SDKs](/docs/retraced/sdks/available-sdks),
you can provide the `version` and `component` fields when the client is initialized,
and they will be sent for every event.
