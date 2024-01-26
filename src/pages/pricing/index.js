import { useState } from 'react';
import Layout from '@theme/Layout';

import { HubSpotPricingContactForm } from '../../components/HubSpotForm';
import { Modal } from '../../components/Modal';

import TableSelfHostBasic from '../../components/tables/TableSelfHostBasic';
import TableEnterprise from '../../components/tables/TableEnterprise';
import TableSelfHostPremium from '../../components/tables/TableSelfHostPremium';
import TableSaaS from '../../components/tables/TableSaaS';

import './pricing.css';
import TableAddons from '../../components/tables/TableAddons';

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
        <div className="girdle pricing-tables-wrapper">
          <TableSaaS
            showHubSpotForm={(shouldShow, currentFormId) =>
              showHubSpotForm(shouldShow, currentFormId)
            }
          />
          <TableSelfHostBasic />
          <TableSelfHostPremium
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

        <TableAddons
          showHubSpotForm={(shouldShow, currentFormId) =>
            showHubSpotForm(shouldShow, currentFormId)
          }
        />
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
