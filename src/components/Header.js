import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Siddhi Soni</h1> {/* Replace with an image tag if you have a logo */}
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
