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
      
            <img src={currentPost.image_url} width='70%' id='post-pic' alt='art or gig images'/>
            <p className='post-cont'>{currentPost.content}</p>
            <p className='post-hashtag'>{currentPost.hashtags}</p>
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
        postId={props.postId}
       handleCommentChange={props.handleCommentChange}
        handleCommentSubmit={props.handleCommentSubmit}
        commentBox={props.commentBox}
        
     />
      
      

     
        
    </div>
  )
}