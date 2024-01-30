import QuoteFeaturedReviewer from '../QuoteFeaturedReviewer';

import './testimonial-entry.css';

const TestimonialEntry = ({ children, testimonial }) => {
  return (
    <li className="testimonial-entry">
      <div className="testimonial-entry-main">
        <h3 className="testimonial-entry-company">{testimonial.companyName}</h3>
        {children}
      </div>
      <div className="testimonial-footer">
        <QuoteFeaturedReviewer reviewer={testimonial} />
        <a className="testimonial-entry-link" href={testimonial.testimonialURL}>
          Read the success story
        </a>
      </div>
    </li>
  );
};

export default TestimonialEntry;
