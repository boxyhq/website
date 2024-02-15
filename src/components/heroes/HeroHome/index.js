import BaseHero from '../BaseHero';
import SignupCTA from '../../ctas/SignupCTA';
import DemoCTA from '../../ctas/DemoCTA';

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
          <DemoCTA />
        </li>
        <li>
          <SignupCTA campaign="homepage" />
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroHome;
