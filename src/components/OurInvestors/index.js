import BaseCard from '../cards/BaseCard';
import BaseFeatureSectionHeader from '../BaseFeatureSectionHeader';

import './our-investors.css';

const OurInvestors = () => {
  const investors = [
    {
      bio: 'OSS Capital is the first and only early-stage VC exclusively dedicated to backing leading COSS (commercial open source) startup founders on a global basis since 2018.',
      cardImg: 'ossc',
      ctaCopy: 'Learn more about OSS Capital',
      investorName: 'OSS Capital',
      url: 'https://oss.capital/',
    },
    {
      bio: 'We support visionary founders across Europe as they build the next generation of B2B software companies.',
      cardImg: 'nauta',
      ctaCopy: 'Learn more about Nauta Capital',
      investorName: 'Nauta Capital',
      url: 'https://www.nautacapital.com/',
    },
    {
      bio: 'Building a transformative business is a hard and lonely challenge. We pride ourselves on providing genuine, long-term support and also knowing when to step back.',
      cardImg: 'mmc',
      ctaCopy: 'Learn more about MMC',
      investorName: 'MMC',
      url: 'https://mmc.vc/',
    },
    {
      bio: 'Telefónica’s initiative designed to scale, invest in startups, and bring innovation everywhere in the world.',
      cardImg: 'wayra',
      ctaCopy: 'Learn more about Wayra',
      investorName: 'Wayra',
      url: 'https://www.wayra.com/',
    },
  ];
  return (
    <div className="our-investors">
      <BaseFeatureSectionHeader
        reverse={false}
        title="Our Investors"
        withMargin={true}
      ></BaseFeatureSectionHeader>

      <ul className="reset-list girdle investors-list">
        {investors.map((investor) => (
          <li className="investors-list-entry" key={investor.url}>
            <BaseCard
              cardImage={`/images/investors/${investor.cardImg}`}
              centered={true}
              ctaCopy={investor.ctaCopy}
              ctaURL={investor.url}
              height="100"
              targetNewWindow={true}
              width="250"
            >
              <p>{investor.bio}</p>
            </BaseCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurInvestors;
