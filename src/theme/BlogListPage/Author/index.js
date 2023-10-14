import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const Author = ({ authors, name, title, url, image }) => {
  return (
    <div className="avatar">
      {authors && authors.length > 1 ? (
        <>
          <a href={authors[0].url} target="_blank">
            <img
              className="avatar__photo"
              src={authors[0].image_url}
              alt={authors[0].name}
            />
          </a>
          <a href={authors[1].url} target="_blank">
            <img
              className="avatar__photo"
              src={authors[1].image_url}
              alt={authors[1].name}
            />
          </a>
        </>
      ) : (
        <>
          {image && name && url && (
            <>
              <img className="avatar__photo" src={image} alt={name} />
              <div className="avatar__intro">
                <div className="avatar__name">
                  <Link to={url} className={styles.authorUrl}>
                    {name}
                  </Link>
                </div>
                <small className={`avatar__subtitle ${styles.avatarSubtitle}`}>
                  {title}
                </small>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Author;
