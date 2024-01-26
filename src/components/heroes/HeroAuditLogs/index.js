import BaseHero from '../BaseHero';

const HeroAuditLogs = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/audit-logs-hero"
      sectionId="audit-logs"
      title="BoxyHQ <br />Audit Logs"
    >
      <p>
        BoxyHQ's Audit Logs, built on the robust open-source Retraced project,
        offer a seamless solution for integrating compliant, secure, and
        reliable audit logs into your applications. Simplify your compliance
        journey with our user-friendly API, designed to provide comprehensive
        tracking and reporting capabilities essential for modern enterprise
        needs.
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
