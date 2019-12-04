import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import CreatePosts from './components/CreatePosts';
import Home from './components/Home';
import {
  loginUser,
  registerUser,
  verifyUser,
  getAllPosts,
  getOnePost,
  getUserPosts,
  createPost,
  destroyPost,
  updatePost
} from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postForm: {
        content: "",
        image_url: "",
        hashtages: "",
        category: "",
        is_Anon: false
      },
      currentUser: null,
      authFormData: {
        username: '',
        email: '',
        password: ''

      }
    };  
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    // this.getAllPosts();
    if (currentUser) {
      this.setState({ currentUser })
    }
  } 

  // getAllPosts = async () => {
  //   const posts = await getAllPosts();
  //   this.setState({
  //     posts
  //   })
  // }

  newPost = async (e) => {
    e.preventDefault();
    const post = await createPost(this.state.postForm);
    this.setState(prevState => ({
      posts: [...prevState.posts, post],
      postForm: {
        content: "",
        image_url: "",
        hashtages: "",
        category: "",
        is_Anon: false
      }
    }))
  }

  editPost = async () => {
    const { postForm } = this.state
    await createPost(postForm.id, postForm);
    this.setState(prevState => (
      {
        posts: prevState.posts.map(post => {
          return post.id === post.id ? postForm : post
        })
      }

    ))
    this.props.history.push(`/posts`)
  }

  setEdit = (postData) => {
    const { content, image_url, hashtags, category, is_Anon } = postData
    this.setState({
      postForm: {
        content,
        image_url,
        hashtags,
        category,
        is_Anon
      }
    })
    this.props.history.push(`posts/${postData}/edit`)
      // this.props.history.push(`users/${user_id}/posts/:id/${postData}/edit`)
  }


  deletePost = async (id) => {
    await destroyPost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !==id)
    }))
  }


  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      teacherForm: {
        ...prevState.teacherForm,
        [name]: value
      }
    }))
  }

  createSubmit = async () => {
    const newPost = await updatePost(this.state.postForm);
    this.setState(prevState => ({
      posts: [
        ...prevState.posts,
        newPost
      ]
    }));
    this.props.history.push(`/dogs`)
  }


  // ==================================AUTH=====================

  // handleLoginButton = () => {
  //   this.props.history.push("/")
  // }

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
          <Route exact path="/home" render={() => (
            <Home
              handleLoginButton={this.handleLoginButton}
              handleLogout={this.handleLogout}
              currentUser={this.state.currentUser} />)}
            />  : <div></div>
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
        <Route exact path="/posts" render={() => (
        <CreatePosts
      />)}
        />
   
      </div>
    );
  }
}
export default withRouter (App);
