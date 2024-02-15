import Picture from '../../Picture';

import './card-founder-bio.css';

const CardFounderBio = ({ founder }) => {
  return (
    <div className="founder-bio-card">
      <div className="founder-bio-header">
        <Picture height="280" pictureSrc={founder.pictureSrc} width="280" />
        <h2 className="founders-list-name">{founder.name}</h2>
        <h3 className="founders-list-title">{founder.role}</h3>
        <div className="founder-bio-card-content">
          <ul className="reset-list founder-bio-card-links">
            {founder.linkedin && (
              <li>
                <a
                  className="base-icon-pseudo icon-linkedin"
                  href={`https://www.linkedin.com/in/${founder.linkedin}/`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">Connect on LinkedIn</span>
                </a>
              </li>
            )}
            {founder.x && (
              <li>
                <a
                  className="base-icon-pseudo icon-x"
                  href={`https://www.twitter.com/${founder.x}/`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">Follow on Twitter/X</span>
                </a>
              </li>
            )}
            {founder.github && (
              <li>
                <a
                  className="base-icon-pseudo icon-github"
                  href={`https://www.github.com/${founder.github}/`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="visually-hidden">View on GitHub</span>
                </a>
              </li>
            )}
          </ul>
        </div>
        <div
          className="founder-bio"
          dangerouslySetInnerHTML={{ __html: founder.bio }}
        />
      </div>
    </div>
  );
};

export default CardFounderBio;
