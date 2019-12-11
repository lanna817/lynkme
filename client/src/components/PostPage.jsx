import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import CommentDisplay from './CommentDisplay';



export default function PostPage(props) {
  const { currentPost } = props;
  console.log(props)

  return (
    <>
      <div className='single-post'>
        {
          currentPost && (
            <>
              {
                currentPost.image_url ?
                  <img src={currentPost.image_url} width='70%' id='post-pic' alt='art or gig images' /> :
                  <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} width='40%' alt='hands tapping' />}

              <p className='post-cont'>{currentPost.content}</p>
              <p className='post-hashtag'>{currentPost.hashtags}</p>
              <button id='delete-btn' onClick={() => {
                props.deletePost(currentPost.id)
              }}>Delete</button>
              <button id='edit-btn' onClick={() => {
                props.setEdit(currentPost);
              }}>Edit</button>


            </>
          )}

        <Comment
          userId={props.userId}
          postId={props.postId}
          handleCommentChange={props.handleCommentChange}
          handleCommentSubmit={props.handleCommentSubmit}
          commentBox={props.commentBox}
          deleteComment={props.deleteComment}/>




      </div>
      <CommentDisplay
        userId={props.userId}
        postId={props.postId}
        comments={props.comments}
        commentBox={props.commentBox}
        deleteComment={props.deleteComment}/>
    </>
  )
}