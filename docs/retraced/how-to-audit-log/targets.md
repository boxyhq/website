# Targets


Targets are the objects in a system that have an action taken on them. In the spreadsheet example application, the primary target is the sheets themselves. But there are additional, less obvious targets. If the sheet application has implemented it’s own authentication system, another target is the user accounts. For example, when a user changes their password, it should create an audit event for `password.update`.