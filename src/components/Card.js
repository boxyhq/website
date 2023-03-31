import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import SvgIcon from './SvgIcon';

const Card = ({ idx, icon, title, description, url, btnText, colClass }) => {
  return (
    <div
      className={'col ' + (colClass ? colClass : 'col--4')}
      style={{ marginBottom: '30px' }}
      key={idx}
    >
      <div className="card-demo">
        <div className="card">
          <div className="card__header">
            <div className="card__image">
              <div className="avatar avatar--vertical">
                <div
                  className="avatar__photo avatar__photo--lg"
                  style={{ borderRadius: '0px' }}
                >
                  <SvgIcon
                    icon={icon}
                    size={{ width: '64px', height: '64px' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card__body">
            <h4 className="text--center" style={{ fontSize: '20px' }}>
              {title}
            </h4>
            <p
              className="text--center"
              style={{ fontSize: '16px', minHeight: '5.5rem' }}
            >
              {description}
            </p>
          </div>
          <div className="card__footer">
            <Link
              to={url}
              className={clsx(
                'button button--primary button--block button--outline',
                {
                  disabled: !url,
                }
              )}
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
