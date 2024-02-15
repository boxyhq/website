import Picture from '../Picture';

import './featured-quote.css';

const FeaturedQuote = ({ children, personName, personRole, pictureSrc }) => {
  return (
    <div className="featured-quote">
      <blockquote className="custom-blockquote">{children}</blockquote>
      <div className="featured-quote-reviewer">
        <Picture height="70" pictureSrc={pictureSrc} width="70" />
        <p className="person-details">
          <span className="quote-person-name">{personName}</span>
          <span className="quote-person-role">{personRole}</span>
        </p>
      </div>
    </div>
  );
};

export default FeaturedQuote;
