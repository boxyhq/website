import BaseCTAProductHighlight from '../BaseCTAProductHighlight';

const BaseCTAEnterpriseHighlight = () => {
  return (
    <BaseCTAProductHighlight
      ctaTargertURL="/products/overview"
      ctaTargertCopy="Explore Enterprise Solutions"
      darkMode={false}
      sectionId="product-overview-enterprise"
      subtitle="Advanced Security and Efficiency"
      title="Empowering Enterprises"
    >
      <p>
        For enterprises aiming to leverage AI in a safety way and bolster their
        security infrastructure, BoxyHQ presents a powerful suite of solutions.
        Our LLM Vault, Enterprise Single Sign-On (SSO), Directory Sync, Privacy
        Vault, and Audit Logs services are tailored to meet complex
        organizational demands. These tools enhance security and reinforce your
        enterprise's compliance with industry standards, elevating trust and
        reputation in a competitive market.
      </p>
    </BaseCTAProductHighlight>
  );
};

export default BaseCTAEnterpriseHighlight;
