import { useState } from 'react';

import Layout from '@theme/Layout';

import { hubspotFormIds } from '../../components/Pricing/pricingPlans';

import { HubSpotPricingContactForm } from '../../components/HubSpotForm';
import { Modal } from '../../components/Modal';

import AccordionPricingProductCard from '../../components/cards/AccordionPricingProductCard';
import CustomersAndPartners from '../../components/CustomersAndPartners';
import ProductsSelfHosted from '../../components/ProductsSelfHosted';
import TableTieredPricing from '../../components/tables/TableTieredPricing';

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
              <a
                className="button button-primary with-icon base-icon-pseudo icon-code-slash"
                href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=pricing"
              >
                Sign Up Today
              </a>
            </li>
            <li>
              <button
                type="button"
                className="button button-secondary with-icon base-icon-pseudo icon-send icon-code-slash"
                onClick={() =>
                  showHubSpotForm(
                    true,
                    hubspotFormIds.entrpriseSSODirectorySync
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

        <div className="girdle pricing-cards-wrapper">
          <ul className="reset-list pricing-cards-list">
            <li>
              <AccordionPricingProductCard
                currency="$"
                name="product-sso"
                price="49"
                pricePeriod="per month"
                subtitle="Enterprise SAML & OIDC authentication with any identity provider."
                title="Sign Sign-On (SSO)"
                type="saas"
              >
                <div className="pricing-product-card-details">
                  <p>
                    Should you have any questions about our Enterprise Single
                    Sign-On solution, do not hesitate to{' '}
                    <button
                      type="button"
                      className="ghost contact-us-inline"
                      onClick={() =>
                        showHubSpotForm(
                          true,
                          hubspotFormIds.entrpriseSSODirectorySync
                        )
                      }
                    >
                      contact us today
                    </button>
                    .
                  </p>
                  <TableTieredPricing />
                  <p className="pricing-product-card-details-cta">
                    No credit card required for a fully-featured 30-day trial.{' '}
                    <a
                      className="button button-primary with-icon base-icon-pseudo icon-code-slash"
                      href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=pricing"
                    >
                      Sign Up Today
                    </a>
                  </p>
                </div>
              </AccordionPricingProductCard>
            </li>
            <li>
              <AccordionPricingProductCard
                currency="$"
                name="product-directory-sync"
                price="49"
                pricePeriod="per month"
                subtitle="Integrate with SCIM 2.0 providers using simple webhooks."
                title="Directory Sync"
                type="saas"
              >
                <div className="pricing-product-card-details">
                  <p>
                    Should you have any questions about our Directory Sync
                    solution, do not hesitate to{' '}
                    <button
                      type="button"
                      className="ghost contact-us-inline"
                      onClick={() =>
                        showHubSpotForm(
                          true,
                          hubspotFormIds.entrpriseSSODirectorySync
                        )
                      }
                    >
                      contact us today
                    </button>
                    .
                  </p>
                  <TableTieredPricing />
                  <p className="pricing-product-card-details-cta">
                    No credit card required for a fully-featured 30-day trial.{' '}
                    <a
                      className="button button-primary with-icon base-icon-pseudo icon-code-slash"
                      href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=pricing"
                    >
                      Sign Up Today
                    </a>
                  </p>
                </div>
              </AccordionPricingProductCard>
            </li>
            <li>
              <AccordionPricingProductCard
                name="product-audit-logs"
                subtitle="A searchable and exportable record of read/write events."
                title="Audit Logs"
                type="saas"
              >
                <div className="pricing-product-card-details">
                  <p>
                    For all companies but in particular large companies, the
                    ability to monitor the flow of data and be alerted to any
                    breaches is essential. Audit logs help to pinpoint any
                    misuse of information and ensure that data policies are
                    followed. Many larger enterprise customers will demand this
                    as a requirement if you plan to sell to them.
                  </p>
                  <p>
                    Should you have questions about our Audit Logs solution{' '}
                    <button
                      type="button"
                      className="ghost contact-us-inline"
                      onClick={() =>
                        showHubSpotForm(
                          true,
                          hubspotFormIds.auditLogs.enterprise
                        )
                      }
                    >
                      contact us today
                    </button>
                    .
                  </p>
                </div>
              </AccordionPricingProductCard>
            </li>
            <li>
              <AccordionPricingProductCard
                name="product-privacy-vault"
                subtitle="Protect your customer's data and your customer's trust."
                title="Privacy Vault"
                type="saas"
              >
                <div className="pricing-product-card-details">
                  <p>
                    Taking the best practices from companies like Google, Apple
                    and Facebook who have internally built privacy data vaults,
                    BoxyHQ offers an open-source solution to centralize, isolate
                    and govern all the sensitive data you collect.
                  </p>
                  <p>
                    Should you have questions about our Privacy Vault solution{' '}
                    <button
                      type="button"
                      className="ghost contact-us-inline"
                      onClick={() =>
                        showHubSpotForm(
                          true,
                          hubspotFormIds.privacyVault.enterprise
                        )
                      }
                    >
                      contact us today
                    </button>
                    .
                  </p>
                </div>
              </AccordionPricingProductCard>
            </li>
            <li>
              <AccordionPricingProductCard
                name="product-addons"
                subtitle="Custom branding, domains, SAML Federation, SIEM Integration."
                title="Add-Ons"
                type="saas"
              >
                <div className="pricing-product-card-details">
                  <TableAddons />
                </div>
              </AccordionPricingProductCard>
            </li>
          </ul>
        </div>

        <ProductsSelfHosted />

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
