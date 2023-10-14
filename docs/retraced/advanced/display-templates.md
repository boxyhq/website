# Display Templates

Display templates is an important part of controlling how the events are rendered in the browser, exports or over any other stream.

A display template has the following components:

## Definitions

### Name

The name is internal only to the admin site. This is a place for you to record what the template is attempting to do.

### Rules

The rules field is a collection of rules that will be evaluated by the Retraced rules engine to determine if this template shoud be applied to the event. We'll cover that in detail shortly. But the idea is that you can have multiple rules, and the first one that matches will control how the event is rendered.

### Template

A handlebars-enabled, markdown rendered display template to use when the rules evaluate to true for a particular event. This ultimately is the text that you want to show for the matching events.

## Rules

Rules are processed against the event object. The best example is with actual data: you can click the Raw object in the admin site and see any actual event object. This is the exact context that is sent into the rule engine.

Rules are expressed as an array of comparators. When the _value_ of the _path_ matches the _comparator_, the rule evaluates to true and the template is applied. Retraced supports a large number of comparators, a [full list of comparators is available](/docs/retraced/advanced/template-comparators).

### Examples

This rule matches when the `action` is set to the string "document.edit":

```json
[
  {
    "comparator": "is",
    "path": "action",
    "value": "document.edit"
  }
]
```

This rule matches when the `action` is set to the string "document.edit" AND the type of the document is set to "spreadsheet":

```json
[
  {
    "comparator": "is",
    "path": "action",
    "value": "document.edit"
  },
  {
    "comparator": "is",
    "path": "target.type",
    "value": "spreadsheet"
  }
]
```

## Templates

Templates are a handlebars string that will be used to display the event. The context of the handlebars engine is the event object, and the output is a markdown string.

### Examples

Partial Event:

```json
{
  "action": "document.create",
  "actor": {
    "name": "Dr. Evil"
  },
  "target": {
    "type": "spreadsheet",
    "name": "Master Plan For World Domination.xlsx"
  }
}
```

Template:

```
**{{ actor.name }}** created the document **{{ target.name }}**
```

Result:  
**Dr. Evil** created the document **Master Plan For World Domination**
