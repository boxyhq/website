---
title: Retraced Go SDK
sidebar_label: Go
---

# Go

On this page, we get you up and running with Retraced's Go SDK in your application.

## Installation

```bash
go get github.com/retracedhq/retraced-go
```

## Basic Usage

Error handling omitted for brevity.

### Initialize a client

```go
import "github.com/retracedhq/retraced-go"

client, _ := retraced.NewClient("The host, defaults to http://localhost:3000/auditlog", "You Retraced project id goes here", "Your Retraced Publisher API token goes here")
```

### Report an event

```go
event := &retraced.Event{
  Created:     time.Now(),
  CRUD:        "r",
  Action:      "user.login",
  Description: "User Alice logged in",
  SourceIP:    "102.109.10.1",
  Actor:       &retraced.Actor{ID: "alice@bigcorp.com", Name: "Alice"},
  Group:       &retraced.Group{ID: "bigcorp.com"},
}

resp, _ := client.ReportEvent(event)
```

### Verify the event receipt hash

```go
err := event.VerifyHash(resp)
if err != nil {
  // hashes did not match
} else {
  // event reported successfully
}
```
