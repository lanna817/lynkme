import React from 'react';

export default function CommentDisplay(props) {

  return (
    <div>
      {props.commentBox.map(comment => (
        
         <h3>{props.comment.content}</h3>
      
      ))}
    </div>
  )
};