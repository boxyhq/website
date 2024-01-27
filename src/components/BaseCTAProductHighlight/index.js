import './base-cta-product-highlight.css';

const BaseCTAProductHighlight = ({
  children,
  ctaTargertURL,
  ctaTargertCopy,
  icon = 'boxy',
  sectionId,
  subtitle,
  targetNewWindow = false,
  title,
}) => {
  return (
    <section aria-labelledby={`${sectionId}-title`} class="product-highlight">
      <header class="feature-header">
        <h2 class="feature-header-title" id={`${sectionId}-title`}>
          {title}
        </h2>
        <h3 class="feature-header-subtitle linear-gradient-text">{subtitle}</h3>
      </header>
      <div class="product-highlight-content">
        {children}
        <a
          class={`button button-secondary-filled with-icon base-icon-pseudo icon-${icon}`}
          href={ctaTargertURL}
          target={targetNewWindow ? '_blank' : '_self'}
        >
          {ctaTargertCopy}
        </a>
      </div>
    </section>
  );
};

export default BaseCTAProductHighlight;
