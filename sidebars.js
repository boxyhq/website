module.exports = {
  DocsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Docs',
    },
    {
      type: 'category',
      label: 'SAML Jackson',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'jackson/overview' },
      items: [
        {
          type: 'category',
          label: 'Deploy',
          link: { type: 'doc', id: 'jackson/deploy/index' },
          items: [
            'jackson/deploy/service',
            'jackson/deploy/npm-library',
            'jackson/deploy/env-variables',
            'jackson/deploy/pre-loaded-configuration',
          ],
        },
        {
          type: 'category',
          label: 'SSO Providers',
          link: { type: 'doc', id: 'jackson/sso-providers/index' },
          items: [
            'jackson/sso-providers/auth0',
            'jackson/sso-providers/azure',
            'jackson/sso-providers/google',
            'jackson/sso-providers/jumpcloud',
            'jackson/sso-providers/okta',
            'jackson/sso-providers/onelogin',
            'jackson/sso-providers/pingone',
          ],
        },
        'jackson/configure-saml-idp',
        'jackson/saml-flow',
        'jackson/examples',
        'jackson/admin-ui',
        'jackson/observability',
        'jackson/sbom',
        'jackson/container-signing',
        'jackson/security',
        'jackson/upgrade',
        'jackson/local-development',
      ],
    },
  ],
};
