import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UserEdit from './UserEdit';


export default function Profile(props) {
  const { currentUser } = props;
  
  return (
    
  <div className='profile-pg'>
       
        {

          currentUser && (
            
                  <>
                <div className='pro-image'>
              {
                  currentUser.image_url ?
                <img src={currentUser.image_url} width='70%' id='post-pic' alt='profile-images' /> :
                <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} width='40%' alt='hands tapping' /> }
               <h3>{currentUser.username}</h3>
            </div>
        
                  <p>{currentUser.email}</p>
                <p>{currentUser.description}</p>
            

                <button id='delete-btn' onClick={() => {
              props.deleteUser(currentUser.id)
            }}>Delete</button>
            <button id='edit-btn' onClick={() => {
              props.setUserEdit(currentUser);
            }}>Edit</button>
            
              </>
            
            
        )
            
        }
    

        {/* <Route path='/users/:id/edit' render={(props) => {
          const userId = props.match.params.id;
          return <UserEdit
          userId={userId}
          userForm={this.state.userForm}
          handleUserFormChange={this.handleUserFormChange}
          editUserSubmit={this.editUserSubmit} 
          />
        }} /> */}
      
        </div>
    )


  


}




