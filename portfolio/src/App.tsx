import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './assets/scss/components/app.scss';

function App() {
  return (
    <div id='portfolio'>
      <h1>Diogo Realles</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
