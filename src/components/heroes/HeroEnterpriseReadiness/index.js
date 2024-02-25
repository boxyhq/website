import BaseHero from '../BaseHero';
import SignupCTA from '../../ctas/SignupCTA';
import DemoCTA from '../../ctas/DemoCTA';

const HeroEnterpriseReadiness = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/enterprise-ready-hero"
      sectionId="enterprise-ready"
      subtitle="Empower Your App to Thrive in the Enterprise Environment"
      title="Make your app, Enterprise-Ready"
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
          <DemoCTA />
        </li>
        <li>
          <SignupCTA campaign="enterprise-readiness" />
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroEnterpriseReadiness;
