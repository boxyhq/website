import React from 'react';
import Link from '@docusaurus/Link';

import SectionLayout from './SectionLayout';

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
    <SectionLayout title="Our investors" description="">
      <div
        className="row"
        style={{
          justifyContent: 'center',
          gap: '5px',
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
    </SectionLayout>
  );
};

export default InvestorsSection;
