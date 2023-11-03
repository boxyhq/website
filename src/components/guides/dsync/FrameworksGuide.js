import React from 'react';
import GuideSection from '../../GuideSection.js';

const frameworks = [
  {
    name: 'Next.js',
    href: '/guides/directory-sync/frameworks/nextjs',
  },
  {
    name: 'Express.js',
    href: '/guides/directory-sync/frameworks/express',
  },
];

export default function FrameworksGuide() {
  return <GuideSection items={frameworks} />;
}
