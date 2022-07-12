import React from 'react';
import clsx from 'clsx';
import styles from './SvgFeature.module.css';

export default function SvgFeature({ Svg, title, description, url, colSize }) {
  return (
    <div className={clsx('col ' + colSize)}>
      <div className="text--center">
        <a href={url} target="_blank">
          {Svg ? <Svg className={styles.svgFeature} alt={title} /> : null}
        </a>
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
