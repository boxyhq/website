module.exports = {
  DocsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'SAML Jackson',
      collapsible: true,
      collapsed: false,
      items: [
        'jackson/introduction',
        {
          type: 'category',
          label: 'Deploy',
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
  ],

  GuidesSidebar: [
    'guides/index',
    {
      type: 'category',
      label: 'SAML Jackson',
      collapsible: true,
      collapsed: false,
      items: [
        'guides/jackson/overview',
        {
          type: 'category',
          label: 'Deployment Guides',
          collapsed: false,
          items: ['guides/jackson/heroku', 'guides/jackson/vercel'],
        },
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: false,
          items: [
            'guides/jackson/express',
            'guides/jackson/nextjs',
            'guides/jackson/remix',
          ],
        },
        {
          type: 'category',
          label: 'Integrations Guides',
          collapsed: false,
          items: ['guides/jackson/nextauth', 'guides/jackson/supertokens'],
        },
      ],
    },
  ],
};
