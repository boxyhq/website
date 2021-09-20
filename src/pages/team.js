import React from 'react';
import Layout from '@theme/Layout';
const Title = 'Team';

function Team() {
  return (
    <Layout title={Title}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>{Title}</h1>
        </div>

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>

          <div className="col col--4 margin-bottom--lg">
            <div className="">
              <div className="card__image">
                <img src="/img/team/deepak.jpg" />
              </div>
              <div className="card__body">
                <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                    <h4 className="avatar__name">
                      Deepak Prabhakara: CEO & Co-founder
                    </h4>
                    <small className="avatar__subtitle">
                      Deepak brings close to two decades of expertise in design,
                      architecture and development of complex software products.
                      Prior to BoxyHQ he was the CTO at Red Sift, a fast growing
                      cybersecurity startup. Prior to that he was the founder of
                      ContentSift and the first technical hire at Apsmart. He
                      has led product and engineering teams at several startups
                      and worked on the Opera Mini and Mobile browsers, a
                      product loved and used by millions of users across the
                      globe.
                    </small>
                    <br />
                    <small className="avatar__subtitle">
                      Deepak and Debug are interchangeable.
                    </small>
                    <br />
                    <p>
                      <a
                        href="https://github.com/deepakprabhakara"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Github
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://twitter.com/deepakprab"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col--2 margin-bottom--lg"></div>

          <div className="col col--4 margin-bottom--lg margin-left-lg">
            <div className="">
              <div className="card__image">
                <img src="/img/team/sama.jpg" />
              </div>
              <div className="card__body">
                <div className="avatar">
                  <div className="avatar__intro margin-left--none">
                    <h4 className="avatar__name">
                      Carlos Samame: COO & Co-founder
                    </h4>
                    <small className="avatar__subtitle">
                      Sama has 15+ years of experience working at tech companies
                      across different business areas and continents. Prior to
                      BoxyHQ he was at Amazon Web Services leading AWS
                      Connections in Europe, Middle East, and Africa, a program
                      that connects enterprises with global startups. Before,
                      Sama was the Head of Acceleration at Wayra UK (O2 -
                      Telefonica), where he invested and managed a portfolio of
                      100+ startups. He was also the founder of Lava Innovation,
                      and worked for Groupon and IBM.
                    </small>
                    <br />
                    <small className="avatar__subtitle">
                      Sama’s superpower is solving problems.
                    </small>
                    <br />
                    <p>
                      <a
                        href="https://www.linkedin.com/in/samame/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        LinkedIn
                      </a>{' '}
                      ·{' '}
                      <a
                        href="https://twitter.com/caloique"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col--1 margin-bottom--lg"></div>
        </div>
      </main>
    </Layout>
  );
}
export default Team;
