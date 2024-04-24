import Layout from '@theme/Layout';

import HeroEnterpriseReadiness from '../../../components/heroes/HeroEnterpriseReadiness';
import Testimonials from '../../../components/Testimonials';
import OurProducts from '../../../components/OurProducts';

const EnterpriseReadiness = () => {
  const metaDescription =
    'BoxyHQ for Startups: Transform your SaaS with enterprise-grade features like SAML SSO, Directory Sync, Audit Logs, and Data Privacy Vault. Quick integration, open-source, secure by design - elevate your startup to enterprise readiness effortlessly.';
  const metaPageTitle = 'B2B SaaS Enterprise Readiness For Startups';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroEnterpriseReadiness />
      <main>
        <Testimonials light={true} />
        <OurProducts centerHeader={true}>
          <h2 className="linear-gradient-text">Our Products</h2>
        </OurProducts>
      </main>
    </Layout>
  );
};

export default EnterpriseReadiness;
