import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  return (
    <LoginContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
