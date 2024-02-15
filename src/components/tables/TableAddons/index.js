import clsx from 'clsx';

import { hubspotFormIds } from '../../Pricing/pricingPlans';

import './table-addons.css';

const TableAddons = ({ showHubSpotForm, type }) => {
  return (
    <div className="pricing-product-addons">
      <p>
        Enhance your experience with BoxyHQ by exploring our exclusive product
        add-ons designed to elevate your enterprise solution. Our add-ons
        include custom branding with custom domains, SAML federation for
        streamlined identity management, and SIEM integration for advanced
        security insights. Each add-on is crafted to seamlessly integrate with
        your existing setup, providing you with a tailored, efficient, and
        secure system. For detailed information and to discuss how these add-ons
        can benefit your business,{' '}
        <button
          type="button"
          className="ghost addons-contact"
          onClick={() => showHubSpotForm(true, hubspotFormIds.addons)}
        >
          contact us today
        </button>
        .
      </p>
      <table className={clsx('pricing-table', 'addons', type)}>
        <thead>
          <tr>
            <th scope="col">Available Add-Ons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Custom Branding</td>
          </tr>
          <tr>
            <td>SAML Federation</td>
          </tr>
          <tr>
            <td>Security Logs and SIEM Integration</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableAddons;
