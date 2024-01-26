import Layout from '@theme/Layout';

import HeroDeveloperFirstSecurityWeek from '../../components/heroes/HeroDeveloperFirstSecurityWeek';
import PanelDiscussions from '../../components/PanelDiscussions';
import GuestSpeakers from '../../components/GuestSpeakers';

const DeveloperFirstSecurityWeek = () => {
  const metaDescription =
    'BoxyHQ for Startups: Transform your SaaS with enterprise-grade features like SAML SSO, Directory Sync, Audit Logs, and Data Privacy Vault. Quick integration, open-source, secure by design - elevate your startup to enterprise readiness effortlessly.';
  const metaPageTitle = 'B2B SaaS Enterprise Readiness For Startups';

  return (
    <Layout title={metaPageTitle} description={metaDescription}>
      <HeroDeveloperFirstSecurityWeek />
      <main>
        <PanelDiscussions />
        <GuestSpeakers />
      </main>
    </Layout>
  );
};

export default DeveloperFirstSecurityWeek;
