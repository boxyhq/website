import React from 'react';
import clsx from 'clsx';
import styles from './HeroSection.module.css';
import Link from '@docusaurus/Link';

function HeroText({ title, tagline, ctaTitle, ctaLink }) {
  return (
    <div className="col">
      <h1 className="hero__title">{title}</h1>
      <p className="hero__subtitle">{tagline}</p>
      <div className={styles.buttons}>
        <Link className="button button--primary button--lg" to={ctaLink}>
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

function HeroLeft({ title, tagline, Svg, ctaTitle, ctaLink }) {
  return (
    <div className="row">
      <HeroImage Svg={Svg} />
      <HeroText
        title={title}
        tagline={tagline}
        ctaTitle={ctaTitle}
        ctaLink={ctaLink}
      />
    </div>
  );
}

function HeroRight({ title, tagline, Svg, ctaTitle, ctaLink }) {
  return (
    <div className="row">
      <HeroText
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
          title={title}
          tagline={tagline}
          Svg={Svg}
          ctaTitle={ctaTitle}
          ctaLink={ctaLink}
        />
      ) : (
        <HeroLeft
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
