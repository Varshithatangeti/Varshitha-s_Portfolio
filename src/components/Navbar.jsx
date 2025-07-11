import React, { useState } from 'react';
import './Navbar.css';
import { FaPalette, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#aboutme' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Certifications', href: '#certifications' }, // Add Certifications tab
    { label: 'Contact', href: '#contact' }
  ];

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar-glass sticky-navbar ${theme === 'dark' ? 'navbar-dark' : ''}`}>
      <div className="navbar-logo">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="hotpink" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" />
          <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Arial" dy=".3em">VT</text>
        </svg>
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={e => handleSmoothScroll(e, item.href)}
          >
            {item.label}
          </a>
        ))}

        <div className="theme-toggle">
          <button
            onClick={() => setShowOptions(prev => !prev)}
            className="palette-btn"
            title="Toggle Theme"
            style={{
              padding: '0.2rem 0.5rem',
              fontSize: '1rem',
              marginLeft: '1rem'
            }}
          >
            <FaPalette />
          </button>
          {showOptions && (
            <div className="theme-dropdown">
              {['light', 'dark', 'default'].map(mode => (
                <button
                  key={mode}
                  onClick={() => {
                    setTheme(mode);
                    setShowOptions(false);
                  }}
                  className={`theme-option ${theme === mode ? 'selected' : ''}`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        className="navbar-menu-btn"
        onClick={() => setMenuOpen(m => !m)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}