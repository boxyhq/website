import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import clsx from 'clsx';
import styles from '../css/oss-friends.module.css';

const title = 'Our Open-source Friends';
const description = 'Open-source projects and tools for an open world.';

const OSSFriends = () => {
  const { ossFriends } = usePluginData('oss-friends-plugin');

  return (
    <Layout title={title} description={description}>
      <section className="page__section">
        <div className="text--center margin-bottom--lg">
          <h1>{title}</h1>
        </div>
        <div className="container">
          <div>
            {ossFriends?.length > 0 &&
              Array.from(
                { length: Math.ceil(ossFriends.length / 3) },
                (_, i) => (
                  <div className={`row ${styles.row}`} key={`row${i}`}>
                    {ossFriends.slice(i * 3, (i + 1) * 3).map((friend) => (
                      <div className={`col col--4 ${styles.cardDiv}`}>
                        <div className={`card ${styles.card}`}>
                          <div className="card__header">
                            <h3
                              className="text--center"
                              style={{ whiteSpace: 'pre-line' }}
                            >
                              {friend.name}
                            </h3>
                          </div>
                          <div className="card__body">{friend.description}</div>
                          <div className="card__footer">
                            <Link
                              className={clsx('button button-secondary')}
                              href={friend.href}
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OSSFriends;
