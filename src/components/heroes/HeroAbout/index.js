import BaseHero from '../BaseHero';

const HeroAbout = () => {
  return (
    <BaseHero
      centered={true}
      reduced={true}
      sectionId="about-boxyhq"
      title="Security Building Blocks For Developers"
    >
      <p className="lead-outro">
        Welcome to BoxyHQ, where we revolutionize the landscape of
        developer-first security, simplifying the integration of essential
        security features into your products. Envision a realm where security,
        compliance, and privacy are seamlessly integrated, eliminating the
        back-and-forth between the developer and CISO teams. That's the world
        we've crafted at BoxyHQ. Our cutting-edge API-first solutions encompass
        all the minimum viable security elements developers require to
        effortlessly meet Infosec's stringent requirements. Developer-first
        security made simple and fast.
      </p>
    </BaseHero>
  );
};

export default HeroAbout;
