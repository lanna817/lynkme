import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PostEdit from './components/PostEdit';
import PostPage from './components/PostPage';
import Header from './components/Header';

import {
  loginUser,
  registerUser,
  verifyUser,
  getAllPosts,
  createPost,
  destroyPost,
  updatePost,
  getAllComments,
  createComment
} from './services/api-helper';

class App extends React.Component {
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
      },
      currentUser: null,
      authFormData: {
        username: '',
        email: '',
        password: ''

      },
      comments: [],
      commentBox: {
        content: '',
        user_id: '',
        post_id: ''
      }
    };
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    this.getAllPosts();
    this.getAllComments();
    if (currentUser) {
      this.setState({ currentUser })
    }
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
    this.props.history.push(`/home`)
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
    this.props.history.push(`/home`)

  }


  // resetForm =  () => {
  //   this.setState({
  //     postForm: {
  //       content: "",
  //       image_url: "",
  //       hashtags: "",
  //       category: "",
  //       is_Anon: false
  //     }
  //   })
  // }

  // =====================Comments=================================



  handleCommentChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      commentBox: {
        ...prevState.commentBox,
        [name]: value
      }
    }))
  }



  handleCommentSubmit = async () => {
    const postId = this.state.posts[0].id
    const userId = this.state.currentUser.id
    const newComment = await createComment(postId, userId, this.state.commentBox);
    this.setState(prevState => ({
      comments: [
        ...prevState.comments,
        newComment
      ]
    }));
    // this.props.history.push(`/posts/${id}`)

  }

  getAllComments = async () => {
    const comments = await getAllComments();
    this.setState({
      comments
    })
  }

  // ==================================AUTH=====================


  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/home")

  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/home")

  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem("authToken");
    this.props.history.push('/');
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  // =====================  ========================================

  render() {
    return (
      <div className="app">
        {
          this.state.currentUser ?
            <Header /> : <></>

        }

        {
          this.state.currentUser ?
            <Route exact path="/home" render={() => (
              <Home
                handleLogout={this.handleLogout}
                currentUser={this.state.currentUser}
                postForm={this.state.postForm}
                posts={this.state.posts}
                handleFormChange={this.handleFormChange}
                createSubmit={this.createSubmit}
                getAllPosts={this.getAllPosts}
              />)} />
            : <div></div>
        }

        <Route exact path="/" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route path='/posts/:id' render={(props) => {
          const postId = props.match.params.id;
          const currentPost = this.state.posts.find(post => post.id === parseInt(postId));
          return <PostPage
            postId={postId}
            setEdit={this.setEdit}
            deletePost={this.deletePost}
            currentPost={currentPost}
            handleCommentChange={this.handleCommentChange}
            handleCommentSubmit={this.handleCommentSubmit}
            commentBox={this.state.commentBox}

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

      </div>
    );
  }
}
export default withRouter(App);
