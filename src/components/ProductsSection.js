import React from 'react';

import Card from './Card';
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
          <Card
            idx={idx}
            title={title}
            description={description}
            icon={icon}
            url={url}
            btnText={url ? 'Learn More' : 'Join Private Beta'}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ProductsSection;
