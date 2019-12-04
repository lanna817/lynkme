import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/lynk_wht.png';



const Register = (props) => {

  return (
    <div className="reg-pg">
      <Link to='/'>
        <img src={logo} width='15%' id='reg-logo' alt='logo' />
        </Link>
      <h2 id='reg-heading'>Register</h2>
      <form id='reg-form' onSubmit={props.handleRegister} >
      <label htmlFor="username">Username:</label>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <label htmlFor="email">Email:</label>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <hr/>
        <button id='register-btn'>Register</button>
      </form>
    </div>
  );
}

export default Register;