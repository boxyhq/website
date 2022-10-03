import React from 'react';

const SectionLayout = ({ title, description, children }) => {
  return (
    <section className="page__section">
      <div className="container">
        <h2
          className="section__header text--center"
          style={{ padding: '10px' }}
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
