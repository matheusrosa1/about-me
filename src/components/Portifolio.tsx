// src/components/Portfolio.tsx
import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default Portfolio;
