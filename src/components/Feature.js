import React from 'react';
import clsx from 'clsx';
import styles from './Feature.module.css';

export default function Feature({
  Svg,
  title,
  description,
  url,
  colSize,
  smallSvg = false,
}) {
  return (
    <div className={clsx('col ' + colSize)}>
      <div className="text--center">
        {Svg ? (
          <Svg
            className={smallSvg ? styles.featureSmallSvg : styles.featureSvg}
            alt={title}
          />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <h4>
          {url ? (
            <a href={url} target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
