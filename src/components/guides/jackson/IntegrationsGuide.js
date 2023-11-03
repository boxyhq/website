import React from 'react';
import GuideSection from '../../GuideSection.js';

const integrations = [
  {
    name: 'Auth0',
    href: '/guides/jackson/integrations/auth0',
  },
  {
    name: 'Firebase',
    href: '/guides/jackson/integrations/firebase',
  },
  {
    name: 'NextAuth',
    href: '/guides/jackson/integrations/nextauth',
  },
  {
    name: 'SuperTokens',
    href: '/guides/jackson/integrations/supertokens',
  },
  {
    name: 'Bubble.io',
    href: '/guides/jackson/integrations/bubble',
  },
];

export default function IntegrationsGuide() {
  return <GuideSection items={integrations} />;
}
