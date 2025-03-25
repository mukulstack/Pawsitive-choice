import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Style from './LoginPage.module.css';
import Header from '../../components/Header/Header';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    // Check for empty fields
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      console.log(result); // Log the full response to inspect it

      // Handle non-200 responses
      if (!response.ok) {
        if (result.message) {
          toast.error(result.message); // Display error from API
        } else {
          toast.error("An unexpected error occurred.");
        }
        return;
      }

      const { success, jwtToken, name } = result;

      if (success) {
        toast.success("Login Successful!");
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000); 
      } else {
        toast.error("An unexpected error occurred.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.title}>Log In</div>
      <div className={Style.loginForm}>
        <form onSubmit={handleLogin}>
          <label htmlFor='email'></label>
          <input 
            type='email'
            id='email'
            name='email'
            placeholder="Enter Your Email"
            value={loginInfo.email}
            onChange={handleChange}  // Added onChange event
            autoFocus
          />

          <label htmlFor='password'></label>
          <input 
            type='password' 
            id='password' 
            name='password'
            placeholder='Enter your password'
            value={loginInfo.password}
            onChange={handleChange}  // Added onChange event
          />

          <input type='submit' value="Log in" className={Style.loginSubmit}></input>
        </form>
        <p className={Style.p}> Not signed up yet? <Link to="/signup" className={Style.link}>Sign up</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
