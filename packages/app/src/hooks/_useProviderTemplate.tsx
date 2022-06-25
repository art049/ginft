import { createContext, useContext } from "react";

export const TEMPLATEContext = createContext<TEMPLATEContext>({});

export const useTEMPLATE = () => useContext(TEMPLATEContext);

export const TEMPLATEProvider: React.FC = ({ children }) => {
  return (
    <TEMPLATEContext.Provider value={{}}>{children}</TEMPLATEContext.Provider>
  );
};

interface TEMPLATEContext {}
