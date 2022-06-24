import React from 'react';
import Layout from '@theme/Layout';

const title = '';
const description = 'Privacy & Cookies Policy';

function Privacy() {
  window.addEventListener(
    'message',
    (event) => {
      if (event.data) {
        const { message, contentHeight } = JSON.parse(event.data);
        if (message === 'Updating content height') {
          var _doc = document.getElementById('privacy-policy-iframe');
          if (!_doc) return false;
          _doc.style.height = contentHeight;
        }
      }
    },
    false
  );

  return (
    <Layout title={title} description={description}>
      <main className="container margin-vert--lg">
        <iframe
          title="Privasee - BoxyHQ Inc."
          id="privacy-policy-iframe"
          frameBorder="0"
          src="https://app.privasee.io/embedded-privacy-portal/62b05b7a239a600013f95e77?theme=light"
          style={{ width: '100%', height: '100vh' }}
        ></iframe>
      </main>
    </Layout>
  );
}
export default Privacy;
