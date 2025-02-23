import React from 'react';
import { Link } from "react-router-dom";
import Style from './LoginPage.module.css';
import Header from '../../components/Header/Header';

const LoginPage = () => {
  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.title}>Log In</div>
      <div  className={Style.loginForm}>
        <form>
          <label htmlFor='email'></label>
          <input type='email' id='email' placeholder='Enter your email'></input>

          <label htmlFor='password'></label>
          <input type='password' id='password' placeholder='Enter your password'></input>

          <input type='submit' value="Log in" className={Style.loginSubmit}></input>
        </form>

        <p className={Style.p} >Already a user? <Link to="/signup" className={Style.link} >Sign up</Link></p>

      </div>

    </div>
  );
};

export default LoginPage;
