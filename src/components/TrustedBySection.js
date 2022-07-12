import React from 'react';
import Feature from './Feature';
import SvgFeature from './SvgFeature';
import styles from './TrustedBySection.module.css';

const TrustedByList = [
  {
    url: 'https://cal.com',
    Svg: require('../../static/img/customers/cal.svg').default,
  },
  {
    url: 'https://supertokens.com',
    Svg: require('../../static/img/customers/supertokens.svg').default,
  },
  {
    url: 'https://salita.no',
    Svg: require('../../static/img/customers/salita.svg').default,
  },
  {
    url: 'https://unosecur.com',
    Svg: require('../../static/img/customers/unosecur.svg').default,
  },
];

const TrustedByMain = {
  title: <>Used and trusted by</>,
  description: '',
};

export default function TrustedBySection() {
  return (
    <div className={`container ${styles.trustedBySection}`}>
      <div className="row">
        <Feature key="TrustedBySection" {...TrustedByMain} colSize="col--12" />
      </div>
      <div className="row">
        {TrustedByList.map((props, idx) => (
          <SvgFeature key={idx} {...props} colSize="col--3" />
        ))}
      </div>
    </div>
  );
}
