import React from 'react';
import GuideSection from '../../GuideSection.js';

const deployments = [
  {
    name: 'Heroku',
    href: '/guides/jackson/deployments/heroku',
  },
  {
    name: 'Vercel',
    href: '/guides/jackson/deployments/vercel',
  },
];

export default function DeploymentsGuide() {
  return <GuideSection items={deployments} />;
}
