---
title: Faq
sidebar_label: FAQ
---

# Frequently asked questions

Frequently asked questions about the issues and limitations of the directory sync providers.

### Okta

#### Why don't I see a DELETE event for a user that was removed in Okta?

Instead of executing a DELETE operation, Okta sends a request to the SCIM application to set the `active` attribute to `false`. Consequently, you will observe a `user.updated` event with the `active` attribute changed to `false` for users removed from the Okta application.

#### Why is there no event for a user that was deactivated in Okta?

Okta does not dispatch a specific deprovisioning event for users that are suspended. This omission of a deactivation event is a known issue with Okta.

### OneLogin

#### Why don't I see any event when a group is removed in OneLogin?

It is a known issue with OneLogin SCIM. OneLogin does not dispatch a specific deprovisioning event for groups that are deleted, so you won't see any event such as `group.deleted` or `group.user_removed` when a group is removed. It is recommended to remove the users from the group before deleting the group itself from the SCIM application.
