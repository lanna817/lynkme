import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {
  loginUser,
  registerUser,
  verifyUser
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

      }
    };  
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
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
   
      </div>
    );
  }
}
export default withRouter (App);
