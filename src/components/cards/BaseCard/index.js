import clsx from 'clsx';

import Picture from '../../Picture';

import './base-card.css';

const BaseCard = ({
  children,
  cardImage,
  centered,
  height = '250',
  showCTA = true,
  width = '250',
}) => {
  return (
    <div className="base-card-container">
      <div className={clsx('base-card-content', centered && 'centered')}>
        {cardImage && (
          <Picture pictureSrc={cardImage} height={height} width={width} />
        )}
        {children}
      </div>
      {showCTA && <slot name="base-card-cta" />}
    </div>
  );
};

export default BaseCard;
