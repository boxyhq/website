# Proxy Service - WIP

The proxy service is the outermost client facing of Terminus. Amongst it's roles and responsibilities:
- Enables no-code configuration of encryption and masking business data models
- It exposes the public API for clients to interface with the privacy vault
- Interfaces with the Vault service
- Implements Access Control Policies
- Interacts with external KMSs enabling BYOK models


## Data Modelling, Encryption and Masking UI

Data modelling is done via a visual interface that allows the composition via puzzle pieces. 

### Sample Model
- Below is an illustrated an example of the shallow model of a Passport, with its individual fields, restrictions on the type, type of encryption and decryption to be applied and the masking to apply once data is read. 

        Future versions will include access-role-based masking policies and multitenancy on the proxy side, allowing for different clients to manage their own models.

    ![Sample Model: Passport](./proxy_assets/SampleModel.png)

        Note all fields are currently treated as strings. No numerical types are supported yet.

### Field Restrictions
- The below illustration shows the current supported restrictions on the values. Behind the scenes it is implemented via regular expressions.

    ![Field Type Options](./proxy_assets/FieldOptions.png)

#### String
- A special type of field is a string. Terminus configuration is based on [CUE lang](https://cuelang.org). This type of field permits the inclusion of specific patterns that CUE lang supports (enumerations, regular expressions, etc.)

    ![Field Type String](./proxy_assets/String.png)

    For example, the field "PlaceOfBirth":

    `string`: would allow any string to be inputed

    `string | !="" | *"NONE"`: would allow any non empty string with a default value of `NONE`

### Encryption
- Following are the planned encryption types to be supported by Terminus. Currently terminus supports AES Encryption with a 32 bytes key.

    ![Encryption Options](./proxy_assets/EncryptionOptions.png)
    
### Masking
- Terminus supports currently generic and redact masking policies.

    ![Masking Options](./proxy_assets/MaskOptions.png)

## Configuration
Default vs Runtime

## Implementation

## API

