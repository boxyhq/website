---
title: Add SAML SSO to Laravel App with BoxyHQ
sidebar_label: Laravel
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add SAML SSO to Laravel App

This guide assumes that you have a Laravel app and want to enable SAML Single Sign-On authentication for your enterprise customers. By the end of this guide, you'll have an app that allows you to authenticate the users using SAML Single Sign-On.

Visit the [GitHub repository](https://github.com/boxyhq/php-examples/tree/main/laravel-enterprise-sso) to see the source code for the Laravel SAML SSO integration.

## Setup SAML Jackson

```php title="config/jackson.php"
<?php

return [
  'host' => 'http://localhost:5225',
  'api_key' => 'secret',
  'product' => 'saml-demo.boxyhq.com',
  'client_id' => 'dummy', // Keep this as `dummy`, we'll pass the tenant & product as dynamic params
  'client_secret' => 'dummy', // Keep this as `dummy`, we'll pass the tenant & product as dynamic params
  'redirect' => env('APP_URL') . '/sso/callback'
];
```

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

```php title="routes/web.php"
<?php

use Illuminate\Support\Facades\Route;

Route::post('/sso', '\App\Http\Controllers\AuthController@store');
```

```php title="app/Http/Controllers/AuthController.php"
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

```php title="routes/web.php"
<?php

Route::get('/sso/callback', '\App\Http\Controllers\AuthController@callback');
```

```php title="app/Http/Controllers/AuthController.php"
<?php

class AuthController extends Controller
{
  public function callback(Request $request)
  {
    $user = Socialite::driver('jackson')->user();

    // Do your business logic here. $user has all the properties you need.
  }
}
```

### Authenticate User

Once the user has been retrieved from the Identity Provider, you may determine if the user exists in your application and authenticate the user. If the user does not exist in your application, you will typically create a new record in your database to represent the user.
