import BaseHero from '../BaseHero';
import SignupCTA from '../../ctas/SignupCTA';
import DemoCTA from '../../ctas/DemoCTA';

const HeroDirectorySync = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/directory-sync-hero"
      sectionId="directory-sync"
      title="BoxyHQ <br />Directory Sync"
    >
      <p>
        Discover the power of streamlined user and group provisioning with
        BoxyHQ's Directory Sync. Our solution fully supports the SCIM 2.0
        protocol, ensuring seamless compatibility with the majority of major
        Identity Providers. Elevate your system's efficiency and compliance with
        a robust directory synchronization tool designed for the modern
        enterprise.
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

export default HeroDirectorySync;
