import { hubspotFormIds } from '../../Pricing/pricingPlans';

import './table-enterprise.css';

const TableEnterprise = ({ showHubSpotForm }) => {
  return (
    <table className="pricing-table enterprise">
      <caption>Enterprise</caption>
      <thead>
        <tr>
          <td colspan="2">
            <h2 className="pricing-heading">
              <span className="starting-at">Custom Pricing</span>Contact Us
            </h2>
            <button
              type="button"
              className="button button-primary with-icon base-icon-pseudo icon-send getting-started"
              onClick={() =>
                showHubSpotForm(true, hubspotFormIds.entrpriseSSODirectorySync)
              }
            >
              Contact Us
            </button>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Admin portal</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Discord support</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Email and chat support</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Phone support</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Custom deployment</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">
            Custom <abbr title="Service Level Agreement">SLA</abbr>s
          </th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Dedicated infrastructure capacity</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Custom terms &amp; contract</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Enterprise SSO &amp; Directory Sync</th>
          <td>
            <button
              type="button"
              className="button button-primary"
              onClick={() =>
                showHubSpotForm(true, hubspotFormIds.entrpriseSSODirectorySync)
              }
            >
              Contact Us
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Audit logs</th>
          <td>
            <button
              type="button"
              className="button button-primary"
              onClick={() =>
                showHubSpotForm(true, hubspotFormIds.auditLogs.entrprise)
              }
            >
              Contact Us
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">Privacy Vault</th>
          <td>
            <button
              type="button"
              className="button button-primary"
              onClick={() =>
                showHubSpotForm(true, hubspotFormIds.privacyVault.enterprise)
              }
            >
              Contact Us
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">
            Premium Features
            <ul>
              <li>Custom branding</li>
              <li>
                <a href="/docs/jackson/saml-federation">SAML Federation</a>
              </li>
            </ul>
          </th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableEnterprise;
