import { hubspotFormIds } from '../../Pricing/pricingPlans';

import './table-self-host-premium.css';

const TableSelfHostPremium = ({ showHubSpotForm }) => {
  return (
    <table className="pricing-table self-host-premium">
      <caption>Self Host Premium</caption>
      <thead>
        <tr>
          <td colspan="2">
            <h2 className="pricing-heading">
              <span className="starting-at">Starting at</span> $49 p/m
            </h2>
            <a
              className="button button-primary with-icon base-icon-pseudo icon-github getting-started"
              href="https://github.com/boxyhq/jackson"
              target="_blank"
            >
              Get Started
            </a>
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
          <td className="base-icon-pseudo icon-cross">
            <span className="visually-hidden">Not Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Dedicated infrastructure capacity</th>
          <td className="base-icon-pseudo icon-cross">
            <span className="visually-hidden">Not Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Custom terms &amp; contract</th>
          <td className="base-icon-pseudo icon-cross">
            <span className="visually-hidden">Not Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Enterprise SSO &amp; Directory Sync</th>
          <td className="base-icon-pseudo icon-check">
            <span className="visually-hidden">Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Audit logs</th>
          <td>
            <button
              type="button"
              className="button button-primary"
              onClick={() =>
                showHubSpotForm(true, hubspotFormIds.auditLogs.premium)
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
                showHubSpotForm(true, hubspotFormIds.privacyVault.premium)
              }
            >
              Contact Us
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSelfHostPremium;
