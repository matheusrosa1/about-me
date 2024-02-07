// src/components/SkillsSection.tsx
import { Reveal } from 'react-awesome-reveal';
import './SkillsSection.css';

function SkillsSection() {
  return (
    <Reveal className="section skills-section">
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

export default SkillsSection;
