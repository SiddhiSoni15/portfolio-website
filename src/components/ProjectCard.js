import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, imgSrc, link }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src="C:\Users\Lenovo\Desktop\Tech\web\Portfolio website\src\components\project card.jpg" alt="Project card" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </motion.div>
  );
}

export default ProjectCard;
