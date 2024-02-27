import React from 'react';

export default function SignupCTA({ campaign, label = 'Sign Up Today' }) {
  return (
    <a
      className="button button-primary with-icon base-icon-pseudo icon-code-slash"
      href={`https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=${campaign}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
