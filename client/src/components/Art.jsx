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
        <h3 className='head-title'>Post a pic of your own <span className='art-color'>Art</span> or <span className='art-color'>art</span>work that you like…</h3>
        <h3 id='buy-post'>Buy <span className='art-color'>Art</span></h3>
        <img src={"https://img-lumas-avensogmbh1.netdna-ssl.com/showimg_awg36_desktop.jpg"} width='30%' alt='bamboo trees'/>
        <h3 id='late-post'>Latest Posts...</h3>
        <div className='flex-post'>

          <CreatePosts
            postForm={this.props.postForm}
            handleFormChange={this.props.handleFormChange}
            createSubmit={this.props.createSubmit} />
          
          <PostList
            posts={this.props.posts} />

        </div>

      </div>
    )
  }
}

export default withRouter(Art);