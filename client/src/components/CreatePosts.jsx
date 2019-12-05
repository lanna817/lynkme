import React from 'react';

export default function CreatePosts(props) {
  return (
    <div className='form-cont'>
      <form id='create-post' onSubmit={(e) => {
        e.preventDefault();
        props.createSubmit();
      }}>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          value={props.postForm.content}
          onChange={props.handleFormChange}
        />
        <br />
        <label htmlFor="image_url">image_url</label>
        <input
          type="text"
          name="image_url"
          id="image_url"
          value={props.postForm.image_url}
          onChange={props.handleFormChange}
        />
        <br />
        <label htmlFor="hashtags">Hashtags</label>
        <input
          type="text"
          name="hashtags"
          id="hashtags"
          value={props.postForm.hashtags}
          onChange={props.handleFormChange}
        />
        <br />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={props.postForm.category}
          onChange={props.handleFormChange}
        />
        <button id='submit'>Submit</button>
      </form>
    </div>
    
  )
}
