import Layout from '@theme/Layout';

import OurProducts from '../../components/OurProducts';

import '../../css/custom-properties.css';
import '../../css/base.css';

const ProductsOverview = () => {
  const metaDescription =
    'Discover BoxyHQ: Open-source developer tools for SSO and Directory Sync. Enhance product security easily.';
  const metaPageTitle = 'Enterprise SSO, Directory Sync';

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <main>
        <OurProducts centerHeader={true}>
          <h1 className="linear-gradient-text">Our Products</h1>
        </OurProducts>
      </main>
    </Layout>
  );
};

export default ProductsOverview;
