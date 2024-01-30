import BaseHero from '../BaseHero';

const HeroEnterpriseReadiness = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/enterprise-ready-hero"
      sectionId="enterprise-ready"
      title="SaaS Enterprise Readiness For Startups"
    >
      <p>
        Ensure your startup's SaaS offering is enterprise-ready with BoxyHQ's
        comprehensive suite of APIs and products. Effortlessly integrate
        essential enterprise-grade features like SAML SSO, Directory Sync, Audit
        Logs, and a Data Privacy Vault into your product. With just a few lines
        of code, you can seamlessly navigate the compliance processes of
        enterprise customers and InfoSec teams alike. BoxyHQ empowers you to
        swiftly implement these robust features, transforming your SaaS solution
        into a market leader in enterprise compatibility. Best of all, our
        solutions are open-source and secure by default, offering you a
        cost-effective pathway to achieving enterprise-level success.
      </p>
      <ul className="reset-list button-container">
        <li>
          <a
            className="button button-secondary with-icon base-icon-pseudo icon-calendar"
            href="https://cal.com/deepak-boxyhq/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Demo
          </a>
        </li>
        <li>
          <a
            className="button button-primary with-icon base-icon-pseudo icon-code-slash"
            href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=enterprise-readiness"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up Today
          </a>
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroEnterpriseReadiness;
