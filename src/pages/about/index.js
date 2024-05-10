import Layout from '@theme/Layout';

import BoxyHQFounders from '../../components/BoxyHQFounders';
import CustomersAndPartners from '../../components/CustomersAndPartners';
import HeroAbout from '../../components/heroes/HeroAbout';
import OurInvestors from '../../components/OurInvestors';

const About = () => {
  const metaDescription =
    "Automate your SaaS app's security with BoxyHQ. Get enterprise-compliant security through low-code APIs, streamlining integration and cutting costs.";
  const metaPageTitle = 'About BoxyHQ - Security Building Blocks';

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
