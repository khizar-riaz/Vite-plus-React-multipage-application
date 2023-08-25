import React, { useContext } from "react";

//for Context API
//1. create a context
//2. provider
//3. consumer
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value= {{ fname: "Khizar Riaz", age: "24"}}>{children}</AppContext.Provider>;
};

//global custom hook
const useGlobalContext = () =>
{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};