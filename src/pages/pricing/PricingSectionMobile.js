import React from 'react';

import { pricingPlans } from './pricingPlans';
import { TextToComponent } from './TextToComponent';

export const PricingSectionMobile = ({ setOpened }) => {
  return (
    <div className="pricing__section__mobile">
      <PricingTableMobile
        title="Self-Hosted"
        tier="self-hosted"
        setOpened={setOpened}
      />
      <PricingTableMobile
        title="Self-Hosted Premium"
        tier="self-hosted-premium"
        setOpened={setOpened}
      />
      <PricingTableMobile
        title="SaaS (hosted by us)"
        tier="saas"
        setOpened={setOpened}
      />
      <PricingTableMobile
        title="Enterprise"
        tier="enterprise"
        setOpened={setOpened}
      />
    </div>
  );
};

const PricingTableMobile = ({ title, tier, setOpened }) => {
  return (
    <table className="pricing__table">
      <thead>
        <tr>
          <th colSpan={2} style={{ textAlign: 'left' }}>
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {pricingPlans.map((pricingPlan) => (
          <tr key={pricingPlan.feature}>
            <td
              style={{
                textAlign: 'left',
                fontWeight: '400',
              }}
            >
              {pricingPlan.feature}
            </td>
            <td style={{ textAlign: 'right' }}>
              <TextToComponent
                text={pricingPlan.tiers[tier]}
                setOpened={setOpened}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
