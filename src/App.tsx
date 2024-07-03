import { ThemeProvider } from 'styled-components';

import { useContext } from 'react';
import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import HeaderSection from './components/Header/HeaderSection';
import DarkModeContext from './contexts/DarkModeContext';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyles from './styles/globalStyles';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <ThemeProvider theme={ darkMode ? dark : light }>
        <GlobalStyles />
        <HeaderSection />
        <SkillsSection />
        <ProjectsSection />
      </ThemeProvider>
      {/* Adicione outras seções aqui */}
    </div>
  );
}

export default App;
