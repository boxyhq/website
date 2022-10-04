import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';

const title = 'Directory Sync';
const description =
  'One simple integration to automate user and group provisioning';

const ProductIcon =
  require('../../static/img/products/saml-jackson/logo.svg').default;

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
        image="/img/products/dsync/add_friends.svg"
        icon={ProductIcon}
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

      <FeatureSection
        title="Give enterprises the user lifecycle management they need "
        btnLink="/docs/jackson/overview"
        btnText="Learn More"
        image={Icon1}
        direction="right"
      >
        <p>
          Enterprise customers already use directories to manage user access. By
          allowing them to use their active directory in your product you enable
          them to have higher security standards and centrally manage their
          user's access lifecycle. With Directory Sync by BoxyHQ you can enable
          this with our simple API.{' '}
        </p>
      </FeatureSection>

      <FeatureSection
        title="Simple but powerful integration"
        btnLink="/docs/jackson/overview"
        btnText="Learn More"
        image={Icon2}
        direction="left"
      >
        <p>
          <p>
            With our simple integration you can enable directory sync in your
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
            Access data and integrate it in a seamless way so you can
            standardise it across the board
          </p>
        </p>
      </FeatureSection>

      <CustomersSection />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default DSync;
