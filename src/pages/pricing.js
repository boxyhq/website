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
        <PricingSectionDesktop />
        <PricingSectionMobile />
      </div>
    </Layout>
  );
};

const PricingSectionDesktop = () => {
  return (
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
              <td>
                <Text text={pricingPlan.tiers['self-hosted']} />
              </td>
              <td>
                <Text text={pricingPlan.tiers['self-hosted-premium']} />
              </td>
              <td>
                <Text text={pricingPlan.tiers['saas']} />
              </td>
              <td>
                <Text text={pricingPlan.tiers['enterprise']} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
              }}
            >
              {pricingPlan.feature}
            </td>
            <td style={{ textAlign: 'right' }}>
              <Text text={pricingPlan.tiers[tier]} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const PricingSectionMobile = () => {
  return (
    <div className="pricing__section__mobile">
      <PricingTableMobile title="Self-Hosted" tier="self-hosted" />
      <PricingTableMobile
        title="Self-Hosted Premium"
        tier="self-hosted-premium"
      />
      <PricingTableMobile title="SaaS" tier="saas" />
      <PricingTableMobile title="Enterprise" tier="enterprise" />
    </div>
  );
};

const IconYes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#25c2a0"
      width="24"
      height="24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const IconNo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#F87272"
      width="24"
      height="24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ContactUs = () => {
  return <a href="mailto:deepak@boxyhq.com">Contact us</a>;
};

const Text = ({ text }) => {
  const iconsMap = {
    yes: <IconYes />,
    no: <IconNo />,
    contactUs: <ContactUs />,
  };

  return iconsMap[text] || <span>{text}</span>;
};

const pricingPlans = [
  {
    feature: 'Premium features',
    tiers: {
      'self-hosted': 'yes',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Admin Portal',
    tiers: {
      'self-hosted': 'yes',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Discord Support',
    tiers: {
      'self-hosted': 'yes',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Email and chat Support',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Phone support',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Custom deployment',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Custom SLAs',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'no',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Dedicated infrastructure capacity',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'no',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Custom terms & contract',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'no',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Enterprise SSO & Directory Sync',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': '$49 per SSO or Directory Sync connection',
      saas: '$49 per SSO or Directory Sync connection',
      enterprise: 'contactUs',
    },
  },
  {
    feature: 'Audit logs',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': 'contactUs',
      saas: 'contactUs',
      enterprise: 'contactUs',
    },
  },
  {
    feature: 'Privacy Vault',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': 'contactUs',
      saas: 'contactUs',
      enterprise: 'contactUs',
    },
  },
];

export default Pricing;
