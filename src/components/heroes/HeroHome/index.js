import BaseHero from '../BaseHero';
import SignupCTA from '../../ctas/SignupCTA';
import DemoCTA from '../../ctas/DemoCTA';

const HeroHome = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/home-cubes-hero"
      sectionId="home-hero"
      title="Security Building Blocks for the AI era"
    >
      <p>
        Accelerate your Time to Market while prioritizing AI and Cloud security!
        BoxyHQ’s comprehensive suite of security building blocks enables
        organizations to swiftly build and deploy compliant cloud applications
        while strengthening their defenses in the age of LLMs. Enterprise-grade
        Single Sign-On and Directory Sync.
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
