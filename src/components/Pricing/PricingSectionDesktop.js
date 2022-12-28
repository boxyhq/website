import React from 'react';

import { pricingPlans } from './pricingPlans';
import { TextToComponent } from './TextToComponent';

export const PricingSectionDesktop = ({ setOpened, setFormId }) => {
  return (
    <div className="pricing__section__desktop">
      <table className="pricing__table">
        <thead>
          <tr>
            <th></th>
            <th>Self-Hosted</th>
            <th>Self-Hosted Premium</th>
            <th>SaaS (hosted by us)</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {pricingPlans.map((pricingPlan) => {
            return (
              <React.Fragment key={pricingPlan.feature}>
                <tr>
                  <td
                    style={{
                      textAlign: 'left',
                      fontWeight: '500',
                    }}
                  >
                    {pricingPlan.feature}
                  </td>
                  <td>
                    <TextToComponent text={pricingPlan.tiers['self-hosted']} />
                  </td>
                  <td className="highlight">
                    <TextToComponent
                      text={pricingPlan.tiers['self-hosted-premium']}
                      setOpened={setOpened}
                      setFormId={setFormId}
                    />
                  </td>
                  <td>
                    <TextToComponent
                      text={pricingPlan.tiers['saas']}
                      setOpened={setOpened}
                      setFormId={setFormId}
                    />
                  </td>
                  <td>
                    <TextToComponent
                      text={pricingPlan.tiers['enterprise']}
                      setOpened={setOpened}
                      setFormId={setFormId}
                    />
                  </td>
                </tr>
                {pricingPlan.lineBreak && (
                  <tr>
                    <td
                      colSpan={5}
                      style={{
                        padding: '20px 0',
                      }}
                    ></td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
