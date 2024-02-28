import Picture from '../Picture';

import './quote-featured-reviewer.css';

const QuoteFeaturedReviewer = ({ height = '70', reviewer, width = '70' }) => {
  return (
    <div className="featured-quote-reviewer quote-featured">
      <Picture
        height={height}
        pictureSrc={reviewer.reviewerPictureSrc}
        width={width}
      />
      <p className="person-details">
        <span className="quote-person-name">{reviewer.reviewerName}</span>
        <span className="quote-person-role">{reviewer.reviewerRole}</span>
      </p>
    </div>
  );
};

export default QuoteFeaturedReviewer;
