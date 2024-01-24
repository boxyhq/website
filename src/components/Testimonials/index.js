import clsx from 'clsx';

import TestimonialEntry from '../TestimonialEntry';

import './testimonials.css';

const Testimonials = ({ light = false }) => {
  const testimonials = [
    {
      companyName: 'Cal.com',
      testimonialURL:
        '/success-stories/accelerating-enterprise-deals-and-conversion-rates-at-calcom-boxyhqs-sso-solution',
      testimonialContent:
        "It let our team focus on what we do best (democratizing scheduling for everyone) without getting distracted by the needs of our enterprise customers. Did I mention it's open-source and free?",
    },
    {
      companyName: 'dub',
      testimonialURL:
        '/success-stories/safeguarding-trust-boxyhq-sso-enhances-dubs-security',
      testimonialContent:
        'BoxyHQ helped us implement single sign-on for our government customers in record time, it was exactly what we were looking for.',
    },
    {
      companyName: 'unicis',
      testimonialURL:
        '/success-stories/boxyhqs-sso-&-audit-logs-accelerate-unicis-towards-soc2-compliance',
      testimonialContent:
        "BoxyHQ's SSO & Audit Logs Accelerate Unicis Towards SOC2 Compliance.",
    },
    {
      companyName: 'unosecur',
      testimonialURL:
        '/success-stories/unosecur-leverages-boxyhqs-security-building-blocks-for-enterprise-peace-of-mind',
      testimonialContent:
        'With BoxyHQ, we can focus on building our core product without worrying too much about the enterprise readiness features. The integration was seamless.',
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
              companyName={testimonial.companyName}
              testimonialURL={testimonial.testimonialURL}
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
