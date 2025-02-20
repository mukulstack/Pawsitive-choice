import React from 'react';
import './AdminLogin.css';
import Header from '../../components/Header/Header';

const AdminLogin = () => {
  return (
    <div className='container'>
      <Header />
      <div className='title'>Admin Login</div>
      <div  className='login-form'>
        <form>
          <label htmlFor='username' >Username: </label>
          <input type='text' id='username' placeholder='Enter Username'></input>
          <label htmlFor='password' label="label">Password: </label>
          <input type='password' id='password' placeholder='Enter  password'></input>
          <input type='submit' value="Log in"></input>
        </form>
      </div>

    </div>
  );
};

export default AdminLogin;
