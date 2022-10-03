import React from 'react';
import Link from '@docusaurus/Link';

import SectionLayout from './SectionLayout';

const DeveloperCommunitySection = () => {
  return (
    <SectionLayout
      title="Join our developer community"
      description={`Open-source is in the ❤ of BoxyHQ.\nFollow us 🐦 on Twitter, ⭐ us on GitHub, and join our developer security community 🗣️ on Discord!`}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="https://twitter.com/boxyhq"
          className="button button--primary button--outline"
        >
          Follow on Twitter
        </Link>
        <Link
          href="https://github.com/boxyhq"
          className="button button--primary button--outline"
        >
          Star on GitHub
        </Link>
        <Link
          href="https://discord.boxyhq.com/"
          className="button button--primary button--outline"
        >
          Join Discord
        </Link>
      </div>
    </SectionLayout>
  );
};

export default DeveloperCommunitySection;
