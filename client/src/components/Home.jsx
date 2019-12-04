import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lynk_logo.png';




export default function Home(props) {
  return (
      <>
    <header>
        <nav>
        <img src={logo} alt='lynk-me logo' width='13%' height='auto' id='img-logo'/>
          <a href='#'>Home</a>
          <a href='#'>Art</a>
          <a href='#'>Connections</a>
          <a href='#'>Gigs/Events</a>
          <a href='#'>About</a>
          <a href='#'>Profile</a>
      </nav>
    </header>
      <div className ='home'>
      {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <div></div>
        } 

      </div>
      </>

  )


}
