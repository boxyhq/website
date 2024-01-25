import BaseHero from '../BaseHero';

const HeroAuditLogs = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/audit-logs-hero"
      sectionId="audit-logs"
      title="BoxyHQ <br />Audit Logs"
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
            className="button button-secondary with-icon base-icon-pseudo icon-calendar"
            href="https://cal.com/deepak-boxyhq/demo"
          >
            Book A Demo
          </a>
        </li>
        <li>
          <a
            className="button button-primary with-icon base-icon-pseudo icon-docs"
            href="/docs/retraced/overview"
          >
            Read Our Docs
          </a>
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroAuditLogs;
