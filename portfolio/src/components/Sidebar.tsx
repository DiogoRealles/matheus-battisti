import Avatar from '../assets/img/profile.jpg';

import '../assets/scss/components/sidebar.scss';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Diogo Realles" />
      <h2 className="title">Desenvolvedor Front-end</h2>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar
