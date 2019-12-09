import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Art from './components/Art';

import {
  loginUser,
  registerUser,
  verifyUser,
  getAllComments,
  getAllUsers,
  createComment,
  getAllArtists,
  getOneArt,
  getAllEvents,
  getOneEvent
} from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },
      artists: [],
      events: [],
      art: "",
      event:""

    };
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    // this.getAllPosts();
    this.getAllArt();
    this.getAllUsers();
    this.getEvents();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  getAllUsers = async () => {
    const users = await getAllUsers();
    this.setState({
      users
    })
  }

  getAllArt = async () => {
    const artists = await getAllArtists();
    this.setState({
      artists
    })
  }

  getOneArt = async (id) => {
    const art = await getOneArt();
    this.setState({
      art
    })
  }


  getEvents = async (id) => {
    const events = await getAllEvents(id);
    this.setState({
      events
    })
  }

  getOneEvent = async (id) => {
    const event = await getOneEvent(id);
    this.setState({
      event
    })
  }

  // getAllPosts = async () => {
  //   const posts = await getAllPosts();
  //   this.setState({
  //     posts
  //   })
  // }

  // setEdit = (data) => {
  //   const { content, image_url, hashtags, category } = data;
  //   this.setState({
  //     postForm: {
  //       content,
  //       image_url,
  //       hashtags,
  //       category
  //     }
  //   });
  //   this.props.history.push(`/posts/${data.id}/edit`);
  // }

  // editSubmit = async (id) => {
  //   const updatedForm = await updatePost(id, this.state.postForm);
  //   this.setState(prevState => ({
  //     posts: prevState.posts.map(post => {
  //       return post.id === parseInt(id) ? updatedForm : post
  //     })
  //   }));
  //   this.props.history.push(`/posts/${id}`)
  // }


  // deletePost = async (id) => {
  //   await destroyPost(id);
  //   this.setState(prevState => ({
  //     posts: prevState.posts.filter(post => post.id !== id)
  //   }))
  //   this.props.history.push(`/art`)
  // }


  // handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState(prevState => ({
  //     postForm: {
  //       ...prevState.postForm,
  //       [name]: value
  //     }
  //   }))
  // }

  // createSubmit = async () => {
  //   const newPost = await createPost(this.state.postForm);
  //   this.setState(prevState => ({
  //     posts: [
  //       ...prevState.posts,
  //       newPost
  //     ],
  //     postForm: {
  //       content: "",
  //       image_url: "",
  //       hashtags: "",
  //       category: "",
  //       is_Anon: false
  //     }
  //   }));
  //   this.props.history.push(`/art`)

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



  handleCommentSubmit = async (id) => {
    const postId = this.state.posts[0].id
    const userId = this.state.currentUser.id
    const newComment = await createComment(postId, userId, this.state.commentBox);
    this.setState(prevState => ({
      comments: [
        ...prevState.comments,
        newComment
      ]
    }));
    this.props.history.push(`/posts/${id}`)
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
            <Header />
            : <></>
        }

        <Route exact path="/" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/home" render={() => (
          <Home
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
            getAllArt={this.getAllArt}
            getEvents={this.getEvents}
            getOneEvent={this.getOneEvent}
            getOneArt={this.getOneArt}
            artists={this.state.artists}
            events={this.state.events}
          />)} />
        
        <Route path='/art' render={() => (
          <Art
            
             />)} />
        

         

        {/* <Route path='/posts/:id' render={(props) => {
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
        }} /> */}


        {/* <Route path='/posts/:id/edit' render={(props) => {
          const postId = props.match.params.id;
          return <PostEdit
            postId={postId}
            postForm={this.state.postForm}
            handleFormChange={this.handleFormChange}
            editSubmit={this.editSubmit} />
        }} /> */}



        {
          this.state.currentUser ?
            <Footer /> : <></>
        }

      </div>

    );
  }
}
export default withRouter(App);
