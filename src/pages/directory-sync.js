import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';

const title = 'Directory Sync';
const description =
  'One simple integration to automate user and group provisioning. Supports SCIM 2.0 protocol for most major providers';

const ProductIcon = require('../../static/img/products/dsync/logo.svg').default;

const Icon1 =
  require('../../static/img/products/dsync/meet_the_team.svg').default;

const Icon2 =
  require('../../static/img/products/dsync/data_points.svg').default;

const DSync = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title={title}
        description={description}
        image="/img/feat-dsync.svg"
        icon={ProductIcon}
        buttons={[
          {
            title: 'Sign up',
            href: 'https://app.eu.boxyhq.com/auth/join',
            className: 'button--primary',
          },
          {
            title: 'Open Source',
            href: 'https://github.com/boxyhq/jackson#directory-sync',
            className: 'button--primary',
          },
          {
            title: 'View docs',
            href: '/docs/directory-sync/overview',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <FeatureSection
        title="Give enterprises the user lifecycle management they need"
        btnLink="https://cal.com/deepak-boxyhq/demo"
        btnText="Book an exploratory call"
        image={Icon1}
        direction="right"
      >
        <p>
          Enterprise customers already use directories to manage user access. By
          allowing them to use their active directory in your product you enable
          them to have higher security standards and centrally manage their
          user's access lifecycle. With Directory Sync by BoxyHQ, you can enable
          this with our simple API.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Simple but powerful integration"
        btnLink="/blog/understanding-scim-and-directory-sync"
        btnText="Read more"
        image={Icon2}
        direction="left"
      >
        <p>
          <p>
            With our simple integration, you can enable directory sync in your
            application in days instead of months and seamlessly connect to
            almost any directory service. With our API you can:
          </p>
          <p>
            <b>Custom Mapping</b>
            <br></br>
            Easily fetch in the attributes that you need to use and map them
            against the data you need.
            <br></br>
            <b>Bespoke requests</b>
            <br></br>
            Fetch and manipulate data from different entities as you need.
            <br></br>
            <b>Streamline Data</b>
            <br></br>
            Access data and integrate it seamlessly so you can standardize it
            across the board
          </p>
        </p>
      </FeatureSection>

      <CustomersSection />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default DSync;
