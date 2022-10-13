import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import InvestorsSection from '../components/InvestorsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import FeatureSection from '../components/FeatureSection';

const Icon3 = require('../../static/img/home-buildingblocks.svg').default;

const title = 'BoxyHQ';
const description =
  'Deploy enterprise readiness straight out of the box in minutes and become enterprise-ready';

const SAMLSSO = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="Enterprise readiness for B2B SaaS, straight out the box"
        description="At BoxyHQ we enable you to add plug-and-play enterprise-ready features to your SaaS product. Show enterprise customers and InfoSec teams you are ready to pass their processes with flying colors. We are open-source and free!"
        image="/img/home-hero.svg"
        buttons={[
          {
            title: 'Get Started',
            href: 'https://github.com/boxyhq',
            className: 'button--primary',
          },
          {
            title: 'Book a demo',
            href: 'https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <CustomersSection />
      <ProductsSection />

      <section className="page__section">
        <div className="container">
          <div className="row" style={{ gap: '10px', marginTop: '20px' }}>
            <div className="col col--5 col--offset-1">
              <div className="col-demo">
                <div class="card-demo" style={{}}>
                  <div class="card">
                    <div class="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        Why Developer Security?
                      </h3>
                    </div>
                    <div class="card__body">
                      <p className="text--center">
                        Cyber crimes will cost $10.5 trillion annually by 2025,
                        but 70% of development teams always or frequently skip
                        security steps due to time pressures.
                      </p>
                      <p>
                        The days of focusing only on productivity are over; the
                        faster a developer moves, the more security holes will
                        be left behind.
                      </p>
                    </div>
                    <div class="card__footer">
                      <Link
                        className={clsx('button button--primary button--block')}
                        href="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
                      >
                        Book a free developer-security session
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--5">
              <div className="col-demo">
                <div class="card-demo">
                  <div class="card">
                    <div class="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        Build or buy?
                      </h3>
                    </div>
                    <div class="card__body">
                      <p className="text--center">
                        Neither! Use BoxyHQ’s free open-source solution.
                        Available on an Apache 2.0 license, helping developers
                        collaborate and drive innovation by saving months of
                        custom building or hefty bills.
                      </p>
                      <p className="text--center">
                        Our solutions run in your environment so you control
                        everything, we just provide the building blocks.
                      </p>
                    </div>
                    <div class="card__footer">
                      <Link
                        className={clsx('button button--primary button--block')}
                        href="mailto:hello@boxyhq.com"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Developer Security Tools"
        btnLink="https://awesome-oss-devsec.boxyhq.com/"
        btnText="Read More"
        image={Icon3}
        direction="right"
      >
        <p>
          We have curated a list of awesome open-source developer security
          tools.
        </p>
        <p>
          It includes security principles and controls relevant to popular
          compliance certifications (like ISO27001, SOC2, MVSP, etc.)
        </p>
      </FeatureSection>

      <NewsSection />
      <InvestorsSection />
      <DeveloperCommunitySection />
    </Layout>
  );
};

export default SAMLSSO;
