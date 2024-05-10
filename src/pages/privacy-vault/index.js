import clsx from 'clsx';
import Layout from '@theme/Layout';

import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import HeroPrivacyVault from '../../components/heroes/HeroPrivacyVault';

const PrivacyVault = () => {
  const metaDescription =
    "BoxyHQ's Data Privacy Vault offers an open-source solution for safeguarding sensitive data. Centralize, isolate, and govern data with our vault, ensuring GDPR, PCI, and HIPAA compliance. Ideal for creating PII, Fintech, and Healthcare vaults.";
  const metaPageTitle =
    'Data Privacy Vault: Secure Data Storage & Compliance Solution';

  const privacyVaultBenefits = [
    {
      light: false,
      pictureSrc: '/images/products/privacy-vault-problem',
      reversed: false,
      title: 'The Problem: The Rising Need for Data Protection',
      ctaCopy: 'Contact Us',
      copy: 'In the digital age, safeguarding sensitive customer data has become a paramount challenge for businesses. With cyber threats escalating and data breaches becoming more frequent, companies face the dual pressure of protecting client information and complying with stringent data privacy regulations. This challenge is compounded by the complexity of managing and securing vast amounts of personal and sensitive data across various platforms, making traditional data protection methods insufficient and exposing businesses to significant risks.',
      icon: 'icon-send',
      url: 'mailto:hello@boxyhq.com?subject=Privacy Vault',
    },
    {
      light: true,
      pictureSrc: '/images/products/privacy-vault-solution',
      reversed: true,
      title: "The Solution: BoxyHQ's Data Privacy Vault",
      ctaCopy: 'Book A Demo',
      copy: 'BoxyHQ addresses these critical data security concerns with our innovative Data Privacy Vault. Our solution revolutionizes how businesses handle sensitive information by centralizing and isolating it in a secure environment. By implementing tokenization, the Privacy Vault transforms sensitive data into opaque tokens within your applications, drastically reducing exposure. This approach not only enhances data security but also simplifies the management of sensitive information, aligning seamlessly with your existing data handling processes.',
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/products/privacy-vault-benefits',
      reversed: false,
      title: 'Elevating Data Security and Compliance',
      ctaCopy: 'Book A Demo',
      copy: "BoxyHQ's Data Privacy Vault enhances business data security and compliance, aligning with global regulations like GDPR, PCI, and HIPAA. It offers robust access control, policy management, and mitigates risks in data breaches through tokenization. Ideal for sectors like Healthcare and Fintech, the Vault secures sensitive data, reinforcing customer trust and corporate integrity.",
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
      <HeroPrivacyVault />

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

export default PrivacyVault;
