import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import HeroSection from '../components/HeroSection';
import TrustedBySection from '../components/TrustedBySection';
import NewsSection from '../components/NewsSection';
import InvestorsSection from '../components/InvestorsSection';

const mainHeroSection = {
  main: true,
  Svg: require('../../static/img/home-hero.svg').default,
  title: 'Enterprise readiness for your product, straight out the box',
  tagline:
    'At BoxyHQ we enable you to add enterprise compliant security via simple and efficient integrations. SAML Single Sign-on just got easy. Open-source and free.',
  ctas: [
    {
      title: 'Get started',
      link: 'https://github.com/boxyhq',
    },
    {
      title: 'Book a demo',
      link: 'https://meetings.hubspot.com/deepakprab/demo',
    },
  ],
};

const demoHeroSection = {
  Svg: require('../../static/img/home-section1.svg').default,
  svgRight: false,
  title:
    'Spend more time building your product, not your standard enterprise authentication',
  tagline:
    'At BoxyHQ we enable you to add enterprise compliant security via simple and efficient integrations. SAML Single Sign-on just got easy.',
  ctas: [{ title: 'Interactive demo', link: 'https://saml-demo.boxyhq.com' }],
};

const contactHeroSection = {
  Svg: require('../../static/img/home-section2.svg').default,
  title: 'Simple integration for big results',
  tagline:
    'By using our rapid deployment of SAML SSO you can quickly become an enterprise compliant vendor and start making bigger deals in no time. With security at the forefront of most businesses these days, it can take tech teams months on end to be compliant, but we want to change this by using the power of open source to make this as simple and efficient as possible.',
  ctas: [{ title: 'Contact us', link: 'mailto:hello@boxyhq.com' }],
};

export default function Home() {
  return (
    <Layout
      title="BoxyHQ"
      description="BoxyHQ helps startups enable enterprise features in any SaaS application with just a few lines of code. Implement SAML Single Sign-On in record time today."
    >
      <HeroSection {...mainHeroSection} />
      <TrustedBySection />
      <HeroSection {...demoHeroSection} />
      <HeroSection {...contactHeroSection} />

      <HomepageFeatures />

      <NewsSection />
      <InvestorsSection />
    </Layout>
  );
}
