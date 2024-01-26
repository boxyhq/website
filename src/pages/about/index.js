import Layout from '@theme/Layout';

import BoxyHQFounders from '../../components/BoxyHQFounders';
import CustomersAndPartners from '../../components/CustomersAndPartners';
import HeroAbout from '../../components/heroes/HeroAbout';
import OurInvestors from '../../components/OurInvestors';

const About = () => {
  const metaDescription =
    'Effortlessly integrate Enterprise SSO into your SaaS app with BoxyHQ. Our open-source solution supports SAML & OIDC, enhancing security and user experience while reducing development time and cost.';
  const metaPageTitle = 'About BoxyHQ - A Universal SSO Translator';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroAbout />
      <main>
        <BoxyHQFounders />
        <OurInvestors />
        <CustomersAndPartners />
      </main>
    </Layout>
  );
};

export default About;
