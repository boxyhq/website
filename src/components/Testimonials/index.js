import clsx from 'clsx';

import TestimonialEntry from '../TestimonialEntry';

import './testimonials.css';

const Testimonials = ({ light = false }) => {
  const testimonials = [
    {
      companyName: 'MonkeyFit',
      reviewerName: 'José (Pepo) Arellano',
      reviewerPictureSrc:
        '/images/success-stories/jose-pepo-arellano-monkeyfit',
      reviewerRole: 'CEO & Co-Founder - MonkeyFit',
      testimonialURL:
        '/success-stories/elevating-latam-security-standards-the-monkeyfit-boxyhq-success-story',
      testimonialContent:
        'During development, SAML Jackson provided a well-documented and clear flow for making calls to the tool, reducing time in spikes and R&D compared to a direct integration with identity providers.',
    },
    {
      companyName: 'unosecur',
      reviewerName: 'Santosh Jayaprakash',
      reviewerPictureSrc: '/images/success-stories/santosh-unosecur',
      reviewerRole: 'Co-Founder, Unosecur',
      testimonialURL:
        '/success-stories/how-boxyhq-solutions-drive-business-efficiency-and-security-unosecur',
      testimonialContent:
        'With BoxyHQ, we can focus on building our core product without worrying too much about the enterprise readiness features. We seamlessly integrated the SAML SSO offering to our platform, enabling us to onboard enterprise co-development customers.',
    },
    {
      companyName: 'Cal.com',
      reviewerName: 'Peer Richelsen',
      reviewerPictureSrc: '/images/success-stories/peer-calcom',
      reviewerRole: 'Co-Founder, Cal.com',
      testimonialURL:
        '/success-stories/accelerating-enterprise-deals-and-conversion-rates-at-calcom-boxyhqs-sso-solution',
      testimonialContent:
        "Building enterprise features takes a lot of time and resources, thankfully BoxyHQ packages it up in a box. Their SSO offering is exactly what we needed. It allowed our team to focus on what we do best (democratizing scheduling for everyone) without getting distracted by the needs of our enterprise customers. Did I mention it's open-source and free?",
    },
    {
      companyName: 'unicis',
      reviewerName: 'Predrag Tasevski',
      reviewerPictureSrc: '/images/success-stories/predrag-tasevski-unicis',
      reviewerRole: 'Founder & CEO Unicis.Tech',
      testimonialURL:
        '/success-stories/boxyhqs-sso-&-audit-logs-accelerate-unicis-towards-soc2-compliance',
      testimonialContent:
        "BoxyHQ's solution has helped our team save a lot of time. After implementing BoxyHQ, we no longer needed to develop or integrate an expensive solution to connect to Identity Providers (SSO) and build our own Audit Log service.",
    },
  ];
  return (
    <section
      aria-labelledby="testimonials-title"
      className="testimonials-container"
    >
      <header className="feature-header">
        <h2 className="feature-header-title" id="testimonials-title">
          Testimonials
        </h2>
        <h3 className="feature-header-subtitle linear-gradient-text">
          Customer focused
        </h3>
      </header>
      <div className={clsx('testimonials-list-container', light && 'light')}>
        <ul className="reset-list girdle-medium testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialEntry
              key={testimonial.testimonialURL}
              testimonial={testimonial}
            >
              <p>{testimonial.testimonialContent}</p>
            </TestimonialEntry>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
