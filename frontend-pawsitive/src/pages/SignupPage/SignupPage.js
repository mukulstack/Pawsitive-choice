import React from 'react';
import { Link } from "react-router-dom";
import Style from './SignupPage.module.css';
import Header from '../../components/Header/Header';

const SignupPage = () => {
  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.title}>Sign Up</div>
      <div  className={Style.signupForm}>
        <form>
        <label htmlFor='name' >Name</label>
          <input type='text' id='name'placeholder='Enter your full name'></input>

          <label htmlFor='email' >Email</label>
          <input type='email' id='email' placeholder='Enter your email' ></input>

          <label htmlFor='number' >Mobile Number</label>
          <input type='tel' id='number'placeholder='Enter your mobile number'></input>
          
          {/* 
          <label htmlFor='address' >Address</label>
          <input type='text' id='address' placeholder='Enter your address' ></input> */}
        
          <label htmlFor='password' label="label">Create Password</label>
          <input type='password' id='password' placeholder='Enter a password'></input>

          <input  type='submit' value="Sign up" className={Style.submit}></input>
        </form>

        <p className={Style.p}> Already Registered? <Link to="/login" className={Style.link}>Log in</Link></p>

      </div>

    </div>
  );
};

export default SignupPage;
