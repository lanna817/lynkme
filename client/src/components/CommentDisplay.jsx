import React from 'react';

export default function CommentDisplay(props) {

  return (
    <div>

      {props.comments && props.comments.map(comment => (
        <div key={comment.id}>
          <h3>{comment.content}</h3>
          <button id='delete-btn' onClick={() => {
                props.deleteComment(comment.id)
              }}>Delete</button> 
      </div>
      ))}
    </div>
  )
};