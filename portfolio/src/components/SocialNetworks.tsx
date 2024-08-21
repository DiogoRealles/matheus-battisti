import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../assets/scss/components/socialnetworks.scss';

const socialNetworks = [
  {name: 'linkedin', icon: <FaLinkedinIn />},
  {name: 'github', icon: <FaGithub />},
  {name: 'instagram', icon: <FaInstagram />},
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a id={network.name} className='social-btn' key={network.name} href="#">
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks
