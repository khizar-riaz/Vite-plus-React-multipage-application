import React, { useContext, useEffect, useReducer } from "react";

import reducer from "./reducer";

const AppContext = React.createContext();

//const API = "https://thapareactapi.up.railway.app/";
//const API = "https://jsonplaceholder.typicode.com/posts";
const API = "https://jsonplaceholder.typicode.com/photos";
const intialState = {
  name: "",
  image: "",
  services: [],
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
  //to get the api data
  const getServices = async (url) =>{
    try {
        const res = await fetch(url);
         const data = await res.json();
         dispatch({type:"GET_SERVICES", payload: data})
    } catch(error){
        console.log(error);
    }
  }
  //for service page call the api

  useEffect(()=> {
   getServices(API);
  },[]);

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
