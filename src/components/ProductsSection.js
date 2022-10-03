import React from 'react';

import Card from './Card';
import SectionLayout from './SectionLayout';

const products = [
  {
    title: 'Enterprise SSO',
    description:
      'Add single sign on authentication into your product. Supports most identity providers via SAML 2.0',
    url: '/enterprise-sso',
    icon: require('../../static/img/products/saml-jackson/logo.svg').default,
  },
  {
    title: 'Directory Sync',
    description:
      'Add Directory Sync support into your product to provision and de-provision users.',
    url: '/directory-sync',
    icon: require('../../static/img/products/saml-jackson/logo.svg').default,
  },
  {
    title: 'Audit Logs',
    description:
      'Add audit logs into your product with ease. Allow your customers to send security related events to their SIEM.',
    url: 'audit-logs',
    icon: require('../../static/img/products/audit-logs/logo.svg').default,
  },
  {
    title: 'Mock SAML',
    description:
      'A free mock SAML 2.0 Identity Provider for testing your SAML SSO integrations.',
    url: 'https://mocksaml.com',
    icon: require('../../static/img/products/mock-saml/logo.svg').default,
  },
  {
    title: 'Enterprise SaaS Starter Kit',
    description:
      'Next.js based Enterprise SaaS starter kit that saves you months of development.',
    url: 'https://github.com/boxyhq/saas-starter-kit',
    icon: require('../../static/img/products/saml-jackson/logo.svg').default,
  },
  {
    title: 'Privacy Vault',
    description:
      'Protect your customers sensitive data by safely encrypting it in a Privacy vault. Add policies to govern access to the protected data.',
    url: null,
    icon: require('../../static/img/products/privacy-vault/logo.svg').default,
  },
];

const ProductsSection = () => {
  return (
    <SectionLayout title="Our Products">
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
