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

const title = 'Quickly integrate Enterprise SSO';
const description =
  'Save hundreds of development hours by easily integrating SSO into your SaaS app. Our solution supports SAML & OIDC.';

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
    title: 'Improved Security',
    description: `By deploying SAML SSO, you can enable your customers to manage 
    access control on their own systems. This helps prevent password sharing, 
    ensures that staff have the correct access, and allows them to easily grant 
    and revoke access from a central location.`,
    icon: require('../../static/img/products/icons/security.svg').default,
  },
  {
    title: 'Enhanced user experience',
    description: `Improving the login experience is crucial for providing a good 
    user experience. By allowing your customers to log in to your product via 
    their IdP dashboard with a single click, you can significantly improve their 
    experience with your product.`,
    icon: require('../../static/img/products/icons/futuristic_interface.svg')
      .default,
  },
  {
    title: 'Reduced costs',
    description: `In addition to the cost savings of using an out-of-the-box 
    solution instead of building a custom version, implementing SAML can also
     save you money by eliminating the need to maintain account information 
     across multiple services. With SAML, this is all managed by the IdP.`,
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
            title: 'Sign up',
            href: 'https://app.eu.boxyhq.com/auth/join',
            className: 'button--primary',
          },
          {
            title: 'Open Source',
            href: 'https://github.com/boxyhq/jackson',
            className: 'button--primary',
          },
          {
            title: 'Demo',
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
        title="Effortless integration"
        btnLink="/docs/jackson/overview"
        btnText="View docs"
        image={Icon1}
        direction="right"
      >
        <p>
          Our open-source solution makes it easy to deploy Enterprise SSO with a
          simple integration that connects to all Identity Providers. You can
          integrate with our product using just a few lines of code.
        </p>
        <p>
          Since our solution is self-hosted, you maintain complete control over
          your data.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Reduce development time"
        btnLink="https://cal.com/deepak-boxyhq/demo"
        btnText="Book a demo"
        image={Icon2}
        direction="left"
      >
        <p>
          Creating a custom SAML or OpenID Connect integration for each IdP can
          be very time-consuming and require a significant amount of resources.
          This can lead to months of development time spent building custom
          integrations for each IdP your customers use.
        </p>
        <p>
          Our SSO solution allows you to go from the first line of code to
          deployment in just a few days, saving you time and effort. Plus, we
          offer custom integration support to help you every step of the way.{' '}
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
          Most enterprises already use an IdP, so they prefer solution providers
          with an Enterprise SSO integration. This is because they are already
          using SAML or OpenID Connect for access management and security, so
          anything outside of this workflow will be inconvenient for them.
        </p>
      </FeatureSection>

      <CustomersSection />

      <BenefitsSection
        benefits={benefits}
        title="The advantages of Enterprise SSO"
        description="
        Deploying Enterprise SSO for your customers has many benefits and is now an expected feature for enterprises."
      />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default EnterpriseSSO;
