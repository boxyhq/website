import BaseCTAProductHighlight from '../BaseCTAProductHighlight';

const CTAProductOverview = () => {
  return (
    <BaseCTAProductHighlight
      ctaTargertURL="/products/overview"
      ctaTargertCopy="Our Products"
      sectionId="product-overview"
      subtitle="Enterprise Ready"
      title="Empowering Startups"
      darkMode={true}
    >
      <p>
        Achieving enterprise readiness unlocks major benefits for SaaS companies
        including expanded market potential through supporting complex
        organizational needs, and enhanced trust and reputation by meeting
        stringent security and compliance standards.
      </p>
    </BaseCTAProductHighlight>
  );
};

export default CTAProductOverview;
