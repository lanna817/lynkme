import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';



export default function PostPage(props) {
  const { currentPost } = props;
  
  
  return (
    <div className='single-post'>
      {
        currentPost && (
          <>
      
          <h3>{currentPost.content}</h3>
            <img src={currentPost.image_url} width='20%' alt='art or gig images'/>
            <p>{currentPost.hashtags}</p>
            <p>{currentPost.category}</p>
            <button onClick={() => {
              props.deletePost(currentPost.id)
            }}>Delete</button>
            <button onClick={() => {
              props.setEdit(currentPost);
            }}>Edit</button>
     
              {/* <button>Add Comment</button> */}
         
            {/* <p>{currentPost.cont}</p> */}
            </>
        )}
      
      <Comment
       handleCommentChange={props.handleCommentChange}
        handleCommentSubmit={props.handleCommentSubmit}
        commentBox={props.commentBox}
     />
      
      

     
        
    </div>
  )
  
}