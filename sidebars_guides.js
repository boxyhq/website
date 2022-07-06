module.exports = {
  GuidesSidebar: [
    'index',
    {
      type: 'category',
      label: 'SAML Jackson',
      collapsible: true,
      collapsed: false,
      link: { type: 'doc', id: 'jackson/overview' },
      items: [
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
            'jackson/frameworks/express',
            'jackson/frameworks/nextjs',
            'jackson/frameworks/remix',
          ],
        },
        {
          type: 'category',
          label: 'Integrations Guides',
          collapsed: false,
          items: [
            'jackson/integrations/nextauth',
            'jackson/integrations/supertokens',
          ],
        },
        {
          type: 'category',
          label: 'SSO Providers',
          collapsed: false,
          items: ['jackson/providers/okta', 'jackson/providers/onelogin'],
        },
      ],
    },
  ],
};
