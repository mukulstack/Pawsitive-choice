import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Pawsitive Choice</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
      <button>Signup</button>
      </Link>
    </div>
  );
};

export default Header;
