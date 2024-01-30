import PricingCardsPremiumSelfHosted from '../PricingCardsPremiumSelfHosted';
import SimpleOSSProductCard from '../cards/SimpleOSSProductCard';

import './product-self-hosted.css';

const ProductsSelfHosted = ({ showHubSpotForm }) => {
  return (
    <div className="products-self-hosted">
      <h2 className="products-self-hosted-title linear-gradient-text">
        Self Hosted
      </h2>

      <p className="lead-outro">
        At BoxyHQ, we offer the flexibility to choose how you deploy our
        solutions. While our SaaS offering provides convenience and ease of use,
        we also understand the unique needs of businesses that prefer greater
        control. Thanks to our open-source core, you have the option to
        self-host our products.
      </p>

      <h3 className="linear-gradient-text">Self Hosted Premium</h3>

      <PricingCardsPremiumSelfHosted showHubSpotForm={showHubSpotForm} />

      <h3 className="linear-gradient-text">Free Forever</h3>

      <ul className="reset-list oss-product-card-list">
        <li>
          <SimpleOSSProductCard
            name="product-sso"
            subtitle="Enterprise SAML & OIDC authentication and Directory Sync via the SCIM 2.0 protocol."
            title="Single Sign-On (SSO) and Directory Sync"
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
