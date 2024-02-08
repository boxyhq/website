import Layout from '@theme/Layout';

import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import BaseCTAProductHighlight from '../../components/BaseCTAProductHighlight';
import HeroBoxyHQWorkOS from '../../components/heroes/HeroBoxyHQWorkOS';

import '../../css/atoms/feature-comparison-table.css';
import './boxyhq-vs-workos.css';

const BoxyHQWorkOS = () => {
  const metaDescription =
    'BoxyHQ is a flexible, secure, open-source alternative to WorkOS that brings enterprise readiness capabilities to your SaaS applications. It integrates with your tech stack no matter how bespoke.';
  const metaPageTitle = 'BoxyHQ vs WorkOS';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroBoxyHQWorkOS />
      <main>
        <section
          aria-labelledby="compare-features-heading"
          className="girdle compare-features"
        >
          <h3
            className="compare-features-heading linear-gradient-text"
            id="compare-features-heading"
          >
            Compare Features
          </h3>
          <table className="feature-comparison-table">
            <thead>
              <tr>
                <th scope="column">Feature</th>
                <th scope="column">BoxyHQ</th>
                <th scope="column">WorkOS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>License</td>
                <td>Open Source</td>
                <td>Proprietary</td>
              </tr>
              <tr>
                <td>Enterprise SSO</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
              </tr>
              <tr>
                <td>Directory Sync</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
              </tr>
              <tr>
                <td>Audit Logs</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
              </tr>
              <tr>
                <td>Data Privacy Vault</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-cross">
                  <span className="visually-hidden">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td>Admin Portal</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
              </tr>
              <tr>
                <td>SAML Federation</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-cross">
                  <span className="visually-hidden">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td>Custom Deployment</td>
                <td className="base-icon-pseudo icon-check">
                  <span className="visually-hidden">Supported</span>
                </td>
                <td className="base-icon-pseudo icon-cross">
                  <span className="visually-hidden">Not Supported</span>
                </td>
              </tr>
              <tr>
                <td>Deployment</td>
                <td>Self-Hosted &amp; SaaS</td>
                <td>SaaS</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ul className="reset-list why-boxyhq">
          <li>
            <BaseProductSpotlightSection
              light={true}
              pictureSrc="/images/boxyhq-workos/your-product-your-rules"
              reversed={false}
            >
              <h2 className="product-feature-card-heading">
                Your Product, Your Rules
              </h2>
              <p>
                Make your app enterprise-ready, with just a few lines of code.
                Through its open-source approach, BoxyHQ’s users are free to
                make any customizations and changes to their features, while
                also avoiding vendor lock-in.
              </p>
            </BaseProductSpotlightSection>
          </li>
          <li>
            <BaseProductSpotlightSection
              light={false}
              pictureSrc="/images/boxyhq-workos/resource-efficient"
              reversed={true}
            >
              <h2 className="product-feature-card-heading">
                Resource Efficient
              </h2>
              <p>
                Instead of paying thousands of dollars for the large number of
                connections that your app will have, use BoxyHQ's free
                open-source solution. Allocate resources to your core value
                proposition and maximize the benefits for your customers.
              </p>
            </BaseProductSpotlightSection>
          </li>
        </ul>

        <BaseCTAProductHighlight
          sectionId="comparison-open-source"
          subtitle="Developer Obsessed"
          title="Open Source"
        >
          <p>
            BoxyHQ is developer-obsessed, and our products are secure by design
            so you can focus on your <strong>core value proposition</strong>.{' '}
            <a
              href="https://github.com/boxyhq"
              rel="external noopener noreferrer"
            >
              Contribute to BoxyHQ
            </a>{' '}
            and build your own integrations and customizations. If you're
            passionate about Developer Security, our{' '}
            <a
              href="https://discord.boxyhq.com"
              rel="external noopener noreferrer"
            >
              Discord community
            </a>{' '}
            is the perfect place to connect, share, and learn from like-minded
            individuals. Together, we're building more customizable and secure
            by default solutions one security building block at a time.
          </p>
        </BaseCTAProductHighlight>
      </main>
    </Layout>
  );
};

export default BoxyHQWorkOS;
