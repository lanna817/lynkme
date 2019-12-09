import React from 'react';
import CreatePosts from './CreatePosts';
import PostList from './PostList';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';


class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artwork: [],
      
    }
  }



render() {

  return (
    <div className='art-pg'>
      <h1>ART</h1>
      <h3>Post a pic of your own artwork or artwork that you like…</h3>


      <CreatePosts
        postForm={this.props.postForm}
        handleFormChange={this.props.handleFormChange}
        createSubmit={this.props.createSubmit} />
      <PostList
        posts={this.props.posts} />



    </div>
  )
}
}

export default withRouter(Art);