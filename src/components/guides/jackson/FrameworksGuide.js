import React from 'react';
import GuideSection from '../../GuideSection.js';

const frameworks = [
  {
    name: 'AdonisJS',
    href: '/guides/jackson/frameworks/adonis',
  },
  {
    name: 'Express.js',
    href: '/guides/jackson/frameworks/express',
  },
  {
    name: 'Next.js',
    href: '/guides/jackson/frameworks/nextjs',
  },
  {
    name: 'React',
    href: '/guides/jackson/frameworks/react',
  },
  {
    name: 'Remix',
    href: '/guides/jackson/frameworks/remix',
  },
  {
    name: 'Laravel',
    href: '/guides/jackson/frameworks/laravel',
  },
  {
    name: 'Ruby on Rails',
    href: '/guides/jackson/frameworks/rails',
  },
];

export default function FrameworksGuide() {
  return <GuideSection items={frameworks} />;
}
