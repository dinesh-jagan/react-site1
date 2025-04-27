import React from 'react';
import './Navbar.css';

const Navbar = ({ sections, activeSection, onNavClick }) => (
  <nav className="navbar">
    <div className="nav-group">
      {sections.slice(0, 2).map((s) => (
        <button
          key={s}
          className={`nav-link ${activeSection === s ? 'active' : ''}`}
          onClick={() => onNavClick(s)}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)} {/* Capitalize */}
        </button>
      ))}
    </div>

    <div className="logo">
      <span className="logo-circle" />
      <span className="logo-text">Logo</span>
    </div>

    <div className="nav-group">
      {sections.slice(2).map((s) => (
        <button
          key={s}
          className={`nav-link ${activeSection === s ? 'active' : ''}`}
          onClick={() => onNavClick(s)}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </button>
      ))}
    </div>
  </nav>
);

export default Navbar;
