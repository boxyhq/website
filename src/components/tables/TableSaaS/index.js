import { hubspotFormIds } from '../../Pricing/pricingPlans';

import './table-sass.css';

const TableSaaS = ({ showHubSpotForm }) => {
  return (
    <table className="pricing-table saas">
      <caption>
        Hosted <abbr title="Software as a Service">SaaS</abbr>
      </caption>
      <thead>
        <tr>
          <td colspan="2">
            <h2 className="pricing-heading">
              <span className="starting-at">Starting at</span> $49 p/m
            </h2>
            <a
              className="button button-primary with-icon base-icon-pseudo icon-code-slash getting-started"
              href="https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=pricing-sass"
            >
              Sign Up
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
          <td className="base-icon-pseudo icon-cross">
            <span className="visually-hidden">Not Supported</span>
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
                showHubSpotForm(true, hubspotFormIds.auditLogs.sass)
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
                showHubSpotForm(true, hubspotFormIds.privacyVault.sass)
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

export default TableSaaS;
