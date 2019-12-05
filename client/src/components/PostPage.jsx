import React from 'react';


export default function PostPage(props) {
  const { currentPost } = props;
  
  
  return (
    <div>
      {
        currentPost && (
          <>
      
          <h3>{currentPost.content}</h3>
            <img src={currentPost.image_url} width='20%'/>
            <p>{currentPost.hashtags}</p>
            <p>{currentPost.category}</p>
            <button onClick={() => {
              props.deletePost(currentPost.id)
            }}>Delete</button>
            <button onClick={() => {
              props.setEdit(currentPost);
            }}>Edit</button>
            </>
        )}

        
    </div>
  )
  
}