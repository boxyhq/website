# Segments

## Project

A project represents a distinct application offered by a vendor. A vendor that only offers a single application, such as spreadsheets, would only need one project, while a vendor offering spreadsheets and calendars would have two projects. You can find your project IDs on the [Retraced Admin Portal](../../admin-portal/audit-logs.md).

## Environment

An environment represents a deployment target for a project. Retraced generates Production and Staging environments for each new project. You can manage your project's environments with the [Admin API](/docs/retraced/apis/admin-api) or the [Admin Portal](../../admin-portal/audit-logs.md).

## Group

A group is an end customer in your multi-tenant application. You can segment your audit log into groups by adding a `group.id` to each event. Then you may provide your end customers read access to their segment with the [Enterprise API](/docs/retraced/apis/enterprise-api).
