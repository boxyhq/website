import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Head from '@docusaurus/Head';

const heroSection = {
  Svg: require('../../static/img/home-hero.svg').default,
  title: 'Enterprise readiness for your product, straight out the box',
  tagline:
    'At BoxyHQ we enable you to add enterprise compliant security via simple and efficient integrations. SAML Single Sign-on just got easy.',
  ctaTitle: 'Book a demo',
  ctaLink: 'https://meetings.hubspot.com/deepakprab/demo',
};

function HomepageHeader({ title, tagline, Svg, ctaTitle, ctaLink }) {
  return (
    <div className={clsx('hero', styles.heroBanner)}>
      <div className="row">
        <div className="col">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to={ctaLink}>
              {ctaTitle}
            </Link>
          </div>
        </div>
        <div className="col">
          <div className={clsx('text--center', styles.svgContainer)}>
            <Svg className={clsx(styles.heroSvg)} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="BoxyHQ"
      description="BoxyHQ helps startups enable enterprise features in any SaaS aplication with just a few lines of code. Implement SAML Single Sign-On in record time today."
    >
      <Head>
        <script src="https://cmp.osano.com/169lWRSfch3C32VM2/2cd324ff-6a09-4e61-94fa-6af31f004e67/osano.js"></script>
      </Head>

      <HomepageHeader {...heroSection} />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
