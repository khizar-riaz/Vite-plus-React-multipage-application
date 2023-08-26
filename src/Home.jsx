import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';
import Service from './Service';
import Contact from './Contact';
import About from './About';

const Home = () => {
  // const data = {
  //   name: "KHIZZ TECHNICAL",
  //   image: "../../public/images/hero.svg",
  // };

  const {UpdateHomePage} = useGlobalContext();

   useEffect(()=> 
  UpdateHomePage(), []);

  return (
    <>
   <HeroSection/>
   <Service/>
   <Contact/>  
    </>
  
  )
};

export default Home