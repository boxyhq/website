import React from 'react';

import { IconNo, IconYes } from './Icons';
import { ContactUsBtn } from './ContactUs';

export const TextToComponent = ({ text, setOpened, setFormId }) => {
  const parts = text.split(':');

  const componentsMap = {
    yes: <IconYes />,
    no: <IconNo />,
    contactUs: (
      <ContactUsBtn
        setOpened={setOpened}
        setFormId={setFormId}
        formId={parts[1]}
      />
    ),
  };

  return componentsMap[parts[0]] || <span>{parts[0]}</span>;
};
