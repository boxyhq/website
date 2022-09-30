import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import SvgIcon from './SvgIcon';
import SectionLayout from './SectionLayout';

const products = [
  {
    title: 'SAML SSO',
    description:
      'Add single sign on authentication into your product. Supports most identity providers via SAML 2.0',
    url: 'https://github.com/boxyhq/jackson',
    icon: require('../../static/img/products/saml-jackson/logo.svg').default,
  },
  {
    title: 'Directory Sync',
    description:
      'Add Directory Sync support into your product to provision and de-provision users.',
    url: 'https://github.com/boxyhq/jackson#directory-sync',
    icon: require('../../static/img/products/saml-jackson/logo.svg').default,
  },
  {
    title: 'Mock SAML',
    description:
      'A free mock SAML 2.0 Identity Provider for testing your SAML SSO integrations.',
    url: 'https://mocksaml.com',
    icon: require('../../static/img/products/mock-saml/logo.svg').default,
  },
  {
    title: 'Audit Logs',
    description:
      'Add audit logs into your product with ease. Allow your customers to send security related events to their SIEM.',
    url: null,
    icon: require('../../static/img/products/audit-logs/logo.svg').default,
  },
  {
    title: 'Privacy Vault',
    description:
      'Protect your customers sensitive data by safely encrypting it in a Privacy vault. Add policies to govern access to the protected data.',
    url: null,
    icon: require('../../static/img/products/privacy-vault/logo.svg').default,
  },
  {
    title: 'Role-Based Access Control',
    description:
      'Add roles, groups and permissions into your product using a flexible schema. Query the schema at runtime in your product to enforce RBAC.',
    url: null,
    icon: require('../../static/img/products/rbac/logo.svg').default,
  },
];

const ProductsSection = () => {
  return (
    <SectionLayout
      title="Our Products"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry"
    >
      <div className="row">
        {products.map(({ title, description, url, icon }, idx) => (
          <div
            className="col col--4"
            style={{ marginBottom: '30px' }}
            key={idx}
          >
            <div className="card-demo">
              <div className="card">
                <div className="card__header">
                  <div className="card__image">
                    <div className="avatar avatar--vertical">
                      <div
                        className="avatar__photo avatar__photo--lg"
                        style={{ borderRadius: '0px' }}
                      >
                        <SvgIcon
                          icon={icon}
                          size={{ width: '64px', height: '64px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card__body">
                  <h4 className="text--center" style={{ fontSize: '20px' }}>
                    {title}
                  </h4>
                  <p className="text--center">{description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    to={url}
                    className={clsx(
                      'button button--primary button--block button--outline',
                      {
                        disabled: !url,
                      }
                    )}
                  >
                    {url ? 'Learn More' : 'Coming Soon'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProductsSection;
