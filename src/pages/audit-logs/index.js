import clsx from 'clsx';
import Layout from '@theme/Layout';

import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import HeroAuditLogs from '../../components/heroes/HeroAuditLogs';

const AuditLogs = () => {
  const metaDescription =
    'Audit Logs by BoxyHQ: Streamline compliance and enhance application security with easy integration, enabling event recording and search for enterprises.';
  const metaPageTitle =
    'BoxyHQ Audit Logs: Streamlined Compliance and Event Data Monitoring';

  const auditLogBenefits = [
    {
      light: false,
      pictureSrc: '/images/products/audit-logs',
      reversed: false,
      title: 'One Simple API',
      ctaCopy: 'Book A Demo',
      copy: "Empower your enterprise clients with BoxyHQ's Audit Logs API, a streamlined tool for recording and searching application events. Our user-friendly integration fast-tracks compliance, sparing your team the complexity of developing from the ground up. Elevate your application's security and compliance standards effortlessly with BoxyHQ's robust, simple-to-implement solution.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: true,
      pictureSrc: '/images/products/why-audit-logs',
      reversed: true,
      title: 'Why Are Audit Logs Important?',
      ctaCopy: 'Book A Demo',
      copy: 'For all companies but in particular large companies, the ability to monitor the flow of data and be alerted to any breaches is essential. Audit logs help to pinpoint any misuse of information and ensure that data policies are followed. Many larger enterprise customers will demand this as a requirement if you plan to sell to them.',
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/products/comprehensive-audit-logs',
      reversed: false,
      title: 'Comprehensive Audit Logs Features',
      ctaCopy: 'Book A Demo',
      copy: "BoxyHQ's Audit Logs product offers a ready-to-use solution that not only ensures compliance but also provides your customers with comprehensive functionality and security. This includes exportable, immutable, time-synced, and searchable audit logs. Designed for ease of use and efficiency, our audit logs are tailored to meet the rigorous demands of modern enterprises, giving your clients the assurance they need while safeguarding their data.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
  ];

  return (
    <Layout
      title={metaPageTitle}
      description={metaDescription}
      wrapperClassName="marketing-site"
    >
      <HeroAuditLogs />

      <ul class="reset-list">
        {auditLogBenefits.map((benefit) => (
          <li>
            <BaseProductSpotlightSection
              light={benefit.light}
              pictureSrc={benefit.pictureSrc}
              reversed={benefit.reversed}
            >
              <h2 class="product-feature-card-heading">{benefit.title}</h2>
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
    </Layout>
  );
};

export default AuditLogs;
