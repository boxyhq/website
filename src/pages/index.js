import Layout from '@theme/Layout';

import BaseProductFeatureSpotlight from '../components/BaseProductFeatureSpotlight';
import BaseCTAEnterpriseHighlight from '../components/BaseCTAEnterpriseHighlight';
import CTAProductOverview from '../components/CTAProductOverview';
import CustomersAndPartners from '../components/CustomersAndPartners';
import HeroHome from '../components/heroes/HeroHome';
import Testimonials from '../components/Testimonials';
import DemoCTA from '../components/ctas/DemoCTA';

import '../css/custom-properties.css';
import '../css/base.css';

const IndexPage = () => {
  const metaDescription =
    'Security building blocks to keep your company ahead in the AI era, safeguarding confidential information from LLMs and building secure cloud applications.';
  const metaPageTitle = 'Security Building Blocks for the AI era';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroHome />
      <main>
        <BaseProductFeatureSpotlight
          pictureSrc="/images/products/privacy-vault"
          sectionId="enterprise-sso-spotlight"
          subtitle="The secrets layer for AI"
          title="LLM Vault"
          withMargin={true}
        >
          <p>
            LLM Vault offers a cutting-edge solution to safeguarding sensitive
            data and strategic information. It ensures the confidentiality and
            integrity of your organization's data processed by AI models like
            ChatGPT. With robust encryption and granular access controls, LLM
            Vault secures your data against unauthorized access and breaches.
          </p>
          <ul className="reset-list button-container">
            <li>
              <DemoCTA />
            </li>
            <li>
              <a
                className="button button-secondary-filled with-icon base-icon-pseudo icon-secure"
                href="/llm-vault"
              >
                Learn more
              </a>
            </li>
          </ul>
        </BaseProductFeatureSpotlight>

        <BaseProductFeatureSpotlight
          pictureSrc="/images/products/enterprise-sso"
          sectionId="enterprise-sso-spotlight"
          subtitle="SAML + OpenID Connect"
          title="Enterprise SSO"
          withMargin={true}
        >
          <p>
            In the era of LLMs, secure authentication is paramount. BoxyHQ’s SSO
            solution allows you to go from the first line of code to deployment
            in just a few days, saving you time and getting you to market
            faster. Plus, we offer custom integration support to help you every
            step of the way.
          </p>
          <ul>
            <li>Effortless integration</li>
            <li>Reduced development time</li>
            <li>Become enterprise ready</li>
          </ul>
          <a
            className="button button-secondary-filled with-icon base-icon-pseudo icon-secure"
            href="/enterprise-sso"
          >
            Learn more
          </a>
        </BaseProductFeatureSpotlight>
        <BaseCTAEnterpriseHighlight />
        <CTAProductOverview />
        <Testimonials />
        <CustomersAndPartners />
      </main>
    </Layout>
  );
};

export default IndexPage;
