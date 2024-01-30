import BaseCard from '../cards/BaseCard';

import './panel-discussions.css';

const PanelDiscussions = () => {
  const panelDiscussions = [
    {
      dateTime: '2023-08-07T17:30',
      dateTimeFormatted: 'August 7th, 2023 @ 12:30 PM EST',
      description:
        'Security Engineers are the safeguards for technological advancements, combating cyber threats, and ensuring the privacy and integrity of digital infrastructure. Join our experts as they discuss where we are headed and what the future of security engineering will look like.',
      speakers: [
        'Sonya Moisset (Snyk)',
        'Chris John Riley (Google)',
        'Guillaume Montard (Bearer)',
        'Deepak Prabhakara (BoxyHQ)',
      ],
      title:
        'Sonya Moisett (keynote) + The Future of Security Engineers (panel discussion)',
      videoURL: 'https://youtu.be/PGmJyMJAKl0?feature=shared',
    },
    {
      dateTime: '2023-08-08T18:00',
      dateTimeFormatted: 'August 8th. @ 1 PM EST',
      description:
        'Join us as our experts delve into the transformative trends and cutting-edge innovations reshaping authentication methods, from biometrics and AI-driven approaches to context-aware verification, to secure digital identities and provide seamless user experiences while fortifying online security.',
      speakers: [
        'Randall Degges (Snyk)',
        'Advait Ruia (SuperTokens)',
        'Deepak Prabhakara (BoxyHQ)',
      ],
      title: 'The Future of Authentication (panel discussion)',
      videoURL: 'https://youtu.be/SKBhCe_V27g?feature=shared',
    },
    {
      dateTime: '2023-08-09T17:30',
      dateTimeFormatted: 'August 9th, 2023 @ 12:30 PM EST',
      description:
        'In this session we glimpse into the future of authorization, where we envision dynamic and intelligent access control mechanisms that potentially leverage AI or blockchain technologies to grant appropriate permissions in real-time, mitigating risks and empowering users with precise, context-sensitive authorization.',
      speakers: [
        'Mohini Soodan (Microsoft)',
        'Sameer Kamani (Gitlab)',
        'Alex Olivier (Cerbos)',
        'Deepak Prabhakara (BoxyHQ)',
      ],
      title:
        'Mohini Soodan (keynote) + The Future of Authorization (panel discussion)',
      videoURL: 'https://youtu.be/l1EFMYrIfUk?feature=shared',
    },
    {
      dateTime: '2023-08-10T18:00',
      dateTimeFormatted: 'August 10th, 2023 @ 1 PM EST',
      description:
        "Join our expert panelists' discussion as they highlight the critical significance of data privacy in a data-driven world, exploring emerging privacy regulations, encryption techniques, and privacy-enhancing technologies that will safeguard user information, foster trust, and enable responsible data practices for businesses and individuals alike.",
      speakers: [
        'Joe Toscano (Forbs/Cyber Collective)',
        'Brian Levine (EY Parthenon)',
        'Deepak Prabhakara (BoxyHQ)',
      ],
      title: 'The Future of Data Privacy (panel discussion)',
      videoURL: 'https://youtu.be/4_NitExfFvs?feature=shared',
    },
  ];
  return (
    <section
      aria-labelledby="panel-discussions-title"
      className="panel-discussions-container"
    >
      <h2
        className="panel-discussions-title linear-gradient-text"
        id="panel-discussions-title"
      >
        Panel Discussions
      </h2>
      <p className="panel-discussions-lead">
        BoxyHQ's Developer-First Security Week brings together the brightest
        minds in cybersecurity to explore the industry's future through four
        engaging panel discussions. From August 7th to 10th, join leaders like
        Sonya Moisset (Snyk), Chris John Riley (Google), Randall Degges (Snyk),
        and Deepak Prabhakara (BoxyHQ) as they dissect the evolving roles and
        emerging technologies in security engineering, authentication,
        authorization, and data privacy. These sessions offer a unique
        opportunity to gain insights into the latest trends and innovations
        shaping the security landscape, from AI-driven solutions to evolving
        data privacy regulations. Don't miss the chance to be part of these
        crucial conversations that are redefining the future of digital security
        and privacy.
      </p>
      <ul className="reset-list girdle panel-dicsussions-list">
        {panelDiscussions.map((panelDiscussion) => (
          <li
            className="panel-dicsussions-list-entry"
            key={panelDiscussion.dateTime}
          >
            <BaseCard
              ctaCopy="Watch On YouTube"
              ctaURL={panelDiscussion.videoURL}
            >
              <h2 className="base-card-title">{panelDiscussion.title}</h2>
              <p className="datetime">
                <time datetime={panelDiscussion.dateTime}>
                  {panelDiscussion.dateTimeFormatted}
                </time>
              </p>
              <p>{panelDiscussion.description}</p>
              <h3 className="base-card-secondary-title">Speakers</h3>
              <ul className="speakers-list">
                {panelDiscussion.speakers.map((speaker) => (
                  <li key={speaker}>{speaker}</li>
                ))}
              </ul>
            </BaseCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PanelDiscussions;
