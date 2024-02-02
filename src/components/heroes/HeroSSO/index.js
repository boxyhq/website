import BaseHero from '../BaseHero';
import SignupCTA from '../../SignupCTA';
import DemoCTA from '../../DemoCTA';

const HeroSSO = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/enterprise-sso-hero"
      sectionId="enterprise-sso"
      title="BoxyHQ <br />Enterprise SSO"
    >
      <p>
        Effortlessly integrate Enterprise SSO into your SaaS app with BoxyHQ.
        Our open-source solution supports SAML & OIDC, enhancing security and
        user experience while reducing development time and cost.
      </p>
      <ul className="reset-list button-container">
        <li>
          <DemoCTA />
        </li>
        <li>
          <SignupCTA campaign="enterprise-sso" />
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroSSO;
