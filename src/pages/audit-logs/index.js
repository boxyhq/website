import clsx from 'clsx';
import Layout from '@theme/Layout';

import BaseProductSpotlightSection from '../../components/BaseProductSpotlightSection';
import HeroAuditLogs from '../../components/heroes/HeroAuditLogs';

const AuditLogs = () => {
  const metaDescription =
    "Explore BoxyHQ's Audit Logs for streamlined compliance and enhanced data monitoring, with an easy-to-use API for secure, enterprise-level event tracking.";
  const metaPageTitle =
    'BoxyHQ Audit Logs: Streamlined Compliance and Data Monitoring';

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
      copy: "Audit logs are a vital tool for companies, especially large enterprises, to monitor data flow and quickly detect any security breaches. For larger enterprises, having robust audit logs is often a non-negotiable requirement. BoxyHQ's Audit Logs provide a comprehensive solution to meet these needs, helping you cater to demanding enterprise customers who prioritize stringent security and compliance standards in their operations.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
    {
      light: false,
      pictureSrc: '/images/products/comprehensive-audit-logs',
      reversed: false,
      title: 'Comprehensive Audit Logs Features',
      ctaCopy: 'Book A Demo',
      copy: "BoxyHQ's turnkey Audit Logs solution goes beyond mere compliance. It's crafted to provide your customers with a full suite of features essential for robust security and operational efficiency. Enjoy the benefits of exportable, immutable, time-synchronised, and easily searchable audit logs. This all-encompassing approach ensures your customers have access to secure, reliable, and comprehensive data tracking, meeting the highest standards of functionality and safety in data management.",
      icon: 'icon-calendar',
      url: 'https://cal.com/deepak-boxyhq/demo',
    },
  ];

  return (
    <Layout title={metaPageTitle} description={metaDescription}>
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
