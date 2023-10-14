import React, { useEffect } from 'react';

const HubSpotFormSaas = ({ region, portalId, formId }) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
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

export const HubSpotSaasContactForm = ({ formId }) => {
  if (!formId) return null;

  return <HubSpotFormSaas region="na1" portalId="19966347" formId='05572d01-d7b6-4a83-b654-2e6135b95bd0' />;
};

