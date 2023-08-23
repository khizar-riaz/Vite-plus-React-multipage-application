import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
  return (
    <header>
      <NavLink>
        <img src='../../public/images/logo.png' alt='Khiz logo' />
      </NavLink>
      <Navbar/>
    </header>
  )
};

export default Header