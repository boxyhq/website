import Layout from '@theme/Layout';

import CTAIdentityFederation from '../../../components/CTAIdentityFederation';
import HeroIdentityFederation from '../../../components/heroes/HeroIdentityFederation';

import CustomersAndPartners from '../../../components/CustomersAndPartners';

const IdentityFederation = () => {
  const metaDescription =
    'Streamline identity management across all customer-facing applications with BoxyHQ Identity Federation Proxy irrespective of diverse configurations or protocols.';
  const metaPageTitle = "Identity Management with BoxyHQ's Identity Federation";

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroIdentityFederation />
      <main>
        <CTAIdentityFederation />
        <CustomersAndPartners />
      </main>
    </Layout>
  );
};

export default IdentityFederation;
