import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import Style from './SignupPage.module.css';
import Header from '../../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''  
  });

  // function to take the values from input box and save to variable
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  // function to call API on sign up button click
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, mobile, password } = signupInfo;

    // check if empty
    if (!name || !email || !mobile || !password) {
      toast.error("All fields are required!");
      return;
    }

    // Email validation 
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

    // Mobile number empty
    if (!mobile) {
      toast.error("Mobile number is required.");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/; 
    if (!mobileRegex.test(mobile)) {
      toast.error("Please enter a valid mobile number.");
      return;
    }

    // API call
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });

      const result = await response.json();
      const { success, error } = result;
      if (success) {
        toast.success("Signup Successful!");
        setTimeout(() => {
          navigate("/login");
        }, 6000);
      } else if (error) {
        const details = error?.details[0].message;
        toast.error(details || "An error occurred. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.title}>Sign Up</div>
      <div className={Style.signupForm}>
        <form onSubmit={handleSignup}>

          <label htmlFor='name'>Name:</label>
          <input 
            onChange={handleChange}
            type='text'
            id='name'
            name='name'
            autoFocus
            placeholder='Enter your full name'
            value={signupInfo.name} 
          />

          <label htmlFor='email'>Email:</label>
          <input 
            onChange={handleChange}
            type='email' 
            id='email'
            name='email' 
            placeholder='Enter your email' 
            value={signupInfo.email}
          />

          <label htmlFor='number'>Mobile Number:</label>
          <input 
            onChange={handleChange}
            type='tel'
            id='number'
            name='mobile' 
            placeholder='Enter your mobile number'
            value={signupInfo.mobile} 
          />
          
          {/* 
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' placeholder='Enter your address' />
          */}
        
          <label htmlFor='password'>Create Password:</label>
          <input
            onChange={handleChange} 
            type='password' 
            id='password' 
            name='password'
            placeholder='Enter a password' 
            value={signupInfo.password}
          />

          <input type='submit' value="Sign up" className={Style.submit} />
        </form>
        <p className={Style.p}> Already Registered? <Link to="/login" className={Style.link}>Log in</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
