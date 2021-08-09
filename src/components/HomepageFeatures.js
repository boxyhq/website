import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <>Audit Logs</>,
    url: 'https://github.com/boxyhq/hermes',
    Svg: require('../../static/img/feat_audit.svg').default,
    description: (
      <>
        Add audit logs into your product with ease. Allow your customers to send
        security related events to their SIEM
      </>
    ),
  },
  {
    title: <>SAML (coming soon)</>,
    Svg: require('../../static/img/feat_sso.svg').default,
    description: (
      <>
        Add single sign on authentication into your product. Supports most
        identity providers via SAML 2.0
      </>
    ),
  },
  {
    title: <>Privacy Vault (coming soon)</>,
    Svg: require('../../static/img/feat_vault.svg').default,
    description: (
      <>
        Protect your customers sensitive data by safely encrypting it in a
        Privacy vault. Add policies to govern access to the protected data
      </>
    ),
  },
  {
    title: <>Role Based Access and Permissions (coming soon)</>,
    Svg: require('../../static/img/feat_rbac.svg').default,
    description: (
      <>
        Add roles, groups and permissions into your product using a flexible
        schema. Query the schema at runtime in your product to enforce Role
        Based Access Control
      </>
    ),
  },
  {
    title: <>Directory Sync (coming soon)</>,
    Svg: require('../../static/img/feat_dsync.svg').default,
    description: (
      <>
        Add Directory Sync support into your product to provision and
        de-provision users. Supports the SCIM protocol
      </>
    ),
  },
  {
    title: <>(coming next)</>,
    Svg: require('../../static/img/feat_coming.svg').default,
    description: (
      <>
        Admin Portal, Security Status Page, Compliance Monitoring, many more.
        Contact us if you have any specific Enterprise features in mind.
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        {url ? (
          <h3>
            <a href={url} target="_blank">{title}</a>
          </h3>
        ) : (
          <h3>{title}</h3>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
