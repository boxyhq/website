---
sidebar_position: 6
---

# Environment Variables

### **SAML_AUDIENCE**

This is just an identifier to validate the SAML audience, this value will also get configured in the SAML apps created by your customers. Once set do not change this value unless you get your customers to reconfigure their SAML again. It is case-sensitive. This does not have to be a real URL.

Default: `https://saml.boxyhq.com`

### **IDP_ENABLED**

Set to true to enable IdP initiated login for SAML. SP initiated login is the only recommended flow but you might have to support IdP login at times.

Default: `false`

### **DB_ENGINE**

Supported values are `redis`, `sql`, `mongo`, `mem`

Default: `sql`

### **DB_URL**

The database URL to connect to.

Example: `postgres://postgres:postgres@localhost:5450/jackson`

### **DB_TYPE**

Only needed when DB_ENGINE is sql. Supported values are `postgres`, `mysql`, `mariadb`

Default: `postgres`

### **DB_TTL**

TTL for the code, session and token stores (in seconds)

Default: 300

### **DB_CLEANUP_LIMIT**

Limit cleanup of TTL entries to this number

Default: 1000

### **DB_ENCRYPTION_KEY**

To encrypt data at rest specify a 32 character key

You can use openssl to generate a random 32 character key:
```bash
openssl rand -base64 24
```

### **PGSSLMODE**

If you use Heroku to deploy Postgres (or use self-signed certs for Postgres) then set this to `no-verify`. See https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js for more details

### **PRE_LOADED_CONFIG**

If you only need a single tenant or a handful of pre-configured tenants then this config will help you read and load SAML configs. It works well with the mem DB engine so you don't have to configure any external databases for this to work (though it works with those as well). This is a path (absolute or relative) to a directory that contains files organized in the format described in the next section. Check [this section](pre-loaded-configuration.md) for more details

### **JACKSON_API_KEYS**

API keys are used to authenticate requests to the config APIs `/api/v1/saml/config/`.

Keys are comma-separated values. For example `JACKSON_API_KEYS=key1,key2,key3`


## ADMIN UI
### **SMTP_HOST**

The SMTP host like `smtp.example.com`.

### **SMTP_PORT**

The SMTP server port like `587`.

### **SMTP_USER**

Username for the SMTP server.

### **SMTP_PASSWORD**

Password for the SMTP server.

### **SMTP_FROM**

*From* address used to send mail like: `noreply@example.com`.

### **NEXTAUTH_URL**

When running locally this will point to the local server: `http://localhost:5000`. When deploying to production, set this to the canonical URL of the site. More details: https://next-auth.js.org/configuration/options#nextauth_url 

### **NEXTAUTH_SECRET**

Set this to a random string. You can use `openssl rand -base64 32` to get one. This secret is used to encrypt JWT and hash the email verification token. More details: https://next-auth.js.org/configuration/options#nextauth_secret

### **NEXTAUTH_ACL**

Set this to a comma separated string of email addresses or glob patterns like: `tonystark@gmail.com,*@marvel.com`. Access will be denied to email addresses which don't match. If you don't specify any value access is denied to all.
