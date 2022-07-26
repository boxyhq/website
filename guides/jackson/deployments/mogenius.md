---
title: Deploy SAML Jackson on mogenius
sidebar_label: mogenius
---

# mogenius

This guide will walk you through the configuration and deployment of SAML Jackson on mogenius. mogenius is the easiest way for developers to run any application in the cloud. Connect your repository and mogenius deploys it on a fully automated cloud infrastructure.

If you don’t have a mogenius account, create one [here](https://studio.mogenius.com/user/registration).

## Deploy SAML Jackson

- Head over to [mogenius](https://docs.mogenius.com/services/various/saml-jackson) and follow the instructions to deploy SAML Jackson as a docker container.
- You should deploy the latest version from [Docker Hub](https://hub.docker.com/r/boxyhq/jackson/tags) and please keep your image up to date for additional security.

### Verify deployment

You can visit the path `/api/hello` on your app to see if the Jackson was started successfully! If the installation was successful, you'll see the following output on the screen.

```javascript
{
  name: 'Jules Winnfield';
}
```

## Next steps

At this stage you have a functional SAML Jackson instance running on your server!

- Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
- [Sign into Admin UI](/docs/jackson/admin-ui#sign-into-admin-ui)
- [Add SAML Configurations](/docs/jackson/admin-ui#add-saml-configurations)
