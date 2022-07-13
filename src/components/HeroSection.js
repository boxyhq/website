import React from 'react';
import clsx from 'clsx';
import styles from './HeroSection.module.css';
import Link from '@docusaurus/Link';

function HeroText({ main, title, tagline, ctaTitle, ctaLink }) {
  return (
    <div className="col">
      {main ? (
        <h1 className="hero__title">{title}</h1>
      ) : (
        <h2 className="hero__subtitle">{title}</h2>
      )}
      <p className="">{tagline}</p>
      <div className={styles.buttons}>
        <Link className="button button--primary" to={ctaLink}>
          {ctaTitle}
        </Link>
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

function HeroLeft({ main, title, tagline, Svg, ctaTitle, ctaLink }) {
  return (
    <div className="row">
      <HeroImage Svg={Svg} />
      <HeroText
        main={main}
        title={title}
        tagline={tagline}
        ctaTitle={ctaTitle}
        ctaLink={ctaLink}
      />
    </div>
  );
}

function HeroRight({ main, title, tagline, Svg, ctaTitle, ctaLink }) {
  return (
    <div className="row">
      <HeroText
        main={main}
        title={title}
        tagline={tagline}
        ctaTitle={ctaTitle}
        ctaLink={ctaLink}
      />
      <HeroImage Svg={Svg} />
    </div>
  );
}

export default function HeroSection({
  main = false,
  title,
  tagline,
  Svg,
  svgRight = true,
  ctaTitle,
  ctaLink,
}) {
  return (
    <div className={clsx('hero', styles.heroBanner)}>
      {svgRight ? (
        <HeroRight
          main={main}
          title={title}
          tagline={tagline}
          Svg={Svg}
          ctaTitle={ctaTitle}
          ctaLink={ctaLink}
        />
      ) : (
        <HeroLeft
          main={main}
          title={title}
          tagline={tagline}
          Svg={Svg}
          ctaTitle={ctaTitle}
          ctaLink={ctaLink}
        />
      )}
    </div>
  );
}
