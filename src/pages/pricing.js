import React from 'react';
import Layout from '@theme/Layout';
import SectionLayout from '../components/SectionLayout';

const title = 'Pricing';
const description =
  'BoxyHQ is proudly open-source and all of our solutions are available to self-host for free.';

const Pricing = () => {
  return (
    <Layout title={title} description={description}>
      <SectionLayout title={title} description={description}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th></th>
              <th>Self Hosted</th>
              <th>Self-hosted Premium</th>
              <th>SaaS</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((pricingPlan) => (
              <tr>
                <td>{pricingPlan.feature}</td>
                <td>{pricingPlan.plans['self-hosted']}</td>
                <td>{pricingPlan.plans['self-hosted-premium']}</td>
                <td>{pricingPlan.plans['saas']}</td>
                <td>{pricingPlan.plans['enterprise']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionLayout>
      {/* <div className="container">
        <div className="row">
          <div className="col col--12">
            
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Pricing;

const pricingPlans = [
  {
    feature: 'Premium features',
    plans: {
      'self-hosted': '✅',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '❌',
    },
  },
  {
    feature: 'Admin Portal',
    plans: {
      'self-hosted': '✅',
      'self-hosted-premium': '✅',
      saas: '❌',
      enterprise: '✅',
    },
  },
  {
    feature: 'Discord Support',
    plans: {
      'self-hosted': '✅',
      'self-hosted-premium': '✅',
      saas: '✅',
      enterprise: '❌',
    },
  },
  {
    feature: 'Enterprise SSO  Directory Sync',
    plans: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': '$49 per SSO or Directory Sync connection',
      saas: '$49 per SSO or Directory Sync connection',
      enterprise: 'Contact us',
    },
  },
  {
    feature: 'Audit logs',
    plans: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': 'Contact us',
      saas: 'Contact us',
      enterprise: 'Contact us',
    },
  },
  {
    feature: 'Privacy Vault',
    plans: {
      'self-hosted': 'Free forever',
      'self-hosted-premium': 'Contact us',
      saas: 'Contact us',
      enterprise: 'Contact us',
    },
  },
];

// 'self-hosted': '',
// 'self-hosted-premium': '',
// saas: '',
// enterprise: '',

// {
/* <div className="row">
<div class="col">
  <div class="col-demo">1</div>
</div>
<div class="col">
  <div class="col-demo red">
    <h3>Self Hosted</h3>
    <span className="pricing__feature">Free</span>
    <span className="pricing__feature">❌</span>
    <span className="pricing__feature">✅</span>
    {/* <ul>
      <li>❌</li>
      <li>✅</li>
    </ul> */
// }
//   </div>
// </div>
// <div class="col">
//   <div class="col-demo red">3</div>
// </div>
// <div class="col">
//   <div class="col-demo">4</div>
// </div>
// <div class="col">
//   <div class="col-demo">5</div>
// </div>
// </div> */}
