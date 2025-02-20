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
          <label htmlFor='email' ></label>
          <input type='email' id='email' placeholder='Enter your email'></input>
          <label htmlFor='password' label="label"></label>
          <input type='password' id='password' placeholder='Enter your password'></input>
          <input type='submit' value="Log in"></input>
        </form>
      </div>

    </div>
  );
};

export default AdminLogin;
