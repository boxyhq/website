import clsx from 'clsx';

import './simple-oss-product-card.css';

const SimpleOSSProductCard = ({ name, subtitle, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'simple-oss-product-card',
        'base-icon-pseudo',
        `icon-${name}`
      )}
    >
      <div className="simple-oss-product-card-content">
        <h2 className="simple-oss-product-card-title">{title}</h2>
        <p className="simple-oss-product-card-subtitle">{subtitle}</p>
      </div>
    </a>
  );
};

export default SimpleOSSProductCard;
