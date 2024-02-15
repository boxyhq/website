---
title: Audit Logging Basics
sidebar_label: Overview
---

# Audit Logging Basics

An audit log is a centralized stream of all user activity in an application.

The JSON structure looks like this

```typescript
{
  "action": string,
  "group"?: {
  "id": string,
    "name"?: string,
  },
  "crud"?: string,
  "created"?: Date,
  "actor"?: {
    "id": string,
    "name"?: string,
    "href"?: string,
    "fields"?: {
      [key: string]: string
    },
  },
  "target"?: {
    "id": string,
    "name"?: string,
    "href"?: string,
    "type"?: string,
    "fields"?: {
      [key: string]: string
    },
  },
  "source_ip"?: string,
  "description"?: string,
  "is_failure"?: boolean,
  "is_anonymous"?: boolean,
  "fields"?: {
    [key: string]: string
  },
}
```

You can see the example below,

```json
{
  "action": "some.record.created",
  "teamId": "boxyhq",
  "group": {
    "id": "boxyhq",
    "name": "BoxyHQ"
  },
  "crud": "c",
  "created": "2023-01-13T11:24:07.575Z",
  "source_ip": "127.0.0.1",
  "actor": {
    "id": "jackson@boxyhq.com",
    "name": "Jackson"
  },
  "target": {
    "id": "100",
    "name": "tasks",
    "type": "Tasks"
  }
}
```

An audit log event is a single line that represents an [action](/docs/retraced/how-to-audit-log/actions) that an [actor](/docs/retraced/how-to-audit-log/actors) took, most often on a [target](/docs/retraced/how-to-audit-log/targets).

Sometimes it's easiest to think about this with a concrete example. Let's consider a multi-user, collaborative spreadsheet application.

## Actors

An actor in the spreadsheet application is any authenticated identity that's interacting with the spreadsheet. This includes the users who are logged in and editing, deleting, and creating new spreadsheets. It also includes any API tokens that are performing operations on the spreadsheets programatically.

## Actions

Actions are the events that the actors performed that should be audited. In the spreadsheet example application, some of the most obvious actions might include `sheet.create` and `sheet.delete`. Sometimes it's important to create new objects to wrap events. For example, if a user is editing a spreadsheet and the sheet saves every second, you don't want to create a `sheet.update` event each second. Wrap these events into a session and create a single `sheet.update` event for the entire edit session.

## Targets

Targets are the objects in a system that have an action taken on them. In the spreadsheet example application, the primary target is the sheets themselves. But there are additional, less obvious targets. If the sheet application has implemented it's own authentication system, another target is the user accounts. For example, when a user changes their password, it should create an audit event for `password.update`.
