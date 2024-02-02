import BaseHero from '../BaseHero';
import DemoCTA from '../../ctas/DemoCTA';

const HeroAuditLogs = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/audit-logs-hero"
      sectionId="audit-logs"
      title="BoxyHQ <br />Audit Logs"
    >
      <p>
        BoxyHQ's Audit Logs enable enterprise customers to efficiently record
        and search events within your application, streamlining compliance and
        reducing the need for complex, in-house development. Our solution's
        simple integration process saves time, ensuring fast compliance and
        focusing your team's efforts on core functionalities.
      </p>
      <ul className="reset-list button-container">
        <li>
          <DemoCTA />
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
