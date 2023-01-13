---
title: Self-host Audit Logs on Docker
sidebar_label: Docker
---

# Docker

Docker is the most effortless way to get started with the self-hosted Retraced instance.

## Prerequisite

You need the following installed in your system:

- [Docker](https://www.docker.com/) and [Docker compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Install

Please see the docker directory in the Retraced repo.

```bash
# Get the code
git clone https://github.com/retracedhq/retraced.git

# Go to the root folder
cd retraced

# Start the Docker compose
docker-compose up
```

At this stage, you've got a running Retraced instance. You can now start publishing the audit logs using the Publisher API endpoints.

The base URL would be `http://localhost:3000/auditlog/publisher/v1/project/{project-id}/event`
