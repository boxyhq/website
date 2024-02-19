import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import { hubspotFormIds } from '../../components/Pricing/pricingPlans';

import BaseFeatureSectionHeader from '../../components/BaseFeatureSectionHeader';
import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import CTAIdentityFederation from '../../components/CTAIdentityFederation';
import HeroIdentityFederation from '../../components/heroes/HeroIdentityFederation';

import { HubSpotPricingContactForm } from '../../components/HubSpotForm';
import { Modal } from '../../components/Modal';
import CustomersAndPartners from '../../components/CustomersAndPartners';

const IdentityFederation = () => {
  const metaDescription =
    'Streamline identify management across all customer-facing applications with BoxyHQ Identity Federation Broker irrespective of diverse configurations or protocols.';
  const metaPageTitle =
    "Customer Identity Management with BoxyHQ's Identity Federation";

  const identityFederationBenefits = [
    {
      light: false,
      pictureSrc: '/images/heroes/federated-authentication-hero',
      reversed: false,
      title: 'Federated Authentication',
      ctaCopy: 'Learn More',
      copy: 'Enable seamless login across applications securely without re-authentication using standard protocols like OIDC and SAML.',
      icon: 'icon-lock',
      url: '/enterprise-sso',
    },
    {
      light: true,
      pictureSrc: '/images/heroes/sso-identity-federation-hero',
      reversed: true,
      title: 'Single Sign-On (SSO)',
      ctaCopy: 'Book A Demo',
      copy: 'Implement SSO, both idetity provider (IdP) and service provider (SP) initiated, for simplified authentication.',
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/heroes/identity-orchestration-hero',
      reversed: false,
      title: 'Identity Orchestration',
      ctaCopy: 'Book A Demo',
      copy: 'Integrate third-party connectors for use cases such as fraud prevention, localization, and identity verification. ',
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
  ];

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
      <HeroIdentityFederation />
      <main>
        <CTAIdentityFederation />
        <BaseFeatureSectionHeader
          title="Best-in-Class Identity Federation"
          subtitle="Unified Identity Management"
          withMargin={true}
        />
        <ul className="reset-list">
          {identityFederationBenefits.map((benefit) => (
            <li key={benefit.title}>
              <BaseProductSpotlightSection
                light={benefit.light}
                pictureSrc={benefit.pictureSrc}
                reversed={benefit.reversed}
              >
                <h2 className="product-feature-card-heading">
                  {benefit.title}
                </h2>
                <p>{benefit.copy}</p>
                <a
                  className={clsx(
                    'button',
                    'button-primary',
                    'with-icon',
                    'base-icon-pseudo',
                    benefit.icon
                  )}
                  href={benefit.url}
                  target={benefit.url.startsWith('http') ? '_blank' : '_self'}
                >
                  {benefit.ctaCopy}
                </a>
              </BaseProductSpotlightSection>
            </li>
          ))}
        </ul>

        <div className="girdle cta-general-content-container">
          <h2 className="linear-gradient-text">
            Simplify Your Identity Federation Strategy
          </h2>
          <p>
            Say goodbye to customer identity silos and fragmentation. BoxyHQ's
            Identity Federation capabilities empower businesses of all sizes to
            take control of their customer identities with ease. Whether you're
            a seasoned developer or new to app development, our platform offers
            a range of options, from no code to custom code, to meet your needs
            effectively.{' '}
          </p>
          <h3 className="linear-gradient-text">
            Plug and Play: No Code/Low Code
          </h3>
          <p>
            BoxyHQ's identity federation simplifies the task for developers and
            organizations to add authentication and identity management to their
            apps using no / low code workflows. Particularly with SAML
            Federation, minimal coding is required as the emphasis is placed on
            configuration rather than writing code. This user-friendly approach
            significantly reduces the development overhead for organizations,
            enabling developers to implement robust authentication mechanisms
            without extensive coding expertise.
          </p>
          <p>
            Ready to simplify customer identity management? Let BoxyHQ be your
            trusted partner.{' '}
            <button
              type="button"
              className="ghost link-button"
              onClick={() =>
                showHubSpotForm(true, hubspotFormIds.enterpriseSSODirectorySync)
              }
            >
              Contact Us
            </button>{' '}
            today to learn more!
          </p>
        </div>
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

export default IdentityFederation;
