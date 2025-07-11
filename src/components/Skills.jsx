import React from 'react';
import './Skills.css';
import { FaGithub, FaFigma, FaPython } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiPostman, SiHtml5, SiCss3 } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

function Bubbles() {
  return (
    <div className="bubbles">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
    </div>
  );
}

const skills = [
  { name: 'GitHub', icon: <FaGithub size={40} color="#111" /> },
  { name: 'Figma', icon: <FaFigma size={40} color="#a259ff" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} color="#f7df1e" /> },
  { name: 'HTML', icon: <SiHtml5 size={40} color="#e34c26" /> },
  { name: 'CSS', icon: <SiCss3 size={40} color="#2965f1" /> },
  { name: 'SQL', icon: <DiMysql size={40} color="#00758F" /> },
  { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" /> },
  {
    name: 'Python',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24">
        <path
          d="M9.5 2a2.5 2.5 0 0 0-2.45 2H7a5 5 0 0 0-5 5v2h14V7a5 5 0 0 0-5-5h-1zm-2 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm7 3a2.5 2.5 0 0 1 2.45 2H17a5 5 0 0 1 5 5v2H8v-2a5 5 0 0 1 5-5h1zm2 2a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
          fill="#3776AB"
        />
      </svg>
    ),
  },
  {
    name: 'UI/UX',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <rect x="5" y="8" width="30" height="24" rx="5" fill="#fff" stroke="#a259ff" strokeWidth="2" />
        <circle cx="15" cy="20" r="4" fill="#a259ff" />
        <rect x="22" y="16" width="8" height="8" rx="2" fill="#a259ff" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Bubbles />
      <h1 className="skills-title">
        My <span>Skills</span>
      </h1>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}