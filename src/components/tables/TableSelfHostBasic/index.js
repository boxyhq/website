import './table-self-host-basic.css';

const TableSelfHostBasic = () => {
  return (
    <table className="pricing-table self-host">
      <caption>Self Host</caption>
      <thead>
        <tr>
          <td colspan="2">
            <h2 className="pricing-heading">
              <span className="starting-at">Community Edition</span>Free Forever
            </h2>
            <a
              className="button button-primary with-icon base-icon-pseudo icon-github getting-started"
              href="https://github.com/boxyhq/jackson"
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
          <td className="base-icon-pseudo icon-cross">
            <span className="visually-hidden">Not Supported</span>
          </td>
        </tr>
        <tr>
          <th scope="row">Phone support</th>
          <td className="base-icon-pseudo icon-cross">
            <span className="visually-hidden">Not Supported</span>
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
          <td>Free forever</td>
        </tr>
        <tr>
          <th scope="row">Audit logs</th>
          <td>Free forever</td>
        </tr>
        <tr>
          <th scope="row">Privacy Vault</th>
          <td>Free forever</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSelfHostBasic;
