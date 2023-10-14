import React from 'react';

const SectionLayout = ({ title, description, children, style, titleStyle }) => {
  return (
    <section className="page__section" style={style}>
      <div className="container">
        <h2
          className="section__header text--center"
          style={{ padding: '10px', ...titleStyle }}
        >
          {title}
        </h2>
        {description && (
          <p className="text--center" style={{ whiteSpace: 'pre-wrap' }}>
            {description}
          </p>
        )}
        <div style={{ marginTop: '30px' }}>{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
