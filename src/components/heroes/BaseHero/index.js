import clsx from 'clsx';

import Picture from '../../Picture';

import './base-hero.css';

const BaseHero = ({
  centered,
  children,
  pictureSrc,
  reduced,
  sectionId,
  subtitle,
  title,
}) => {
  return (
    <section aria-labelledby={`${sectionId}-title`} className="hero-section">
      <div className={clsx('girdle', 'hero', reduced && 'reduced')}>
        <div className={clsx('content-container', centered && 'centered')}>
          <h1
            className="linear-gradient-text hero-section-title"
            dangerouslySetInnerHTML={{ __html: title }}
            id={`${sectionId}-title`}
          />
          {subtitle && (
            <h2
              className="hero-section-subtitle"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          {children}
        </div>
        {pictureSrc && (
          <div className="hero-image-container">
            <Picture pictureSrc={pictureSrc} height="725" width="725" />
          </div>
        )}
      </div>
    </section>
  );
};

export default BaseHero;
