import React from 'react';
import Link from '@docusaurus/Link';

const HeroSection = ({ title, description, icon }) => {
  const ProductIcon = icon;

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
            <ProductIcon style={{ width: '40px', height: '40px' }} />
            <h1 className="intro__header">{title}</h1>
          </div>
          <p className="intro__description" style={{ marginTop: '30px' }}>
            {description}
          </p>
          <div className="intro__buttons">
            <Link
              className="button button--primary button--lg"
              href="https://meetings.hubspot.com/deepakprab/demo"
            >
              Book a demo
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/jackson/overview"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
