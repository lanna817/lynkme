import React from 'react';

export default function CommentDisplay(props) {

  return (
    <div className='comment-sec'>

      {props.comments && props.comments.map(comment => (
        <div className='comment-cont'key={comment.id}>

          <h3 id='comment'>{comment.content}</h3>
          <button id='deletecomment-btn' onClick={() => {
                props.deleteComment(comment.id)
              }}>Delete</button> 
      </div>
      ))}
    </div>
  )
};