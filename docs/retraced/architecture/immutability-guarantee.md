# Immutability Guarantee

When you send audit events into Retraced, we offer functionality that guarantees the data you sent is the data that was received. We use the same functionality to allow you to, at any time, cryptographically verify that the events have not changed since they were written and no events have been removed.

## Digest of Events

When an event is received by the Retraced API, the methods that receives the event will always synchronously compute a digest hash of the data received, using our publicly documented [hashing formula](/docs/retraced/architecture/hashing-formula). The computed digest is returned, along with the rest of the standard response. It's up to the sender to independently calculate the digest of the event and compare it to the response from the Retraced API. If these digests do not match, the event was not properly decoded or received by the Retraced API.

When using any of the [official Retraced SDKs](/docs/retraced/sdks/available-sdks), this computation and comparison happens automatically. All of our SDKs are open source, and this can be independently verified by examining the relevant source code of the SDK.

## Future Verification of Immutability

When validating immutability for audit events, it's important to both verify that the events have not changed, and to verify that no events were added or deleted. Retraced provides functionality for both of these verifications.

Audited events are not always displayed with every field originally sent. Also, it's possible for an [actor or item to be renamed](/docs/retraced/getting-started/renaming-properties) at some point in the future. Retraced will always store the original event received, and it's possible to retrieve that source. In fact, this source is used to dynamically calculate value to show when displaying an event in the browser or other source.
