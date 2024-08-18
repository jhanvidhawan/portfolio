import React from 'react';
import './Projects.css';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';
import p5 from '../assets/images/p5.png';
import p6 from '../assets/images/p6.png';

const projects = [
  {
    id: 1,
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
    image: p1,
    tech: ['TypeScript', 'React.js', 'Next.js', 'CSS', 'HTML', 'MongoDB']
  },

  {
    id: 2,
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
    image: p2,
    tech: ['TypeScript', 'React.js', 'Next.js', 'CSS']
  },

  { 
    id: 3,
    title: 'How To Make Flyer Design', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor', 
    image: p3,
    tech: ['TypeScript', 'React.js', 'Next.js', 'CSS', 'HTML', 'MongoDB']
  },

  { 
    id: 4, 
    title: 'How To Make Flyer Design', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor', 
    image: p4,
    tech: ['TypeScript', 'React.js', 'Next.js', 'CSS', 'HTML', 'MongoDB']
  },
  { 
    id: 5, 
    title: 'How To Make Flyer Design', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor', 
    image: p5,
    tech: ['TypeScript', 'React.js', 'Next.js', 'CSS', 'HTML', 'MongoDB']
  },
  { 
    id: 6, title: 'How To Make Flyer Design', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor', 
    image: p6,
    tech: ['TypeScript', 'React.js', 'Next.js', 'CSS', 'HTML', 'MongoDB']
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className='project-head'>Projects</h2>
      <p className='project-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.tech && project.tech.length > 0 && (
                <div className="tech-buttons">
                  {project.tech.map((tech, index) => (
                    <button key={index} className="tech-button">{tech}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
