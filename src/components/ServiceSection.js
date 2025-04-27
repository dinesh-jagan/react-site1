import React from 'react';
import './ServiceSection.css';
// — new child components —
import Timeline    from './/Timeline';
import DetailCards from './/DetailCards';

import projIcon from '../assets/icons/project-icon.svg';
import webIcon  from '../assets/icons/web-app-icon.svg';
import testIcon from '../assets/icons/test-icon.svg';
import designIcon from '../assets/icons/graphic-design.svg';
import arrow    from '../assets/icons/arrow-icon.svg';

const serviceItems = [
  {
    id: 'coordination',
    title: 'Project Coordination',
    points: [
      'Project planning, scheduling, and monitoring',
      'Team and resource management',
      'Agile workflow and sprint management',
      'Client communication and reporting',
    ],
    Icon: projIcon,
  },
  {
    id: 'development',
    title: 'Web & App Development',
    points: [
      'Responsive Web Development (HTML, CSS, JavaScript, React, Node.js)',
      'Mobile App Development (Flutter, Android, iOS)',
      'API Integration and Backend Development',
      'CMS Integration',
    ],
    Icon: webIcon,
  },
  {
    id: 'testing',
    title: 'Quality Testing',
    points: [
      'Manual Testing for websites and apps',
      'Automation Testing using Selenium',
      'Bug tracking and reporting',
      'Quality assurance and user acceptance testing (UAT)',
    ],
    Icon: testIcon,
  },
  {
    id: 'design',
    title: 'UI/UX & Graphic Design',
    points: [
      'UI/UX Design for web and mobile apps',
      'Wireframing and Prototyping (Figma, Adobe XD)',
      'Branding, Logo Design, and Visual Identity',
      'Graphic Design for marketing materials',
    ],
    Icon: designIcon,
  },
];

export default function ServiceSection() {
  return (
    <section id="service">
      <div className="service-section">
        <div className="service-header">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales.
          </p>
        </div>

        <div className="service-cards">
          {serviceItems.map(({ id, title, points, Icon }) => (
            <div key={id} className="card-wrapper">
              <div className="card">
                <div className="card-content">
                  <h3>{title}</h3>
                  <hr />
                  <ul>
                    {points.map(p => <li key={p}>{p}</li>)}
                  </ul>
                  <img src={Icon} alt="" className="card-icon" />
                </div>
                <button className="card-cta">
                  <img src={arrow} alt="Go" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>  
      <Timeline />

      <DetailCards />

    </section>
  );
}
