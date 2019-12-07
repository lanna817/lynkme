import React from 'react';
import logo from '../images/lynk_logo.png';
import PostList from './PostList';
import CreatePosts from './CreatePosts';
import dustin from '../images/dustin_art.jpg';
import micka from '../images/micka_art.jpg';
import eli from '../images/eli_art.jpg';
import xaviera from '../images/xaviera_art.jpg';
import nrf from '../images/nrf.png';
import expresso from '../images/expresso.jpg';
import snl from '../images/saturday.jpg';



export default function Home(props) {
  return (
        <div className='home'>
        {props.currentUser
          ?
          <>
            <p id='wel-user'>Welcome {props.currentUser.username}!</p>
            <button id='logout-btn' onClick={props.handleLogout}>logout</button>
          </>
          :
          <div><h1>You need to log in to do that</h1></div>
        }
      <h3 id='late-post'>Latest Post...</h3>
      <div className='content-home'>

      {/* <Header /> */}
      <CreatePosts
        postForm={props.postForm}
        handleFormChange={props.handleFormChange}
        createSubmit={props.createSubmit} />

      <PostList
          posts={props.posts} />
        
        <div className='local-update'>
        <h1 id='art-headline'>Artist Spotlight</h1>
      <div className='locals'>
        <img src={micka}  alt='artist image' width='20%' />
        <img src={dustin} alt='artist image' width='30%' />
        <img src={xaviera} alt='artist image' width='25%'/>
        <img src={eli} alt='artist image' width='30%' />
      </div>
        <>
        <h1 id='gig-headline'>Latest Gigs/Events</h1>
      <div className='gigs'>
      <img src={nrf} alt='events-image' width='30%' />
       <img src={expresso} alt='events-image' width='30%' />
       <img src={snl} alt='events-image' width='30%' />
      </div>
        </>
        </div>
        
      </div>
      </div>
     );
    }
        
