import CardSpeakerBio from '../cards/CardSpeakerBio';

import './guest-speakers.css';

const GuestSpeakers = () => {
  const speakers = [
    {
      company: 'EY Parthenon',
      companyURL: 'https://www.ey.com/en_gl/services/strategy/parthenon',
      linkedin: 'brian-levine-cyberlaw',
      name: 'Brian Levine',
      pictureSrc: '/images/speakers/brian-levine-ey-parthenon',
      role: 'Director, Cybersecurity &amp; Data Privacy',
    },
    {
      company: 'Google',
      companyURL: 'http://www.google.com/',
      linkedin: 'chrisjohnriley',
      name: 'Chris John Riley',
      pictureSrc: '/images/speakers/chris-john-riley-google',
      role: 'Staff Security Engineer',
    },
    {
      company: 'BoxyHQ',
      companyURL: 'https://www.boxyhq.com/',
      linkedin: 'deepakp',
      name: 'Deepak Prabhakara',
      pictureSrc: '/images/speakers/deepak-prabhakara-boxyhq',
      role: 'CEO',
    },
    {
      company: 'Snyk',
      companyURL: 'http://snyk.io',
      linkedin: 'sonyamoisset',
      name: 'Sonya Moisset',
      pictureSrc: '/images/speakers/sonya-moisset-snyk',
      role: 'Senior Developer Advocate',
    },
    {
      company: 'SuperTokens',
      companyURL: 'http://supertokens.com',
      linkedin: 'advait-ruia-2aa52a85',
      name: 'Advait Ruia',
      pictureSrc: '/images/speakers/advait-ruia-supertokens',
      role: 'Co-Founder',
    },
    {
      company: 'Microsoft',
      companyURL: 'https://microsoft.com',
      linkedin: 'mohini-soodan-47604958',
      name: 'Mohini Soodan',
      pictureSrc: '/images/speakers/mohini-soodan-microsoft',
      role: 'Senior Security Architect',
    },
    {
      company: 'Gitlab',
      companyURL: 'http://gitlab.com',
      linkedin: 'sameer-kamani-0149',
      name: 'Sameer Kamani',
      pictureSrc: '/images/speakers/sameer-kamani-gitlab',
      role: 'Federal Staff Solutions Architect',
    },
    {
      company: 'Snyk',
      companyURL: 'http://snyk.io',
      linkedin: 'rdegges',
      name: 'Randall Degges',
      pictureSrc: '/images/speakers/randall-degges-snyk',
      role: 'Head of Developer Relations',
    },
    {
      company: 'Cerbos',
      companyURL: 'http://cerbos.dev/',
      linkedin: 'alexolivier',
      name: 'Alex Olivier',
      pictureSrc: '/images/speakers/alex-olivier-cerbos',
      role: 'Product',
    },
    {
      company: 'DataGrade',
      companyURL: 'http://datagrade.com/',
      linkedin: 'realjoet',
      name: 'Joe Toscano',
      pictureSrc: '/images/speakers/joe-toscano-datagrade',
      role: 'Founder, CEO',
    },
    {
      company: 'Bearer',
      companyURL: 'http://bearer.com/',
      linkedin: 'guillaumemontard',
      name: 'Guillaume Montard',
      pictureSrc: '/images/speakers/guillaume-montard-bearer',
      role: 'Founder, CEO',
    },
  ];

  return (
    <section
      aria-labelledby="guest-speakers-title"
      className="guest-speakers-container"
      id="speakers"
    >
      <header className="girdle">
        <h2
          className="guest-speakers-title linear-gradient-text"
          id="guest-speakers-title"
        >
          World-Class <br /> Guest Speakers
        </h2>
      </header>

      <div className="guest-speakers-list-wrapper">
        <ul className="reset-list girdle guest-speakers-list">
          {speakers.map((speaker) => (
            <li className="guest-speaker-bio" key={speaker.company}>
              <CardSpeakerBio speaker={speaker} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GuestSpeakers;
