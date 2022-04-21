import React from 'react';
import Link from '@docusaurus/Link';
import ArrowIcon from '../../static/img/arrow.svg';

export default function GuideSection({ items }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.name} class="col col--3">
          <Link class="card" to={item.href}>
            <div
              class="card__body"
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
