import BaseHero from '../BaseHero';
import DemoCTA from '../../ctas/DemoCTA';
import SignupCTA from '../../ctas/SignupCTA';

const HeroBoxyHQWorkOS = () => {
  return (
    <BaseHero reduced={true} sectionId="boxyhq-workos" title="BoxyHQ vs WorkOS">
      <p>
        BoxyHQ is a flexible, secure, open-source alternative to WorkOS that
        brings enterprise readiness capabilities to your SaaS applications. It
        integrates with your tech stack no matter how bespoke.
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

export default HeroBoxyHQWorkOS;
