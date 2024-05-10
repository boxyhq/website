import BaseHero from './BaseHero';
import DemoCTA from '../ctas/DemoCTA';

const HeroLLMVault = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/privacy-vault-hero"
      sectionId="llm-vault"
      title="BoxyHQ <br />LLM Vault"
    >
      <p>
        In today's AI-driven landscape, protecting your company secrets
        (strategic plans) and sensitive data processed by language models like
        ChatGPT is paramount. BoxyHQ's LLM Vault offers an advanced solution
        tailored for securing confidential information. With cutting-edge
        encryption and granular access controls, our vault ensures the
        confidentiality and integrity of your organization's data. Whether
        you're leveraging AI for marketing, operations, finance or any other
        vertical, BoxyHQ’s LLM Vault provides unparalleled security to safeguard
        your most valuable assets.
      </p>
      <ul className="reset-list button-container">
        <li>
          <DemoCTA />
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroLLMVault;
