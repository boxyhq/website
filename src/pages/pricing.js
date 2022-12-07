import React, { useState } from 'react';
import Layout from '@theme/Layout';

import Modal from '../components/Modal';
import { HubSpotContactForm } from '../components/HubSpotForm';

const title = 'Pricing for teams and companies of all sizes';
const description =
  'BoxyHQ is proudly open-source and all of our solutions are available to self-host for free.';

const Pricing = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Layout title={title} description={description}>
      <div className="container" style={{ padding: '50px 20px 50px 20px' }}>
        <h1 className="text--center">{title}</h1>
        <h2 className="text--center" style={{ fontWeight: 'normal' }}>
          {description}
        </h2>
        <PricingSectionDesktop setOpened={setOpened} />
        <PricingSectionMobile setOpened={setOpened} />
      </div>
      {opened && (
        <Modal setOpened={setOpened}>
          <HubSpotContactForm />
        </Modal>
      )}
    </Layout>
  );
};

const PricingSectionDesktop = ({ setOpened }) => {
  return (
    <div className="pricing__section__desktop">
      <table className="pricing__table">
        <thead>
          <tr>
            <th></th>
            <th>Self-Hosted</th>
            <th>Self-Hosted Premium</th>
            <th>SaaS (hosted by us)</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {pricingPlans.map((pricingPlan) => {
            return (
              <React.Fragment key={pricingPlan.feature}>
                <tr>
                  <td
                    style={{
                      textAlign: 'left',
                      fontWeight: '500',
                    }}
                  >
                    {pricingPlan.feature}
                  </td>
                  <td>
                    <TextToComponent text={pricingPlan.tiers['self-hosted']} />
                  </td>
                  <td className="highlight">
                    <TextToComponent
                      text={pricingPlan.tiers['self-hosted-premium']}
                      setOpened={setOpened}
                    />
                  </td>
                  <td>
                    <TextToComponent
                      text={pricingPlan.tiers['saas']}
                      setOpened={setOpened}
                    />
                  </td>
                  <td>
                    <TextToComponent
                      text={pricingPlan.tiers['enterprise']}
                      setOpened={setOpened}
                    />
                  </td>
                </tr>
                {pricingPlan.lineBreak && (
                  <tr>
                    <td
                      colSpan={5}
                      style={{
                        padding: '20px 0',
                      }}
                    ></td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const PricingTableMobile = ({ title, tier, setOpened }) => {
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
              <TextToComponent
                text={pricingPlan.tiers[tier]}
                setOpened={setOpened}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const PricingSectionMobile = ({ setOpened }) => {
  return (
    <div className="pricing__section__mobile">
      <PricingTableMobile title="Self-Hosted" tier="self-hosted" />
      <PricingTableMobile
        title="Self-Hosted Premium"
        tier="self-hosted-premium"
        setOpened={setOpened}
      />
      <PricingTableMobile
        title="SaaS (hosted by us)"
        tier="saas"
        setOpened={setOpened}
      />
      <PricingTableMobile
        title="Enterprise"
        tier="enterprise"
        setOpened={setOpened}
      />
    </div>
  );
};

const IconYes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#25c2a0"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
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
      strokeWidth="1.5"
      stroke="#F87272"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ContactUsBtn = ({ setOpened }) => {
  return (
    <a
      href="javascript:void(0);"
      onClick={() => {
        setOpened(true);
      }}
    >
      Contact us
    </a>
  );
};

const TextToComponent = ({ text, setOpened }) => {
  const componentsMap = {
    yes: <IconYes />,
    no: <IconNo />,
    contactUs: <ContactUsBtn setOpened={setOpened} />,
  };

  return componentsMap[text] || <span>{text}</span>;
};

const pricingPlans = [
  {
    feature: 'Premium features',
    tiers: {
      'self-hosted': 'no',
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
    lineBreak: true,
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
