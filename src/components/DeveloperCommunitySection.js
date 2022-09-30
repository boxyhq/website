import React from 'react';
import Link from '@docusaurus/Link';

import SectionLayout from './SectionLayout';

const DeveloperCommunitySection = () => {
  return (
    <SectionLayout
      title="Join our developer community"
      description="Open-source is in the heart of BoxyHQ. Follow us on Twitter,
    star our GitHub repo, and join our developer community on
    Discord!"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <Link
          href="https://meetings.hubspot.com/deepakprab/demo"
          className="button button--primary button--outline"
        >
          Join Discord
        </Link>
        <Link
          href="https://meetings.hubspot.com/deepakprab/demo"
          className="button button--primary button--outline"
        >
          Star on GitHub
        </Link>
      </div>
    </SectionLayout>
  );
};

export default DeveloperCommunitySection;
