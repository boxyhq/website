import React from 'react';
import clsx from 'clsx';
import styles from './HeroSectionOld.module.css';
import Link from '@docusaurus/Link';

function HeroText({ main, title, tagline, ctas }) {
  return (
    <div className="col">
      {main ? (
        <h1 className="hero__title">{title}</h1>
      ) : (
        <h2 className="hero__subtitle">{title}</h2>
      )}
      <p className="">{tagline}</p>
      <div className={styles.buttons}>
        {ctas.map((cta, idx) => (
          <Link
            key={idx}
            className="button button--primary button--lg"
            to={cta.link}
          >
            {cta.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function HeroImage({ Svg }) {
  return (
    <div className="col">
      <div className={clsx('text--center', styles.svgContainer)}>
        <Svg className={clsx(styles.heroSvg)} alt="" />
      </div>
    </div>
  );
}

function HeroLeft({ main, title, tagline, Svg, ctas }) {
  return (
    <div className="row">
      <HeroImage Svg={Svg} />
      <HeroText main={main} title={title} tagline={tagline} ctas={ctas} />
    </div>
  );
}

function HeroRight({ main, title, tagline, Svg, ctas }) {
  return (
    <div className="row">
      <HeroText main={main} title={title} tagline={tagline} ctas={ctas} />
      <HeroImage Svg={Svg} />
    </div>
  );
}

export default function HeroSectionOld({
  main = false,
  title,
  tagline,
  Svg,
  svgRight = true,
  ctas,
}) {
  return (
    <div className={clsx('hero', styles.heroBanner)}>
      {svgRight ? (
        <HeroRight
          main={main}
          title={title}
          tagline={tagline}
          Svg={Svg}
          ctas={ctas}
        />
      ) : (
        <HeroLeft
          main={main}
          title={title}
          tagline={tagline}
          Svg={Svg}
          ctas={ctas}
        />
      )}
    </div>
  );
}
