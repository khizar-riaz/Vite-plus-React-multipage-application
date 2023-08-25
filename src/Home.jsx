import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';

const Home = () => {
  // const data = {
  //   name: "KHIZZ TECHNICAL",
  //   image: "../../public/images/hero.svg",
  // };

  const {UpdateHomePage} = useGlobalContext();

   useEffect(()=> 
  UpdateHomePage(), []);

  return (
   <HeroSection/>
  )
};

export default Home