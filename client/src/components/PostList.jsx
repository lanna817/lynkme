import React from 'react';
import { Link } from 'react-router-dom';


export default function PostList(props) {
  return (
    <div className='post-container'>
    <div className='post-list'>
      {
        props.posts.map(post => (
          <React.Fragment key={post.id}>
            <Link to={`/posts/${post.id}`}>
            <img src={post.image_url} className='post-img' width='40%' alt='art or gig images'/>
            <p className='text-cont'>{post.content}</p>
            <p className='hashtag'>{post.hashtags}</p>
            <p>{post.category}</p>
      </Link>
          </React.Fragment>

        ))
          }
          
      </div>
      </div>
  )
}