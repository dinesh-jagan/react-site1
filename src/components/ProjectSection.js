import React from 'react';
import './ProjectSection.css';
import projectDummyIcon from '../assets/icons/projectdummy.svg'
import Fitness from '../assets/icons/ecommerce.svg'
import Ecommerce from '../assets/icons/fitness.svg'
import ProjectEmail from '../assets/icons/project-email.svg'



function ProjectSection() {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">
        Take a Look at Our<br />
         <span className="highlight">Previous Projects</span>
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
    </div>
  );
}

export default ProjectSection;

