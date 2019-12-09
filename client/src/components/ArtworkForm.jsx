import React from 'react';

export default function ArtworkForm(props){
  return (
    <div className='form-cont'>
      <form id='create-post' onSubmit={(e) => {
        e.preventDefault();
        props.createArtSubmit();
      }}>
          <p id='create-title'>Add Artwork</p>
        <label htmlFor="content">Name:</label>
        <input
          name="content"
          id="content"
          value={props.postForm.content}
          onChange={props.handleFormArtChange }
        />
        <br />
        <label htmlFor="image_url">image_url:</label>
        <input
          type="text"
          name="image_url"
          id="image_url"
          value={props.postForm.image_url}
          onChange={props.handleFormArtChange }
        />
        <label htmlFor="hashtags">Desc:</label>
        <textarea
          type="text"
          name="hashtags"
          id="hashtags"
          value={props.postForm.hashtags}
          onChange={props.handleFormArtChange}
        />
        <br />
        <br />
        <label htmlFor="category">Price:</label>
        <input
          type="text"
          name="category"
          id="category"
          value={props.postForm.category}
          onChange={props.handleFormArtChange }
        />
        <button id='submit-create'>Submit</button>
      </form>
    </div>
  )
}

// This is a hacky way to do this form without creating another table or chnaging its value to put the price.