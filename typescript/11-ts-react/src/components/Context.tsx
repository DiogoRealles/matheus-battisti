// Context é utilizado para mostrar funcionalidades de acord ocom o contexto do usuário.
// Exemplo: userAdmin pode ver todas as funcionalidades disponíveis, userComum não verá funcionalidades criticas ou de excluir ou botão logar ou botão sair
import React, {useContext} from 'react'
import { AppContext } from '../App'

const Context = () => {
  const details = useContext(AppContext);

  return (
    <>
      {details && (
        <div>
          <h2>Language: {details.language}</h2>
          <h4>FW: {details.framework}</h4>
          <p>QTY: {details.projects}</p>
        </div>
      )
      }
    </>
  )
}

export default Context