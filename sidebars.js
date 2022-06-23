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
    {
      type: 'category',
      label: 'Directory Sync (Beta)',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'jackson/directory-sync/index' },
      items: [
        'jackson/directory-sync/providers',
        'jackson/directory-sync/webhook',
        'jackson/directory-sync/apis',
        'jackson/directory-sync/admin-ui',
      ]
    },
  ],
};
