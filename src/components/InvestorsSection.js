import React from 'react';
import Link from '@docusaurus/Link';

const InvestorsList = [
  {
    url: 'https://oss.capital',
    logo: 'img/investors/ossc-logo.svg',
  },
  {
    url: 'https://nautacapital.com',
    logo: 'img/investors/nauta-logo.png',
  },
  {
    url: 'https://mmc.vc',
    logo: 'img/investors/mmc-logo.png',
  },
  {
    url: 'https://wayra.com',
    logo: 'img/investors/wayra-logo.png',
  },
];

const InvestorsSection = () => {
  return (
    <section className="page__section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-demo text--center">
              <h2 className="section__header" style={{ padding: '10px' }}>
                Our investors
              </h2>
              <p>Know who are the investors for BoxyHQ</p>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {InvestorsList.map(({ url, logo }, idx) => (
            <div className="col col--2" key={idx}>
              <div className="col-demo text--center">
                <div
                  style={{
                    minHeight: '70px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Link href={url}>
                    <img src={logo} style={{ width: '150px' }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
