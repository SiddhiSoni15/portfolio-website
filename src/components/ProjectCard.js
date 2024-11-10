import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, imgSrc, link }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </motion.div>
  );
}

export default ProjectCard;
