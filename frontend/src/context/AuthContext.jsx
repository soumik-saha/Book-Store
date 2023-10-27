/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Set to null for unauthenticated users

  const login = (userData) => {
    // Perform login logic (e.g., API call)
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic (e.g., clear local storage, invalidate tokens)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
