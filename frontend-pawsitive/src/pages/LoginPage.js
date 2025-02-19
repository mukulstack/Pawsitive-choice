import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <div className='login-form'>
        <form>
          <label for='email'>Email:</label>
          <input type='email' id='email' ></input>
          <br></br>
          <label for='password'>Password:</label>
          <input type='password' id='password'></input>
          <br></br>
          <input type='submit' value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
