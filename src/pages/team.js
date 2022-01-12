import React from 'react';
import Layout from '@theme/Layout';
const Title = 'Team';
import Profile from '../components/Profile';

function Team() {
  return (
    <Layout title={Title}>
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>{Title}</h1>
        </div>

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/deepak.jpg'}
            name={'Deepak Prabhakara: CEO & Co-founder'}
            bio={`Deepak brings close to two decades of expertise in design, architecture and development of complex software products. Prior to BoxyHQ he was the CTO at Red Sift, a fast-growing cybersecurity startup. Prior to that, he was the founder of ContentSift and the first technical hire at Apsmart (acquired by Thomson Reuters). He has led product and engineering teams at several startups and worked on the Opera Mini and Mobile browsers, a product loved and used by millions of users across the globe.`}
            subtitle={'Deepak and Debug are interchangeable.'}
            github={'https://github.com/deepakprabhakara'}
            twitter={'https://twitter.com/deepakprab'}
          ></Profile>

          <div className="col col--2 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/sama.jpg'}
            name={'Carlos Samame: COO & Co-founder'}
            bio={`Sama has 15+ years of experience working at tech companies across different business areas and continents. Prior to BoxyHQ he was at Amazon Web Services leading AWS Connections in Europe, Middle East, and Africa, a program that connects enterprises with global startups. Before, Sama was the Head of Acceleration at Wayra UK (O2 - Telefonica), where he invested and managed a portfolio of 100+ startups. He was also the founder of Lava Innovation, and worked for Groupon and IBM.`}
            subtitle={'Sama’s superpower is solving problems.'}
            linkedin={'https://www.linkedin.com/in/samame/'}
            twitter={'https://twitter.com/caloique'}
          ></Profile>

          <div className="col col--1 margin-bottom--lg"></div>
        </div>
      </main>
    </Layout>
  );
}
export default Team;
