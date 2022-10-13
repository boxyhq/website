import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import BenefitsSection from '../components/BenefitsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';

const title = 'Enterprise SSO';
const description =
  'Save hundreds of development hours and integrate SSO to your SaaS app in minutes. Supports SAML & OIDC';

const ProductIcon =
  require('../../static/img/products/saml-jackson/logo.svg').default;

const Icon1 =
  require('../../static/img/products/saml-jackson/connected_world.svg').default;

const Icon2 =
  require('../../static/img/products/saml-jackson/time_management.svg').default;

const Icon3 =
  require('../../static/img/products/saml-jackson/building.svg').default;

const benefits = [
  {
    title: 'Increased Security',
    description: `By deploying SAML SSO you are giving your customers the
    ability to control access management on their own system
    which prevents staff from password sharing, having the
    correct access and giving and removing access as needed
    from a central point.`,
    icon: require('../../static/img/products/icons/security.svg').default,
  },
  {
    title: 'Improved user experience',
    description: `The login experience can be a tricky one to get right and
    if you can allow your customers to simply go to their IdP
    dashboard and click on an icon to login into your product
    they will have a much better experience with your product.`,
    icon: require('../../static/img/products/icons/futuristic_interface.svg')
      .default,
  },
  {
    title: 'Reduced cost',
    description: `Apart from the cost saving of using an out-of-the-box
    solution vs building your own custom version, without SAML
    you have to maintain account information across multiple
    services but when you use SAML this is all managed by the
    IdP.`,
    icon: require('../../static/img/products/icons/savings.svg').default,
  },
];

const EnterpriseSSO = () => {
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
            href: 'https://github.com/boxyhq/jackson',
            className: 'button--primary',
          },
          {
            title: 'Try It',
            href: 'https://saml-demo.boxyhq.com',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <SectionLayout
        title="Here is what deploying SSO looks like with and without BoxyHQ"
        description=""
      >
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="col-demo center">
              <Tabs className="center">
                <TabItem value="apple" label="Without BoxyHQ" default>
                  <img
                    src="/img/blog/sso/without-boxyhq.png"
                    alt="Without BoxyHQ"
                  />
                </TabItem>
                <TabItem value="orange" label="With BoxyHQ">
                  <img src="/img/blog/sso/with-boxyhq.png" alt="With BoxyHQ" />
                </TabItem>
              </Tabs>
            </div>
          </div>
        </div>
      </SectionLayout>

      <FeatureSection
        title="Simple integration"
        btnLink="/docs/jackson/overview"
        btnText="View docs"
        image={Icon1}
        direction="right"
      >
        <p>
          With our open-source solution, you can deploy Enterprise SSO with a
          straightforward integration that connects to all IdPs. You simply
          integrate with our product in a few lines of code.
        </p>
        <p>Since it's self-hosted, you keep full control over your data.</p>
      </FeatureSection>

      <FeatureSection
        title="Save time"
        btnLink="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
        btnText="Book a demo"
        image={Icon2}
        direction="left"
      >
        <p>
          Building your own SAML or OpenID Connect integration for each IdP can
          be very resource heavy and take a long time. You will end up building
          a custom integration for each IdP your customers use and this could
          take months!
        </p>
        <p>
          With our SSO solution you can go from the first line of code to
          deploying in production in days instead of weeks! We also provide you
          with custom integration support along the way so you have help each
          step of the way.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Become enterprise ready"
        btnLink="/blog/sso-building-blocks"
        btnText="Read more"
        image={Icon3}
        direction="right"
      >
        <p>
          Most enterprises already use an IdP and will prefer solution providers
          who have a Enterprise SSO integration. This is because they already
          use SAML or OpenID Connect for access management and security so
          anything outside this workflow will be a hassle for them.
        </p>
      </FeatureSection>

      <CustomersSection />

      <BenefitsSection
        benefits={benefits}
        title="Benefits"
        description="Deploying Enterprise SSO for your customer has many benefits and has become
          an expected feature if you have enterprise customers."
      />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default EnterpriseSSO;
