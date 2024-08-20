import { useState } from 'react';

import { hubspotFormIds } from '../../../components/Pricing/pricingPlans';

import { HubSpotPricingContactForm } from '../../../components/HubSpotForm';
import { Modal } from '../../../components/Modal';

import BaseHero from '../BaseHero';

import './hero-contact.css';

const HeroContact = () => {
  const [opened, setOpened] = useState(false);
  const [formId, setFormId] = useState('');

  function showHubSpotForm(show, formId) {
    setOpened(show);
    setFormId(formId);
  }

  return (
    <BaseHero
      pictureSrc="/images/heroes/contact-us-hero"
      sectionId="contact-boxyhq"
      title="Get in touch!"
    >
      <p className="lead">
        At BoxyHQ, we're dedicated to providing exceptional customer service and
        support. Whether you have questions, feedback, or just want to say
        hello, we'd love to hear from you!
      </p>
      <p className="contact-us-copy">
        Please do not hesitate to{' '}
        <button
          type="button"
          className="ghost contact-us-inline"
          onClick={() => showHubSpotForm(true, hubspotFormIds.contactUs)}
        >
          get in touch with us today
        </button>
        .
      </p>
      {opened && (
        <Modal title="Contact Us" opened={opened} setOpened={setOpened}>
          <HubSpotPricingContactForm formId={formId} />
        </Modal>
      )}
    </BaseHero>
  );
};

export default HeroContact;
