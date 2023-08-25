import React, { useContext, useReducer } from "react";

import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const UpdateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Khizz Technical",
        image: "../../public/images/hero.svg",
      },
    });
  };

  const UpdateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Khizar Riaz",
        image: "../../public/images/about1.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, UpdateHomePage, UpdateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
