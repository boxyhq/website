import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Modal } from '../components/Modal';
import { HubSpotSaasContactForm } from '../components/HubSpotFormSaaS';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';
import InvestorsSection from '../components/InvestorsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';

const title = 'BoxyHQ for Startups';
const description = 'SaaS Signup';

const SaasRegistration = () => {
  const [opened, setOpened] = useState(false);
  const [formId, setFormId] = useState('05572d01-d7b6-4a83-b654-2e6135b95bd');

  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="BoxyHQ's New SaaS Platform: Security Building Blocks for Developers"
        description="BoxyHQ, the leading provider of security building blocks for developers
        is giving 50% off for the first year's subscription to its SaaS
        offering! Build and ship secure applications implementing features such
        as Enterprise SSO, Directory Sync, Audit Logs, and Data Privacy Vault
        with just a few lines of code."
        image="/img/feat-saas.svg"
        buttons={[
          {
            title: 'Sign up',
            onClick: () => {
              setFormId(formId);
              setOpened(true);
            },
            className: 'button--primary',
          },
        ]}
      />

      <SectionLayout title="Key Features and Benefits" description="">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="col-demo center">
              <div>
                <ul>
                  <li>
                    <b>Reduce time to market:</b> Build and ship
                    enterprise-grade products
                  </li>
                  <li>
                    <b>Cost Savings:</b> Save money optimizing development costs
                  </li>
                  <li>
                    <b>Develop secure applications:</b> Our APIs integrate
                    security best practices into your development process
                  </li>
                  <li>
                    <b>Enhanced Efficiency:</b> With an intuitive interface and
                    powerful features, businesses can automate tasks, optimize
                    workflows, and maximize efficiency
                  </li>
                  <li>
                    <b>Full Support:</b> BoxyHQ is committed to providing
                    exceptional support to its customers, ensuring a smooth
                    onboarding process and continued assistance throughout their
                    journey
                  </li>
                  <li>
                    <b>Advanced Security:</b> BoxyHQ prioritizes data security,
                    employing robust measures to safeguard sensitive information
                    and ensure peace of mind
                  </li>
                  <li>
                    <b>Seamless Integrations:</b> Integrate with the most
                    popular SSO providers such as Okta, Azure AD, Auth0, Google
                    and more
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

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
                        Special Offer
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        To celebrate the launch, we are offering an exclusive
                        opportunity to join the waitlist for the SaaS platform
                        and enjoy a remarkable 50% off the first year's
                        subscription. By signing up before August 1, businesses
                        can take advantage of this limited-time offer and unlock
                        the full potential of our solution.
                      </p>
                    </div>
                    <div className="card__footer">
                      <a
                        onClick={() => {
                          setFormId(formId);
                          setOpened(true);
                        }}
                        className="button button--primary button--block"
                      >
                        Sign up
                      </a>
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
                        Join the Pre-Launch Waitlist
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        To secure your spot and claim this irresistible offer,
                        interested businesses are encouraged to fill out the
                        form. Simply provide your Name, Email, Product of
                        interest, and potential date of implementation. Don't
                        miss out on this opportunity to transform your business!
                      </p>
                    </div>
                    <div className="card__footer">
                      <a
                        onClick={() => {
                          setFormId(formId);
                          setOpened(true);
                        }}
                        className="button button--primary button--block"
                      >
                        Register interest
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal title="" opened={opened} setOpened={setOpened}>
        <HubSpotSaasContactForm formId={formId} />
      </Modal>
      <CustomersSection />

      <NewsSection />
      <InvestorsSection />
      <DeveloperCommunitySection />
    </Layout>
  );
};

export default SaasRegistration;
