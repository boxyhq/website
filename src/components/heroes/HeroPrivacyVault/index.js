import BaseHero from '../BaseHero';

const HeroPrivacyVault = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/privacy-vault-hero"
      sectionId="privacy-vault"
      title="BoxyHQ <br />Privacy Vault"
    >
      <p>
        In today’s digital world, safeguarding sensitive data is more crucial
        than ever. BoxyHQ's Privacy Vault provides a robust, open-source
        solution for securing personal and sensitive information. Designed to
        meet the stringent standards of GDPR, PCI, and HIPAA, our Privacy Vault
        allows you to centralize, isolate, and govern critical data effectively.
        Whether you're handling Personally Identifiable Information (PII),
        managing financial data in Fintech, or dealing with sensitive healthcare
        records, our vault offers the ultimate protection.
      </p>
      <ul className="reset-list button-container">
        <li>
          <a
            className="button button-secondary with-icon base-icon-pseudo icon-calendar"
            href="https://cal.com/deepak-boxyhq/demo"
          >
            Book A Demo
          </a>
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroPrivacyVault;
