import styles from '../../form/Form.module.css';

import { Link } from 'react-router-dom';

import Input from '../../form/Input';
import { useContext, useState } from 'react';

import { UserContext } from '../../../contexts/UserContext';

const Register = () => {
  const { register } = useContext(UserContext);

  const [user, setUser] = useState({});

  const handleChange = () => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    register(user);
  };

  return (
    <section className={styles.form_container}>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          label="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          label="Confirmação de senha"
          type="password"
          name="confirmPassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  );
};

export default Register;
