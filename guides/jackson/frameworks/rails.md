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
2. Let's configure the database:

   ```shell title="Generate migration scripts for sorcery"
   bin/rails g sorcery:install external --only-submodules
   ```

   ```shell title="Run migration scripts"
   bin/rake db:migrate
   ```

   ```shell title="Generate the Authentication model"
   bin/rails generate model Authentication --migration=false
   ```

   ```shell title="Modify the user schema"
   # remove the unused columns from the user table, we won't need the password field as the login is external
   bin/rails generate migration RemoveColumnsFromUsers crypted_password:string salt:string
   # add the new columns
   bin/rails generate migration AddColumnsToUsers firstName:string lastName:string uid:string
   # run the migrations
   bin/rake db:migrate
   ```

3. Add a custom sorcery provider for Jackson.

   We rely on the `Protocols::Oauth2` mixin from the sorcery package. In a nutshell, here we are wiring up the OAuth 2.0 flow with Jackson. Jackson will redirect to the configured IdP connection based on the tenant/product.

   ```ruby title="app/lib/sorcery/providers/boxyhqsso.rb"
   module Sorcery
     module Providers
      # This class adds support for OAuth2.0 SSO flow with Jackson service.
      #
      #   config.boxyhqsso.site = <http://localhost:5225>
      #   config.boxyhqsso.key = <key>
      #   config.boxyhqsso.secret = <secret>
      #   ...
      #
      class Boxyhqsso < Base
        include Protocols::Oauth2

        attr_reader :parse
        attr_accessor :auth_url, :token_url, :user_info_path

        def initialize
          super

          @site          = ENV['JACKSON_URL']
          @auth_url      = '/api/oauth/authorize'
          @token_url     = '/api/oauth/token'
          @user_info_path = '/api/oauth/userinfo'
          @parse = :json
          # @state = SecureRandom.hex(16)
        end

        def get_user_hash(access_token)
          response = access_token.get(user_info_path)
          body = JSON.parse(response.body)
          auth_hash(access_token).tap do |h|
            h[:user_info] = body
            h[:uid] = body['id']
          end
        end

        # calculates and returns the url to which the user should be redirected,
        # to get authenticated at the external provider's site.
        def login_url(params, _session)
          add_param(authorize_url(authorize_url: auth_url),
                    [
                      { name: 'tenant', value: params[:tenant] },
                      { name: 'product', value: params[:product] }
                    ])
        end

        # tries to login the user from access token
        def process_callback(params, _session)
          args = {}.tap do |a|
            a[:code] = params[:code] if params[:code]
          end
          get_access_token(args, token_url: token_url, token_method: :post, auth_scheme: :request_body)
        end

        def add_param(url, query_params)
          uri = URI(url)
          qp = URI.decode_www_form(uri.query || [])
          query_params.each do |param|
            qp << [param[:name], param[:value]]
          end
          uri.query = URI.encode_www_form(qp)
          uri.to_s
        end
      end
   end
   end

   ```
