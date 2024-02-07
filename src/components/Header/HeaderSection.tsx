// src/components/HeaderSection.tsx
import { Link } from 'react-scroll';
import styles from './HeaderSection.module.css';
import DarkModeToggle from '../DarkMode/DarkModeToggle';

function HeaderSection() {
  return (
    <div className={ styles.header }>
      {/*       <h1>Matheus Rosa</h1>
      <p>Web Developer</p> */}
      <Link to="skills-section" smooth duration={ 500 }>
        Scroll to Skills
      </Link>
      <DarkModeToggle />
      {/*       <p>Colocar Foto</p> */}
    </div>
  );
}

export default HeaderSection;
