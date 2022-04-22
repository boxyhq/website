---
title: Deploy SAML Jackson on Heroku
sidebar_label: Heroku
---

# Heroku

This guide will walk you through the configuration and deployment of SAML Jackson on Heroku. We'll be using the **Deploy to Heroku** button that enables users to deploy apps to Heroku without leaving the web browser and with little or no configuration.

If you don’t have a Heroku account, create one [here](https://signup.heroku.com/).

## Install SAML Jackson

- Fork the the SAML Jackson [GitHub repository](https://github.com/boxyhq/jackson/fork).
- Go to the forked repo and click the **Deploy to Heroku** button from the README section.
- Give your new application a **name**.
- Fill the **Config Vars** as per the [documentation](/docs/jackson/deploy/env-variables).
- After you've filled everything click the **Deploy app** button.

### Verify installation

You can visit the path `/api/hello` on your app to see if the Jackson was started successfully! If the installation was successful, you'll see the following output on the screen.

```javascript
{
  name: 'Jules Winnfield';
}
```

For example https://boxyhq-saml.herokuapp.com/api/hello

## Next steps

At this stage you have a functional SAML Jackson instance running on your server!

- Got a question? [Ask here](https://discord.gg/uyb7pYt4Pa)
- [Sign into Admin UI](/docs/jackson/admin-ui#sign-into-admin-ui)
- [Add SAML Configurations](/docs/jackson/admin-ui#add-saml-configurations)
