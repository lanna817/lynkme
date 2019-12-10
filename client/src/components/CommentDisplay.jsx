import React from 'react';

export default function CommentDisplay(props) {

  return (
    <div>

      {props.comments && props.comments.map(comment => (
        
         <h3>{comment.content}</h3>
      
      ))}
    </div>
  )
};