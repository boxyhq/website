import SimpleOSSProductCard from '../cards/SimpleOSSProductCard';

import './product-self-hosted.css';

const ProductsSelfHosted = () => {
  return (
    <div className="products-self-hosted">
      <h2 className="products-self-hosted-title">Open Source. Your Choice.</h2>

      <ul className="reset-list oss-product-card-list">
        <li>
          <SimpleOSSProductCard
            name="product-sso"
            subtitle="Enterprise SAML & OIDC authentication and Directory Sync."
            title="Single Sign-On (SSO)"
            url="https://github.com/boxyhq/jackson"
          />
        </li>
        <li>
          <SimpleOSSProductCard
            name="product-audit-logs"
            subtitle="Open source audit logs service and embeddable UI easily deployed to your own cluster."
            title="Audit Logs"
            url="https://github.com/retracedhq/retraced"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProductsSelfHosted;
