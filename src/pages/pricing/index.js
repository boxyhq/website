import { useState } from 'react';
import Layout from '@theme/Layout';

import HeroPricing from '../../components/heroes/HeroPricing';

import { HubSpotPricingContactForm } from '../../components/HubSpotForm';
import { Modal } from '../../components/Modal';

import TableSelfHostBasic from '../../components/tables/TableSelfHostBasic';
import TableEnterprise from '../../components/tables/TableEnterprise';
import TableSelfHostPremium from '../../components/tables/TableSelfHostPremium';
import TableSaaS from '../../components/tables/TableSaaS';

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
    <Layout title={metaPageTitle} description={metaDescription}>
      <HeroPricing />
      <main className="girdle primary-content-wrapper">
        <h2 className="linear-gradient-text">
          From Startup to Enterprise, We've Got You Covered
        </h2>
        <p className="lead">
          At BoxyHQ, we recognize that every business has unique requirements.
          Our commitment is to cater to this diversity by providing versatile
          and adaptable solutions, ensuring they align perfectly with your
          unique business needs. Whether you're looking to embed BoxyHQ directly
          within your existing infrastructure, prefer the autonomy and control
          of self-hosting, or wish to leverage the convenience of our SaaS
          offering, we have the right solution for you.
        </p>
        <p className="lead-outro">
          Our comprehensive suite of products, ranging from Enterprise Single
          Sign-On and Directory Sync to Audit Logs and Data Privacy, is
          meticulously designed for flexibility. This ensures seamless
          integration into your products, enhancing functionality and user
          experience. By choosing BoxyHQ, you're not just adopting a security
          solution; you're embracing a strategic partner dedicated to enhancing
          your operational efficiency. Our solutions are crafted to save you
          valuable time, reduce operational costs, and streamline complex
          processes that often consume significant resources.
        </p>
        <p className="lead-outro">
          Embrace the BoxyHQ advantage, and join a growing community of
          businesses who trust us to simplify their security needs while they
          forge ahead in their respective industries. Together, let's redefine
          what it means to be secure, efficient, and customer-focused in today's
          dynamic business landscape.
        </p>
        <div className="pricing-tables-wrapper">
          <TableSelfHostBasic />
          <TableSelfHostPremium
            showHubSpotForm={(shouldShow, currentFormId) =>
              showHubSpotForm(shouldShow, currentFormId)
            }
          />
          <TableSaaS
            showHubSpotForm={(shouldShow, currentFormId) =>
              showHubSpotForm(shouldShow, currentFormId)
            }
          />
          <TableEnterprise
            showHubSpotForm={(shouldShow, currentFormId) =>
              showHubSpotForm(shouldShow, currentFormId)
            }
          />
        </div>
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
