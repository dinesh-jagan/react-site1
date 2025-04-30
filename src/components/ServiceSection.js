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
    title: 'App Development',
    points: [
      'Mobile app development for Android and iOS',
      'Cross-platform apps using Flutter',
      'API integration and mobile backend development',
      'App deployment and maintenance',
    ],
    Icon: webIcon,
    bgheight: '460px',
    cta_bottom: '116px',
    cta_right: '87px'
  },
  {
    id: 'development',
    title: 'Web Development',
    points: [
      'Responsive Web Development (HTML, CSS, JavaScript)',
      'Frontend frameworks',
      'Backend development',
      'CMS Integration',
    ],
    Icon: webIcon,
    bgheight: '372px',
    cta_bottom: '93px',
    cta_right: '67px'
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
    bgheight: '434px',
    cta_bottom: '109px',
    cta_right: '80px'
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
    bgheight: '497px',
    cta_bottom: '125px',
    cta_right: '97px'
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
            Powering your digital transformation with cutting-edge technology
          </p>
        </div>

        <div className="service-cards">
          {serviceItems.map(({ id, title, points, Icon, bgheight, cta_bottom, cta_right }) => (
            <div key={id} className="card-wrapper">
              <div className="card"
              style={{ '--bg-height': bgheight, '--cta-bottom': cta_bottom, '--cta-right': cta_right }}
              >
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
