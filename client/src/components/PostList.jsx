import React from 'react';
import { Link } from 'react-router-dom';


export default function PostList(props) {
  return (
    <div className='post-container'>
    <div className='post-list'>
      {
        props.posts.map(post => (
          <div className='post-ind' key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {
                post.image_url ? <img src={post.image_url} className='post-img' width='40%' alt='art or gig images' /> :
                  <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} width='40%' alt='hands tapping' /> }
              
            <p className='text-cont'>{post.content}</p>
            <p className='hashtag'>{post.hashtags}</p>
            <p>{post.category}</p>
      </Link>
      </div>

        ))
          }
          
      </div>
      </div>
  )
}