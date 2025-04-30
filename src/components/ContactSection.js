// contactsection.js
import React from 'react';
import './ContactSection.css';
import mailSend from '../assets/icons/email-send.svg'

const ContactSection = ({ sections, activeSection, onNavClick }) => {
  return (
    <section className="contact-section" id="contact">
      <div className="cta-header">
        <h2 className="contact-title">Let's get connected</h2>

        <div className="contact-cta">
          <button className="cta-button">Contact ↗</button>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-logo">
          <h3>Kudoz</h3>
          <p>
          We create custom apps, websites, and branding to fuel your business growth. Our experts turn ideas into reality with smart design and advanced technology, helping your business thrive online.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            {sections.slice(0, 3).map((s) => (
              <li key={s}>
                <button
                  className={`footer-nav-link ${activeSection === s ? 'active' : ''}`}
                  onClick={() => onNavClick(s)}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>6369195071</li>
            <li>pynthamizhselvi.sm23@gmail.com</li>
            <li>Coimbatore</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
