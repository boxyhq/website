import React from 'react';

import SvgIcon from './SvgIcon';
import SectionLayout from './SectionLayout';

const NewsList = [
  {
    title: 'BoxyHQ brings ‘enterprise readiness’ to any SaaS app',
    url: 'https://venturebeat.com/2022/02/23/boxyhq-brings-enterprise-readiness-to-any-saas-app/',
    logo: require('../../static/img/news/vb-logo.svg').default,
  },
  {
    title:
      'This tech startup helps SaaS companies make their products enterprise-ready',
    url: 'https://yourstory.com/2022/03/boxyhq-tech-startup-helps-saas-companies-add-features-enterprise',
    logo: require('../../static/img/news/yourstory-logo.svg').default,
  },
];

const NewsSection = () => {
  return (
    <SectionLayout
      title="In the News"
      style={{ backgroundColor: 'white' }}
      titleStyle={{ color: '#444950' }}
    >
      <div
        className="row"
        style={{
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        {NewsList.map(({ title, url, logo }, idx) => (
          <div className="col col--4" key={idx}>
            <div className="col-demo text--center">
              <div
                style={{
                  minHeight: '70px',
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <SvgIcon icon={logo} url={url} size={{ width: '150px' }} />
              </div>
              <h4 style={{ color: '#444950' }}>{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default NewsSection;
