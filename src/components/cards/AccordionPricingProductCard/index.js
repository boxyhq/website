import clsx from 'clsx';

import './accordion-pricing-product-card.css';

const AccordionPricingProductCard = ({
  children,
  currency,
  name,
  price,
  pricePeriod,
  subtitle,
  title,
  type,
}) => {
  return (
    <details className={clsx('pricing-product-card', type)}>
      <summary className="pricing-product-card-summary">
        <div
          className={clsx(
            'pricing-product-card-summary-wrapper',
            'base-icon-pseudo',
            `icon-${name}`
          )}
        >
          <div className="pricing-product-card-summary-content">
            <h2 className="pricing-product-card-summary-title">{title}</h2>
            <p className="pricing-product-card-summary-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="pricing-product-card-summary-pricing base-icon-pseudo-after icon-chevron-after">
          {currency && price && pricePeriod && (
            <>
              <span className="pricing-product-card-summary-currency">
                {currency}
              </span>
              <span className="pricing-product-card-summary-price">
                {price}
              </span>
              <span className="pricing-product-card-summary-price-period small-text">
                {pricePeriod}
              </span>
            </>
          )}
        </div>
      </summary>
      {children}
    </details>
  );
};

export default AccordionPricingProductCard;
