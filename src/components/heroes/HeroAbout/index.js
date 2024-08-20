import BaseHero from '../BaseHero';

const HeroAbout = () => {
  return (
    <BaseHero
      centered={true}
      reduced={true}
      sectionId="about-boxyhq"
      title="Security Building Blocks for the AI era"
    >
      <p className="lead-outro">
        Welcome to BoxyHQ, where we're transforming security with our advanced
        suite of AI-focused security building blocks. Our innovative approach
        offers modular tools designed to seamlessly integrate into your existing
        applications, providing robust protection against intruders and ensuring
        the safety of your company's information from AI-related threats.
        Whether you're a developer focused on enhancing application security or
        a security team safeguarding sensitive data from LLMs (Large Language
        Models), our comprehensive suite has you covered. Experience the
        simplicity and effectiveness of our security solutions at BoxyHQ.
      </p>
    </BaseHero>
  );
};

export default HeroAbout;
