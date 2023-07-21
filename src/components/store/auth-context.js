import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token') || ''; // Get the token from local storage or set it to an empty string

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  useEffect(() => {
    // Save the token to local storage whenever it changes
    localStorage.setItem('token', token);
  }, [token]);

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken('');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
