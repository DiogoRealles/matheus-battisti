import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const { authenticated, register, login, logout } = useAuth();

  return (
    <UserContext.Provider value={{ authenticated, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
