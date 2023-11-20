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
import SectionLayout from '../components/Card';
import Card from '../components/Card';

const Icon3 = require('../../static/img/home-buildingblocks.svg').default;

const title = 'BoxyHQ';
const description = 'Security Building Blocks for Developers';

const IndexPage = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="Security Building Blocks for Developers"
        description="Reduce Time to Market without sacrificing your security posture! BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster."
        image="/img/home-hero.svg"
        buttons={[
          {
            title: 'Get Started',
            href: 'https://boxyhq.com/docs',
            className: 'button--primary',
          },
          {
            title: 'Book a demo',
            href: 'https://cal.com/deepak-boxyhq/demo',
            className: 'button--primary button--outline',
          },
          {
            title: 'Early SaaS access',
            href: 'https://boxyhq.com/saas-registration',
            className: 'button--primary',
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
                <div className="card-demo" style={{}}>
                  <div className="card">
                    <div className="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        The Importance of Developer Security
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        Cyber crimes are predicted to cost $10.5 trillion
                        annually by 2025, but time pressures often cause 70% of
                        development teams to skip crucial security steps.
                      </p>
                      <p>
                        In today's world, it is no longer sufficient to
                        prioritize productivity alone. The faster a developer
                        moves, the more potential security holes will be left
                        unaddressed.{' '}
                      </p>
                    </div>
                    <div className="card__footer">
                      <Link
                        className={clsx(
                          'button button--primary button--block '
                        )}
                        style={{
                          whiteSpace: 'normal',
                          overflow: 'hidden',
                          width: '100%',
                        }}
                        href="https://cal.com/deepak-boxyhq/demo"
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
                <div className="card-demo">
                  <div className="card">
                    <div className="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        Build or buy?
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        Save time and money with BoxyHQ's free open-source
                        solution. Available under an Apache 2.0 license, our
                        solutions make it easy for developers to collaborate and
                        innovate, without the need for custom building or
                        expensive fees.
                      </p>
                      <p className="text--center">
                        Our solutions run in your environment, giving you full
                        control. We simply provide the building blocks to help
                        you succeed.
                      </p>
                    </div>
                    <div className="card__footer">
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

export default IndexPage;
