# Embedded Viewer

Now that you've sent some events into Retraced, it's time to expose them to your end users. Retraced has an advanced, highly customizable log viewer that you can embed on your own site.

Note: Currently, a React-based site is required to embed the viewer, but support for embedding without React will be available soon.

## Installing

There are a few short steps to getting the embedded viewer integrated into your site.

1. Install the `@retracedhq/logs-viewer` package from npm and include in your site.
1. Request a token from the Retraced API to identify which group/scope the viewer should be limited to. This should be initiated from your backend server, not the browser.
1. Render the `<RetracedEventsBrowser/>` React component as part of your application

### Obtain a viewer token from the Retraced API

The browser will communicate directly with the Retraced API to search and show audit logs. Your backend server is the only trusted source to identify who the browser is. To identify the user, your site's backend should request a viewer token using the appropriate [Retraced SDK](/docs/retraced/sdks/available-sdks) or directly with the [Retraced API](/docs/retraced/apis/overview). Once you have obtained a temporary viewer token from the Retraced API, send it to the browser where it can be used in the next and final step.

### Render the component

Inside a React Component

```javascript
function render() {
    return (
        <RetracedEventsBrowser
          auditLogToken=<YOUR_VIEWER_TOKEN>
          header="My Audit Log"
          mount={true} />
    )
}
```

or, without JSX:

```html
ReactDOM.render( React.createElement( RetracedEventsBrowser, { auditLogToken:
<VIEWER_TOKEN
  >, mount: true }, ), document.getElementById('main') );</VIEWER_TOKEN
>
```

#### Options

The embedded viewer supports quite a few options, but they all have defaults. The table below describes the keys that are possible to override in the component properties.

| Key             | Default Value                                                           | Value Type | Description                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| admin           | `true`                                                                  | `boolean`  | A bool to indicate if the admin/settings button is possible to show. This will never force it to show, this setting is provided to completely disable this button at times. |
| export          | `true`                                                                  | `boolean`  | A bool to indicate if the export button should be shown on the footer.                                                                                                      |
| crud            | `cud`                                                                   | `string`   | The default search filter options to enable. By default, read items are not shown.                                                                                          |
| theme           | `light`                                                                 | `string`   | The theme to use. Supports `dark` and `light`.                                                                                                                              |
| header          | `Audit Log`                                                             | `string`   | A header to show beside the search box.                                                                                                                                     |
| apiTokenHelpURL | https://boxyhq.com/docs/retraced/exposing-retraced-data/enterprise-api/ | `string`   | A help link for the "How to Use Audit Log API Tokens" text in the API tokens modal.                                                                                         |
| searchHelpURL   | https://boxyhq.com/docs/retraced/exposing-retraced-data/viewer/#search  | `string`   | A help link for the "Get Help With Search" text in search filters modal.                                                                                                    |
| customClass     | ``                                                                      | `string`   | One or more space-separated CSS classes to apply to the outermost viewer `<div/>`                                                                                           |
| host            | `http://localhost:3000/auditlog`                                        | `string`   | Retraced API host to use. Only needs to change for on-premise Retraced instances.                                                                                           |
| mount           | `false`                                                                 | `boolean`  | Determines whether to mount the component. Handy if you need to wait until a token is returned from your backend.                                                           |
