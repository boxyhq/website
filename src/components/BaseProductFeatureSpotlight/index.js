import clsx from 'clsx';

import Picture from '../Picture';

import '../../css/atoms/feature-header.css';
import '../../css/molecules/product-feature-card.css';

import './base-product-feature-spotlight.css';

const BaseProductFeatureSpotlight = ({
  children,
  pictureSrc,
  sectionId,
  subtitle,
  title,
  withMargin,
}) => {
  return (
    <section
      aria-labelledby={`${sectionId}-title`}
      className={clsx([
        'product-feature-spotlight',
        withMargin && 'top-margin',
      ])}
    >
      <header className="feature-header">
        <h2 className="feature-header-title" id={`${sectionId}-title`}>
          {title}
        </h2>
        <h3 className="feature-header-subtitle linear-gradient-text">
          {subtitle}
        </h3>
      </header>
      <div className="product-feature-card-container">
        <div className="girdle product-feature-card">
          <div className="product-feature-card-image-container">
            <Picture pictureSrc={pictureSrc} height="479" width="479" />
          </div>
          <div className="product-feature-card-content-container">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseProductFeatureSpotlight;
