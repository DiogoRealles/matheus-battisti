import { useContext, useState } from 'react';

import Input from '../../form/Input';

import { Link } from 'react-router-dom';

import styles from '../../form/Form.module.css';

import { UserContext } from '../../../contexts/UserContext';

const Login = () => {
  const [user, setUser] = useState({});

  const { login } = useContext(UserContext);

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    login(user);
  };

  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          type="email"
          name="email"
          placeholder="Digite o e-mail"
          handleOnChange={handleChange}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite a senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Entrar" />
      </form>
      <p>
        Não tem conta? <Link to="/register">Clique aqui.</Link>
      </p>
    </section>
  );
};

export default Login;
