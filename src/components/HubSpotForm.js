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

export const HubSpotPricingContactForm = ({ formId }) => {
  if (!formId) return null;

  return <HubSpotForm region="na1" portalId="19966347" formId={formId} />;
};
