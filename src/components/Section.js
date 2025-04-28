import React from 'react';
import './Section.css';

const Section = React.forwardRef(({ id, title, content }, ref) => {
  return (
    <section ref={ref} id={id} className="section">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-content">{content}</p>
      </div>
    </section>
  );
});

export default Section;
