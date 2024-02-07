import styles from './DarkModeToggle.module.css';
import { useDarkMode } from '../../contexts/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className={ `${styles.buttonToggle} 
    ${isDarkMode ? styles.active : ''}` }
      onClick={ toggleDarkMode }
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
