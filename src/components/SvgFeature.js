import React from 'react';
import clsx from 'clsx';
import styles from './SvgFeature.module.css';

export default function SvgFeature({ Svg, quote, url, colSize, quotes }) {
  return (
    <div className={clsx('col ' + colSize)}>
      <div className="text--center">
        <a href={url} target="_blank">
          {Svg ? <Svg className={styles.svgFeature} alt={url} /> : null}
        </a>
      </div>
      {quotes ? (
        <div className="text--center padding-horiz--md">
          <p>{quote}</p>
        </div>
      ) : null}
    </div>
  );
}
