import React from 'react';

import { IconNo, IconYes } from './Icons';
import { ContactUsBtn } from './ContactUs';

export const TextToComponent = ({ text, setOpened }) => {
  const componentsMap = {
    yes: <IconYes />,
    no: <IconNo />,
    contactUs: <ContactUsBtn setOpened={setOpened} />,
  };

  return componentsMap[text] || <span>{text}</span>;
};
