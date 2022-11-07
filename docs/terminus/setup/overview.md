# Setup

Once Terminus has been deployed and is running, in order to get started is necessary to create:

- a product with a business model associated must be created via the [Proxy UI Interface](../architecture/proxy#data-modelling-encryption-and-masking-ui)
- a tenant/product encryption key must be registered via the [API `registerTenantProductDEK`](../architecture/proxy#accesscue) 
    - This call will produce a new DEK for the product/tenant. A historical of the previous keys is stored for proper key lifecycle management, but currently not used.
    - The DEK is encrypted via the system default KEK. This model should be extended to the tenants.
