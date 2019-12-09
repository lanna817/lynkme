import React from 'react';
import logo from '../images/lynk_logo.png';


export default function Header() {
  return (
    <div className='home'>
      <header>
        <nav>
          <img src={logo} alt='lynk-me logo' width='13%' height='auto' id='img-logo' />
          <a href='/home'>Home</a>
          <span className='nav-color'>
            <a href='/art'>Art</a>
          </span>
          <span className='nav-color'>
            <a href='/connections'>Connections</a>  
           </span> 
          <a href='/about'>About</a>
          <a href='/profile'>Profile</a>
        </nav>
      </header>
    </div>
  )
}
