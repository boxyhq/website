import clsx from 'clsx';

import './base-cta-product-highlight.css';

const BaseCTAProductHighlight = ({
  children,
  ctaTargertURL,
  ctaTargertCopy,
  darkMode = false,
  icon = 'boxy',
  sectionId,
  subtitle,
  targetNewWindow = false,
  title,
}) => {
  return (
    <section
      aria-labelledby={`${sectionId}-title`}
      className={clsx('product-highlight', darkMode && 'dark')}
    >
      <header className="feature-header">
        <h2
          className="feature-header-title"
          dangerouslySetInnerHTML={{ __html: title }}
          id={`${sectionId}-title`}
        />

        {subtitle && (
          <h3 className="feature-header-subtitle linear-gradient-text">
            {subtitle}
          </h3>
        )}
      </header>
      <div className="product-highlight-content">
        {children}
        {ctaTargertURL && ctaTargertCopy && (
          <a
            className={`button button-secondary-filled with-icon base-icon-pseudo icon-${icon}`}
            href={ctaTargertURL}
            target={targetNewWindow ? '_blank' : '_self'}
          >
            {ctaTargertCopy}
          </a>
        )}
      </div>
    </section>
  );
};

export default BaseCTAProductHighlight;
