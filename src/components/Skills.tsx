// src/components/Skills.tsx
import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import './Skills.css';

function Skills() {
  return (
    <Reveal className="skills-container">
      <div>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML5 / CSS3</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </Reveal>
  );
}

export default Skills;
