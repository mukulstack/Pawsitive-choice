import React from 'react';

const SignupForm = () => {
  return (
    <div className="login-box">
      <h2>Sign Up</h2>
      <form>
        <label>Name</label>
        <input type="name" placeholder="Enter your name..." required />
        <label>Email ID</label>
        <input type="email" placeholder="Enter your email..." required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." required />
        <label>Confirm Password</label>
        <input type="password" placeholder="Enter password again..." required />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already a User? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupForm;
