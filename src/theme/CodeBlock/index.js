import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';

import { Prism } from 'prism-react-renderer';
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-ruby');

export default function CodeBlockWrapper(props) {
  return (
    <>
      <CodeBlock {...props} />
    </>
  );
}
