import BaseCTAProductHighlight from './BaseCTAProductHighlight';

const CTAAISecurity = () => {
  return (
    <BaseCTAProductHighlight
      ctaTargertURL="https://cal.com/deepak-boxyhq/demo"
      ctaTargertCopy="Book A Demo"
      sectionId="cta-ai-security"
      title="AI Security for the Modern Enterprise"
      icon="calendar"
      targetNewWindow={true}
    >
      <p>
        Secure your data from AI threats with BoxyHQ's LLM Vault. Connect with
        us today to learn how our solution can defend against emerging risks and
        keep your organization's data safe in the era of AI.
      </p>
    </BaseCTAProductHighlight>
  );
};

export default CTAAISecurity;
