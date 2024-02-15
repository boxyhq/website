# SSH Event Streaming

SSH Event Streaming allows Enterprise API users to stream events as they occur over ssh using an Enterprise API Token.

## Usage

To use the SSH event streaming feature, you'll need to start by getting an
[Enterprise API token](/docs/retraced/apis/enterprise-api#getting-an-enterprise-api-token).

To open a stream, connect to `tail.retraced.io` using your Enterprise API token as
the username:

```
ssh aeb1c315b9a8ed11a3f998d8e8ff@tail.retraced.io
```

Once the connection is open, CSV events will begin to stream through stdout,
and can be piped to a file or other event ingest system.

The same token can be used for multiple concurrent streaming sessions, all sessions
will receive every event that occurs while they are active.

## Parameters

The streaming APIs support a few parameters that can control the format of events.
The default output format is CSV, but JSON is also supported via the
`format` parameter

```sh
ssh aeb1c315b9a8ed11a3f998d8e8ff?format=json@tail.retraced.io
```
