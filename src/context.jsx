import React, { useContext } from "react";

//for Context API
//1. create a context
//2. provider
//3. consumer
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Khizar Riaz">{children}</AppContext.Provider>;
};



export {AppContext, AppProvider};