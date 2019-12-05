import React from 'react';
import { Link } from 'react-router-dom';


export default function PostList(props) {
  return (
    <div className='post-list'>
      {
        props.posts.map(post => (
          <React.Fragment key={post.id}>
            <Link to={`/posts/${post.id}`}>
            <img src={post.image_url} width='30%' alt='art or gig images'/>
            <p>{post.content}</p>
            <p>{post.hashtags}</p>
            <p>{post.category}</p>
      </Link>
          </React.Fragment>

        ))
          }
          
    </div>
  )
}