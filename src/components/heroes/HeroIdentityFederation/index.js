import BaseHero from '../BaseHero';
import SignupCTA from '../../ctas/SignupCTA';
import DemoCTA from '../../ctas/DemoCTA';

const HeroIdentityFederation = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/identity-federation-hero"
      sectionId="identity-federation"
      subtitle="Unify Your Identity Ecosystem: BoxyHQ's Federation Bridges IdP Gaps"
      title="BoxyHQ Identity Federation"
    >
      <p>
        As businesses scale, the complexity of managing customer or employee
        identities across multiple applications intensifies. BoxyHQ's Identity
        Federation Broker addresses this challenge by streamlining user identity
        management across all applications, irrespective of their diverse
        configurations or Identity Provider (IdP) protocols, such as SAML, OIDC,
        or various IdPs.
      </p>
      <ul className="reset-list button-container">
        <li>
          <DemoCTA />
        </li>
        <li>
          <SignupCTA campaign="identity-federation" />
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroIdentityFederation;
