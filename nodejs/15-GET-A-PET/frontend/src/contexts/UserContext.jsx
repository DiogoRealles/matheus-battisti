import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const UserContext = createContext();

function UserContextProvider({ children }) {
  const { register } = useAuth();

  return (
    <UserContext.Provider value={{ register }}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
