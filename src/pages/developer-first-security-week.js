import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Modal } from '../components/Modal';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';
import InvestorsSection from '../components/InvestorsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';

const title = 'BoxyHQ for Startups';
const description = 'Developer First Security Week';

const DeveloperSecurityWeek = () => {
const [opened, setOpened] = useState(false);

  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="The Developer-First Security Week Event"
        description="Register early and join us for a week-long celebration of Shift Left, where developers and security come together. Explore a multitude of engaging talks and discussions aimed at empowering developers to prioritize security from the start. Discover the latest trends, best practices, and innovative solutions to build secure software. Let's make security a seamless part of every developer's journey!"
        image="/img/devSecFirstWeekFlyer.svg"
        buttons={[
          {
            title: 'The Future of Security Engineers',
            onClick: () => {
            setOpened(true);
            },
            className: 'button--primary',
          },
          {
            title: 'The Future of Security Authentication',
            onClick: () => {
            setOpened(true);
            },
            className: 'button--primary',
          },
          {
            title: 'The Future of Security Authorization',
            onClick: () => {
            setOpened(true);
            },
            className: 'button--primary',
          },
          {
            title: 'The Future of Data Privacy',
            onClick: () => {
            setOpened(true);
            },
            className: 'button--primary',
          },
        ]}
      />

      <SectionLayout title="World-class event, world class guest speakers!">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="col-demo center">
              <div>
                <h2 style={{textAlign: "center" }}>Panel Discussions</h2>
                <ul>
                  <li>
                    <b>The Future of Security Engineers</b>
                    <p>
                      Security Engineers are the safeguards for technological advancements, combating cyber threats, and ensuring the privacy and integrity of digital infrastructure. Join our experts as they discuss where we are headed and what the future of security engineering will look like.
                  </p>
                  </li>
                  <li>
                    <b>The Future of Authentication</b>
                    <p>
                      Join us our experts delve into the transformative trends and cutting-edge innovations reshaping authentication methods, from biometrics and AI-driven approaches to context-aware verification, to secure digital identities and provide seamless user experiences while fortifying online security.
                    </p>
                  </li>
                  <li>
                    <b>The Future of Authorization</b>
                    <p>
                      In this session we glimpse into the future of authorization, where we envision dynamic and intelligent access control mechanisms that leverage AI and blockchain technologies to grant appropriate permissions in real-time, mitigating risks and empowering users with precise, context-sensitive authorization.
                    </p>
                  </li>
                  <li>
                    <b>The Future of Data Privacy</b>
                    <p>
                      This session highlights the critical significance of data privacy in a data-driven world, exploring emerging privacy regulations, encryption techniques, and privacy-enhancing technologies that will safeguard user information, foster trust, and enable responsible data practices for businesses and individuals alike.
                    </p>
                  </li>
                  <li>
                    <b>And more...</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
            src="https://streamyard.com/watch/fx4hdxDwCpaK?embed=true"
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

export default DeveloperSecurityWeek;
