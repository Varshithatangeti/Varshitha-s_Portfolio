import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Resume Classification using ANN',
    description:
      'An intelligent system that analyzes resumes and job descriptions using Artificial Neural Networks.',
    image: '/assets/Screenshot (118).png',
    link: 'https://github.com/yourgithub/translate',
  },
  {
    title: 'Blog Platform using MERN Stack',
    description:
      'A full-stack blog application with CRUD, authentication, and a clean UI using the MERN stack.',
    image: '/assets/image.png',
    link: 'https://github.com/yourgithub/food-planner',
  },
  {
    title: 'ArogyaSathi',
    description:
      'A disease prediction tool based on symptoms with suggestions, acting like your health buddy.',
    image: '/assets/Screenshot 2025-07-08 074604.png',
    link: 'https://github.com/yourgithub/portfolio',
  },
];

const certifications = [
  {
    title: 'Python Certification',
    description: 'Certified React Developer by XYZ Institute.',
    image: '/assets/Screenshot 2025-07-11 111555.png',
    link: '/certificates/python_basic certificate.pdf',
  },
  {
    title: 'Sql Basic Certification',
    description: 'Completed Machine Learning Specialization by Coursera.',
    image: '/assets/Screenshot 2025-07-11 111837.png',
    link: '/certificates/sql_basic certificate.pdf',
  },
  {
    title: "Angular certification by Infosys springboard",
    description: 'Completed Machine Learning Specialization by Coursera.',
    image: '/assets/Screenshot 2025-07-11 111837.png',
    link: '/certificates/sql_basic certificate.pdf',
  },
];

export default function Projects() {
  const [tab, setTab] = React.useState('projects');

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

      <div className="grid-container">
        {(tab === 'projects' ? projects : certifications).map((item, idx) => (
          <div key={idx} className={`timeline-content ${tab === 'certifications' ? 'certification' : ''}`}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Check Out</a>
          </div>
        ))}
      </div>
    </section>
  );
}
