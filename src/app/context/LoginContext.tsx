'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoginContextProps {
  isLogin: boolean;
  setLoginStatus: (status: boolean) => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLogin(!!accessToken);
  }, []);

  const setLoginStatus = (status: boolean) => {
    if (!status) {
      localStorage.removeItem("accessToken");
    }
    setIsLogin(status);
  };

  return (
    <LoginContext.Provider value={{ isLogin, setLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
