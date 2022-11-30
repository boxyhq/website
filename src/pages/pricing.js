import React from 'react';
import Layout from '@theme/Layout';

const title = 'Pricing for teams and companies of all sizes';
const description =
  'BoxyHQ is proudly open-source and all of our solutions are available to self-host for free.';

const Pricing = () => {
  return (
    <Layout title={title} description={description}>
      <div className="container" style={{ padding: '50px 20px 50px 20px' }}>
        <h1 className="text--center">{title}</h1>
        <h2 className="text--center" style={{ fontWeight: 'normal' }}>
          {description}
        </h2>
        <div className="pricing__section__desktop">
          <table className="pricing__table">
            <thead>
              <tr>
                <th></th>
                <th>Self-Hosted</th>
                <th>Self-Hosted Premium</th>
                <th>SaaS</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {pricingPlans.map((pricingPlan) => (
                <tr key={pricingPlan.feature}>
                  <td
                    style={{
                      textAlign: 'left',
                      fontWeight: '500',
                    }}
                  >
                    {pricingPlan.feature}
                  </td>
                  <td>{pricingPlan.tiers['self-hosted']}</td>
                  <td>{pricingPlan.tiers['self-hosted-premium']}</td>
                  <td>{pricingPlan.tiers['saas']}</td>
                  <td>{pricingPlan.tiers['enterprise']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pricing__section__mobile">
          <PricingTableMobile title="Self-Hosted" tier="self-hosted" />
          <PricingTableMobile
            title="Self-Hosted Premium"
            tier="self-hosted-premium"
          />
          <PricingTableMobile title="SaaS" tier="saas" />
          <PricingTableMobile title="Enterprise" tier="enterprise" />
        </div>
      </div>
    </Layout>
  );
};

const PricingTableMobile = ({ title, tier }) => {
  return (
    <table className="pricing__table">
      <thead>
        <tr>
          <th colSpan={2} style={{ textAlign: 'left' }}>
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {pricingPlans.map((pricingPlan) => (
          <tr key={pricingPlan.feature}>
            <td
              style={{
                textAlign: 'left',
                fontWeight: '400',
                fontSize: '.875rem',
              }}
            >
              {pricingPlan.feature}
            </td>
            <td style={{ textAlign: 'right' }}>{pricingPlan.tiers[tier]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ContactUs = () => {
  return <a href="mailto:deepak@boxyhq.com">Contact us</a>;
};

const pricingPlans = [
  {
    feature: 'Premium features',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '✅',
    },
  },
  {
    feature: 'Admin Portal',
    tiers: {
      'self-hosted': '✅',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '✅',
    },
  },
  {
    feature: 'Discord Support',
    tiers: {
      'self-hosted': '✅',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '✅',
    },
  },
  {
    feature: 'Email and chat Support',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '✅',
    },
  },
  {
    feature: 'Phone support',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '✅',
    },
  },
  {
    feature: 'Custom deployment',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '✅',
      saas: '❌',
      enterprise: '✅',
    },
  },
  {
    feature: 'Custom SLAs',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '❌',
      saas: '❌',
      enterprise: '✅',
    },
  },
  {
    feature: 'Dedicated infrastructure capacity',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '❌',
      saas: '❌',
      enterprise: '✅',
    },
  },
  {
    feature: 'Custom terms & contract',
    tiers: {
      'self-hosted': '❌',
      'self-hosted-premium': '❌',
      saas: '❌',
      enterprise: '✅',
    },
  },
  {
    feature: 'Enterprise SSO & Directory Sync',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': '$49 per SSO or Directory Sync connection',
      saas: '$49 per SSO or Directory Sync connection',
      enterprise: <ContactUs />,
    },
  },
  {
    feature: 'Audit logs',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': <ContactUs />,
      saas: <ContactUs />,
      enterprise: <ContactUs />,
    },
  },
  {
    feature: 'Privacy Vault',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': <ContactUs />,
      saas: <ContactUs />,
      enterprise: <ContactUs />,
    },
  },
];

export default Pricing;
