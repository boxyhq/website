import Picture from '../../Picture';

import './card-founder-bio.css';

const CardFounderBio = ({ founder }) => {
  return (
    <div className="founder-bio-card">
      <Picture height="280" pictureSrc={founder.pictureSrc} width="280" />
      <h2 className="founders-list-name">{founder.name}</h2>
      <h3 className="founders-list-title">{founder.role}</h3>
      <div className="founder-bio-card-content">
        <ul className="reset-list founder-bio-card-links">
          <li>
            <a
              className="button button-secondary with-icon base-icon-pseudo icon-linkedin"
              href={`https://www.linkedin.com/in/${founder.linkedin}/`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
          </li>
          {founder.github && (
            <li>
              <a
                className="button button-secondary with-icon base-icon-pseudo icon-github"
                href={`https://www.github.com/${founder.github}/`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Follow on GitHub
              </a>
            </li>
          )}
        </ul>
        <div
          className="founder-bio"
          dangerouslySetInnerHTML={{ __html: founder.bio }}
        />
      </div>
    </div>
  );
};

export default CardFounderBio;
