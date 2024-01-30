import clsx from 'clsx';

import Picture from '../Picture';

import '../../css/molecules/product-feature-card.css';

const BaseProductSpotlightSection = ({
  children,
  pictureSrc,
  reversed,
  withMargin,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'product-feature-card-container',
        withMargin && 'top-margin',
        { ...rest }
      )}
    >
      <div
        className={clsx(
          'girdle',
          'product-feature-card',
          reversed && 'reversed'
        )}
      >
        <div className="product-feature-card-image-container">
          <Picture pictureSrc={pictureSrc} height="479" width="479" />
        </div>
        <div className="product-feature-card-content-container">{children}</div>
      </div>
    </div>
  );
};

export default BaseProductSpotlightSection;
