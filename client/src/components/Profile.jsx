import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserEdit from './UserEdit';


export default function Profile(props) {
  const { currentUser } = props;
  console.log(currentUser)
  return (
    
  <div className='profile-pg'>
    <div className='profile-box'>
        {
          
          currentUser && (
            
                  <>
                <div className='pro-image'>
              {
                  currentUser.image_url ?
                <img src={currentUser.image_url} width='50%' id='post-pic' alt='profile-images' /> :
                <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} width='60%' alt='hands tapping' /> }
            </div>
        
               <h3 id='user-display'>{currentUser.username}</h3>
                  <p id='user-email'>{currentUser.email}</p>
                <p>{currentUser.description}</p>
            
                <div className='edel-btn'>
                <button id='deletepro-btn' onClick={() => {
              props.deleteUser(currentUser.id)
            }}>Delete</button>
            <button id='editpro-btn' onClick={() => {
              props.setUserEdit(currentUser);
            }}>Edit</button>
            </div>
              </>
            
            
        )
            
      }
      </div>
      
        </div>
    )


  


}




