import React from 'react';
import SvgFeature from './SvgFeature';
import styles from './InvestorsSection.module.css';

const InvestorsList = [
  {
    url: 'https://oss.capital',
    Svg: require('../../static/img/investors/ossc-logo.svg').default,
  },
  {
    url: 'https://nautacapital.com',
    png: require('../../static/img/investors/nauta-logo.png').default,
  },
  {
    url: 'https://mmc.vc',
    png: require('../../static/img/investors/mmc-logo.png').default,
  },
  {
    url: 'https://wayra.com',
    png: require('../../static/img/investors/wayra-logo.png').default,
  },
];

const InvestorsMain = {
  title: 'Our investors',
};

export default function InvestorsSection() {
  return (
    <div className={`${styles.investorsSection}`}>
      <div className="row">
        <SvgFeature
          key="TrustedBySection"
          {...InvestorsMain}
          colSize="col--12"
        />
      </div>
      <div className="row">
        {InvestorsList.map((props, idx) => (
          <SvgFeature key={idx} {...props} quotes={false} colSize="col--3" />
        ))}
      </div>
    </div>
  );
}
