import React from 'react';
import Layout from '@theme/Layout';

import Card from './../components/Card';
import SectionLayout from '../components/SectionLayout';

const products = [
  {
    title: 'Enterprise SaaS Starter Kit',
    description:
      'Next.js based SaaS starter kit that saves you months of development.',
    url: 'https://github.com/boxyhq/saas-starter-kit',
    icon: require('../../static/img/products/audit-logs/logo.svg').default,
  },
  {
    title: 'DevSec Tools',
    description:
      'List of awesome open-source developer security tools. Maintained by BoxyHQ.',
    url: 'https://awesome-oss-devsec.boxyhq.com/',
    icon: require('../../static/img/products/audit-logs/logo.svg').default,
  },
  {
    title: 'Mock SAML',
    description:
      'A free mock SAML 2.0 Identity Provider for testing your SAML SSO integrations.',
    url: 'https://mocksaml.com',
    icon: require('../../static/img/products/mock-saml/logo.svg').default,
  },
];

const title = 'Resources from BoxyHQ';
const description = 'Resources from BoxyHQ';

const Resources = () => {
  return (
    <Layout title={title} description={description}>
      <SectionLayout title={title} description={description}>
        <div className="row">
          {products.map(({ title, description, url, icon }, idx) => (
            <Card
              idx={idx}
              title={title}
              description={description}
              icon={icon}
              url={url}
              btnText="Learn More"
            />
          ))}
        </div>
      </SectionLayout>
    </Layout>
  );
};

export default Resources;
