import React from 'react';
import './ProjectSection.css';
import projectDummyIcon from '../assets/icons/projectdummy.svg'
import Fitness from '../assets/icons/ecommercedummy.svg'
import Ecommerce from '../assets/icons/fitnessdummy.svg'
import ProjectEmail from '../assets/icons/project-email.svg'



function ProjectSection() {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">
        Lets discuss ans have a<br />
        look at our <span className="highlight">Projects</span>
      </h2>
      <div className="images-container">
        <img 
          src={Ecommerce} 
          alt="Ecommerce project" 
          className="project-image"
        />
        <img 
          src={Fitness} 
          alt="Fitness project" 
          className="project-image"
        />
      </div>

      <h2 className="cta-heading">
        Have an Awsome Project<br />
        Idea? <span className="highlight">Let's Discuss</span>
      </h2>
      <div className="email-container">
        <div className="pill-input">
            <img src={ProjectEmail} alt="Email icon" className="email-icon" />
            <input
            type="email"
            placeholder="Enter Email Address"
            className="email-field"
            />
            <button className="send-button">Send</button>
        </div>
        </div>

    </div>
  );
}

export default ProjectSection;

