import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import Head from '@docusaurus/Head';
import HeroSection from '../components/HeroSection';

const heroSection = {
  Svg: require('../../static/img/home-hero.svg').default,
  title: 'Enterprise readiness for your product, straight out the box',
  tagline:
    'At BoxyHQ we enable you to add enterprise compliant security via simple and efficient integrations. SAML Single Sign-on just got easy.',
  ctaTitle: 'Book a demo',
  ctaLink: 'https://meetings.hubspot.com/deepakprab/demo',
};

export default function Home() {
  return (
    <Layout
      title="BoxyHQ"
      description="BoxyHQ helps startups enable enterprise features in any SaaS aplication with just a few lines of code. Implement SAML Single Sign-On in record time today."
    >
      <Head>
        <script src="https://cmp.osano.com/169lWRSfch3C32VM2/2cd324ff-6a09-4e61-94fa-6af31f004e67/osano.js"></script>
      </Head>

      <HeroSection {...heroSection} />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
