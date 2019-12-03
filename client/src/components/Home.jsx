import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lynk_logo.png';



export default function Home(props) {
  return (
    <header>
      <img src={logo} alt='lynk-me logo' width='11%' height='auto' />
      <div>

        <h1>Welcome to LinkMe</h1>
      {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/register</button>
        } 

      </div>

   </header> 

  )


}
