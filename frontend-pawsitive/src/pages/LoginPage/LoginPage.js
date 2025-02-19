import React from 'react';
import { Link } from "react-router-dom";
import './LoginPage.css';
import Header from '../../components/Header/Header';

const LoginPage = () => {
  return (
    <div className='container'>
      <Header />
      <div className='title'>Log In</div>
      <div  className='login-form'>
        <form>
          <label htmlFor='email' ></label>
          <input type='email' id='email' placeholder='Enter your name'></input>
          <label htmlFor='password' label="label"></label>
          <input type='password' id='password' placeholder='Enter your password'></input>
          <br></br>
          <input type='submit' value="Log in"></input>
        </form>

        <p>Already a user? <Link to="/signup" className='link'>Sign up</Link></p>

      </div>

    </div>
  );
};

export default LoginPage;
