---
title: Add SAML SSO to Ruby on Rails App with BoxyHQ
description: Add SAML SSO to Ruby on Rails App with BoxyHQ
sidebar_label: Ruby on Rails
toc_min_heading_level: 2
toc_max_heading_level: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add SAML SSO to Ruby on Rails App

This guide assumes that you have a Ruby on Rails app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

Visit the [GitHub repository](https://github.com/boxyhq/ruby-examples/tree/main/rails-enterprise-sso) to see the source code for the Ruby on Rails SAML SSO integration.

Integrating SAML SSO into an app involves the following steps.

- Configure SAML Single Sign-On
- Authenticate with SAML Single Sign-On

## Configure SAML Single Sign-On

This step allows your tenants to configure SAML connections for their users. Read the following guides to understand more about this.

- [UI Best Practices for Configuring SAML Single Sign-On](/guides/jackson/configuring-saml-sso)
- [SSO Connection API](/docs/jackson/sso-flow/)

## Authenticate with SAML Single Sign-On

Once you add a SAML connection, the app can use this SAML connection to initiate the SSO authentication flow using SAML Jackson. The following sections focus more on the SSO authentication side.

### Deploy SAML Jackson

The first step is to deploy the SAML Jackson service. Follow the [deployment docs](/docs/jackson/deploy/service) to install and configure the SAML Jackson.

### Setup SAML Jackson Integration

We will dive into Jackson integration with two popular authentication libraries:

- [Sorcery](https://github.com/Sorcery/sorcery)
- [OmniAuth](https://github.com/omniauth/omniauth)

#### With Sorcery

First, we need to install and configure sorcery.

1. Install the `sorcery` gem using `bundle add sorcery`.
2. Let's add the required database fields:

   ```shell title="Generate migration scripts"
   rails g sorcery:install external --only-submodules
   ```

   ```shell title="Run migration scripts"
   rake db:migrate
   ```

   ```shell title="Generate the Authentication model"
   rails g model Authentication --migration=false
   ```
