import React from 'react'
import HeroSection from './components/HeroSection';

const Home = () => {
  const data = {
    name: "KHIZZ TECHNICAL",
    image: "../../public/images/hero.svg",
  };
  return (
   <HeroSection {...data}/>
  )
};

export default Home