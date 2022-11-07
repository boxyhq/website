---
title: Add SAML SSO to Laravel App with BoxyHQ
description: Add SAML SSO to Laravel App with BoxyHQ
sidebar_label: Laravel
---

# Add SAML SSO to Laravel App

This guide assumes that you have a Laravel app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

Visit the [GitHub repository](https://github.com/boxyhq/php-examples/tree/main/laravel-enterprise-sso) to see the source code for the Laravel SAML SSO integration.

Integrating SAML SSO into an app involves the following steps.

- Configure SAML Single Sign-On
- Authenticate with SAML Single Sign-On

## Configure SAML Single Sign-On

This step allows your tenants to configure SAML connections for their users. Read the following guides to understand more about this.

- [UI Best Practices for Configuring SAML Single Sign-On](/guides/jackson/configuring-saml-sso)
- [SSO Connection API](/docs/jackson/sso-flow/)

## Authenticate with SAML Single Sign-On

Once you add a SAML connection, the app can use this SAML connection to initiate the SSO authentication flow using SAML Jackson. The following sections focuses more on the SSO authentication side.

### Install SAML Jackson

The first step is to deploy the SAML Jackson service. Follow the [deployment docs](/docs/jackson/deploy/service) to install and configure the SAML Jackson.

### Setup SAML Jackson

We'll use the Laravel Socialite for the integration. Socialite provides an expressive, fluent interface to OAuth authentication with external authentication providers.

Create a new config file to hold the SAML Jackson configuration values.

```php title="config/jackson.php"
<?php

return [
  'host' => 'http://localhost:5225', // SAML Jackson service URL
  'product' => 'your-app-name',
  'client_id' => 'dummy', // Keep this as `dummy`, we'll pass the tenant & product as dynamic params
  'client_secret' => 'dummy', // Keep this as `dummy`, we'll pass the tenant & product as dynamic params
  'redirect' => env('APP_URL') . '/sso/callback'
];
```

Set `host` to URL of running SAML Jackson service.

Let's add a custom provider to the Laravel Socialite for the SAML Jackson.

```php title="app/BoxyHQ/JacksonProvider.php"
<?php

namespace App\BoxyHQ;

use Laravel\Socialite\Two\AbstractProvider;
use Laravel\Socialite\Two\ProviderInterface;
use Laravel\Socialite\Two\User;
use GuzzleHttp\RequestOptions;

class JacksonProvider extends AbstractProvider implements ProviderInterface
{
  /**
   * The SAML Jackson instance host.
   *
   * @var string
   */
  protected $host;

  /**
   * Set the SAML Jackson instance host.
   *
   * @param  string|null  $host
   * @return $this
   */
  public function setHost($host)
  {
    if (! empty($host)) {
      $this->host = rtrim($host, '/');
    }

    return $this;
  }

  protected function getAuthUrl($state)
  {
    return $this->buildAuthUrlFromBase($this->host . '/api/oauth/authorize', $state);
  }

  protected function getTokenUrl()
  {
    return $this->host . '/api/oauth/token';
  }

  protected function getUserByToken($token)
  {
    $response = $this->getHttpClient()->get($this->host . '/api/oauth/userinfo', [
      RequestOptions::QUERY => ['access_token' => $token],
    ]);

    return json_decode($response->getBody(), true);
  }

  protected function mapUserToObject(array $user)
  {
    return (new User)->setRaw($user)->map([
      'id' => $user['id'],
      'email' => $user['email'],
      'name' => $user['firstName'].' '.$user['lastName'],
      'first_name' => $user['firstName'],
      'last_name' => $user['lastName'],
      'requested' => $user['requested'],
      'nickname' => null,
      'avatar' => null,
    ]);
  }
}
```

Bootstrap the `JacksonProvider` in the `AppServiceProvider`.

```php title="app/Providers/AppServiceProvider.php"
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\BoxyHQ\JacksonProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    $socialite = $this->app->make('Laravel\Socialite\Contracts\Factory');

    $socialite->extend(
      'jackson',
      function ($app) use ($socialite) {
        $config = config('jackson');

        return $socialite->buildProvider(JacksonProvider::class, $config)
          ->setHost($config['host'] ?? null);
      }
    );
  }
}
```

### Make Authentication Request

Let's add a route to begin the authenticate flow; this route initiates the SAML SSO flow by redirecting the users to their configured Identity Provider.

```php title="routes/web.php"
<?php

use Illuminate\Support\Facades\Route;

Route::post('/sso', '\App\Http\Controllers\AuthController@store');
```

The `store` method of `AuthController` takes care of redirecting the user to the Identity Provider.

```php title="app/Http/Controllers/AuthController.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
  public function store(Request $request)
  {
    $jackson = config('jackson');

    $tenant = $request->input('tenant');

    return Socialite::driver('jackson')
      ->with(['tenant' => $tenant, 'product' => $jackson['product']])
      ->redirect();
  }
}
```

### Fetch User Profile

Let's add another route for receiving the callback after the authentication. Ensure the route matches the value of the `redirect` you configured previously.

```php title="routes/web.php"
<?php

Route::get('/sso/callback', '\App\Http\Controllers\AuthController@callback');
```

The `callback` method of `AuthController` takes care of fetching the user profile if the authorization is valid.

```php title="app/Http/Controllers/AuthController.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
  public function callback(Request $request)
  {
    $user = Socialite::driver('jackson')->user();

    // $user has all the properties you need. Do your business logic here.
  }
}
```

### Authenticate User

Once the user has been retrieved from the Identity Provider, you may determine if the user exists in your application and authenticate the user. If the user does not exist in your application, you will typically create a new record in your database to represent the user.