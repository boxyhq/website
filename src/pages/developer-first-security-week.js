import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Modal } from '../components/Modal';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection';
import InvestorsSection from '../components/InvestorsSection';
import CustomersSection from '../components/CustomersSection';
import DeveloperCommunitySection from '../components/DeveloperCommunitySection';
import SectionLayout from '../components/SectionLayout';
import { DevFirstSecurityWeekForm } from '../components/DevFirstSecurityWeekForm';

const title = 'BoxyHQ for Startups';
const description = 'Developer First Security Week';

const SaasRegistration = () => {
  const [opened, setOpened] = useState(false);
  const [formId, setFormId] = useState('');

  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="The Developer-First Security Week Event"
        description="Register early and join us for a week-long celebration of Shift Left, where developers and security come together. Explore a multitude of engaging talks and discussions aimed at empowering developers to prioritize security from the start. Discover the latest trends, best practices, and innovative solutions to build secure software. Let's make security a seamless part of every developer's journey!"
        image="/img/devSecFirstWeekFlyer.svg"
        buttons={[
          {
            title: 'Register',
            onClick: () => {
              setFormId(formId);
              setOpened(true);
            },
            className: 'button--primary',
          },
        ]}
      />

      <SectionLayout title="World-class Guest Speakers!" description="">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="col-demo center">
              <div>
                <h2>
                  Panels
                </h2>
                <ul>
                  <li>
                    <b>The Future of Security Engineers</b> 
                  </li>
                  <li>
                    <b>The Future of Authentication</b> 
                  </li>
                  <li>
                    <b>The Future of Authorization</b> 
                  </li>
                  <li>
                    <b>The Future of Data Privacy</b> 
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
      <SectionLayout>
        <div style={{ width: "50%", height: "0px", position: "relative", paddingBottom: "56.25%" }} id="streamyardForm" ><iframe style={{ width: "100%",height: "100%",position: "absolute", left: "0px", top: "0px", overflow: "hidden" }} src="https://streamyard.com/watch/fx4hdxDwCpaK?embed=true" width="100%" height="100%" frameborder="0" allowfullscreen ></iframe ></div>
      </SectionLayout>
        
      


      <Modal title="" opened={opened} setOpened={setOpened}>
        <DevFirstSecurityWeekForm formId={formId} />
      </Modal>
      <CustomersSection />

      <NewsSection />
      <InvestorsSection />
      <DeveloperCommunitySection />
    </Layout>
  );
};

export default SaasRegistration;
