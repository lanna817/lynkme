import React from 'react';

export default function Comment(props) {
  return (

    <div>
      <form id='create-comment' onSubmit={(e) => {
        e.preventDefault();
       
        props.handleCommentSubmit(props.postId, props.userId,  props.commentBox);
      }}>
        <label htmlFor="content">Comment</label>
        <textarea

          name="content"
          id="content"
          value={props.commentBox.content}
          onChange={props.handleCommentChange}
        />
        <button id='post-page-submit'>Submit</button>
      </form>
    </div>

  )
}