---
title: SAML Federation
sidebar_label: SAML Federation
---

# SAML Federation

SAML Federation is an enterprise feature and you need to have an enterprise license to use this feature.

This feature allows you to federate multiple Identity Providers (IdPs) without needing any additional plugins or code changes. Extremely useful in cases where the SAML support is restricted to a single provider and you need to support multiple IdPs. Contact us to find out more.

## SAML Federation Flow

Here is how the SAML Federation flow works if you are using Jackson as a SAML IdP and want to federate with another identity provider (IdP) (Eg: Okta):

- The user access the SP's login page
- The user click on the "Login with SAML" button
- The SP send SAML Request to Jackson's SSO endpoint
- Jackson display the list of IdP available for the user to choose from (if there is more than one IdP) based on requested tenant and product combination
- Jackson redirect the user to the chosen IdP for authentication
- After successful authentication, IdP send (POST) SAML Response to Jackson's ACS endpoint
- Jackson process SAML Response from the IdP and create a new SAML Response to send (POST) back to the SP's ACS endpoint
- SP process SAML Response from Jackson and create a new session for the user (Depending on the SP's implementation)

Visit [Create SAML Federation App](/docs/admin-portal/enterprise-sso#saml-federation) to learn how to create and configure a SAML Federation App.
