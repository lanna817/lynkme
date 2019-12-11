import React from 'react';
import { Link } from 'react-router-dom';


export default function PostList(props) {
  return (
    <div className='post-container'>
    <div className='post-list'>
      {
        props.posts.map(post => (
          <div className='post-ind' key={post.id}>
            <Link to={`/posts/${post.id}`} id='post-flex'>
              {
                post.image_url ? <img src={post.image_url} className='post-img' width='40%'  alt='art or gig images' /> :
                  <img src={'https://media.giphy.com/media/xTkcEQACH24SMPxIQg/source.gif'} className='post-img' width='30%' alt='hands tapping' /> }
              <div className='text-flex'>
            <p className='text-cont'>{post.content}</p>
            <p className='hashtag'>{post.hashtags}</p>
                </div>
      </Link>
      </div>

        ))
          }
          
      </div>
      </div>
  )
}