import Layout from '@theme/Layout';

import BaseCard from '../../components/cards/BaseCard';
import BaseFeatureSectionHeader from '../../components/BaseFeatureSectionHeader';
import CTAAISecurity from '../../components/CTAAISecurity';
import HeroAISecurity from '../../components/heroes/HeroAISecurity';
import CustomersAndPartners from '../../components/CustomersAndPartners';
import TableAISecurity from '../../components/tables/TableAISecurity';

import '../../css/list-advantages.css';

const metaDescription =
  'LLM Vault: Unlock the power of ChatGPT (and other LLMs) safely. Your secrets layer for AI, ensuring maximum security and privacy.';
const metaPageTitle = "AI Security with BoxyHQ's LLM Vault";

const llmVaultFeatures = [
  {
    copy: "The LLM Vault is meticulously designed to prioritize data integrity and privacy from the ground up, leveraging BoxyHQ's legacy of security innovation. It ensures that your organization's secrets remain protected against evolving threats.",
    title: 'Secured by Design',
  },
  {
    copy: 'At the core of the LLM Vault lies robust data encryption capabilities, providing unparalleled security for your sensitive information. State-of-the-art encryption protocols shield your data from unauthorized access, safeguarding it against breaches and intrusions.',
    title: 'Data Encryption Excellence',
  },
  {
    copy: 'The LLM Vault offers granular access controls to limit the exposure of sensitive data within AI models. Administrators can define and enforce access policies, reducing the risk of data exposure and ensuring compliance with regulatory requirements.',
    title: 'Granular Access Controls',
  },
  {
    copy: "BoxyHQ's AI Security Solutions integrate cutting-edge Audit Logs, offering enhanced compliance visibility and control. Real-time insights and comprehensive audit trails enable organizations to maintain regulatory compliance seamlessly, mitigating risks effectively.",
    title: 'Enhanced Compliance Visibility',
  },
  {
    copy: 'The LLM Vault offers frictionless, automated PII redaction and AI policy enforcement. It masks sensitive information from LLMs and automatically enforces organizational policies, ensuring adherence to guidelines and regulations.',
    title: 'Automated PII Redaction and Policy Enforcement',
  },
];

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
        <div className="list-advantages">
          <BaseFeatureSectionHeader
            reverse={false}
            title="Real-world Applications: Illustrating the Power of our LLM Vault in Action
            "
            withMargin={true}
          ></BaseFeatureSectionHeader>
          <TableAISecurity />
          <p>
            And much more... LLM Vault offers customizable solutions tailored to
            your unique needs, ensuring comprehensive protection and peace of
            mind in the era of AI.
          </p>
        </div>
        <div className="list-advantages">
          <BaseFeatureSectionHeader
            reverse={false}
            title="LLM Vault: Your secrets security layer for AI"
            withMargin={true}
          >
            <p>
              BoxyHQ's LLM Vault stands as the cornerstone of our AI Security
              Solutions, providing robust protection against evolving threats to
              your organization's data integrity and privacy. Here's how the LLM
              Vault empowers you to fortify your defenses and embrace the
              potential of ChatGPT and other AI models securely:
            </p>
          </BaseFeatureSectionHeader>

          <ul className="reset-list list-advantages-list">
            {llmVaultFeatures.map((advantage) => (
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

        <div className="list-advantages list-advantages-dark">
          <BaseFeatureSectionHeader
            reverse={false}
            title="Why Choose BoxyHQ for AI Security?"
            withMargin={true}
          ></BaseFeatureSectionHeader>

          <ul className="reset-list list-advantages-list">
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
