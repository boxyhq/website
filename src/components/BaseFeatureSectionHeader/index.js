import clsx from 'clsx';

import '../../css/atoms/feature-header.css';

const BaseFeatureSectionHeader = ({
  children,
  linearTitle = false,
  reverse = true,
  subtitle,
  title,
  withMargin,
}) => {
  return (
    <header
      className={clsx(
        'feature-header',
        withMargin && 'with-margin',
        reverse && 'reverse'
      )}
    >
      {title && (
        <h2
          className={clsx(
            'feature-header-title',
            linearTitle && 'linear-gradient-text'
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="feature-header-subtitle linear-gradient-text">
          {subtitle}
        </h3>
      )}
      {children}
    </header>
  );
};

export default BaseFeatureSectionHeader;
