import './table-ai-security.css';

const TableAISecurity = () => {
  return (
    <table className="table-ai-security">
      <thead>
        <tr>
          <th scope="col">Industry</th>
          <th scope="col">Use Case</th>
          <th scope="col">Risk</th>
          <th scope="col">With LLM Vault</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Healthcare</td>
          <td>
            Doctors rely on AI-driven diagnostics, such as ChatGPT, to assess
            patient conditions and recommend treatment plans.
          </td>
          <td>
            Inadvertent exposure of sensitive patient information during AI
            processing.
          </td>
          <td>
            LLM Vault ensures patient data confidentiality, safeguarding against
            unauthorized access or accidental exposure.
          </td>
        </tr>
        <tr>
          <td>Finance</td>
          <td>
            Financial institutions deploy AI-powered fraud detection systems to
            analyze transaction patterns and identify anomalies.
          </td>
          <td>
            Risk of exposing sensitive financial data during AI processing,
            leading to data breaches or unauthorized access.
          </td>
          <td>
            LLM Vault adds an extra layer of security, masking sensitive
            financial data and preserving confidentiality in AI-driven fraud
            detection.
          </td>
        </tr>
        <tr>
          <td>Retail</td>
          <td>
            Retailers leverage ChatGPT’s recommendation engines to deliver
            personalized product suggestions to customers.
          </td>
          <td>
            An inherent risk of exposing sensitive customer data while
            processing ChatGPT’s recommendations.
          </td>
          <td>
            LLM Vault safeguards customer privacy by masking sensitive data and
            ensuring personalized experiences without compromising
            confidentiality.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableAISecurity;
