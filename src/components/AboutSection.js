import React from 'react';
import './AboutSection.css';
import { ReactComponent as HelloArrow } from '../assets/icons/hello-arrow.svg';
import { ReactComponent as QuoteIcon } from '../assets/icons/quote-icon.svg';
import { ReactComponent as BottomArrow } from '../assets/icons/bottom-arrow.svg';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-btn-container">
        <button className="about-btn">Hello!</button>
        <HelloArrow className="hello-arrow" style={{top: -40, left: 90}}/>
      </div>

      <h1 className="about-heading">
        Our <span className="highlight">Amazing</span> Team
      </h1>

      <blockquote className="about-quote" >
      <QuoteIcon className="quote-icon" />  
        <p className='summary'>
          We are a passionate team of professionals — blending creativity,
          technical skills, and quality assurance — to deliver outstanding
          projects. Our team believes in collaboration, innovation, and
          commitment to excellence.
        </p>
      </blockquote>

      <BottomArrow className="bottom-arrow" />
    </section>
  );
};

export default AboutSection;
