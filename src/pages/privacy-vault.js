import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';

const title = 'Data Privacy Vault';
const description =
  "Protect your customer's data and your customer's trust with an open-source solution that keeps your data safe.";

const ProductIcon =
  require('../../static/img/products/privacy-vault/logo.svg').default;

const Icon1 =
  require('../../static/img/products/privacy-vault/hacker_mind.svg').default;

const Icon2 =
  require('../../static/img/products/privacy-vault/security.svg').default;

const PrivacyVault = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title={title}
        description={description}
        image="/img/products/privacy-vault/vault.svg"
        icon={ProductIcon}
        buttons={[
          {
            title: 'Book an exploration call',
            href: 'https://cal.com/deepak-boxyhq/demo',
            className: 'button--primary',
          },
          {
            title: 'Early SaaS access',
            href: 'https://boxyhq.com/saas-registration',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <FeatureSection
        title="The Problem"
        btnLink="mailto:hello@boxyhq.com?subject=Privacy Vault Beta"
        btnText="Contact us"
        image={Icon1}
        direction="right"
      >
        <p>
          Companies like yours are collecting more and more sensitive data these
          days and with cybercrime at an all-time high, customers are more
          worried than ever about how their data is secured. GDPR was a big step
          in how customers' data is collected and used, but safeguarding this
          data is ultimately what your customers are most worried about.
        </p>
      </FeatureSection>

      <SectionLayout title="The Solution" description="">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="col-demo center">
              <div>
                <p>
                  Taking the best practices from companies like Google, Apple
                  and Facebook who have internally built privacy data vaults,
                  BoxyHQ offers an open-source solution to centralize, isolate
                  and govern all the sensitive data you collect.
                </p>
                <p> With our Privacy Vault you can:</p>
                <ul>
                  <li>
                    Identify and store all sensitive data from their application
                    database and move it to the vault
                  </li>
                  <li>
                    Replace the sensitive data in their application database
                    with opaque tokens that can then be exchanged with the
                    actual data from the vault at the point it's really needed
                  </li>
                  <li>
                    Gain control over where the sensitive data goes and who has
                    access to it and for how long
                  </li>
                  <li>
                    Create access policies that adhere to data regulations and
                    geographic regulations
                  </li>
                  <li>
                    Be equipped with the ability to respond to DSRs (Data
                    Subject Requests) from customers
                  </li>
                  <li>Create Healthcare, Fintech or generic PII vaults</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      <FeatureSection
        title="Benefits"
        btnLink="https://cal.com/deepak-boxyhq/demo"
        btnText="Speak to an expert"
        image={Icon2}
        direction="left"
      >
        <p>
          By using a privacy vault even if you were attacked the hacker would
          only gain access to opaque identifiers. The hacker would have then to
          attach both your vault and your key store to successfully decrypt the
          opaque tokens they possess.
        </p>
        <p>
          Apart from this, you get full governance over who has access to the
          sensitive data and for how long, this simplifies all sorts of
          compliance certifications and regulations like GDPR, PCI, HIPAA, ISO
          27001, SOC2, etc.
        </p>
      </FeatureSection>

      <CustomersSection />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default PrivacyVault;
