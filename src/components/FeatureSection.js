import React from 'react';
import Link from '@docusaurus/Link';

const FeatureSection = ({
  title,
  image,
  btnText,
  btnLink,
  direction = 'left',
  children,
}) => {
  const Icon = image;

  return (
    <section className="page__section">
      <div className="container">
        <div
          className="row"
          style={{
            flexDirection: direction === 'right' ? 'row-reverse' : 'row',
          }}
        >
          <div className="col">
            <div className="col-demo">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '350px',
                }}
              >
                <div>
                  <h2>{title}</h2>
                  <p>{children}</p>
                  <Link
                    className="button button--outline button--primary"
                    to={btnLink}
                  >
                    {btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col-demo">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '350px',
                }}
              >
                <Icon style={{ width: '350px', height: '350px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
