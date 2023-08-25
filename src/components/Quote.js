import React from 'react';

const Quote = ({ children, author }) => {
  const style = {
    border: '2px solid var(--ifm-color-primary)',
    color: 'var(--aa-input-border-color-rgb)',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '1.3rem',
    fontWeight: 'strong',
    display: 'block',
    paddingBottom: '1rem',
  };

  const authorStyle = {
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  return (
    <div style={style} className="padding-horiz--md padding-vert--md">
      <span style={textStyle}>“{children}“</span>
      <span style={authorStyle}>{author}</span>
    </div>
  );
};

export default Quote;
