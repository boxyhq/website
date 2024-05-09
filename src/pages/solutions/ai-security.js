import Layout from '@theme/Layout';

import BaseCard from '../../components/cards/BaseCard';
import BaseFeatureSectionHeader from '../../components/BaseFeatureSectionHeader';
import CTAAISecurity from '../../components/CTAAISecurity';
import HeroAISecurity from '../../components/heroes/HeroAISecurity';
import CustomersAndPartners from '../../components/CustomersAndPartners';

const metaDescription =
  'LLM Vault: Unlock the power of ChatGPT safely. Your secrets layer for AI, ensuring maximum security and privacy.';
const metaPageTitle = "AI Security with BoxyHQ's LLM Vault";

const llmVaultAdvantages = [
  {
    cardImage: '/images/enterprise-sso/improved-security',
    copy: 'BoxyHQ brings a wealth of experience in cybersecurity to the table, ensuring that our solutions are built on a foundation of expertise, innovation, and a keen understanding of industry trends. With a diverse customer base ranging from early-stage startups to enterprises with 10,000+ employees, and users across the globe, we have a proven track record of delivering cutting-edge security solutions tailored to meet the evolving needs of organizations of all sizes.',
    title: 'Proven Expertise',
  },
  {
    cardImage: '/images/enterprise-sso/easy-access',
    copy: "We understand that every organization, team, and employee has unique security requirements in the rapidly evolving landscape of AI technology. That's why we offer tailored solutions that are meticulously designed to meet your specific needs and challenges, providing you with the flexibility and scalability required to navigate the complexities of AI security and succeed in safeguarding your valuable assets.",
    title: 'Tailored Solutions',
  },
  {
    cardImage: '/images/enterprise-sso/reduced-cost',
    copy: 'At BoxyHQ, we prioritize customer satisfaction above all else, recognizing that in this era of uncertainty and new challenges, organizations require unwavering support and innovative solutions to navigate the complexities of the modern threat landscape. Our dedicated team of security professionals is committed to delivering exceptional service and support, ensuring that you have everything you need to succeed and thrive amidst evolving security concerns and technological advancements.',
    title: 'Customer-Centric Approach',
  },
];
const AISecurity = () => {
  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroAISecurity />
      <main>
        <div className="enterprise-sso-advantages">
          <BaseFeatureSectionHeader
            reverse={false}
            title="Why Choose BoxyHQ for AI Security?"
            withMargin={true}
          ></BaseFeatureSectionHeader>

          <ul className="reset-list enterprise-sso-advantages-list">
            {llmVaultAdvantages.map((advantage) => (
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

        {/* <BaseFeatureSectionHeader
          title="Why BoxyHQ for Enterprise SSO?"
          subtitle="A Universal Proxy for SAML & OIDC"
          withMargin={true}
        /> */}

        {/* <ul className="reset-list">
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
        </ul> */}

        <CTAAISecurity />
        <CustomersAndPartners />
      </main>
    </Layout>
  );
};

export default AISecurity;
