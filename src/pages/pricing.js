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
        <PricingSectionDesktop setOpened={setOpened} />
        <PricingSectionMobile setOpened={setOpened} />
      </div>
      <Modal title="Contact Us" opened={opened} setOpened={setOpened}>
        <HubSpotPricingContactForm />
      </Modal>
    </Layout>
  );
};

export default Pricing;
