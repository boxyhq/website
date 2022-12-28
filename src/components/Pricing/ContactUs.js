import React from 'react';

export const ContactUsBtn = ({ setOpened, setFormId, formId }) => {
  return (
    <a
      onClick={() => {
        setFormId(formId);
        setOpened(true);
      }}
      className="button--link cursor"
    >
      Contact us
    </a>
  );
};
