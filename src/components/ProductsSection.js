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
    icon: require('../../static/img/products/dsync/logo.svg').default,
  },
  {
    title: 'Audit Logs',
    description:
      'Add audit logs into your product with ease. Allow your customers to send security related events to their SIEM.',
    url: 'audit-logs',
    icon: require('../../static/img/products/audit-logs/logo.svg').default,
  },
  {
    title: 'Privacy Vault',
    description:
      'Protect your customers sensitive data by safely encrypting it in a Privacy vault. Add policies to govern access to the protected data.',
    url: 'privacy-vault',
    icon: require('../../static/img/products/privacy-vault/logo.svg').default,
  },
];

const ProductsSection = () => {
  return (
    <SectionLayout title="Our Products">
      <div className="row">
        {products
          .slice(0, 2)
          .map(({ title, description, url, icon, btnText }, idx) => (
            <Card
              colClass={'col--6'}
              key={idx}
              idx={idx}
              title={title}
              description={description}
              icon={icon}
              url={url}
              btnText={btnText ? btnText : 'Learn More'}
            />
          ))}
      </div>
      <div className="row">
        {products
          .slice(2)
          .map(({ title, description, url, icon, btnText }, idx) => (
            <Card
              colClass={'col--6'}
              key={idx}
              idx={idx}
              title={title}
              description={description}
              icon={icon}
              url={url}
              btnText={btnText ? btnText : 'Learn More'}
            />
          ))}
      </div>
    </SectionLayout>
  );
};

export default ProductsSection;
