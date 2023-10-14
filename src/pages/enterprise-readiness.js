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

const title = 'BoxyHQ for Startups';
const description =
  'Enterprise readiness for B2B SaaS startups, straight out of the box';

const EnterpriseReadiness = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="Enterprise readiness for B2B SaaS, straight out of the box"
        description="BoxyHQ for Startups makes it easy to add enterprise-ready features to your SaaS product. with just a few lines of code. Impress enterprise customers and InfoSec teams with your ability to pass their processes with ease. Implement SAML SSO, Directory Sync, Audit Logs, and Privacy Vault in minutes and become enterprise-ready! Our solutions are open-source and free to use!"
        image="/img/home-hero.svg"
        buttons={[
          {
            title: 'Get Started',
            href: 'https://boxyhq.com/docs',
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
                <div className="card-demo" style={{}}>
                  <div className="card">
                    <div className="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        Become Enterprise Ready
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        As a startup you need to build fast, test and make sure
                        your solution achieves product-market fit. But if you
                        are planning to sell to enterprises you will need to
                        implement security and compliance features that could be
                        expensive and time consuming.
                      </p>
                      <p>
                        Here is a good guide on what becoming enterprise ready
                        means:{' '}
                        <a
                          href="https://www.enterpriseready.io"
                          target="_blank"
                        >
                          EnterpriseReady - Build SaaS features enterprises love
                        </a>
                      </p>
                    </div>
                    <div className="card__footer">
                      <Link
                        className={clsx('button button--primary button--block')}
                        href="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
                      >
                        Book a free enterprise-readiness session
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

      <NewsSection />
      <InvestorsSection />
      <DeveloperCommunitySection />
    </Layout>
  );
};

export default EnterpriseReadiness;
