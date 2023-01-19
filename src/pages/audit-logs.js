import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';

const title = 'Audit Logs';
const description =
  'With BoxyHQ’s Audit Logs we have created the easiest way for you to integrate compliant audit logs into your application';
const ProductIcon =
  require('../../static/img/products/audit-logs/logo.svg').default;

const Icon1 =
  require('../../static/img/products/audit-logs/cloud_docs.svg').default;

const Icon2 =
  require('../../static/img/products/audit-logs/reviewed_docs.svg').default;

const Icon3 =
  require('../../static/img/products/audit-logs/export_files.svg').default;

const AuditLogs = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title={title}
        description={description}
        image="/img/feat-audit.svg"
        icon={ProductIcon}
        buttons={[
          {
            title: 'Get Started',
            href: 'https://github.com/retracedhq/retraced',
            className: 'button--primary',
          },
          {
            title: "Let's Chat",
            href: 'https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <FeatureSection
        title="One Simple API"
        btnLink="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
        btnText="Book demo"
        image={Icon1}
        direction="right"
      >
        <p>
          With Audit Logs by BoxyHQ, you provide enterprise customers with the
          ability to record and search events that happen on your application.
          With our simple integration, you can become compliant fast and save
          your team from building complex solutions from scratch.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Why are audit logs important?"
        btnLink="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
        btnText="Book demo"
        image={Icon2}
        direction="left"
      >
        <p>
          For all companies but in particular large companies, the ability to
          monitor the flow of data and be alerted to any breaches is essential.
          Audit logs help to pinpoint any misuse of information and ensure that
          data policies are followed. Many larger enterprise customers will
          demand this as a requirement if you plan to sell to them.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Feature rich"
        btnLink="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
        btnText="Book demo"
        image={Icon3}
        direction="right"
      >
        <p>
          Our out-the-box solution is designed not only to make you compliant
          but give your customers all the functionality and safety they need -
          exportable, immutable, time synced and searchable audit logs.
        </p>
      </FeatureSection>

      <CustomersSection />

      <DeveloperCommunitySection />
    </Layout>
  );
};

export default AuditLogs;
