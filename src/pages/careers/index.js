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
            Thank you for considering a career with BoxyHQ! We're excited about
            your interest in joining our dynamic team. Below, you'll find a list
            of all the current open positions within our company. At BoxyHQ,
            we're dedicated to fostering an inclusive, innovative, and
            supportive work environment that encourages growth and development.
            Whether you're passionate about software development, marketing,
            sales, or customer support, we believe there's a place for you here.
          </p>

          <ul className="reset-list open-roles">
            <li className="role">
              <h3>
                Senior Software Engineer - Open Source, Security, Dev Tools
              </h3>
              <p>
                Join BoxyHQ as a Senior Software Engineer and lead the charge in
                building developer-first security tools to streamline compliance
                and enhance data security. With a focus on innovation and
                collaboration, you'll play a pivotal role in shaping our
                products and driving our mission forward. If you're passionate
                about open-source projects, security, and developer tools, we
                want to hear from you!
              </p>
              <a href="/careers/senior-software-engineer">Apply Today</a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Careers;
