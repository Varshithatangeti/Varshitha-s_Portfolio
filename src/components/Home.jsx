import React, { useEffect } from 'react';
import './Home.css';
import heroImg from '../assets/girl-reading-a-book-svgrepo-com.svg'; // Place your SVG/PNG image in src/assets/hero.svg

function RainEffect() {
  React.useEffect(() => {
    const rainContainer = document.getElementById('rain-container');
    if (!rainContainer) return;
    rainContainer.innerHTML = '';
    const drops = 35;
    for (let i = 0; i < drops; i++) {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${11 + Math.random() * 4}s`; // very slow
      drop.style.animationDelay = `${Math.random() * 3}s`;
      drop.style.opacity = 0.18 + Math.random() * 0.18;
      drop.style.transform = `translateZ(${Math.random() * 200 - 100}px)`;
      rainContainer.appendChild(drop);
    }
    // Clean up on unmount
    return () => { if (rainContainer) rainContainer.innerHTML = ''; };
  }, []);
  return <div id="rain-container" className="rain-container"></div>;
}

function SnowEffect() {
  useEffect(() => {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;
    snowContainer.innerHTML = '';
    const flakes = 40;
    for (let i = 0; i < flakes; i++) {
      const flake = document.createElement('div');
      flake.className = 'snow-flake';
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDuration = `${6 + Math.random() * 8}s`;
      flake.style.animationDelay = `${Math.random() * 6}s`;
      flake.style.opacity = 0.7 + Math.random() * 0.3;
      flake.style.fontSize = `${12 + Math.random() * 10}px`;
      snowContainer.appendChild(flake);
    }
    return () => { if (snowContainer) snowContainer.innerHTML = ''; };
  }, []);
  return <div id="snow-container" className="snow-container"></div>;
}

export default function Home() {
  return (
    <section id="home" className="home-section">
      <SnowEffect />
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <div className="home-content">
        <div className="home-image">
          <img src={heroImg} alt="Varshitha working" />
        </div>
        <div className="home-text" style={{ fontFamily: "'Dancing Script', cursive, Arial, sans-serif" }}>
          <h1>
            Hello I’am <span className="highlight">Varshitha.</span>
            <br />
            <span className="bold">Frontend <span className="outline">Developer</span> &amp; UI/UX <span className="outline">Designer</span></span>
          </h1>
          <p>
            Exploring the world of UI/UX design with a passion for crafting user-friendly interfaces.
            Aspiring Machine learning &amp; Web Development Professional and Enthusiastic Trainee.
          </p>
          <div className="social-icons">
            <a href="https://github.com/Varshithatangeti" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/varshitha-tangeti-444214289/" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/sita_ram_0408/profilecard/?igsh=enhldWZxdDljMzRs" rel="noopener noreferrer">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.78.128 4.87.312 4.13.54c-.77.24-1.42.56-2.07 1.21-.65.65-.97 1.3-1.21 2.07-.23.74-.412 1.65-.47 2.92C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.27.24 2.18.47 2.92.24.77.56 1.42 1.21 2.07.65.65 1.3.97 2.07 1.21.74.23 1.65.412 2.92.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.27-.058 2.18-.24 2.92-.47.77-.24 1.42-.56 2.07-1.21.65-.65.97-1.3 1.21-2.07.23-.74.412-1.65.47-2.92.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.27-.24-2.18-.47-2.92-.24-.77-.56-1.42-1.21-2.07-.65-.65-1.3-.97-2.07-1.21-.74-.23-1.65-.412-2.92-.47C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}