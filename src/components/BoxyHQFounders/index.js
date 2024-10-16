import BaseFeatureSectionHeader from '../BaseFeatureSectionHeader';
import CardFounderBio from '../cards/CardFounderBio';

import './boxyhq-founders.css';

const BoxyHQFounders = () => {
  const founders = [
    {
      bio: '<p>Deepak brings two decades of expertise in the design, architecture, and development of complex software products. Before BoxyHQ he was the CTO at Red Sift, a fast-growing cybersecurity scaleup. Before that, he founded ContentSift and was the first technical hire at Apsmart (acquired by Thomson Reuters).</p><p>He has led product and engineering teams at several startups and worked on Opera Mini and Mobile browsers, a product loved and used by millions of users across the globe.</p>',
      github: 'deepakprabhakara',
      linkedin: 'deepakp',
      x: 'deepakprab',
      name: 'Deepak Prabhakara',
      pictureSrc: '/images/founders/deepak-prabhakara-boxyhq',
      role: 'CEO, Co-Founder',
    },
    {
      bio: '<p>Sama has 15+ years of experience working at tech companies across different business areas and continents. Before BoxyHQ he was at Amazon Web Services leading AWS Connections in Europe, the Middle East, and Africa, a program that connects enterprises with global startups.</p><p>Before, Sama was the Head of Acceleration at Wayra UK (O2 - Telefonica), where he invested and managed a portfolio of 100+ startups. He was also the founder of Lava Innovation and worked for Groupon and IBM.</p>',
      linkedin: 'samame',
      x: 'caloique',
      name: 'Carlos Samame',
      pictureSrc: '/images/founders/sama',
      role: 'COO, Co-Founder',
    },
  ];
  return (
    <div className="girdle boxyhq-founders">
      <BaseFeatureSectionHeader
        linearTitle={true}
        reverse={false}
        title="BoxyHQ Founders"
        withMargin={true}
      />
      <ul className="reset-list founders-list">
        {founders.map((founder) => (
          <li key={founder.name}>
            <CardFounderBio founder={founder} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoxyHQFounders;
