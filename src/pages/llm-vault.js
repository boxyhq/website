import clsx from 'clsx';
import Layout from '@theme/Layout';

import BaseProductSpotlightSection from '../components/BaseProductSpotlightSection';
import HeroLLMVault from '../components/heroes/HeroLLMVault';

const LLMVault = () => {
  const metaDescription =
    "BoxyHQ's LLM Vault offers a best-in-class solution for safeguarding strategic confidential information and sensitive data processed by AI models like ChatGPT.";
  const metaPageTitle = 'BoxyHQ LLM Vault: AI Security and Responsible AI';

  const privacyVaultBenefits = [
    {
      light: false,
      pictureSrc: '/images/products/privacy-vault-problem',
      reversed: false,
      title: 'The Challenge: Safeguarding your company’s secrets',
      ctaCopy: 'Contact Us',
      copy: "The AI era is now, demanding new tools to ensure the security and integrity of data processed by language models like ChatGPT. This poses a significant challenge for organizations. LLM models acquire insights into your company's plans and secrets, presenting a danger to your business. With the proliferation of AI technologies and the increasing complexity of data processing tasks, enterprises must confront the growing risks associated with unauthorized access, data breaches, and compliance violations. Traditional security measures are often insufficient to shield against the sophisticated threats targeting AI-generated content, leaving companies vulnerable to potential data compromises and regulatory penalties.",
      icon: 'icon-send',
      url: 'mailto:hello@boxyhq.com?subject=LLM Vault',
    },
    {
      light: true,
      pictureSrc: '/images/products/privacy-vault-solution',
      reversed: true,
      title: "The Answer: BoxyHQ's LLM Vault",
      ctaCopy: 'Book A Demo',
      copy: "Addressing the pressing need for safeguarding confidential information and sensitive data handled by AI models, BoxyHQ introduces the LLM Vault. Our solution offers a paradigm shift in data protection by providing an AI security environment to centralize and isolate your company’s secrets. Utilizing advanced encryption techniques, the LLM Vault ensures the confidentiality and integrity of your organization's data. Through granular access controls, it allows precise management of data access, enhancing security while streamlining data handling processes. Your company can now interact with ChatGPT (and other LLMs) and leverage AI models with peace of mind.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/products/privacy-vault-benefits',
      reversed: false,
      title: "Secure Your Company's Secrets Today",
      ctaCopy: 'Book A Demo',
      copy: "In a world where AI-driven insights can make or break a business, safeguarding your company's secrets is crucial for the sustainability and future of your company. With the rise of AI technologies like ChatGPT, the risk of leaks and exposure of critical information is larger than ever before. BoxyHQ's LLM Vault offers a solution tailored to help your company interact with AI models safely. Don't wait until it's too late. Act now to stay ahead of the game and join the Responsible AI revolution!",
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
      <HeroLLMVault />

      <main>
        <ul className="reset-list">
          {privacyVaultBenefits.map((benefit) => (
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

export default LLMVault;
