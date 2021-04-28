import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: <>SAML</>,
    icon: 'fa-shield-alt',
    description: (
      <>
        Add single sign on authentication into your product. Supports most
        identity providers via SAML 2.0
      </>
    ),
  },
  {
    title: <>Audit Logs</>,
    icon: 'fa-clipboard-list',
    description: (
      <>
        Add audit logs into your product with ease. Allow your customers to send
        security related events to their SIEM
      </>
    ),
  },
  {
    title: <>Privacy Vault</>,
    icon: 'fa-key',
    description: (
      <>
        Protect your customers sensitive data by safely encrypting it in a
        Privacy vault. Add policies to govern access to the protected data
      </>
    ),
  },
  {
    title: <>Role Based Access and Permissions</>,
    icon: 'fa-user-lock',
    description: (
      <>
        Add roles, groups and permissions into your product using a flexible
        schema. Query the schema at runtime in your product to enforce Role
        Based Access Control
      </>
    ),
  },
  {
    title: <>Directory Sync</>,
    icon: 'fa-sync',
    description: (
      <>
        Add Directory Sync support into your product to provision and
        de-provision users. Supports the SCIM protocol
      </>
    ),
  },
  {
    title: <>(coming soon)</>,
    icon: 'fa-ellipsis-h',
    description: (
      <>
        Admin Portal, Security Status Page, Compliance Monitoring, many more.
        Contact us if you have any specific Enterprise features in mind.
      </>
    ),
  },
];

function withIcon(icon) {
  return `fas fa-lg fa-5x ${icon}`;
}

function Feature({ icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <i className={withIcon(icon)}></i>

        <br />
        <br />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
