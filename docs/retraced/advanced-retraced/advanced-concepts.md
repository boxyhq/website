# Advanced Concepts

Once you've started sending events into Retraced, it's time to explore some of the advanced functionality.

## Display Templates
[Display templates](/docs/retraced/advanced-retraced/display-templates) allow you to customize the display of audit events, after the event has been received. The events are still immutable. The display templates implement a rules engine that is applied when the event is rendered. This simply adds an additional field to the event, and can be excluded at any time.


## Streaming Events With SSH
[SSH Event Streaming](/docs/retraced/advanced-retraced/ssh-streaming) allows Enterprise API users to stream events as they occur over ssh using an Enterprise API Token.



## Tracking Application Versions
[Tracking Application Versions](/docs/retraced/advanced-retraced/tracking-application-versions) adds additional
parameters to Create Event requests to allow Retraced to make better guarantees about when certain actions
did not occur.
