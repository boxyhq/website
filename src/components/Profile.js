import React from 'react';

export default function Profile({
  img,
  name,
  bio,
  subtitle,
  github,
  linkedin,
  twitter,
}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="">
        <div className="card__image">
          <img src={img} />
        </div>
        <div className="card__body">
          <div className="avatar">
            <div className="avatar__intro margin-left--none">
              <h4 className="avatar__name">{name}</h4>
              <small className="avatar__subtitle">{bio}</small>
              <br />
              <small className="avatar__subtitle">{subtitle}</small>
              <br />
              <p>
                <a
                  href={github ? github : linkedin}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {github ? 'Github' : 'LinkedIn'}
                </a>{' '}
                ·{' '}
                <a
                  href={twitter}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
