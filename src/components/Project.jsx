import React, { useContext, useState } from 'react';
import { FaPalette } from 'react-icons/fa';

// Theme context
const ThemeContext = React.createContext('light');

export function useTheme() {
  return useContext(ThemeContext);
}

// ThemeProvider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [showMenu, setShowMenu] = useState(false);

  const handleThemeChange = (mode) => {
    if (mode === 'default') {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      setTheme(mode);
    }
    setShowMenu(false);
  };

  // Add/remove class on body for global theme
  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
      document.body.style.background = '#101010';
      document.body.style.color = '#fff';
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
      document.body.style.background = '#fff';
      document.body.style.color = '#111';
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ position: 'relative' }}>
        {/* Palette Icon Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            padding: '0.6rem 1rem',
            borderRadius: '50%',
            border: 'none',
            background: theme === 'dark' ? '#444' : '#f0f0f0',
            color: theme === 'dark' ? '#f9d71c' : '#333',
            boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            fontSize: '1.4rem',
            transition: 'all 0.3s ease',
          }}
          title="Choose Theme"
        >
          <FaPalette />
        </button>

        {/* Theme Dropdown */}
        {showMenu && (
          <div
            style={{
              position: 'fixed',
              top: '70px',
              right: '20px',
              background: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
              padding: '0.5rem 0',
              minWidth: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              zIndex: 9999,
            }}
          >
            <button
              onClick={() => handleThemeChange('light')}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.7rem 1rem',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#222',
                fontWeight: theme === 'light' ? 'bold' : 'normal',
              }}
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.7rem 1rem',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#222',
                fontWeight: theme === 'dark' ? 'bold' : 'normal',
              }}
            >
              Dark
            </button>
            <button
              onClick={() => handleThemeChange('default')}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.7rem 1rem',
                textAlign: 'left',
                cursor: 'pointer',
                color: '#222',
              }}
            >
              Default
            </button>
          </div>
        )}

        {/* Render children */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Project Card Component
export default function Project({ title, description, link }) {
  const theme = useTheme();

  return (
    <div className={`project-card${theme === 'dark' ? ' project-card-dark' : ''}`}>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      )}
    </div>
  );
}
