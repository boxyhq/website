import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const Author = ({ name, title, url, image }) => {
  return (
    <div className="avatar">
      <img className="avatar__photo" src={image} alt={name} />
      <div className="avatar__intro">
        <div className="avatar__name">
          <Link to={url} className={styles.authorUrl}>
            {name}
          </Link>
        </div>
        <small
          className={`avatar__subtitle ${styles.avatarSubtitle}`}
          style={{}}
        >
          {title}
        </small>
      </div>
    </div>
  );
};

export default Author;
