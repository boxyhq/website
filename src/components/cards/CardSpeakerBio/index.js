import Picture from '../../Picture';

import './card-speaker-bio.css';

const CardSpeakerBio = ({ speaker }) => {
  return (
    <div className="speaker-bio-card">
      <header className="speaker-bio-header">
        <Picture height="280" pictureSrc={speaker.pictureSrc} width="280" />
        <h3 className="speaker-name">{speaker.name}</h3>

        <p>
          <span>{speaker.role}</span>
          <a className="speaker-company" href={speaker.companyURL}>
            {speaker.company}
          </a>
        </p>
      </header>
      <a
        className="button button-secondary with-icon base-icon-pseudo icon-linkedin"
        href={`https://www.linkedin.com/in/${speaker.linkedin}/`}
        target="_blank"
      >
        Connect on LinkedIn
      </a>
    </div>
  );
};

export default CardSpeakerBio;
