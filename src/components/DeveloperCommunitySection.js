import React from 'react';
import Link from '@docusaurus/Link';

const DeveloperCommunitySection = () => {
  return (
    <section className="page__section">
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className="col-demo text--center">
              <h2 className="section__header" style={{ padding: '10px' }}>
                Join our developer community
              </h2>
              <p>
                Open-source is in the heart of BoxyHQ. Follow us on Twitter,
                star our GitHub repo, and join our developer community on
                Discord!
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '5px',
                }}
              >
                <Link
                  href="https://meetings.hubspot.com/deepakprab/demo"
                  className="button button--success button--outline"
                >
                  Join Discord
                </Link>
                <Link
                  href="https://meetings.hubspot.com/deepakprab/demo"
                  className="button button--success button--outline"
                >
                  Star on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCommunitySection;
