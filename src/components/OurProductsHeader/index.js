import clsx from 'clsx';

const OurProductsHeader = ({ centerHeader = false }) => {
  return (
    <div className={clsx('girdle', 'main-page-lead', centerHeader && 'center')}>
      <h1 className="linear-gradient-text">Our Products</h1>
      <p className="main-page-lead-copy">
        Explore BoxyHQ's suite of developer-focused security solutions
        Streamline enterprise authentication with{' '}
        <abbr title="Sign Sign-On">SSO</abbr>, manage user access with Directory
        Sync, secure data with Privacy Vault, and track activities with Audit
        Logs. Open-source, self-hosted, or SaaS, enhance your product's security
        and compliance effortlessly.
      </p>
    </div>
  );
};

export default OurProductsHeader;
