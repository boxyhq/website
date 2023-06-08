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
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    href: 'https://cal.com',
  },
  {
    name: 'Crowd.dev',
    description:
      'Centralize community, product, and customer data to understand which companies are engaging with your open source project.',
    href: 'https://www.crowd.dev',
  },
  {
    name: 'Documenso',
    description:
      'The Open-Source DocuSign Alternative. We aim to earn your trust by enabling you to self-host the platform and examine its inner workings.',
    href: 'https://documenso.com',
  },
  {
    name: 'Erxes',
    description:
      'The Open-Source HubSpot Alternative. A single XOS enables to create unique and life-changing experiences ​​that work for all types of business.',
    href: 'https://erxes.io',
  },
  {
    name: 'Formbricks',
    description:
      'Survey granular user segments at any point in the user journey. Gather up to 6x more insights with targeted micro-surveys. All open-source.',
    href: 'https://formbricks.com',
  },
  {
    name: 'GitWonk',
    description:
      'GitWonk is an open-source technical documentation tool, designed and built focusing on the developer experience.',
    href: 'https://gitwonk.com',
  },
  {
    name: 'Hanko',
    description:
      'Open-source authentication and user management for the passkey era. Integrated in minutes, for web and mobile apps.',
    href: 'https://www.hanko.io',
  },
  {
    name: 'HTMX',
    description:
      'HTMX is a dependency-free JavaScript library that allows you to access AJAX, CSS Transitions, WebSockets, and Server Sent Events directly in HTML.',
    href: 'https://htmx.org',
  },
  {
    name: 'Infisical',
    description:
      'Open source, end-to-end encrypted platform that lets you securely manage secrets and configs across your team, devices, and infrastructure.',
    href: 'https://infisical.com',
  },
  {
    name: 'Novu',
    description:
      'The open-source notification infrastructure for developers. Simple components and APIs for managing all communication channels in one place.',
    href: 'https://novu.co',
  },
  {
    name: 'OpenBB',
    description:
      'Democratizing investment research through an open source financial ecosystem. The OpenBB Terminal allows everyone to perform investment research, from everywhere.',
    href: 'https://openbb.co',
  },
  {
    name: 'Sniffnet',
    description:
      'Sniffnet is a network monitoring tool to help you easily keep track of your Internet traffic.',
    href: 'https://www.sniffnet.net',
  },
  {
    name: 'Typebot',
    description:
      'Typebot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your apps and start collecting results like magic.',
    href: 'https://typebot.io',
  },
  {
    name: 'Webiny',
    description:
      'Open-source enterprise-grade serverless CMS. Own your data. Scale effortlessly. Customize everything.',
    href: 'https://www.webiny.com',
  },
  {
    name: 'Webstudio',
    description: 'Webstudio is an open source alternative to Webflow',
    href: 'https://webstudio.is',
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
                            <div className="card__body">
                              {friend.description}
                            </div>
                            <div className="card__footer">
                              <Link
                                className={clsx(
                                  'button button--primary button--block'
                                )}
                                href={friend.href}
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
