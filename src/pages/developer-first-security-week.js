import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { Modal } from '../components/Modal';
import HeroSection from '../components/HeroSection';
import SectionLayout from '../components/SectionLayout';
import LinkedInLogo from '/img/developer-first-security-week-images/linkedIn_logo.png'

const title = 'BoxyHQ for Startups';
const description = 'Developer First Security Week';

const DeveloperSecurityWeek = () => {
  const [opened, setOpened] = useState(false);
  const [eventId, setEventId] = useState(null);

  return (
    <Layout title={title} description={description}>
       <SectionLayout style={{ marginBottom: '-40px'}}>
        <div>
          <p style={{ textAlign: 'center', fontSize: '70px', fontWeight: 'bold', marginBottom: '-5px', marginTop: '-50px' }}>
            The Developer-First Security Week
          </p>
          <h3 style={{ textAlign: 'center' }}>
            Powered by BoxyHQ
          </h3>
        
        </div>
       </SectionLayout>
      <HeroSection
        title=""
        description="Join us for the Developer-First Security Week, August 7-11 and register early for a week-long celebration of Shift Left, where developers and security come together. Explore a multitude of engaging talks and discussions aimed at empowering developers to prioritize security from the start. Discover the latest trends, best practices, and innovative solutions to build secure software. Let's make security a seamless part of every developer's journey!"
        image="/img/developer-first-security-week-images/DevFirstSecWeekFlyer.svg"
        imageWidth={null}
        buttons={[
          {
            href: '#register',
            title: 'Register Now',
            className: 'button button--primary',
          },
          {
            href: '#speakers',
            title: 'Speakers',
            className: 'button--primary button--outline',
          },
        ]}
      />

      <div id="register">
     
        <SectionLayout
          title="World class guest speakers!"
          description="Panel Discussions"
          id="register"
        >
          <div className="row">
            <Event
              setEventId={() => {
                setEventId('fx4hdxDwCpaK');
                setOpened(true);
              }}
              title="The Future of Security Engineers"
              date="August 7th. @ 1 PM EST"
              description="Security Engineers are the safeguards for technological advancements, combating cyber threats, and ensuring the privacy and integrity of digital infrastructure. Join our experts as they discuss where we are headed and what the future of security engineering will look like." 
              speakers="Speakers:"
              speakerNames="Chris John Riley / Guillaume Montard / Deepak Prabhakara"
            />
            <Event
              setEventId={() => {
                setEventId('PKN33MW2nys3');
                setOpened(true);
              }}
              title="The Future of Authentication"
              date="August 8th. @ 1 PM EST"
              description="Join us as our experts delve into the transformative trends and cutting-edge innovations reshaping authentication methods, from biometrics and AI-driven approaches to context-aware verification, to secure digital identities and provide seamless user experiences while fortifying online security."
              speakers="Speakers:"
              speakerNames="Randall Degges / Advait Ruia / Deepak Prabhakara"
            />
            <Event
              setEventId={() => {
                setEventId('wjhKi73A28vu');
                setOpened(true);
              }}
              title="The Future of Authorization"
              date="August 9th. @ 1 PM EST"
              description="In this session we glimpse into the future of authorization, where we envision dynamic and intelligent access control mechanisms that potentially leverage AI or blockchain technologies to grant appropriate permissions in real-time, mitigating risks and empowering users with precise, context-sensitive authorization."
              speakers="Speakers:"
              speakerNames="Alex Olivier / Deepak Prabhakara"
            />
            <Event
              setEventId={() => {
                setEventId('sZGB3SxB5GcH');
                setOpened(true);
              }}
              title="The Future of Data Privacy"
              date="August 10th. @ 1 PM EST"
              description="Join our expert panelists' discussion as they highlight the critical significance of data privacy in a data-driven world, exploring emerging privacy regulations, encryption techniques, and privacy-enhancing technologies that will safeguard user information, foster trust, and enable responsible data practices for businesses and individuals alike."
              speakers="Speakers:"
              speakerNames="Joe Toscano / Brian Levine / Deepak Prabhakara"
            />
          </div>
          
        </SectionLayout>
      </div>
      <SectionLayout title="Guest Speakers" description="">
        <Speakers />
      </SectionLayout>

      <Modal opened={opened} setOpened={setOpened}>
        <div
          style={{
            width: '100%',
            height: '0px',
            position: 'relative',
            paddingBottom: '96.25%',
          }}
          id="streamyardForm1"
        >
          <iframe
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: '0px',
              overflow: 'hidden',
            }}
            src={`https://streamyard.com/watch/${eventId}?embed=true`}
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>

      <DeveloperCommunitySectionAlt />
    </Layout>
  );
};

const Event = ({ title, date, description, speakers, speakerNames, setEventId }) => {
  return (
    <div className="col col--6" style={{ marginBottom: '30px' }}>
      <div className="card-demo">
        <div className="card padding--md">
          <div className="card__header text--center">
            <h2 className="text--primary">{title}</h2>
            <h3>{date}</h3>
          </div>
          <div className="card__body">
            <p className="text--center">{description}</p>
          </div>
          <div className="card__body">
            <p style={{ fontWeight: 'bold', fontSize: '17px', marginBottom: '-15px', marginTop: '-15px' }} className="text--center">{speakers}</p>
          </div>
          <div className="card__body">
            <p style={{ fontWeight: 'bold', fontSize: '17px' }} className="text--center">{speakerNames}</p>
          </div>
          <div className="card__footer text--center">
            <button
              className="button button--primary button--solid"
              onClick={setEventId}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  const speakers = [
    {
      name: 'Brian Levine',
      title: 'Managing Director, Cybersecurity & Data Privacy @ EY-Parthenon',
      avatar: '/img/developer-first-security-week-images/brian-levine-ey-parthenon.jpeg',
      socials: 'https://www.linkedin.com/in/brian-levine-cyberlaw/'
    },
    {
      name: 'Chris John Riley',
      title: 'Staff Security Engineer @ Google',
      avatar: '/img/developer-first-security-week-images/chris-john-riley-google.png',
      socials: 'https://www.linkedin.com/in/chrisjohnriley/'
    },
    {
      name: 'Deepak Prabhakara',
      title: 'CEO @ BoxyHQ',
      avatar: '/img/developer-first-security-week-images/deepak-prabhakara-boxyhq.jpeg',
      socials: 'https://www.linkedin.com/in/deepakp/'
    },
    {
      name: 'Advait Ruia',
      title: 'Co-Founder @ SuperTokens',
      avatar:
        'img/developer-first-security-week-images/advait-ruia-supertokens.jpeg',
      socials: 'https://www.linkedin.com/in/advait-ruia-2aa52a85/'
    },
    {
      name: 'Randall Degges',
      title: 'Head of Developer Relations @ Snyk',
      avatar:
        '/img/developer-first-security-week-images/randall-degges-snyk.jpg',
      socials: 'https://www.linkedin.com/in/rdegges/'
    },
    {
      name: 'Alex Olivier',
      title: 'Product @ Cerbos',
      avatar:
        '/img/developer-first-security-week-images/alex-olivier-cerbos.jpeg',
      socials: 'https://www.linkedin.com/in/alexolivier/'
    },
    {
      name: 'Joe Toscano',
      title: 'Author/Keynote/Cyber Collective',
      avatar:
        '/img/developer-first-security-week-images/joe-toscano-cyber-collective.jpeg',
      socials: 'https://www.linkedin.com/in/realjoet/'
    },
    {
      name: 'Guillaume Montard',
      title: 'Founder & CEO @ Bearer',
      avatar:
        '/img/developer-first-security-week-images/guillaume-montard-bearer.jpeg',
      socials: 'https://www.linkedin.com/in/guillaumemontard/'
    },
  ];

  return (
    <div className="row" id="speakers">
      {speakers.map((speaker) => (
        <div className="col">
          <div className="col-demo">
            <div class="avatar avatar--vertical">
              <img
                class="avatar__photo avatar__photo--xl"
                src={speaker.avatar}
              />
              <div>
                <a href={speaker.socials} target="_blank" rel="noreferrer">
                <image
                  src={LinkedInLogo}
                  alt='LinkedIn logo'
                >
                  LinkedIn
                </image>               
                </a>
                </div>
              <div class="avatar__intro">
                <div class="avatar__name">{speaker.name}</div>
                <small class="avatar__subtitle">{speaker.title}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const DeveloperCommunitySectionAlt = () => {
  return (
    <SectionLayout
      title="Join our Developer Security Community"
      description={`Open-source is in the ❤ of BoxyHQ.\nFollow us 🐦 on Twitter, ⭐ us on GitHub, and join our developer security community 🗣️ on Discord!`}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="https://twitter.com/boxyhq"
          className="button button--primary button--outline"
        >
          Follow on Twitter
        </Link>
        <Link
          href="https://github.com/boxyhq"
          className="button button--primary button--outline"
        >
          Star on GitHub
        </Link>
        <Link
          href="https://discord.boxyhq.com/"
          className="button button--primary button--outline"
        >
          Join Discord
        </Link>
      </div>
    </SectionLayout>
  );
};

export default DeveloperSecurityWeek;
