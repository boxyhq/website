export const hubspotFormIds = {
  addons: '21541a2b-e17d-452c-b945-4991291327d9',
  entrpriseSSODirectorySync: '435f5b51-f9ea-4f96-aac3-0c6e6d8a07b4',
  auditLogs: {
    premium: '3c3888d4-3f37-470a-8c7d-d7641f32fd4c',
    saas: '7852e20a-1f97-42fc-b7ee-a1d71b331811',
    enterprise: '57862df6-4456-4e0e-b9d0-aece2b23656f',
  },
  privacyVault: {
    premium: '577e36d6-a5d6-4326-a179-d69c9d9ad520',
    saas: '58302448-78e7-4250-8b12-8d84b4113c72',
    enterprise: '24968c9d-ba22-492a-9aab-6f4350174d27',
  },
};

export const pricingPlans = [
  {
    subfeature: `<p><i>* Custom Branding</i><br><i>* <a href="https://boxyhq.com/docs/jackson/saml-federation" target="_blank">SAML Federation</a></i></p>`,
    feature: 'Premium features',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Admin Portal',
    tiers: {
      'self-hosted': 'yes',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Discord Support',
    tiers: {
      'self-hosted': 'yes',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Email and chat Support',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Phone support',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'yes',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Custom deployment',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'yes',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Custom SLAs',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'no',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Dedicated infrastructure capacity',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'no',
      saas: 'no',
      enterprise: 'yes',
    },
  },
  {
    feature: 'Custom terms & contract',
    tiers: {
      'self-hosted': 'no',
      'self-hosted-premium': 'no',
      saas: 'no',
      enterprise: 'yes',
    },
    lineBreak: true,
  },
  {
    feature: 'Enterprise SSO & Directory Sync',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium':
        '$49 per SSO or Directory Sync connection (per month)',
      saas: '$49 per SSO or Directory Sync connection (per month)',
      enterprise: `contactUs:${hubspotFormIds.entrpriseSSODirectorySync}`,
    },
  },
  {
    feature: 'Audit logs',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': `contactUs:${hubspotFormIds.auditLogs.premium}`,
      saas: `contactUs:${hubspotFormIds.auditLogs.saas}`,
      enterprise: `contactUs:${hubspotFormIds.auditLogs.enterprise}`,
    },
  },
  {
    feature: 'Privacy Vault',
    tiers: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': `contactUs:${hubspotFormIds.privacyVault.premium}`,
      saas: `contactUs:${hubspotFormIds.privacyVault.saas}`,
      enterprise: `contactUs:${hubspotFormIds.privacyVault.enterprise}`,
    },
  },
];
