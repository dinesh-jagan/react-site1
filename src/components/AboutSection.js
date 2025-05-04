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
        Analyse. Create. <span className="highlight">Innovate</span> 
      </h1>

      <blockquote className="about-quote" >
      <QuoteIcon className="quote-icon" />  
        <p className='summary'>
               We create custom apps, websites, and branding to fuel your business growth. Our experts turn ideas into reality with smart design and advanced technology, helping your business thrive online.
        </p>
      </blockquote>

      <BottomArrow className="bottom-arrow" />
    </section>
  );
};

export default AboutSection;
