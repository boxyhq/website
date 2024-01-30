import Layout from '@theme/Layout';
import HeroPledge from '../../components/heroes/HeroPledge';

import './pledge.css';

const Pledge = () => {
  const metaDescription =
    "Inspired by Fermyon's Open Source promise, what follows is our promise to the community and the wider open-source ecosystem.";
  const metaPageTitle = 'BoxyHQ, Committed to Open Source';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroPledge />
      <main className="girdle primary-content-wrapper pledge">
        <div className="primary-content">
          <h2 className="primary-content-secondary-heading">
            Fostering a Culture of Transparency and Collaboration
          </h2>
          <p>
            We recognize that the strength of open-source lies in its
            transparency and the collaborative spirit it nurtures. Our promise
            extends beyond simply providing code; we are dedicated to actively
            engaging with and supporting the community. This involves not just
            sharing our developments but also listening to feedback,
            participating in discussions, and continuously learning from the
            diverse experiences of open-source contributors.
          </p>

          <h2 className="primary-content-secondary-heading">
            Empowering Developers with Reliable, Open-Source Solutions
          </h2>
          <p>
            As developers ourselves, we understand the challenges and needs of
            the developer community. By ensuring that our core security,
            compliance, and privacy tools remain open-source, we provide
            developers with reliable, cutting-edge solutions. These tools are
            designed to seamlessly integrate with your projects, enabling you to
            build with confidence and focus on what you do best &mdash; creating
            innovative products.
          </p>

          <h2 className="primary-content-secondary-heading">
            A Promise of Openness and Quality for the Future
          </h2>
          <p>
            Our pledge to keep our core code open is not just about the present;
            it's a promise for the future. As BoxyHQ grows and evolves, we are
            committed to maintaining the quality and openness of our solutions.
            We invite you to join us on this journey &mdash; to utilize,
            contribute to, and benefit from a platform that is shaping the
            future of secure, compliant, and efficient software development.
          </p>
          <p>
            Inspired by{' '}
            <a
              href="https://www.fermyon.com/open-source-promise"
              rel="noopener noreferrer"
              target="_blank"
            >
              Fermyon's Open Source promise
            </a>
            .
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Pledge;
