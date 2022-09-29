import React from 'react';

const BenefitsSection = ({ description, benefits }) => {
  return (
    <section className="page__section">
      <div className="container">
        <h2
          className="section__header text--center"
          style={{ padding: '10px' }}
        >
          Benefits
        </h2>
        <p className="text--center">{description}</p>
        <div className="row" style={{ marginTop: '30px' }}>
          {benefits.map(({ title, description, icon }, idx) => (
            <div className="col col--4" key={idx}>
              <div className="col-demo">
                <div className="card-demo">
                  <div className="card">
                    <div
                      className="card__body text--center"
                      style={{ minHeight: '350px' }}
                    >
                      <div className="avatar avatar--vertical margin-bottom--md">
                        <img
                          src={icon}
                          className="avatar__photo avatar__photo--xl"
                          style={{ borderRadius: '0px' }}
                        />
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
      </div>
    </section>
  );
};

export default BenefitsSection;
