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
          label: 'Integrations Guides',
          collapsed: false,
          items: [
            'guides/jackson/with-nextauth',
            'guides/jackson/with-supertokens',
          ],
        },
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: false,
          items: [
            'guides/jackson/with-express',
            'guides/jackson/with-nextjs',
            'guides/jackson/with-remix',
            'guides/jackson/with-redwood',
          ],
        },
        {
          type: 'category',
          label: 'Deployment Guides',
          collapsed: false,
          items: ['guides/jackson/with-heroku', 'guides/jackson/with-vercel'],
        },
      ],
    },
  ],
};
