import React from 'react';

export default function UserEdit(props) {
  return (
    <div>
    <form id='post-edit-form' onSubmit={(e) => {
      e.preventDefault();
      props.editUserSubmit(props.userId);
    }}>
      <label htmlFor="username">Username</label>
      <textarea
        name="username"
        id="content-edt"
        value={props.userForm.username}
        onChange={props.handleUserFormChange}
      />
      <br />
      <label htmlFor="image_url">email</label>
      <input
        type="text"
        name="email"
        id="image_url-edt"
        value={props.userForm.email}
        onChange={props.handleUserFormChange}
      />
      <br />
      <label htmlFor="hashtags">description</label>
      <input
        type="text"
        name="description"
        id="hashtags-edt"
        value={props.userForm.description}
        onChange={props.handleUserFormChange}
      />
      <br />
      <label htmlFor="category">image_url</label>
      <input
        type="text"
        name="image_url"
        id="category-edt"
        value={props.userForm.image_url}
        onChange={props.handleUserFormChange}
      />
      <button id='submit'>Submit</button>
    </form>
  </div>







  )



}