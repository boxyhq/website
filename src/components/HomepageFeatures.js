import React from 'react';
import styles from './HomepageFeatures.module.css';
import Feature from './Feature';

const FeatureList = [
  {
    title: 'Directory Sync',
    url: 'https://github.com/boxyhq/jackson#directory-sync',
    Svg: require('../../static/img/feat-dsync.svg').default,
    description: (
      <>
        Add Directory Sync support into your product to provision and
        de-provision users. Supports the SCIM protocol
      </>
    ),
  },
  {
    title: 'Audit Logs (Coming soon)',
    Svg: require('../../static/img/feat-audit.svg').default,
    description: (
      <>
        Add audit logs into your product with ease. Allow your customers to send
        security related events to their SIEM
      </>
    ),
  },
  {
    title: 'Privacy Vault (coming soon)',
    Svg: require('../../static/img/feat-vault.svg').default,
    description: (
      <>
        Protect your customers sensitive data by safely encrypting it in a
        Privacy vault. Add policies to govern access to the protected data
      </>
    ),
  },
  {
    title: 'Role Based Access and Permissions (coming soon)',
    Svg: require('../../static/img/feat-rbac.svg').default,
    description: (
      <>
        Add roles, groups and permissions into your product using a flexible
        schema. Query the schema at runtime in your product to enforce Role
        Based Access Control
      </>
    ),
  },
];

const SSOSAMLMain = {
  title: 'SAML SSO',
  Svg: require('../../static/img/feat-sso.svg').default,
  description: '',
};

const SAMLSSOFeatureList = [
  {
    title: 'Integrate SAML with a few lines of code',
    url: 'https://github.com/boxyhq/jackson',
    description: (
      <>
        Add single sign on authentication into your product. Supports most
        identity providers via SAML 2.0
      </>
    ),
  },
  {
    title: 'Mock SAML',
    url: 'https://mocksaml.com',
    description: (
      <>
        A free mock SAML 2.0 Identity Provider for testing your SAML SSO
        integrations
      </>
    ),
  },
];

function SSOSAMLSection() {
  return (
    <div className="container">
      <div className="row">
        <Feature key="SSOSAMLSection" {...SSOSAMLMain} colSize="col--12" />
      </div>
      <div className="row">
        {SAMLSSOFeatureList.map((props, idx) => (
          <Feature key={idx} {...props} colSize="col--6" />
        ))}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <SSOSAMLSection />
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} colSize="col--6" />
          ))}
        </div>
      </div>
    </section>
  );
}
