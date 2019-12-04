import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lynk_logo.png';


const Login = (props) => {

  return (
    <div className="login-pg">
      <img src={logo} width='40%' id='login-logo' alt='logo' />
      <h3 id='log-heading'>Log in or Register Below</h3>

      <form id='login-form' onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }} >
        <label htmlFor="username">Username</label>
        <input name="username"
          type="text"
          value={props.formData.username}
          onChange={props.handleChange} />
        
        <label htmlFor="password">Password</label>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <hr />
        <button id='login-btn'>Login</button>
        <Link to="/register">
          <button id='reg-btn'>Register</button></Link>
      </form>
    </div>
  );
}

export default Login;
