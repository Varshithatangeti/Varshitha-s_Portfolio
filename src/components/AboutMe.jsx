import React from 'react';
import './Home.css';
import aboutImg from '../assets/girl-reading-a-book-svgrepo-com.svg';
import { FaDownload } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="about-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        padding: "3rem 2rem"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Matter on the left */}
        <div style={{
          flex: 1.5,
          paddingRight: "3vw",
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h1
            style={{
              fontSize: "2.7rem",
              fontWeight: 700,
              marginBottom: "2.5rem",
              textAlign: "center",
              letterSpacing: "1px",
              width: "100%",
              color: "#111",
              zIndex: 2
            }}
          >
            About Me
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem", lineHeight: 1.7, textAlign: "center" }}>
            I’m Varshitha Tangeti, an enthusiastic and driven computer science student specializing in Artificial Intelligence and machine learning.
            With a strong foundation in frontend development and a growing passion for intelligent systems, I love building real-world projects that blend creativity and functionality.
          </p>
          <p style={{ fontSize: "1.1rem", color: "#444", marginBottom: "1.5rem", lineHeight: 1.7, textAlign: "center" }}>
            Over the past few months, I’ve worked on several impactful projects— from dynamic websites to machine learning models—combining my technical knowledge in
            <span style={{ fontWeight: 700 }}> HTML, CSS, JavaScript, SQL, Node.js, Python, Postman, GitHub, Figma, MongoDB, and UI/UX designing </span>
            with my academic understanding of AI and machine learning.
          </p>
          {/* Download Resume Button */}
          <a
            href="/assets/Varshitha_resume.pdf"
            download="Varshitha_resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#a259ff",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.98rem",
              padding: "0.45rem 0.9rem",
              borderRadius: "6px",
              textDecoration: "none",
              marginTop: "1.2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s"
            }}
          >
            <FaDownload style={{ fontSize: "1rem" }} />
            Download my resume
          </a>
        </div>
        {/* Picture on the right */}
        <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img
            src={aboutImg}
            alt="About Varshitha"
            style={{
              maxWidth: "370px",
              width: "90%",
              border: "3px solid #111",
              borderRadius: "18px",
              background: "transparent",
              boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
              padding: "1.2rem"
            }}
          />
        </div>
      </div>
    </section>
  );
}