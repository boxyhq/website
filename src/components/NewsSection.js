import React from 'react';
import Link from '@docusaurus/Link';

const NewsList = [
  {
    title: 'BoxyHQ brings ‘enterprise readiness’ to any SaaS app',
    url: 'https://venturebeat.com/2022/02/23/boxyhq-brings-enterprise-readiness-to-any-saas-app/',
    logo: 'img/news/vb-logo.svg',
  },
  {
    title:
      'This tech startup helps SaaS companies make their products enterprise-ready',
    url: 'https://yourstory.com/2022/03/boxyhq-tech-startup-helps-saas-companies-add-features-enterprise',
    logo: 'img/news/yourstory-logo.svg',
  },
];

const NewsSection = () => {
  return (
    <section className="page__section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-demo text--center">
              <h2 className="section__header" style={{ padding: '10px' }}>
                In the News
              </h2>
              <p>A few of the stories about BoxyHQ in the press</p>
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
                  <Link href={url}>
                    <img src={logo} style={{ width: '150px' }} />
                  </Link>
                </div>
                <h4>{title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
