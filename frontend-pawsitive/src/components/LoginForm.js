import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <label>Email ID</label>
        <input type="email" placeholder="Enter your email..." required />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." required />
        <button type="submit">Login</button>
      </form>
      <p>
        Not registered? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
