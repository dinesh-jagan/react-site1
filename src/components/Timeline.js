// Timeline.jsx
import React from 'react';
import './Timeline.css';
import timelineFull from '../assets/icons/timeline-full.svg';

const Timeline = () => {
  return (
    <section className="timeline-container">
      <h2 className="timeline-title">
        Our <span className="highlight">Work Experience</span>
      </h2>
      <div className="timeline-content">
        {/* Left column */}
        <div className="timeline-column left-column">
          <div className="text-block top">
            <h3>Project Coordinator</h3>
            <p>Coordinator with 3+ years of experience in operations and team support.</p>
          </div>
          <div className="text-block bottom">
            <h3>Developer</h3>
            <p>Developer with 3+ years of experience in building and maintaining software solutions.</p>
          </div>
        </div>

        {/* Center SVG timeline */}
        <div className="timeline-center">
          <img src={timelineFull} alt="Timeline" className="timeline-svg" />
        </div>

        {/* Right column */}
        <div className="timeline-column right-column">
          <div className="text-block top">
            <h3>Quality Tester</h3>
            <p>Tester with 3+ years of experience in quality assurance and defect management.</p>
          </div>
          <div className="text-block bottom">
            <h3>Designer</h3>
            <p>Designer with 3+ years of experience in creating user-centered digital experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
