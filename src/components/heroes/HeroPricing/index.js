import BaseHero from '../BaseHero';

const HeroPricing = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/pricing-hero"
      sectionId="boxyhq-pricing"
      title="Self-Host, SaaS, or Enterprise"
    >
      <p className="lead">
        BoxyHQ offers you choice, saves you time, reduces cost, and reduces
        complexity allowing you to focus on the core of your business and the
        needs of your customers.
      </p>
      <ul className="reset-list button-container">
        <li>
          <a
            className="button button-secondary with-icon base-icon-pseudo icon-github"
            href="https://github.com/boxyhq/jackson"
            target="_blank"
          >
            Self Host
          </a>
        </li>
        <li>
          <a
            className="button button-primary with-icon base-icon-pseudo icon-code-slash"
            href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=pricing"
          >
            SaaS Signup
          </a>
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroPricing;
