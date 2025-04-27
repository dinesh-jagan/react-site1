// contactsection.js
import React from 'react';
import './ContactSection.css';
import mailSend from '../assets/icons/email-send.svg'

const ContactSection = ({ sections, activeSection, onNavClick }) => {
  return (
    <section className="contact-section" id="contact">
      <div className="cta-header">
        <h2 className="contact-title">Lets Connect there</h2>

        <div className="contact-cta">
          <button className="cta-button">Contact ↗</button>
        </div>
      </div>

      <div className="contact-footer">
        <div className="footer-logo">
          <h3>Logo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
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
            <li>+20 11 43 63 73 41</li>
            <li>fawzisyed1209@gmail.com</li>
            <li>fawziuiux.com</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Get the latest information</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Email Address" />
            <button>
              <img src={mailSend} alt="Send Icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
