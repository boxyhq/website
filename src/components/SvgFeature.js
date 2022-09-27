import React from 'react';
import clsx from 'clsx';
import styles from './SvgFeature.module.css';

export default function SvgFeature({
  Svg,
  png,
  quote,
  url,
  colSize,
  quotes,
  title,
  loading,
}) {
  return (
    <div className={clsx('col ' + colSize)}>
      {Svg ? (
        <div className="text--center">
          <a href={url} target="_blank">
            <Svg className={styles.svgFeature} alt={url} />
          </a>
        </div>
      ) : png ? (
        <div className="text--center">
          <a href={url} target="_blank">
            <img className={styles.pngFeature} src={png} loading={loading} />
          </a>
        </div>
      ) : null}
      {quotes ? (
        <div className="text--center padding-horiz--md">
          <p className={styles.pFeature}>{quote}</p>
        </div>
      ) : null}
      <div className="text--center padding-horiz--md">
        <h4 className={styles.pFeature}>
          {url ? (
            <a href={url} target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
      </div>
    </div>
  );
}
