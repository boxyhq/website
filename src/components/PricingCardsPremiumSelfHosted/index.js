import { hubspotFormIds } from '../Pricing/pricingPlans';

import AccordionPricingProductCard from '../cards/AccordionPricingProductCard';
import TableAddons from '../tables/TableAddons';

import './pricing-cards-premium-self-hosted.css';

const PricingCardsPremiumSelfHosted = ({ showHubSpotForm }) => {
  return (
    <div className="girdle pricing-cards-wrapper pricing-cards-premium-self-hosted">
      <ul className="reset-list pricing-cards-list">
        <li>
          <AccordionPricingProductCard
            name="product-sso"
            subtitle="Enterprise SAML & OIDC authentication with any identity provider."
            title="Single Sign-On (SSO)"
            type="premium-self-hosted"
          >
            <div className="pricing-product-card-details">
              <p>
                For pricing or general questions concerning our premium
                self-hosted Enterprise Single Sign-On solution{' '}
                <button
                  type="button"
                  className="ghost contact-us-inline"
                  onClick={() =>
                    showHubSpotForm(
                      true,
                      hubspotFormIds.enterpriseSSODirectorySync
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
            name="product-directory-sync"
            subtitle="Integrate with SCIM 2.0 providers using simple webhooks."
            title="Directory Sync"
            type="premium-self-hosted"
          >
            <div className="pricing-product-card-details">
              <p>
                For pricing or general questions concerning our premium
                self-hosted Directory Sync solution{' '}
                <button
                  type="button"
                  className="ghost contact-us-inline"
                  onClick={() =>
                    showHubSpotForm(
                      true,
                      hubspotFormIds.enterpriseSSODirectorySync
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
            name="product-identity-federation"
            subtitle="Strengthen security measures across applications with federated authentication and single sign-on (SSO)."
            title="Identity Federation"
            type="premium-self-hosted"
          >
            <div className="pricing-product-card-details">
              <p>
                Unlock a seamless user experience while significantly reducing
                development time and costs with BoxyHQ's Identity Federation
                Proxy. Our Proxy approach acts as both a virtual IdP and an SP,
                simplifying processes and eliminating the need for
                re-authentications. This allows enterprises to swiftly roll out
                new software products with confidence, enabling bespoke user
                journeys and accelerating user onboarding.
              </p>
              <p>
                Should you have questions about our{' '}
                <button
                  type="button"
                  className="ghost contact-us-inline"
                  onClick={() =>
                    showHubSpotForm(
                      true,
                      hubspotFormIds.identityFederation.premium
                    )
                  }
                >
                  Identity Federation solution contact us today
                </button>
                .
              </p>
            </div>
          </AccordionPricingProductCard>
        </li>
        <li>
          <AccordionPricingProductCard
            name="product-audit-logs"
            subtitle="A searchable and exportable record of read/write events."
            title="Audit Logs"
            type="premium-self-hosted"
          >
            <div className="pricing-product-card-details">
              <p>
                For all companies but in particular large companies, the ability
                to monitor the flow of data and be alerted to any breaches is
                essential. Audit logs help to pinpoint any misuse of information
                and ensure that data policies are followed. Many larger
                enterprise customers will demand this as a requirement if you
                plan to sell to them.
              </p>
              <p>
                Should you have questions about our Audit Logs solution{' '}
                <button
                  type="button"
                  className="ghost contact-us-inline"
                  onClick={() =>
                    showHubSpotForm(true, hubspotFormIds.auditLogs.premium)
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
            type="premium-self-hosted"
          >
            <div className="pricing-product-card-details">
              <p>
                Taking the best practices from companies like Google, Apple and
                Facebook who have internally built privacy data vaults, BoxyHQ
                offers an open-source solution to centralize, isolate and govern
                all the sensitive data you collect.
              </p>
              <p>
                Should you have questions about our Privacy Vault solution{' '}
                <button
                  type="button"
                  className="ghost contact-us-inline"
                  onClick={() =>
                    showHubSpotForm(true, hubspotFormIds.privacyVault.premium)
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
            subtitle="Custom Branding, SAML Federation, SIEM Integration."
            title="Add-Ons"
            type="premium-self-hosted"
          >
            <div className="pricing-product-card-details">
              <TableAddons
                showHubSpotForm={showHubSpotForm}
                type="premium-self-hosted"
              />
            </div>
          </AccordionPricingProductCard>
        </li>
      </ul>
    </div>
  );
};

export default PricingCardsPremiumSelfHosted;
