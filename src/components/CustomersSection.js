import React from 'react';
import Link from '@docusaurus/Link';

const customersList = [
  {
    url: 'https://cal.com',
    logo: require('../../static/img/customers/cal.svg').default,
    quote: `It let our team focus on what we do best (democratizing scheduling for everyone) without getting distracted by the needs of our enterprise customers. Did I mention it's open-source and free?`,
  },
  {
    url: 'https://supertokens.com',
    logo: require('../../static/img/customers/supertokens.svg').default,
    quote: `We at SuperTokens needed to provide SAML login to our users, and instead of building it from scratch, we found the perfect open source project - BoxyHQ!`,
  },
  {
    url: 'https://www.salita.no',
    logo: require('../../static/img/customers/salita.svg').default,
    quote: `BoxyHQ helped us implement single sign-on for our government customers in record time, it was exactly what we were looking for. Absolute pleasure working with Deepak and the BoxyHQ team.`,
  },
  {
    url: 'https://www.unosecur.com',
    logo: require('../../static/img/customers/unosecur.svg').default,
    quote: `With BoxyHQ, we can focus on building our core product without worrying too much about the enterprise readiness features. The integration was seamless.`,
  },
];

const SvgIcon = ({ icon, href }) => {
  const Icon = icon;

  return (
    <Link href={href}>
      <Icon style={{ height: '50px', width: '120px' }} />
    </Link>
  );
};

const CustomersSection = () => {
  return (
    <section className="page__section">
      <div className="container">
        <h2
          className="section__header text--center"
          style={{ padding: '10px' }}
        >
          What our customers say
        </h2>
        <div className="row" style={{ marginTop: '30px' }}>
          {customersList.map(({ quote, logo, url }, idx) => (
            <div className="col" key={idx}>
              <div class="col-demo">
                <div className="text--center">
                  <SvgIcon icon={logo} href={url} />
                  <p style={{ fontSize: '15px' }}>
                    <q>{quote}</q>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
