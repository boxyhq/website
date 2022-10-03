import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import BenefitsSection from '../components/BenefitsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';

const title = 'Audit Logs';
const description =
  'With BoxyHQ’s Audit logs you can become compliant and deploy audit logs with minimal disruption';

const ProductIcon =
  require('../../static/img/products/audit-logs/logo.svg').default;

const Icon1 =
  require('../../static/img/products/saml-jackson/undraw_connected_world_wuay.svg').default;

const Icon2 =
  require('../../static/img/products/saml-jackson/undraw_time_management_re_tk5w.svg').default;

const Icon3 =
  require('../../static/img/products/saml-jackson/undraw_building_re_xfcm.svg').default;

const benefits = [
  {
    title: 'Increased Security',
    description: `By deploying SAML SSO you are giving your customers the
    ability to control access management on their own system
    which prevents staff from password sharing, having the
    correct access and giving and removing access as needed
    from a central point.`,
    icon: require('../../static/img/products/icons/lock.svg').default,
  },
  {
    title: 'Improved user experience',
    description: `The login experience can be a tricky one to get right and
    if you can allow your customers to simply go their IdP
    dashboard and click on an icon to login into your product
    they will have a much better experience with your product.`,
    icon: require('../../static/img/products/icons/lock.svg').default,
  },
  {
    title: 'Reduced cost',
    description: `Apart from the cost saving of using an out-of-the-box
    solution v building your own custom version, Without SAML
    you have to maintain account information across multiple
    services but when you use SAML this is all managed by the
    IdP.`,
    icon: require('../../static/img/products/icons/lock.svg').default,
  },
];

const SAMLSSO = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title={title}
        description={description}
        image="/img/feat-sso.svg"
        icon={ProductIcon}
        buttons={[
          {
            title: 'Get Started',
            href: '/',
            className: 'button--primary',
          },
          {
            title: 'Learn More',
            href: '/',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <FeatureSection
        title="Simple integration"
        btnLink="/docs/jackson/overview"
        btnText="Learn More"
        image={Icon1}
        direction="right"
      >
        <p>
          With our open-source solution, you can deploy SAML SSO with a
          straightforward integration that connects to all IdPs. You simply
          integrate with SAML Jackson and then we provide you with integration
          for all the IdPs.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Save time"
        btnLink="/docs/jackson/overview"
        btnText="Learn More"
        image={Icon2}
        direction="left"
      >
        <p>
          Building your own SAML integration for each IdP can be very resource
          heavy and take a long time. You will end up building a custom
          integration for each IdP your customers use and this could take
          months!
        </p>
        <p>
          With SAML Jackson you can go from the first line of code to deploying
          in production in as little as 8 days! We also provide you with custom
          integration support along the way so you have help each step of the
          way.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Become enterprise ready"
        btnLink="/docs/jackson/overview"
        btnText="Read More"
        image={Icon3}
        direction="right"
      >
        <p>
          Most enterprises already use an IdP and will prefer solution providers
          who have a SAML SSO integration. This is because they already use SAML
          for access management and security so anything outside this workflow
          will be a hassle for them.
        </p>
      </FeatureSection>

      <CustomersSection />

      <BenefitsSection
        benefits={benefits}
        title="Benefits"
        description="Deploying SAML SSO for your customer has many benefits and has become
          an expected feature if you have enterprise customers."
      />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default SAMLSSO;
