import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const SvgIcon = ({ icon, url, size, className }) => {
  const Icon = icon;

  return url ? (
    <Link href={url}>
      <Icon style={size} className={clsx([className])} />
    </Link>
  ) : (
    <Icon style={size} />
  );
};

export default SvgIcon;
