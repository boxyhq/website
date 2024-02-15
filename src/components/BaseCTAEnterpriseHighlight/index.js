import BaseCTAProductHighlight from '../BaseCTAProductHighlight';

const BaseCTAEnterpriseHighlight = () => {
  return (
    <BaseCTAProductHighlight
      ctaTargertURL="/products/overview"
      ctaTargertCopy="Explore Enterprise Solutions"
      darkMode={true}
      sectionId="product-overview-enterprise"
      subtitle="Advanced Security and Efficiency"
      title="Empowering Enterprises"
    >
      <p>
        For enterprises aiming to bolster their security infrastructure and
        streamline operational processes, BoxyHQ presents a powerful suite of
        solutions. Our Enterprise Single Sign-On (SSO), Directory Sync, and
        Audit Logs services are tailored to meet complex organizational demands.
        These tools enhance security and reinforce your enterprise's compliance
        with industry standards, elevating trust and reputation in a competitive
        market.
      </p>
    </BaseCTAProductHighlight>
  );
};

export default BaseCTAEnterpriseHighlight;
