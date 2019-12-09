import React from 'react';
import CreatePosts from './CreatePosts';
import PostList from './PostList';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';
import PostEdit from './PostEdit';
import PostPage from './PostPage';
import {
  getAllPosts,
  createPost,
  destroyPost,
  updatePost
} from '../services/api-helper';


class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postForm: {
        content: "",
        image_url: "",
        hashtags: "",
        category: "",
        is_Anon: false
      }
    }
  }



  async componentDidMount() {
    this.getAllPosts();

  }


getAllPosts = async () => {
  const posts = await getAllPosts();
  this.setState({
    posts
  })
}

setEdit = (data) => {
  const { content, image_url, hashtags, category } = data;
  this.setState({
    postForm: {
      content,
      image_url,
      hashtags,
      category
    }
  });
  this.props.history.push(`/posts/${data.id}/edit`);
}

editSubmit = async (id) => {
  const updatedForm = await updatePost(id, this.state.postForm);
  this.setState(prevState => ({
    posts: prevState.posts.map(post => {
      return post.id === parseInt(id) ? updatedForm : post
    })
  }));
  this.props.history.push(`/posts/${id}`)
}


deletePost = async (id) => {
  await destroyPost(id);
  this.setState(prevState => ({
    posts: prevState.posts.filter(post => post.id !== id)
  }))
  this.props.history.push(`/posts`)
}


handleFormChange = (e) => {
  const { name, value } = e.target;
  this.setState(prevState => ({
    postForm: {
      ...prevState.postForm,
      [name]: value
    }
  }))
}

createSubmit = async () => {
  const newPost = await createPost(this.state.postForm);
  this.setState(prevState => ({
    posts: [
      ...prevState.posts,
      newPost
    ],
    postForm: {
      content: "",
      image_url: "",
      hashtags: "",
      category: "",
      is_Anon: false
    }
  }));
  this.props.history.push(`/art`)

}



render() {

  return (
    <div className='art-pg'>
      <h1>ART</h1>
      <h3>Post a pic of your own artwork or artwork that you like…</h3>

      <Route path='/posts/:id' render={(props) => {
        const postId = props.match.params.id;
        const currentPost = this.state.posts.find(post => post.id === parseInt(postId));
        return <PostPage
          postId={postId}
          setEdit={this.setEdit}
          deletePost={this.deletePost}
          currentPost={currentPost}
          handleCommentChange={this.props.handleCommentChange}
          handleCommentSubmit={this.props.handleCommentSubmit}
          commentBox={this.props.commentBox}

        />
      }} />

      <Route path='/posts/:id/edit' render={(props) => {
        const postId = props.match.params.id;
        return <PostEdit
          postId={postId}
          postForm={this.state.postForm}
          handleFormChange={this.handleFormChange}
          editSubmit={this.editSubmit} />
      }} />

      <CreatePosts
        postForm={this.state.postForm}
        handleFormChange={this.handleFormChange}
        createSubmit={this.createSubmit} />
      <PostList
        posts={this.state.posts} />



    </div>
  )
}
}

export default withRouter(Art);