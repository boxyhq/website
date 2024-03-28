module.exports = {
  GuidesSidebar: [
    'index',
    {
      type: 'category',
      label: 'Enterprise SSO',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'jackson/overview' },
      items: [
        'jackson/configuring-saml-sso',
        'jackson/login-with-saml-sso',
        {
          type: 'category',
          label: 'Deployment Guides',
          collapsed: false,
          items: ['jackson/deployments/heroku', 'jackson/deployments/vercel'],
        },
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: false,
          items: [
            'jackson/frameworks/adonis',
            'jackson/frameworks/express',
            'jackson/frameworks/nextjs',
            'jackson/frameworks/react',
            'jackson/frameworks/remix',
            'jackson/frameworks/laravel',
            'jackson/frameworks/rails',
          ],
        },
        {
          type: 'category',
          label: 'Integrations Guides',
          collapsed: false,
          items: [
            'jackson/integrations/ory',
            'jackson/integrations/auth0',
            'jackson/integrations/firebase',
            'jackson/integrations/nextauth',
            'jackson/integrations/supertokens',
            'jackson/integrations/bubble',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Directory Sync',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'directory-sync/overview' },
      items: [
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: true,
          items: [
            'directory-sync/frameworks/nextjs',
            'directory-sync/frameworks/express',
          ],
        },
      ],
    },
  ],
};
