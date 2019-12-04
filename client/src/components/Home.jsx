import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lynk_logo.png';




export default function Home(props) {
  return (
      <>
    <header>
        <nav>
        <img src={logo} alt='lynk-me logo' width='13%' height='auto' id='img-logo'/>
          <a href='/home'>Home</a>
          <a href='/art'>Art</a>
          <a href='/connections'>Connections</a>
          <a href='/gigs'>Gigs/Events</a>
          <a href='/about'>About</a>
          <a href='/profile'>Profile</a>
      </nav>
    </header>
      <div className ='home'>
      {props.currentUser
          ?
          <>
            <p id='wel-user'>Welcome {props.currentUser.username}!</p>
            <button id='logout-btn'onClick={props.handleLogout}>logout</button>
          </>
          :
          <div><h1>You need to log in to do that</h1></div>
        } 

        <h3 id='late-post'>Latest Post...</h3>
      </div>
      </>

  )


}
