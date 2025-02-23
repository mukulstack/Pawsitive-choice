import React from 'react';
import Header from '../../components/Header/Header';
import Style from './AdminLogin.module.css';

const AdminLogin = () => {
  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.title}>Admin Login</div>
      <div  className={Style.form}>
        <form>
          <label htmlFor='username' >Username: </label>
          <input type='text' id='username' placeholder='Enter Username'></input>

          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' placeholder='Enter  password'></input>

          <input type='submit' value="Log in"></input>
        </form>
      </div>

    </div>
  );
};

export default AdminLogin;
