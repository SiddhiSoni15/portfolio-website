import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Driver Drowsiness Detection System',
      description: 'Detect Driver Drowsiness to avoid accidents',
      imgSrc: 'C:/Users/Lenovo/Desktop/Tech/web/Portfolio website/src/pages/driver drowsiness.jpg',
      link: 'https://github.com/SiddhiSoni15/driver-drowsiness.git'
    },
    // Add more projects here
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
