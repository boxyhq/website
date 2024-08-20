import BaseHero from './BaseHero';
import SignupCTA from '../ctas/SignupCTA';
import DemoCTA from '../ctas/DemoCTA';

const HeroAISecurity = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/identity-federation-hero"
      sectionId="identity-federation"
      subtitle="Unlock the power of ChatGPT safely. Your secrets layer for AI, ensuring maximum security and privacy."
      title="AI Security"
    >
      <p>
        In the era of rapid technological advancement, harnessing the power of
        Artificial Intelligence (AI) has become paramount for organizations
        across industries. However, with great innovation comes great
        responsibility, especially in safeguarding sensitive data, protecting
        strategic plans and ideas, and ensuring privacy. BoxyHQ is proud to
        introduce the LLM Vault - a cutting-edge solution designed to address
        the unique security challenges posed by AI applications enabling your
        company to leverage ChatGPT (and other LLMs) safely and securely.
      </p>
      <ul className="reset-list button-container">
        <li>
          <DemoCTA />
        </li>
        {/* <li>
          <SignupCTA campaign="ai-security" />
        </li> */}
      </ul>
    </BaseHero>
  );
};

export default HeroAISecurity;
