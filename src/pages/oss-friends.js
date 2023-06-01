import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import TitleHeader from '../components/TitleHeader';

const title = 'Our Open-source Friends';
const description = 'Open-source projects and tools for an open world.';

const friends = [
  {
    name: 'Cal.com',
    title:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    url: 'https://cal.com',
  },
  {
    name: 'Crowd.dev',
    title:
      'Centralize community, product, and customer data to understand which companies are engaging with your open source project.',
    url: 'https://www.crowd.dev',
  },
  {
    name: 'Documenso',
    title:
      'The Open-Source DocuSign Alternative. We aim to earn your trust by enabling you to self-host the platform and examine its inner workings.',
    url: 'https://documenso.com',
  },
  {
    name: 'Erxes',
    title:
      'The Open-Source HubSpot Alternative. A single XOS enables to create unique and life-changing experiences ​​that work for all types of business.',
    url: 'https://erxes.io',
  },
  {
    name: 'Formbricks',
    title:
      'Survey granular user segments at any point in the user journey. Gather up to 6x more insights with targeted micro-surveys. All open-source.',
    url: 'https://formbricks.com',
  },
  {
    name: 'Forward Email',
    title:
      'Free email forwarding for custom domains. For 6 years and counting, we are the go-to email service for thousands of creators, developers, and businesses.',
    url: 'https://forwardemail.net',
  },
  {
    name: 'GitWonk',
    title:
      'GitWonk is an open-source technical documentation tool, designed and built focusing on the developer experience.',
    url: 'https://gitwonk.com',
  },
  {
    name: 'Hanko',
    title:
      'Open-source authentication and user management for the passkey era. Integrated in minutes, for web and mobile apps.',
    url: 'https://hanko.io',
  },
  {
    name: 'HTMX',
    title:
      'HTMX is a dependency-free JavaScript library that allows you to access AJAX, CSS Transitions, WebSockets, and Server Sent Events directly in HTML.',
    url: 'https://htmx.org',
  },
  {
    name: 'Infisical',
    title:
      'Open source, end-to-end encrypted platform that lets you securely manage secrets and configs across your team, devices, and infrastructure.',
    url: 'https://infisical.com',
  },
  {
    name: 'Novu',
    title:
      'The open-source notification infrastructure for developers. Simple components and APIs for managing all communication channels in one place.',
    url: 'https://novu.co',
  },
  {
    name: 'OpenBB',
    title:
      'Democratizing investment research through an open source financial ecosystem. The OpenBB Terminal allows everyone to perform investment research, from everywhere.',
    url: 'https://openbb.co',
  },
  {
    name: 'Sniffnet',
    title:
      'Sniffnet is a network monitoring tool to help you easily keep track of your Internet traffic.',
    url: 'https://www.sniffnet.net',
  },
  {
    name: 'Typebot',
    title:
      'Typebot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your apps and start collecting results like magic.',
    url: 'https://typebot.io',
  },
  {
    name: 'Webiny',
    title:
      'Open-source enterprise-grade serverless CMS. Own your data. Scale effortlessly. Customize everything.',
    url: 'https://www.webiny.com',
  },
  {
    name: 'Webstudio',
    title: 'Webstudio is an open source alternative to Webflow.',
    url: 'https://webstudio.is',
  },
];

const OSSFriends = () => {
  return (
    <Layout title={title} description={description}>
      <section className="page__section">
        <TitleHeader title={title} />
        <div className="container">
          <div>
            {friends.length > 0 &&
              Array.from({ length: Math.ceil(friends.length / 3) }, (_, i) => (
                <div className="row" key={`row${i}`}>
                  {friends.slice(i * 3, (i + 1) * 3).map((friend) => (
                    <div
                      className="col col--4"
                      style={{ marginBottom: '20px' }}
                    >
                      <div className="col-demo">
                        <div className="card-demo" style={{}}>
                          <div className="card">
                            <div className="card__header">
                              <h3
                                className="text--center"
                                style={{ whiteSpace: 'pre-line' }}
                              >
                                {friend.name}
                              </h3>
                            </div>
                            <div className="card__body">{friend.title}</div>
                            <div className="card__footer">
                              <Link
                                className={clsx(
                                  'button button--primary button--block'
                                )}
                                href={friend.url}
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OSSFriends;
