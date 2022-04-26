import React from 'react';
import Link from '@docusaurus/Link';
import ArrowIcon from '../../static/img/arrow.svg';

export default function GuideSection({ items }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.name} className="col col--3">
          <Link className="card" to={item.href}>
            <div
              className="card__body"
              style={{ display: 'flex', gap: 20, alignItems: 'center' }}
            >
              <ArrowIcon
                width="30"
                style={{ display: 'block', maxHeight: 30 }}
              />
              <p>{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
