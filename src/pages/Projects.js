import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'Description for Project One.',
      imgSrc: 'link_to_image',
      link: 'https://github.com/yourusername/projectone'
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
