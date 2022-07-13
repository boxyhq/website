import React from 'react';
import SvgFeature from './SvgFeature';
import styles from './NewsSection.module.css';

const NewsList = [
  {
    title: <>BoxyHQ brings ‘enterprise readiness’ to any SaaS app</>,
    url: 'https://venturebeat.com/2022/02/23/boxyhq-brings-enterprise-readiness-to-any-saas-app/',
    Svg: require('../../static/img/news/vb-logo.svg').default,
  },
  {
    title: (
      <>
        This tech startup helps SaaS companies make their products
        enterprise-ready
      </>
    ),
    url: 'https://yourstory.com/2022/03/boxyhq-tech-startup-helps-saas-companies-add-features-enterprise',
    Svg: require('../../static/img/news/yourstory-logo.svg').default,
  },
];

const NewsMain = {
  title: <>In the News</>,
  description: 'A few of the stories about BoxyHQ in the press',
};

export default function NewsSection() {
  return (
    <div className={`${styles.newsSection}`}>
      <div className="row">
        <SvgFeature key="NewsSection" {...NewsMain} colSize="col--12" />
      </div>
      <div className="row">
        {NewsList.map((props, idx) => (
          <SvgFeature key={idx} {...props} colSize="col--6" smallSvg={true} />
        ))}
      </div>
    </div>
  );
}
