import Layout from '@theme/Layout';
import HeroCareers from '../../components/heroes/HeroCareers';

import './careers.css';

const Careers = () => {
  const metaDescription =
    "Join BoxyHQ's team and shape the future of enterprise software security. Explore exciting career opportunities in a dynamic environment committed to innovation and impact in the open-source world.";
  const metaPageTitle = 'Career Opportunities at BoxyHQ';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroCareers />
      <main className="girdle careers-main">
        <div className="content-wrapper">
          <h2>Career Opportunities</h2>
          <p>
            Thank you for your interest in a career at BoxyHQ! While we
            currently don't have any open positions, we're always on the lookout
            for talented individuals to join our team. Our needs are constantly
            evolving, and new opportunities can arise at any time.
          </p>
          <p>
            We encourage you to check our careers page regularly for updates and
            new job postings. If you're passionate about shaping the future of
            enterprise software and thrive in innovative environments, we would
            love to hear from you in the future.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Careers;
