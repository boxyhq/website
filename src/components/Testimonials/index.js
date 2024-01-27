import clsx from 'clsx';

import TestimonialEntry from '../TestimonialEntry';

import './testimonials.css';

const Testimonials = ({ light = false }) => {
  const testimonials = [
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
      companyName: 'dub',
      reviewerName: 'Steven Tey',
      reviewerPictureSrc: '/images/success-stories/steven-tey-dub',
      reviewerRole: 'Founder, Dub',
      testimonialURL:
        '/success-stories/safeguarding-trust-boxyhq-sso-enhances-dubs-security',
      testimonialContent:
        "Huge shoutout to BoxyHQ for demystifying esoteric concepts like Enterprise SSO and Directory Sync! I highly recommend checking out their docs – it's an absolute goldmine",
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
    {
      companyName: 'spike.sh',
      reviewerName: 'Kaushik Thirthappa',
      reviewerPictureSrc: '/images/success-stories/kaushik-spike',
      reviewerRole: 'Founder, Spike.sh',
      testimonialURL:
        '/success-stories/spike-boosts-time-to-market-and-enterprise-security-with-boxyhqs-sso-solution',
      testimonialContent:
        "Our job is to ensure we alert our customers every single time and there is no compromise there. BoxyHQ's SSO solution came in as a boon to us at the right time. We could knock out the implementation in record time and start onboarding enterprise customers.",
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
