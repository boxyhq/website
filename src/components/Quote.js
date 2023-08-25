import React from 'react';

const Quote = ({ children, author, title, avatar }) => {
  const style = {
    border: '2px solid var(--ifm-color-primary)',
    color: 'var(--aa-input-border-color-rgb)',
    borderRadius: '5px',
  };

  const textStyle = {
    fontSize: '1.3rem',
    fontWeight: 'strong',
    display: 'block',
    paddingBottom: '1rem',
    textAlign: 'center',
  };

  const authorStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div style={style} className="padding-horiz--md padding-vert--md">
      <span style={textStyle}>“{children}“</span>
      <div className="avatar" style={authorStyle}>
        <img className="avatar__photo" src={avatar} />
        <div className="avatar__intro">
          <div className="avatar__name padding-top--sm">{author}</div>
          <small className="avatar__subtitle">{title}</small>
        </div>
      </div>
    </div>
  );
};

export default Quote;
