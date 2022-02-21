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
            bio={`Deepak brings close to two decades of expertise in the design, architecture and development of complex software products. Prior to BoxyHQ he was the CTO at Red Sift, a fast-growing cybersecurity startup. Prior to that, he was the founder of ContentSift and the first technical hire at Apsmart (acquired by Thomson Reuters). He has led product and engineering teams at several startups and worked on the Opera Mini and Mobile browsers, a product loved and used by millions of users across the globe.`}
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

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/aswin.jpg'}
            name={'Aswin Venugopal: Senior Software Engineer'}
            bio={`Aswin is among the earliest engineers in our team. With an extensive experience building products at early/mid stage startups, he has worked across the stack, occasionaly dabbling the devops role too. Passionate about "Web and JavaScript", he also has a keen interest in improving the overall developer experience.`}
            subtitle={'Aswin is a Web worker. ;)'}
            github={'https://github.com/niwsa'}
            twitter={'https://twitter.com/av__2021'}
          ></Profile>
          <div className="col col--2 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/kiran.jpg'}
            name={'Kiran Krishnan: Senior Software Engineer'}
            bio={`Kiran brings 8+ years of software development experience building apps for startups and enterprises. Prior to BoxyHQ he was co-founder and technical lead at a software development agency where he led a team of 25. He found his love for coding in his college days and it has just grown over the years. He is always excited to learn new languages and contribute to OSS. He loves to talk about building startups, programming, OSS and astronomy.`}
            subtitle={`For Kiran, there's no place like localhost.`}
            github={'https://github.com/devkiran'}
            twitter={'https://twitter.com/tokirankrishnan'}
          ></Profile>
          <div className="col col--1 margin-bottom--lg"></div>
        </div>

        <div className="row">
          <div className="col col--1 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/vishal.jpg'}
            name={'Vishal Lodha: Senior Software Engineer'}
            bio={`Vishal has 11+ of expertise in design, architecture, and development of complex software products. Prior to BoxyHQ he worked at Finastra and IBM. He led multiple development teams in Java, DevOps concepts and process and CI/CD tools while providing expertise in the full software development lifecycle, from concept and design to testing, designing, developing and delivering high-volume, low-latency applications for mission-critical systems.`}
            subtitle={'For Vishal, the impossible is 404 Not Found.'}
            github={'https://github.com/vishalboxyhq'}
            twitter={'https://twitter.com/vishallodha84'}
          ></Profile>
          <div className="col col--2 margin-bottom--lg"></div>

          <Profile
            img={'/img/team/utkarsh.jpg'}
            name={'Utkarsh Mehta: Senior Software Engineer'}
            bio={`Utkarsh is a full stack developer with 6+ years of experience. He has developed dApps, Microservices & his own products as well. He has worked with variety of languages and platforms. He has worked in MNC, Mid-scale & startups. He likes to learn new tech, write blogs & training students. He plays chess, reads and binges tv series in free time.`}
            subtitle={`There is an easy way and a hard way. The hard part is finding the easy way.`}
            github={'https://github.com/ukrocks007'}
            twitter={'https://twitter.com/ukrocks007'}
          ></Profile>
          <div className="col col--1 margin-bottom--lg"></div>
        </div>
      </main>
    </Layout>
  );
}
export default Team;
