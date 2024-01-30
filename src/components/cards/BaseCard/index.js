import clsx from 'clsx';

import Picture from '../../Picture';

import './base-card.css';

const BaseCard = ({
  children,
  cardImage,
  centered,
  ctaCopy,
  ctaURL,
  height = '250',
  showCTA = true,
  targetNewWindow = false,
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
      {showCTA && (
        <a
          className="button button-secondary"
          href={ctaURL}
          target={targetNewWindow ? '_blank' : '_self'}
        >
          {ctaCopy}
        </a>
      )}
    </div>
  );
};

export default BaseCard;
