import { useState } from 'react';

import Layout from '@theme/Layout';

import { hubspotFormIds } from '../../components/Pricing/pricingPlans';

import { HubSpotPricingContactForm } from '../../components/HubSpotForm';
import { Modal } from '../../components/Modal';

import CustomersAndPartners from '../../components/CustomersAndPartners';
import PricingCardsSaaS from '../../components/PricingCardsSaaS';
import ProductsSelfHosted from '../../components/ProductsSelfHosted';
import SignupCTA from '../../components/ctas/SignupCTA';

import './pricing.css';

const Pricing = () => {
  const metaDescription =
    "Discover BoxyHQ's affordable pricing plans for teams and companies of all sizes. Choose from self-hosted, premium, or SaaS options for our Enterprise SSO, Directory Sync, Audit Logs, and Privacy Vault solutions. Start optimizing your security infrastructure today.";
  const metaPageTitle = 'BoxyHQ Pricing: Flexible Plans for Every Team Size';

  const [opened, setOpened] = useState(false);
  const [formId, setFormId] = useState('');

  function showHubSpotForm(show, formId) {
    setOpened(show);
    setFormId(formId);
  }

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <main className="girdle primary-content-wrapper pricing">
        <div className="pricing-hero">
          <h1 className="linear-gradient-text">
            BoxyHQ SaaS. We Host. You Build.
          </h1>
          <p className="lead">
            Every application requires minimum viable security to be
            enterprise-compliant. BoxyHQ provides Security Building Blocks as a
            Service (a suite of APIs), so developers can focus on their core
            product and accelerate time-to-market.
          </p>
          <ul className="reset-list button-container">
            <li>
              <SignupCTA campaign="pricing" />
            </li>
            <li>
              <button
                type="button"
                className="button button-secondary with-icon base-icon-pseudo icon-send icon-code-slash"
                onClick={() =>
                  showHubSpotForm(
                    true,
                    hubspotFormIds.enterpriseSSODirectorySync
                  )
                }
              >
                Contact Us
              </button>
            </li>
          </ul>
          <p className="small-text">
            No credit card required for a fully-featured 30-day trial
          </p>
        </div>

        <PricingCardsSaaS showHubSpotForm={showHubSpotForm} />

        <ProductsSelfHosted showHubSpotForm={showHubSpotForm} />

        <CustomersAndPartners />
      </main>
      {opened && (
        <Modal title="Contact Us" opened={opened} setOpened={setOpened}>
          <HubSpotPricingContactForm formId={formId} />
        </Modal>
      )}
    </Layout>
  );
};

export default Pricing;
