import BaseHero from '../BaseHero';
import DemoCTA from '../../ctas/DemoCTA';
import SignupCTA from '../../ctas/SignupCTA';

const HeroProductIdentityFederation = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/directory-sync-hero"
      sectionId="directory-sync"
      title="BoxyHQ Identity Federation Proxy"
    >
      <p>
        Engineering and security teams face the fragmentation of identity and
        access management (IAM) systems, often in silos that impact efficiency
        and security. The Identity Federation Proxy bridges the gap between
        diverse Identity Providers (IdPs) and protocols like SAML and OpenID
        Connect (OIDC). By seamlessly integrating these systems, we empower
        teams to manage user identities across all applications efficiently,
        ultimately fostering streamlined operations and enhanced security
        measures.
      </p>
      <ul className="reset-list button-container">
        <li>
          <DemoCTA />
        </li>
        <li>
          <SignupCTA campaign="directory-sync" />
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroProductIdentityFederation;
