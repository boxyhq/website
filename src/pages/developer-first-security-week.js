import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Modal } from '../components/Modal';
import HeroSection from '../components/HeroSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';

const title = 'BoxyHQ for Startups';
const description = 'Developer First Security Week';

const DeveloperSecurityWeek = () => {
  const [opened, setOpened] = useState(false);
  const [eventId, setEventId] = useState(null);

  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="The Developer-First Security Week Event"
        description="Register early and join us for a week-long celebration of Shift Left, where developers and security come together. Explore a multitude of engaging talks and discussions aimed at empowering developers to prioritize security from the start. Discover the latest trends, best practices, and innovative solutions to build secure software. Let's make security a seamless part of every developer's journey!"
        image="/img/devSecFirstWeekFlyer.svg"
        imageWidth={null}
        buttons={
          [
            //removed buttons from the HeroSection
          ]
        }
      />

      <SectionLayout
        title="World-class event, world class guest speakers!"
        description="Panel Discussions"
      >
        <div className="row">
          <Event
            setEventId={() => {
              setEventId('fx4hdxDwCpaK');
              setOpened(true);
            }}
            title="The Future of Security Engineers"
            description="Security Engineers are the safeguards for technological advancements, combating cyber threats, and ensuring the privacy and integrity of digital infrastructure. Join our experts as they discuss where we are headed and what the future of security engineering will look like."
          />
          <Event
            setEventId={() => {
              setEventId('PKN33MW2nys3');
              setOpened(true);
            }}
            title="The Future of Authentication"
            description="Join us our experts delve into the transformative trends and cutting-edge innovations reshaping authentication methods, from biometrics and AI-driven approaches to context-aware verification, to secure digital identities and provide seamless user experiences while fortifying online security."
          />
          <Event
            setEventId={() => {
              setEventId('wjhKi73A28vu');
              setOpened(true);
            }}
            title="The Future of Authorization"
            description="In this session we glimpse into the future of
            authorization, where we envision dynamic and intelligent
            access control mechanisms that leverage AI and blockchain
            technologies to grant appropriate permissions in
            real-time, mitigating risks and empowering users with
            precise, context-sensitive authorization."
          />
          <Event
            setEventId={() => {
              setEventId('sZGB3SxB5GcH');
              setOpened(true);
            }}
            title="The Future of Data Privacy"
            description="This session highlights the critical significance of data
            privacy in a data-driven world, exploring emerging privacy
            regulations, encryption techniques, and privacy-enhancing
            technologies that will safeguard user information, foster
            trust, and enable responsible data practices for
            businesses and individuals alike."
          />
        </div>
      </SectionLayout>

      <SectionLayout title="Speaker title" description="Speaker description">
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

      <DeveloperCommunitySection />
    </Layout>
  );
};

const Event = ({ title, date, description, id, setEventId }) => {
  return (
    <div className="col col--6" style={{ marginBottom: '30px' }}>
      <div className="card-demo">
        <div className="card padding--md">
          <div className="card__header text--center">
            <h2 className="text--primary">{title}</h2>
            <h3 className="text--primary">{date}</h3>
          </div>
          <div className="card__body">
            <p className="text--center">{description}</p>
          </div>
          <div className="card__footer text--center">
            <button
              className="button button--primary button--outline"
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
      name: 'Deepak Prabhakara',
      title: 'CEO @ BoxyHQ',
      avatar: 'https://boxyhq.com/img/team/deepak.jpg',
    },
    {
      name: 'Deepak Prabhakara',
      title: 'CEO @ BoxyHQ',
      avatar: 'https://avatars1.githubusercontent.com/u/977348?s=460&v=4',
    },
  ];

  return (
    <div className="row">
      {speakers.map((speaker) => (
        <div className="col">
          <div className="col-demo">
            <div class="avatar avatar--vertical">
              <img
                class="avatar__photo avatar__photo--xl"
                src={speaker.avatar}
              />
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

export default DeveloperSecurityWeek;
