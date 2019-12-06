import React from 'react';

export default function PostEdit(props) {
  return (
    <div>
    <form id='post-edit-form' onSubmit={(e) => {
      e.preventDefault();
      props.editSubmit(props.postId);
    }}>
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content-edt"
        value={props.postForm.content}
        onChange={props.handleFormChange}
      />
      <br />
      <label htmlFor="image_url">image_url</label>
      <input
        type="text"
        name="image_url"
        id="image_url-edt"
        value={props.postForm.image_url}
        onChange={props.handleFormChange}
      />
      <br />
      <label htmlFor="hashtags">Hashtags</label>
      <input
        type="text"
        name="hashtags"
        id="hashtags-edt"
        value={props.postForm.hashtags}
        onChange={props.handleFormChange}
      />
      <br />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category-edt"
        value={props.postForm.category}
        onChange={props.handleFormChange}
      />
      <button id='submit'>Submit</button>
    </form>
  </div>







  )



}