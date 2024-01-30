import BaseHero from '../BaseHero';

const HeroDeveloperFirstSecurityWeek = () => {
  return (
    <BaseHero
      pictureSrc="/images/heroes/developer-first-security-week-hero"
      sectionId="directory-sync"
      title="Developer First Security Week"
    >
      <p>
        Be part of an exciting journey at BoxyHQ’s Developer-First Security
        Week, from August 7-11, 2023. This event marks a week-long celebration
        of the 'Shift Left' approach, uniting developers and security
        professionals in a common goal. Dive into an array of compelling talks
        and discussions designed to empower developers with the skills and
        insights needed to embed security into the very heart of software
        development. Stay ahead of the curve with the latest trends and best
        practices, and discover cutting-edge solutions for building secure and
        resilient software. Join us in reshaping the future of software security
        &mdash; where robust protection becomes an integral, effortless aspect
        of every developer’s workflow.
      </p>
      <ul className="reset-list button-container">
        <li>
          <a
            className="button button-secondary with-icon base-icon-pseudo icon-youtube"
            href="https://www.youtube.com/playlist?list=PLYY5NdbX3tI9_zNsAmrxp6pZCtlwnSDhy"
          >
            Watch On YouTube
          </a>
        </li>
        <li>
          <a
            className="button button-primary with-icon base-icon-pseudo icon-person"
            href="#speakers"
          >
            Speakers
          </a>
        </li>
      </ul>
    </BaseHero>
  );
};

export default HeroDeveloperFirstSecurityWeek;
