import { useState } from 'react';
import Layout from '@theme/Layout';

import CTAIdentityFederation from '../../../components/CTAIdentityFederation';
import HeroIdentityFederation from '../../../components/heroes/HeroIdentityFederation';

import { HubSpotPricingContactForm } from '../../../components/HubSpotForm';
import { Modal } from '../../../components/Modal';
import CustomersAndPartners from '../../../components/CustomersAndPartners';

const IdentityFederation = () => {
  const metaDescription =
    'Streamline identity management across all customer-facing applications with BoxyHQ Identity Federation Proxy irrespective of diverse configurations or protocols.';
  const metaPageTitle = "Identity Management with BoxyHQ's Identity Federation";

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
      copy: 'Implement SSO, both identity provider (IdP) and service provider (SP) initiated, for simplified authentication.',
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
