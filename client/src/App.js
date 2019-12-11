import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Home from './components/Home';
import PostEdit from './components/PostEdit';
import PostPage from './components/PostPage';
import Footer from './components/Footer';
import ArtWorkForm from './components/ArtWorkForm';
import Art from './components/Art';
import Profile from './components/Profile';
import UserEdit from './components/UserEdit';
import CreatePosts from './components/CreatePosts';
import About from './components/About';

import {
  loginUser,
  registerUser,
  verifyUser,
  getAllPosts,
  createPost,
  destroyPost,
  updatePost,
  getAllComments,
  getAllUsers,
  updateUser,
  destroyUser,
  createComment,
  deleteComment,
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
      posts: [],
      postForm: {
        content: "",
        image_url: "",
        hashtags: "",
        category: "",
        is_Anon: false
      },
      comments: [],
      commentBox: {
        content: '',
        user_id: '',
        post_id: ''
      },
      users: [],
      ownerPro: null,
      userForm: {
        username: "",
        email: "",
        description: "",
        image_url: ""
      },
      artists: [],
      events: [],
      artworks: [],
      artForm: {
        content: "",
        image_url: "",
        hashtags: "",
        category: ""
      }
    };
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    this.getAllPosts();
    this.getAllArt();
    this.getAllUsers();
    this.getEvents();
    this.getComments();
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
    this.props.history.push(`/art`)
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
      },
      artworks: [],
      artForm: {
        content: "",
        image_url: "",
        category: "",
        is_Anon: false
      }
    }));
    this.props.history.push(`/art`)

  }
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

  deleteComment = async (id) => {
    await deleteComment(id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
    this.props.history.push(`/posts/${id}`)
  }

  getComments = async (postId) => {
    const comments = await getAllComments(postId);
    this.setState({
      comments
    })
  }

  // ===============================ART====================================
  handleFormArtChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      artForm: {
        ...prevState.artForm,
        [name]: value
      }
    }))
  }

  createArtSubmit = async () => {
    const newArtWork = await createPost(this.state.artForm);
    this.setState(prevState => ({
      artworks: [
        ...prevState.artworks,
        newArtWork
      ],
      artForm: {
        content: "",
        image_url: "",
        category: "",
        is_Anon: false
      }
    }));
    this.props.history.push(`/art`)

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

  // ===================== Users ========================================

  editUserSubmit = async (id) => {
    const updatedUserForm = await updateUser(id, this.state.userForm);
    // this.setState({
    //   userForm: {
    //     username: updatedUserForm.username,
    //     email: updatedUserForm.email,
    //     description: updatedUserForm.description,
    //     image_url: updatedUserForm.image_url

    //   }
    // })
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        return user.id === parseInt(id) ? updatedUserForm : user
      })
    }));
    this.props.history.push(`/users/${id}`)
  }


  deleteUser = async (id) => {
    await destroyUser(id);
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id)
    }))
    this.props.history.push(`/users`)
  }

  handleUserFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }))
  }

  getAllUsers = async () => {
    const users = await getAllUsers();
    this.setState({
      users
    })
  }

  setUserEdit = (data) => {
    const { username, email, description, image_url } = data;
    this.setState({
      userForm: {
        username,
        email,
        description,
        image_url
      }
    });
    this.props.history.push(`/users/${data.id}/edit`);
  }
  // ============================================

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
            comments={this.state.comments}
            deleteComment={this.deleteComment}

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


        <Route path="/createpost" render={(props) => (
          <CreatePosts
            postForm={this.state.postForm}
            handleFormChange={this.handleFormChange}
            createSubmit={this.createSubmit}
          />)} />

        {/* ==================ART =========================================== */}

        <Route path='/art' render={(props) => (
          <Art
            handleFormChange={this.handleFormChange}
            postForm={this.state.postForm}
            posts={this.state.posts}
            createSubmit={this.createSubmit}
            artworks={this.state.artworks}

          />)} />

        <Route path='/artform' render={(props) => (
          <ArtWorkForm
            handleFormArtChange={this.handleFormArtChange}
            artForm={this.state.artForm}
            createArtSubmit={this.createArtSubmit}

          />)} />


        {/* ======================================================== */}

        <Route path='/profile' render={(props) => {
          const userId = props.match.params.id;
          const currentProfile = this.state.users.map(user => user.id === parseInt(userId));
          return <Profile
            currentUser={this.state.currentUser}
            currentProfile={currentProfile}
            setUserEdit={this.setUserEdit}


          />
        }} />

        <Route path='/users/:id/edit' render={(props) => {
          const userId = props.match.params.id

          return <UserEdit
            userId={userId}
            setUserEdit={this.setUserEdit}
            userForm={this.state.userForm}
            handleUserFormChange={this.handleUserFormChange}
            editUserSubmit={this.editUserSubmit}


          />
        }} />

        <Route exact path="/about" component={About} />




          {
            this.state.currentUser ?
              <Footer /> : <></>
          }

      </div>
  
      );
    }
  }
  export default withRouter(App);
