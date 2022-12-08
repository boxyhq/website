import React from 'react';

export const ContactUsBtn = ({ setOpened }) => {
  return (
    <a
      onClick={() => {
        setOpened(true);
      }}
      className="button--link cursor"
    >
      Contact us
    </a>
  );
};
