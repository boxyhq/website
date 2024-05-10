import clsx from 'clsx';
import Layout from '@theme/Layout';

import BaseCard from '../../components/cards/BaseCard';
import BaseFeatureSectionHeader from '../../components/BaseFeatureSectionHeader';
import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import HeroSSO from '../../components/heroes/HeroSSO';

import '../../css/list-advantages.css';

const EnterpriseSSO = () => {
  const metaDescription =
    'Effortlessly integrate Enterprise SSO into your SaaS app with BoxyHQ. Our open-source solution supports SAML & OIDC, enhancing security and user experience while reducing development time and cost.';
  const metaPageTitle = 'Enterprise SSO: Simplify SAML & OIDC Authentication';

  const boxyHQBenefits = [
    {
      light: false,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: false,
      title: 'Seamless Enterprise SSO Integration',
      ctaCopy: 'View Documentation',
      copy: 'BoxyHQ presents an adaptable, open-source Enterprise Single Sign-On (SSO) solution that streamlines secure authentication across various Identity Providers (IdPs). Our user-friendly API ensures seamless integration with just a few lines of code, whether you choose to utilize our NPM module for a quick embedded solution, opt for the autonomy of a self-hosted approach, or prefer the convenience of our SaaS offering.',
      icon: 'icon-docs',
      url: '/docs/jackson/overview',
    },
    {
      light: true,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: true,
      title: 'Accelerate Your SSO Deployment with BoxyHQ',
      ctaCopy: 'Book A Demo',
      copy: 'Crafting tailored SAML or OpenID Connect integrations for each Identity Provider (IdP) traditionally consumes considerable resources and extends development cycles. Such custom development can span several months, delaying time-to-market and escalating costs. BoxyHQ revolutionizes this process with an SSO solution designed for rapid deployment. The transition from initial coding to full implementation in mere days, not months.',
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: false,
      title: 'Achieve Enterprise Readiness with BoxyHQ',
      ctaCopy: 'Read More',
      copy: "Enterprises typically have an Identity Provider (IdP) entrenched within their systems, favoring solution providers that offer Enterprise Single Sign-On (SSO) integration. They rely on established protocols like SAML or OpenID Connect to manage access and maintain robust security. Deviating from these established workflows can lead to inefficiencies and security concerns. BoxyHQ's solution effortlessly dovetails with SAML and OpenID Connect, ensuring a smooth continuation of your clients' preferred access management processes without any disruption.",
      icon: 'icon-secure',
      url: '/blog/sso-building-blocks',
    },
  ];
  const ssoAdvantages = [
    {
      cardImage: '/images/enterprise-sso/improved-security',
      copy: 'By deploying SAML SSO, you can enable your customers to manage access control on their systems. This helps prevent password sharing, ensures that staff have the correct access, and allows them to easily grant and revoke access from a central location.',
      title: 'Improved Security',
    },
    {
      cardImage: '/images/enterprise-sso/easy-access',
      copy: 'Improving the login experience is crucial for providing a good user experience. By allowing your customers to log in to your product via their Identity Provider (IdP) dashboard with a single click, you can significantly improve their experience with your product.',
      title: 'Enhanced User Experience',
    },
    {
      cardImage: '/images/enterprise-sso/reduced-cost',
      copy: 'In addition to the cost savings of using an out-of-the-box solution instead of building a custom version, implementing SAML can also save you money by eliminating the need to maintain account information across multiple services. With SAML, this is all managed by the IdP.',
      title: 'Reduced Costs',
    },
  ];

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroSSO />
      <main>
        <div className="list-advantages list-advantages-dark">
          <BaseFeatureSectionHeader
            reverse={false}
            title="The advantages of Enterprise SSO"
            withMargin={true}
          >
            <p className="feature-header-lead">
              Deploying Enterprise SSO for your customers has many benefits and
              is now an expected feature for enterprises.
            </p>
          </BaseFeatureSectionHeader>

          <ul className="reset-list list-advantages-list">
            {ssoAdvantages.map((advantage) => (
              <li key={advantage.title}>
                <BaseCard
                  cardImage={advantage.cardImage}
                  centered={true}
                  showCTA={false}
                >
                  <h3 className="card-title">{advantage.title}</h3>
                  <p>{advantage.copy}</p>
                </BaseCard>
              </li>
            ))}
          </ul>
        </div>

        <BaseFeatureSectionHeader
          title="Why BoxyHQ for Enterprise SSO?"
          subtitle="A Universal Proxy for SAML & OIDC"
          withMargin={true}
        />

        <ul className="reset-list">
          {boxyHQBenefits.map((benefit) => (
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

export default EnterpriseSSO;
