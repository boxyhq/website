import clsx from 'clsx';

import Layout from '@theme/Layout';

import BaseCTAProductHighlight from '../../components/BaseCTAProductHighlight';
import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import HeroProductIdentityFederation from '../../components/heroes/HeroProductIdentityFederation';
import Picture from '../../components/Picture';

const ProductIdentityFederation = () => {
  const metaDescription =
    'Streamline identity management across all customer-facing applications with BoxyHQ Identity Federation Proxy irrespective of diverse configurations or protocols.';
  const metaPageTitle = 'BoxyHQ Identity Federation Proxy';

  const directorySyncBenefits = [
    {
      light: false,
      pictureSrc: '/images/products/federated-authentication',
      reversed: false,
      title: 'Federated Authentication',
      ctaCopy: 'BoxyHQ SSO',
      copy: 'By enabling federated authentication and single sign-on (SSO), BoxyHQ strengthens security measures across applications. Organizations can securely access multiple platforms without repeated authentication, bolstering their overall security posture.',
      icon: 'icon-secure',
      url: '/enterprise-sso',
    },
    {
      light: true,
      pictureSrc: '/images/products/identity-orchestration',
      reversed: true,
      title: 'Identity Orchestration',
      ctaCopy: 'Book A Demo',
      copy: "BoxyHQ's Identity Federation ensures seamless authentication. By unifying protocols like SAML, and OIDC, and integrating with identity providers like Microsoft Entra ID and Okta, BoxyHQ acts as both a virtual Identity Provider (IdP) and a Service Provider simultaneously, greatly simplifying user identity management across various applications.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/products/low-code-no-code',
      reversed: false,
      title: 'Low Code to No Code',
      ctaCopy: 'Book A Demo',
      copy: "BoxyHQ’s plug-and-play no-code/low-code approach reduces time to market and minimizes development overhead simplifying the task of adding authentication and identity management to applications. Whether you're a seasoned developer or new to app development, our platform will meet you where you are.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: true,
      pictureSrc: '/images/products/boxyhq-advantage',
      reversed: true,
      title: 'The BoxyHQ Advantage',
      ctaCopy: 'Book A Demo',
      copy: "As a trusted leader in security, privacy, and enterprise compliance solutions, BoxyHQ empowers organizations with APIs designed to facilitate identity management. BoxyHQ's Identity Federation Proxy catalyzes organizational growth and facilitates the swift deployment of new software products with ease.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
  ];

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroProductIdentityFederation />

      <main>
        <BaseCTAProductHighlight
          sectionId="enterprise-sso-highlight"
          title="Identity Federation for the <br /> Modern Enterprise"
        >
          <p>
            Unlock a seamless user experience while significantly reducing
            development time and costs with BoxyHQ's Identity Federation Proxy.
            Our Proxy approach acts as both a virtual IdP and an SP, simplifying
            processes and eliminating the need for re-authentications. This
            allows enterprises to swiftly roll out new software products with
            confidence, enabling bespoke user journeys and accelerating user
            onboarding.
          </p>
          <Picture
            alt="The image shows an identity federation flow managed by BoxyHQ. Internal apps like CRM and data tools connect to an Identity Provider using OIDC/SAML 2.0. The Identity Provider then connects to a Service Provider, which interfaces with external identity providers like Okta, SAML IdP, and Entra ID. Key features include custom mappings, reduced IT configuration, and zero code changes."
            pictureSrc="/images/products/identity-federation-in-action"
            height="522"
            width="800"
          />
        </BaseCTAProductHighlight>

        <ul className="reset-list">
          {directorySyncBenefits.map((benefit) => (
            <li key={benefit.title}>
              <BaseProductSpotlightSection
                light={benefit.light}
                pictureSrc={benefit.pictureSrc}
                reversed={benefit.reversed}
              >
                <h2 className="product-feature-card-heading">
                  {benefit.title}
                </h2>
                <p>{benefit.copy}</p>
                <a
                  className={clsx(
                    'button',
                    'button-primary',
                    'with-icon',
                    'base-icon-pseudo',
                    benefit.icon
                  )}
                  href={benefit.url}
                  target={benefit.url.startsWith('http') ? '_blank' : '_self'}
                >
                  {benefit.ctaCopy}
                </a>
              </BaseProductSpotlightSection>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default ProductIdentityFederation;
