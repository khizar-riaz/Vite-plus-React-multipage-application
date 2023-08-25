import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  // const data = {
  //   name: "Khizar Riaz",
  //   image: "../../public/images/about1.svg",
  // };

  const {UpdateAboutPage} = useGlobalContext();

  useEffect(()=> 
   UpdateAboutPage(), []);

  return <HeroSection />;
};

export default About;
