import clsx from 'clsx';
import BaseProductSpotlightSection from '../BaseProductSpotlightSection';
import OurProductsHeader from '../OurProductsHeader';

const OurProducts = ({ centerHeader = false }) => {
  const products = [
    {
      light: false,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: false,
      title: 'Enterprise SSO',
      copy: 'Integrate SAML using your favorite OAuth 2.0 or OpenID Connect libraries. Our SSO solution allows you to go from the first line of code to deployment in just a few days, saving you time and effort.',
      icon: 'icon-secure',
      url: '/enterprise-sso',
    },
    {
      light: true,
      pictureSrc: '/images/products/directory-sync',
      reversed: true,
      title: 'Directory Sync',
      copy: 'Integrate with SCIM 2.0 providers using simple webhooks. One simple integration to automate user and group provisioning.',
      icon: 'icon-sync',
      url: '/directory-sync',
    },
    {
      light: false,
      pictureSrc: '/images/products/audit-logs',
      reversed: false,
      title: 'Audit Logs',
      copy: 'Our out-the-box solution is designed not only to make you compliant but give your customers all the functionality and safety they need &mdash; exportable, immutable, time synced and searchable audit logs.',
      icon: 'icon-logs',
      url: '/audit-logs',
    },
    {
      light: true,
      pictureSrc: '/images/products/privacy-vault',
      reversed: true,
      title: 'Privacy Vault',
      copy: 'Taking the best practices from companies like Google, Apple and Facebook, BoxyHQ offers an open-source solution to centralize, isolate and govern all the sensitive data you collect.',
      icon: 'icon-lock',
      url: '/privacy-vault',
    },
  ];

  return (
    <>
      <OurProductsHeader centerHeader={centerHeader} />
      <ul class="reset-list">
        {products.map((product) => (
          <li key={product.url}>
            <BaseProductSpotlightSection
              light={product.light}
              pictureSrc={product.pictureSrc}
              reversed={product.reversed}
            >
              <h2 className="product-feature-card-heading">{product.title}</h2>
              <p>{product.copy}</p>
              <a
                className={clsx(
                  'button',
                  'button-primary',
                  'with-icon',
                  'base-icon-pseudo',
                  product.icon
                )}
                href={product.url}
              >
                Learn more
              </a>
            </BaseProductSpotlightSection>
          </li>
        ))}
      </ul>
    </>
  );
};

export default OurProducts;
