import React, { useState } from 'react';
import Layout from '@theme/Layout';

import { Modal } from '../components/Modal';
import { HubSpotPricingContactForm } from '../components/HubSpotForm';
import { PricingSectionDesktop } from '../components/Pricing/PricingSectionDesktop';
import { PricingSectionMobile } from '../components/Pricing/PricingSectionMobile';

const title = 'Pricing for teams and companies of all sizes';
const description =
  'BoxyHQ is proudly open-source and all of our solutions are available to self-host for free.';

const Pricing = () => {
  const [opened, setOpened] = useState(false);
  const [formId, setFormId] = useState('');

  return (
    <Layout title={title} description={description}>
      <div
        className="container"
        style={{ padding: '50px 20px 50px 20px' }}
        id="page-pricing"
      >
        <h1 className="text--center">{title}</h1>
        <h2 className="text--center" style={{ fontWeight: 'normal' }}>
          {description}
        </h2>
        <PricingSectionDesktop setOpened={setOpened} setFormId={setFormId} />
        <PricingSectionMobile setOpened={setOpened} setFormId={setFormId} />
      </div>
      <Modal title="Contact Us" opened={opened} setOpened={setOpened}>
        <HubSpotPricingContactForm formId={formId} />
      </Modal>
    </Layout>
  );
};

export default Pricing;
