import Layout from '@theme/Layout';

import CTAAISecurity from '../../components/CTAAISecurity';
import HeroAISecurity from '../../components/heroes/HeroAISecurity';

import CustomersAndPartners from '../../components/CustomersAndPartners';

const AISecurity = () => {
  const metaDescription =
    'LLM Vault: Unlock the power of ChatGPT safely. Your secrets layer for AI, ensuring maximum security and privacy.';
  const metaPageTitle = "AI Security with BoxyHQ's LLM Vault";

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroAISecurity />
      <main>
        <CTAAISecurity />
        <CustomersAndPartners />
      </main>
    </Layout>
  );
};

export default AISecurity;
