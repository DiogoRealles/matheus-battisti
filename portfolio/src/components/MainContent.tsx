import '../assets/scss/components/maincontent.scss';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnologiesContainer from './TechnologiesContainer';

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent
