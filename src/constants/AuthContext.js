import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState('');

  const setAuthInfo = (data) => {
    setAuthData(data);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);