import BaseHero from '../BaseHero';

const HeroHome = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/home-cubes-hero"
      sectionId="home-hero"
      title="Security Building Blocks For Developers"
    >
      <p>
        Reduce Time to Market without sacrificing your security posture!
        BoxyHQ’s suite of APIs for security and privacy helps engineering teams
        build and ship compliant cloud applications faster. With features like
        Enterprise Single Sign-On and Directory Sync to Audit Logs and a privacy
        vault, BoxyHQ keeps you and your data safe and secure.
      </p>
      <ul className="reset-list button-container">
        <li>
          <a
            className="button button-secondary with-icon base-icon-pseudo icon-laptop"
            href="https://cal.com/deepak-boxyhq/demo"
          >
            Book A Demo
          </a>
        </li>
        <li>
          <a
            className="button button-primary with-icon base-icon-pseudo icon-code-slash"
            href="https://app.eu.boxyhq.com/auth/join"
          >
            Sign Up Today
          </a>
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroHome;
