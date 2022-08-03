import React, { createContext } from "react";

const AuthContext = createContext(undefined);

const DispatchContext = createContext(undefined);

const AuthProvide = ({ children }) => {
  const [isLogin, setIsLogin] = React.useState(false);

  const handleChange = (isLogin) => {
    setIsLogin(isLogin);
  };
  return (
    <AuthContext.Provider value={isLogin}>
      <DispatchContext.Provider value={{ handleChange }}>
        {children}
      </DispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const useCreateAuthContext = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw Error("useCreatrAuthContext");
  }

  return context;
};

const useDispatchContext = () => {
  const context = React.useContext(DispatchContext);

  if (context === undefined) {
    throw Error("useCreateDispatchContext");
  }

  return context;
};

const useAuthContext = () => {
  return [useCreateAuthContext, useDispatchContext];
};

export {
  AuthProvide,
  useAuthContext,
  useDispatchContext,
  useCreateAuthContext,
};
