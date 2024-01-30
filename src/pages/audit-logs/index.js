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
      copy: 'With Audit Logs by BoxyHQ, you provide enterprise customers with the ability to record and search events that happen on your application. With our simple integration, you can become compliant fast and save your team from building complex solutions from scratch.',
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
      copy: 'Our out-of-the-box solution is designed not only to make you compliant but give your customers all the functionality and safety they need - exportable, immutable, time-synced, and searchable audit logs.',
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

      <ul className="reset-list">
        {auditLogBenefits.map((benefit) => (
          <li key={benefit.title}>
            <BaseProductSpotlightSection
              light={benefit.light}
              pictureSrc={benefit.pictureSrc}
              reversed={benefit.reversed}
            >
              <h2 className="product-feature-card-heading">{benefit.title}</h2>
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
