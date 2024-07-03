import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="container">
      <input
        type="checkbox"
        className="checkbox chk"
        checked={ darkMode }
        onChange={ toggleDarkMode }
      />
      <label className="label" htmlFor="chk">
        <img src="/sun.svg" alt="sunTheme" />
        <img src="/moon.svg" alt="moonTheme" />
        <div className="ball" />
      </label>
    </div>
  );
}

export default DarkModeToggle;
