import styles from './PetDetails.module.css';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../../utils/api';
import useFlashMessage from '../../../hooks/useFlashMessage';

const PetDetails = () => {
  const { id } = useParams();

  const [pet, setPet] = useState({});

  const { setFlashMessage } = useFlashMessage();

  const [token] = useState(localStorage.getItem('getapet-token') || '');

  useEffect(() => {
    api
      .get(`/pets/${id}`)
      .then((response) => {
        setPet(response.data.pet);
      })
      .catch((error) => {
        msgType = 'error';
        return error.response.data;
      });
  }, [id]);

  async function schedule() {
    let msgType = 'success';

    const data = await api
      .patch(`/pets/schedule/${pet._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        msgType = 'error';

        return error.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          <div className={styles.petdetails_header}>
            <h1>Conhecendo o Pet: {pet.name}</h1>
            <p>Se tiver interesse, marque uma visita para conhece-lo</p>
          </div>

          <div className={styles.pet_images}>
            {pet.images.map((image, index) => (
              <img
                src={`${import.meta.env.VITE_APP_API}/imgs/pets/${image}`}
                alt={pet.name}
                key={index}
              />
            ))}
          </div>

          <p>
            <span className="bold">Peso:</span> {pet.weight} kg
          </p>
          <p>
            <span className="bold">Idade:</span> {pet.age} anos
          </p>

          {token ? (
            <button onClick={schedule}>Solicitar uma Visita</button>
          ) : (
            <p>
              Você precisa <Link to="/register">Criar uma conta</Link> para
              solicitar a visita
            </p>
          )}
        </section>
      )}
    </>
  );
};

export default PetDetails;
