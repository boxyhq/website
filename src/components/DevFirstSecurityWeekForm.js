import React, { useEffect } from 'react';

const StreamyardForm = ({ form }) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://streamyard.com/watch/fx4hdxDwCpaK';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.location) {
        <div id="streamyardForm" style="width:100%;height:0px;position:relative;padding-bottom:56.25%;"><iframe src="https://streamyard.com/watch/fx4hdxDwCpaK?embed=true" width="100%" height="100%" frameborder="0" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
      }
    });
  }, []);

  return (
    <div>
      <div id="streamyardForm">Loading...</div>
    </div>
  );
};

export const DevFirstSecurityWeekForm = ({ form }) => {
  if (!form) return null;

  return <StreamyardForm />;
};

