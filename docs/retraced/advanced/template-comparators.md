# Template Comparators

The following values are acceptable for "comparator" field in rules in the Retraced rules engine:

| Comparator | Desscription |
| --- | --- |
| `eq` | Matches when the `value` is equal to the event object data at `path`. This compares values only and doesn't compare types. |
| `is` | The same as `eq` but it also compares types of objects. |
| `neq` | Matches when the `value` is not equal to the event object data at `path`. This compares values only and doesn't compare types. This is the inverse of `eq`. |
| `not` | The same as `neq` but it also compares types of objects. This is the inverse of `is`. |
| `lt` | Matches when the `value` is less than the event object data at `path`. |
| `lte` | Matches when the `value` is less than or equal to the event object data at `path`. |
| `gt` | Matches when the `value` is greater than the event object data at `path`. |
| `gte` | Matches when the `value` is greater than or equal to the event object data at `path`. |
| `exists` | Matches when the `value` key exists and is not null on the event object data. |
| `nexists` | Matches when the `value` key does not exists or is null on the event object data. |
| `contains` | Matches when the event object data at `path` contains `value`. |
| `ncontains` | Matches when the event object data at `path` does not contain `value`. |
| `matches` | This rule is a raw regex rule. When the `value` is interpreted as a regular expression and applied to the event object data at `path`, returns the regex match value. |
