import BaseHero from '../BaseHero';

const HeroAbout = () => {
  return (
    <BaseHero
      centered={true}
      reduced={true}
      sectionId="about-boxyhq"
      title="Security Building Blocks"
    >
      <p className="lead-outro">
        Welcome to BoxyHQ, where we're redefining security with our innovative
        suite of security building blocks. Our approach goes from providing
        modular APIs that teams can seamlessly integrate into their existing
        applications to protect your company's information from intruders.
        Whether you're a developer looking to enhance the security of your
        applications or a security team safeguarding sensitive data from LLMs
        (Large Language Models), our comprehensive suite of security solutions
        has you covered. Experience the simplicity and effectiveness of our
        developer-first security solutions at BoxyHQ.
      </p>
    </BaseHero>
  );
};

export default HeroAbout;
