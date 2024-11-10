import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Siddhi Soni. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/SiddhiSoni15" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/siddhi-sachin-soni-908108268" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
