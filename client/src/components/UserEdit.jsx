import React from 'react';

export default function UserEdit(props) {
  return (
    <div>
    <form id='post-edit-form' onSubmit={(e) => {
      e.preventDefault();
      props.editUserSubmit(props.userId);
    }}>
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        id="content-edt"
        value={props.userForm.content}
        onChange={props.handleUserFormChange}
      />
      <br />
      <label htmlFor="image_url">image_url</label>
      <input
        type="text"
        name="image_url"
        id="image_url-edt"
        value={props.userForm.image_url}
        onChange={props.handleUserFormChange}
      />
      <br />
      <label htmlFor="hashtags">Hashtags</label>
      <input
        type="text"
        name="hashtags"
        id="hashtags-edt"
        value={props.userForm.hashtags}
        onChange={props.handleUserFormChange}
      />
      <br />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        id="category-edt"
        value={props.userForm.category}
        onChange={props.handleUserFormChange}
      />
      <button id='submit'>Submit</button>
    </form>
  </div>







  )



}