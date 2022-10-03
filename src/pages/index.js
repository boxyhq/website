import React from 'react';
import Layout from '@theme/Layout';

import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import InvestorsSection from '../components/InvestorsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import FeatureSection from '../components/FeatureSection';

const Icon3 =
  require('../../static/img/products/saml-jackson/undraw_building_re_xfcm.svg').default;

const title = 'SAML Jackson';
const description =
  'Deploy SAML SSO straight out of the box in as little as 8 days and become enterprise ready';

const SAMLSSO = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="Enterprise readiness for your product, straight out the box"
        description="At BoxyHQ we enable you to add enterprise-ready features to your SaaS product in as little as 8 days!"
        image="/img/home-hero.svg"
        buttons={[
          {
            title: 'Get Started',
            href: '/',
            className: 'button--primary',
          },
          {
            title: 'Learn More',
            href: '/',
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
                        {`Spend more time building your core product, \n not standard features`}
                      </h3>
                    </div>
                    <div class="card__body">
                      <p className="text--center">
                        We save you the hassle of building out lengthy standard
                        features that enterprises require by creating simple
                        API’s that do all the work for you.
                      </p>
                      <p className="text--center">
                        Simply integrate with BoxyHQ and be ready to offer
                        enterprise features in a matter of days not months!
                      </p>
                    </div>
                    <div class="card__footer">
                      <button class="button button--primary button--block button--outline">
                        Try it
                      </button>
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
                        {`Build or buy? Neither! \n Use BoxyHQ’s free open-source solution`}
                      </h3>
                    </div>
                    <div class="card__body">
                      <p className="text--center">
                        By using our rapid deployment products you can save your
                        team months of custom building or a hefty bill by simply
                        using our free open-source products.
                      </p>
                      <p className="text--center">
                        Our solutions run in your environment so you control
                        everything, we just provide the building blocks.
                      </p>
                    </div>
                    <div class="card__footer">
                      <button class="button button--primary button--block button--outline">
                        Book an exploration call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="DevSec Tools"
        btnLink="https://awesome-oss-devsec.boxyhq.com/"
        btnText="Read More"
        image={Icon3}
        direction="right"
      >
        <p>
          List of awesome open-source developer security tools. Maintained by{' '}
          <strong>BoxyHQ</strong>, and heavily inspired by <strong>MVSP</strong>
          .
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
