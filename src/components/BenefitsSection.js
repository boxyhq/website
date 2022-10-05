import React from 'react';

import SvgIcon from './SvgIcon';
import SectionLayout from './SectionLayout';

const BenefitsSection = ({ benefits, title, description }) => {
  return (
    <SectionLayout title={title} description={description}>
      <div
        className="row"
        style={{
          justifyContent: 'center',
        }}
      >
        {benefits.map(({ title, description, icon }, idx) => (
          <div className="col col--4" key={idx}>
            <div className="col-demo">
              <div className="card-demo">
                <div className="card">
                  <div
                    className="card__body text--center"
                    style={{ minHeight: '330px' }}
                  >
                    <div className="avatar avatar--vertical margin-bottom--md">
                      <div
                        className="avatar__photo avatar__photo--lg"
                        style={{ borderRadius: '0px' }}
                      >
                        <SvgIcon
                          icon={icon}
                          size={{ width: '64px', height: '64px' }}
                        />
                      </div>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
