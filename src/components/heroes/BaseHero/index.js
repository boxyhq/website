import Picture from '../../Picture';

import './base-hero.css';

const BaseHero = ({ children, pictureSrc, sectionId, title }) => {
  return (
    <section aria-labelledby={`${sectionId}-title`} className="hero-section">
      <div className="girdle hero">
        <div className="content-container">
          <h1
            className="linear-gradient-text hero-section-title"
            dangerouslySetInnerHTML={{ __html: title }}
            id={`${sectionId}-title`}
          />
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
