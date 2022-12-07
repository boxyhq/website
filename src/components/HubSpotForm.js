import React, { useEffect } from 'react';

const HubSpotForm = ({ region, portalId, formId }) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://js.hsforms.net/forms/shell.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <div>
      <div id="hubspotForm">Loading...</div>
    </div>
  );
};

export const HubSpotPricingContactForm = () => {
  return (
    <HubSpotForm
      region="na1"
      portalId="19966347"
      formId="3c3888d4-3f37-470a-8c7d-d7641f32fd4c"
    />
  );
};
