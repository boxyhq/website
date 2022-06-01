# Golang

### [Github](https://github.com/retracedhq/retraced-go) | [godoc](https://godoc.org/github.com/retracedhq/retraced-go)


## Installation

```bash
go get github.com/retracedhq/retraced-go
```


## Basic Usage

Error handling omitted for brevity.


Initialize a client

```
import "github.com/retracedhq/retraced-go"

client, _ := retraced.NewClient("You Retraced project id goes here", "Your Retraced Publisher API token goes here")
``` 

Create an event

```
event := &retraced.Event{
		Created:     time.Now(),
		CRUD:        "r",
		Action:      "user.login",
		Description: "User Alice logged in",
		SourceIP:    "102.109.10.1",
		Actor:       &retraced.Actor{ID: "alice@bigcorp.com", Name: "Alice"},
		Group:       &retraced.Group{ID: "bigcorp.com"},
}
``` 


Report an event 

```
resp, _ := client.ReportEvent(event)
```

Verify the event receipt hash

```
err := event.VerifyHash(resp)
if err != nil {
	// hashes did not match
} else {
	// event reported successfully
}
```