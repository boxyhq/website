---
title: Retraced NodeJS SDK
sidebar_label: NodeJS
---

# NodeJS

On this page, we get you up and running with Retraced's NodeJS SDK in your application.

## Installation

The Retraced NodeJS SDK can be installed with npm:

```bash
npm install -s @retracedhq/retraced
```

## Basic Usage

### Initialize a client

```javascript
import * as Retraced from 'retraced';

const retraced = new Retraced.Client({
  apiKey: 'your api key goes here',
  projectId: 'your project id goes here',
});
```

### Report an event

```javascript
const event = {
  action: "some.record.created",
  teamId: "My Rad Customer",
  crud: "C",
  source_ip: request.ip,
  actor: {
    id: "ultra.employee@customertowne.xyz",
    displayName: "Ultra Employee",
    url: "https://customertowne.xyz/employees/123456",
  },
  target: {
    id: newRecord.id,
    displayName: newRecord.name,
    url: "https://customertowne.xyz/records/" + newRecord.id,
  },
};

// The Retraced client's methods are asynchronous.
// You can "fire and forget" them.
retraced.reportEvent(event);

await retraced.reportEvent(event);

retraced.reportEvent(event)
  .then(() => { console.log("Finished reporting!"); })
  .catch((err) => handleError(err));
}
```
