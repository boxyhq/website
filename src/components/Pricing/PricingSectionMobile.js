import React from 'react';

import { pricingPlans } from './pricingPlans';
import { TextToComponent } from './TextToComponent';

export const PricingSectionMobile = ({ setOpened, setFormId }) => {
  return (
    <div className="pricing__section__mobile">
      <PricingTableMobile
        title="Self-Hosted"
        tier="self-hosted"
        setOpened={setOpened}
        setFormId={setFormId}
      />
      <PricingTableMobile
        title="Self-Hosted Premium"
        tier="self-hosted-premium"
        setOpened={setOpened}
        setFormId={setFormId}
      />
      <PricingTableMobile
        title="SaaS (hosted by us)"
        tier="saas"
        setOpened={setOpened}
        setFormId={setFormId}
      />
      <PricingTableMobile
        title="Enterprise"
        tier="enterprise"
        setOpened={setOpened}
        setFormId={setFormId}
      />
    </div>
  );
};

const PricingTableMobile = ({ title, tier, setOpened, setFormId }) => {
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
                setFormId={setFormId}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
