# Time Synchronization


A good audit log should record a synchronized timestamp that allows an end customer to determine with a high level of confidence:

* The human-readable time an event occured,for example:

`sheet.create occurred at 2017-01-01 17:45:22.011`

* The ordering of events, for example

`sheet.create occured before sheet.update`


## Wall Time vs. Causal Ordering


It's not always possible to have both a human-readable "wall time" and a causally consistent sequencing of events. When forced to trade between a human-readable wall time and a causally consistent sequencing of events, an Audit Log should favor causal consistency over a precise wall time. In a best-case scenario, protocols like Network Time Protocol (NTP) can allow for a high level of accuracy in both.


## Recording Time in Retraced


Retraced allows clients to specify a `created` time for any event. In addition to allowing clients to report event timing, the Retraced Publisher API will record an NTP-synchronized `received` timestamp for all events.