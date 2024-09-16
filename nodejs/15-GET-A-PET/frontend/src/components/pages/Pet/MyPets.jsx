import styles from './Dashboard.module.css';

import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPets = () => {
  const [pets, setPets] = useState([]);

  // useEffect(() => {}, [])

  return (
    <section>
      <div className={styles.petslist_header}>
        <h1>Meus Pets Cadastrados</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>

      <div className={styles.petslist_container}>
        {pets.length > 0 && <p>Meus Pets cadastrados</p>}
        {pets.length === 0 && <p>Não há Pets cadastrados!</p>}
      </div>
    </section>
  );
};

export default MyPets;
