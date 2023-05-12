import React from 'react';
import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';

const title = '';
const description = 'Privacy & Cookies Policy';

const IFrame = () => {
  const { colorMode } = useColorMode();

  return (
    <iframe
      title="Privacy Policy - BoxyHQ Inc."
      id="privacy-policy-iframe"
      frameBorder="0"
      src={`https://platform.illow.io/#/policy/privacy/c1cf3d5e-686e-49ec-b897-15c27a66cdeb?theme=${colorMode}`}
      style={{ width: '100%', height: '100vh' }}
    ></iframe>
  );
};

function Privacy() {
  if (typeof window !== 'undefined') {
    window.addEventListener(
      'message',
      (event) => {
        if (event.data) {
          const { message, contentHeight } = event.data;
          if (message === 'Updating content height') {
            var _doc = document.getElementById('privacy-policy-iframe');
            if (!_doc) return false;
            _doc.style.height = contentHeight;
          }
        }
      },
      false
    );
  }

  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <IFrame></IFrame>
      </main>
    </Layout>
  );
}
export default Privacy;
