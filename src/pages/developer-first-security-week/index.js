import Layout from '@theme/Layout';

import HeroDeveloperFirstSecurityWeek from '../../components/heroes/HeroDeveloperFirstSecurityWeek';
import PanelDiscussions from '../../components/PanelDiscussions';
import GuestSpeakers from '../../components/GuestSpeakers';

const DeveloperFirstSecurityWeek = () => {
  const metaDescription =
    'Join BoxyHQ for the Developer-First Security Week, Aug 7-11. A week-long event featuring industry experts discussing the future of security in technology. Explore panels on authentication, authorization, and data privacy, and connect with leaders from Google, Microsoft, and more.';
  const metaPageTitle =
    'Developer-First Security Week - Empowering Developers in Cybersecurity';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroDeveloperFirstSecurityWeek />
      <main>
        <PanelDiscussions />
        <GuestSpeakers />
      </main>
    </Layout>
  );
};

export default DeveloperFirstSecurityWeek;
