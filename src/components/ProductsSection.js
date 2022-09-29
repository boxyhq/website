import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const products = [
  {
    title: 'SAML SSO',
    description:
      'Add single sign on authentication into your product. Supports most identity providers via SAML 2.0',
    url: 'https://github.com/boxyhq/jackson',
    icon: '/img/products/saml-jackson/logo.svg',
  },
  {
    title: 'Directory Sync',
    description:
      'Add Directory Sync support into your product to provision and de-provision users. Supports the SCIM protocol.',
    url: 'https://github.com/boxyhq/jackson#directory-sync',
    icon: '/img/products/saml-jackson/logo.svg',
  },
  {
    title: 'Mock SAML',
    description:
      'A free mock SAML 2.0 Identity Provider for testing your SAML SSO integrations.',
    url: 'https://mocksaml.com',
    icon: '/img/products/mock-saml/logo.svg',
  },
  {
    title: 'Audit Logs',
    description:
      'Add audit logs into your product with ease. Allow your customers to send security related events to their SIEM.',
    url: null,
    icon: '/img/products/audit-logs/logo.svg',
  },
  {
    title: 'Privacy Vault',
    description:
      'Protect your customers sensitive data by safely encrypting it in a Privacy vault. Add policies to govern access to the protected data.',
    url: null,
    icon: '/img/products/privacy-vault/logo.svg',
  },
  {
    title: 'Role-Based Access Control',
    description:
      'Add roles, groups and permissions into your product using a flexible schema. Query the schema at runtime in your product to enforce RBAC.',
    url: null,
    icon: '/img/products/rbac/logo.svg',
  },
];

const ProductsSection = () => {
  return (
    <section className="page__section">
      <div className="container">
        <h2
          className="section__header text--center"
          style={{ padding: '10px' }}
        >
          Our Products
        </h2>
        <p className="text--center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="row">
          {products.map(({ title, description, url, icon }, idx) => (
            <div className="col col--4" style={{ marginTop: '20px' }} key={idx}>
              <div className="card-demo">
                <div className="card" style={{ minHeight: '300px' }}>
                  <div className="card__header">
                    <div className="card__image">
                      <div className="avatar avatar--vertical">
                        <img
                          className="avatar__photo avatar__photo--xl"
                          src={icon}
                          style={{
                            borderRadius: '0px',
                            width: '70px',
                            height: '70px',
                          }}
                        />
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
      </div>
    </section>
  );
};

export default ProductsSection;
