import Layout from '@theme/Layout';

import CustomersAndPartners from '../../components/CustomersAndPartners';
import HeroContact from '../../components/heroes/HeroContact';

const Contact = () => {
  const metaDescription =
    'If you have any questions, please do not hesitate to contact us our join our community on Discord.';
  const metaPageTitle = 'Get in touch';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroContact />
      <CustomersAndPartners />
    </Layout>
  );
};

export default Contact;
