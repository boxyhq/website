import './testimonial-entry.css';

const TestimonialEntry = ({ children, companyName, testimonialURL }) => {
  return (
    <li className="testimonial-entry">
      <div className="testimonial-entry-main">
        <h3 className="testimonial-entry-company">{companyName}</h3>
        {children}
      </div>
      <a className="testimonial-entry-link" href={testimonialURL}>
        Read the success story
      </a>
    </li>
  );
};

export default TestimonialEntry;
