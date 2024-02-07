import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import HeaderSection from './components/Header/HeaderSection';
import './styles/global.module.css';
import DarkModeProvider from './contexts/DarkModeProvider';

function App() {
  return (
    <div>
      <DarkModeProvider>
        <HeaderSection />
        <SkillsSection />
        <ProjectsSection />
      </DarkModeProvider>
      {/* Adicione outras seções aqui */}
    </div>
  );
}

export default App;
