import BaseHero from '../BaseHero';
import SignupCTA from '../../ctas/SignupCTA';
import DemoCTA from '../../ctas/DemoCTA';

const HeroHome = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/home-cubes-hero"
      sectionId="home-hero"
      title="Security Building Blocks"
    >
      <p>
        Accelerate your Time to Market while enhancing your company's security!
        BoxyHQ’s suite of security, privacy and enterprise compliance solutions
        empowers organizations to rapidly develop and deploy compliant cloud
        applications while fortifying themselves in the era of AI. From
        enterprise-grade Single Sign-On, Directory Sync, and Audit Logs to
        Privacy Vault and AI Security.
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
