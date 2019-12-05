import React from 'react';
import { Link } from 'react-router-dom';


export default function PostList(props) {
  return (
    <div className='post-list'>
      {
        props.posts.map(post => (
          <React.Fragment key={post.id}>
            <Link to={`/posts/${post.id}`}>
            <h3>{post.content}</h3>
            <img src={post.image_url} width='20%'/>
            <p>{post.hashtags}</p>
            <p>{post.category}</p>
      </Link>
          </React.Fragment>

        ))
          }
          
    </div>
  )
}