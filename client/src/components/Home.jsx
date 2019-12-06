import React from 'react';
import logo from '../images/lynk_logo.png';
import PostList from './PostList';
import CreatePosts from './CreatePosts';
import Header from './Header';



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
      
      {/* <Header /> */}
      <CreatePosts
        postForm={props.postForm}
        handleFormChange={props.handleFormChange}
        createSubmit={props.createSubmit} />

      <PostList
        posts={props.posts} />
           </div>
     );
    }
        
