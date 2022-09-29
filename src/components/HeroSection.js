import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const HeroSection = ({ title, description, icon = null, buttons }) => {
  const Icon = icon;

  return (
    <main className="container margin-vert--lg">
      <div className="intro">
        <div className="intro__section">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            {Icon && <Icon style={{ width: '40px', height: '40px' }} />}
            <h1 className="intro__header">{title}</h1>
          </div>
          <p className="intro__description" style={{ marginTop: '30px' }}>
            {description}
          </p>
          <div className="intro__buttons">
            {buttons.map(({ href, title, className }, idx) => (
              <Link
                className={clsx('button button--lg', className)}
                href={href}
                key={idx}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
