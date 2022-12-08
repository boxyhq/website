import React from 'react';

export const ContactUsBtn = ({ setOpened }) => {
  return (
    <a
      onClick={() => {
        setOpened(true);
      }}
      className="button button--link"
    >
      Contact us
    </a>
  );
};
