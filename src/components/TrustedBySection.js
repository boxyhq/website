import React from 'react';
import Feature from './Feature';
import SvgFeature from './SvgFeature';
import styles from './TrustedBySection.module.css';

const TrustedByList = [
  {
    url: 'https://cal.com',
    Svg: require('../../static/img/customers/cal.svg').default,
    quote: `"It let our team focus on what we do best (democratizing scheduling for everyone) without getting distracted by the needs of our enterprise customers. Did I mention it's open-source and free?"`,
  },
  {
    url: 'https://supertokens.com',
    Svg: require('../../static/img/customers/supertokens.svg').default,
    quote: `"We at SuperTokens needed to provide SAML login to our users, and instead of building it from scratch, we found the perfect open source project - BoxyHQ!"`,
  },
  {
    url: 'https://www.salita.no',
    Svg: require('../../static/img/customers/salita.svg').default,
    quote: `"BoxyHQ helped us implement single sign-on for our government customers in record time, it was exactly what we were looking for. Absolute pleasure working with Deepak and the BoxyHQ team."`,
  },
  {
    url: 'https://www.unosecur.com',
    Svg: require('../../static/img/customers/unosecur.svg').default,
    quote: `"With BoxyHQ, we can focus on building our core product without worrying too much about the enterprise readiness features. The integration was seamless."`,
  },
];

const TrustedByMain = {
  title: 'Used and trusted by',
};
const CustomerQuotesMain = {
  title: 'What our customers say',
};

export default function TrustedBySection({ quotes }) {
  const features = quotes ? CustomerQuotesMain : TrustedByMain;

  return (
    <div className={`${styles.trustedBySection}`}>
      <div className="row">
        <SvgFeature key="TrustedBySection" {...features} colSize="col--12" />
      </div>
      <div className="row">
        {TrustedByList.map((props, idx) => (
          <SvgFeature key={idx} {...props} quotes={quotes} colSize="col--3" />
        ))}
      </div>
    </div>
  );
}
