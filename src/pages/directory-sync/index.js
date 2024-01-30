import clsx from 'clsx';

import Layout from '@theme/Layout';

import BaseCTAProductHighlight from '../../components/BaseCTAProductHighlight';
import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import HeroDirectorySync from '../../components/heroes/HeroDirectorySync';

const DirectorySync = () => {
  const metaDescription =
    "Integrate Directory Sync swiftly with BoxyHQ's SCIM 2.0 compliant API. Automate user provisioning with our secure, open-source solution and elevate your enterprise's efficiency.";
  const metaPageTitle = 'Directory Sync With SCIM 2.0 Protocol Support';

  const directorySyncBenefits = [
    {
      light: false,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: false,
      title: 'Streamline Your Data Alignment',
      ctaCopy: 'Book A Demo',
      copy: "BoxyHQ's Custom Mapping simplifies attribute integration, enabling seamless alignment with your data needs. Ideal for managing user profiles or group data, our tool ensures efficient, accurate data synchronization with various identity providers, enhancing your enterprise's operational effectiveness.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: true,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: true,
      title: 'Customized Data Handling',
      ctaCopy: 'Read More',
      copy: "Efficiently fetch and manipulate data across various entities with BoxyHQ's Bespoke Requests. Tailored for diverse operational requirements, this feature provides the flexibility to handle data exactly as your enterprise needs, ensuring optimal data management efficiency.",
      icon: 'icon-docs',
      url: '/blog/understanding-scim-and-directory-sync',
    },
    {
      light: false,
      pictureSrc: '/images/products/enterprise-sso',
      reversed: false,
      title: 'Streamline Data, Uniform Integration',
      ctaCopy: 'Read More',
      copy: 'BoxyHQ enables seamless data access and integration, facilitating standardized data management across your enterprise. This feature ensures consistency and efficiency in handling diverse data sets, streamlining your operational workflows.',
      icon: 'icon-docs',
      url: '/blog/understanding-scim-and-directory-sync',
    },
  ];

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroDirectorySync />

      <main>
        <BaseCTAProductHighlight
          ctaTargertURL="https://cal.com/deepak-boxyhq/demo"
          ctaTargertCopy="Book A Demo"
          sectionId="directory-sync-booking"
          subtitle="Lifecycle Control"
          title="Enterprise Ready"
          targetNewWindow={true}
        >
          <p>
            Empower your enterprise clients with advanced user lifecycle
            management through Directory Sync by BoxyHQ. Integrating with
            existing directories, such as Active Directory, enhances security
            and centralizes user access management within your product. BoxyHQ's
            Directory Sync API is the key to unlocking efficient and secure user
            lifecycle oversight, offering an essential service for enterprises
            aiming to streamline their identity management processes.
          </p>
        </BaseCTAProductHighlight>

        <ul className="reset-list">
          {directorySyncBenefits.map((benefit) => (
            <li key={benefit.title}>
              <BaseProductSpotlightSection
                light={benefit.light}
                pictureSrc={benefit.pictureSrc}
                reversed={benefit.reversed}
              >
                <h2 className="product-feature-card-heading">
                  {benefit.title}
                </h2>
                <p>{benefit.copy}</p>
                <a
                  className={clsx(
                    'button',
                    'button-primary',
                    'with-icon',
                    'base-icon-pseudo',
                    benefit.icon
                  )}
                  href={benefit.url}
                  target={benefit.url.startsWith('http') ? '_blank' : '_self'}
                >
                  {benefit.ctaCopy}
                </a>
              </BaseProductSpotlightSection>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default DirectorySync;
