import Picture from '../Picture';

import './quote-featured-reviewer.css';

const QuoteFeaturedReviewer = ({ height = '70', reviewer, width = '70' }) => {
  return (
    <div class="featured-quote-reviewer">
      <Picture
        height={height}
        pictureSrc={reviewer.reviewerPictureSrc}
        width={width}
      />
      <p class="person-details">
        <span class="quote-person-name">{reviewer.reviewerName}</span>
        <span class="quote-person-role">{reviewer.reviewerRole}</span>
      </p>
    </div>
  );
};

export default QuoteFeaturedReviewer;
