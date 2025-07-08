import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './App.css';

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navbar />
      <main style={{ width: '100%', minHeight: '100vh', boxSizing: 'border-box' }}>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

