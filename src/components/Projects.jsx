import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Resume Classification using ANN',
    description:
      'An intelligent system that uses Artificial Neural Networks (ANN) to analyze resumes and job descriptions, predicting whether a candidate is qualified. Automates shortlisting by matching skills, experience, and job relevance accurately.',
    image: '/assets/Screenshot (118).png',
    link: 'https://github.com/yourgithub/translate',
  },
  {
    title: 'Blog Platform using MERN Stack',
    description:
      'A full-stack blog application built with MongoDB, Express.js, React, and Node.js that allows users to create, read, update, and delete posts. Includes user authentication, rich text editing, and responsive design.',
    image: '/assets/image.png',
    link: 'https://github.com/yourgithub/food-planner',
  },
  {
    title: 'ArogyaSathi',
    description:
      'A health friend companion which is used for disease prediction by entering the symptoms it will predict the disease what we have and some suggestions.',
    image: '/assets/Screenshot 2025-07-08 074604.png',
    link: 'https://github.com/yourgithub/portfolio',
  },
];

const certifications = [
  {
    title: 'React Developer Certification',
    description: 'Certified React Developer by XYZ Institute.',
    image: '/assets/cert1.png',
    link: 'https://example.com/cert1',
  },
  {
    title: 'Machine Learning Specialization',
    description: 'Completed Machine Learning Specialization by Coursera.',
    image: '/assets/cert2.png',
    link: 'https://example.com/cert2',
  },
  {
    title: 'UI/UX Design Certificate',
    description: 'UI/UX Design Certificate from ABC Academy.',
    image: '/assets/cert3.png',
    link: 'https://example.com/cert3',
  },
];

export default function Projects() {
  const [tab, setTab] = React.useState('projects');

  // Scroll to section if hash is #certifications on load
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#certifications') {
      setTab('certifications');
      setTimeout(() => {
        const el = document.getElementById('certifications');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  // Scroll when tab changes
  React.useEffect(() => {
    const targetId = tab === 'certifications' ? 'certifications' : 'projects-section';
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    window.location.hash = tab === 'certifications' ? '#certifications' : '#projects';
  }, [tab]);

  return (
    <section id="projects-section" className="projects-section">
      {/* Anchor div for smooth scroll to Certifications */}
      {tab === 'certifications' && <div id="certifications" style={{ position: 'absolute', top: '-80px' }}></div>}

      <h1 className="projects-title">
        {tab === 'certifications' ? 'My Certifications' : 'My Projects'}
      </h1>

      <div className="project-tabs">
        <button
          className={tab === 'projects' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setTab('projects')}
        >
          Projects
        </button>
        <button
          className={tab === 'certifications' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setTab('certifications')}
        >
          Certifications
        </button>
      </div>

      <div className="timeline">
        <div className="road"></div>
        {(tab === 'projects' ? projects : certifications).map((item, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className={`timeline-content${tab === 'certifications' ? ' certification' : ''}`}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                View {tab === 'projects' ? 'Project' : 'Certificate'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
