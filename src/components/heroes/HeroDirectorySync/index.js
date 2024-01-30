import BaseHero from '../BaseHero';

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
          <a
            className="button button-secondary with-icon base-icon-pseudo icon-laptop"
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
            href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=directory-sync"
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

export default HeroDirectorySync;
