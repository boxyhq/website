module.exports = {
  GuidesSidebar: [
    'index',
    {
      type: 'category',
      label: 'SAML Jackson',
      collapsible: true,
      collapsed: false,
      items: [
        'jackson/overview',
        {
          type: 'category',
          label: 'Deployment Guides',
          collapsed: false,
          items: ['jackson/heroku', 'jackson/vercel'],
        },
        {
          type: 'category',
          label: 'Framework Guides',
          collapsed: false,
          items: ['jackson/express', 'jackson/nextjs', 'jackson/remix'],
        },
        {
          type: 'category',
          label: 'Integrations Guides',
          collapsed: false,
          items: ['jackson/nextauth', 'jackson/supertokens'],
        },
      ],
    },
  ],
};
