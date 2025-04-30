import React from 'react';
import './Navbar.css';

const Navbar = ({ sections, activeSection, onNavClick }) => (
  <nav className="navbar">
    {/* Left side links */}
    <div className="nav-group nav-left">
      {sections.slice(0, 2).map((s) => (
        <button
          key={s}
          className={`nav-link ${activeSection === s ? 'active' : ''}`}
          onClick={() => onNavClick(s)}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </button>
      ))}
    </div>

    {/* Logo Center */}
    <div className="logo">
      <span className="logo-text">Kudoz</span>
    </div>

    {/* Right side links */}
    <div className="nav-group nav-right">
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
