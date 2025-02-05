import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = () => {
  return (
    <Link to="/signup">
      <button>signup</button>
    </Link>
  );
};

export default SignupButton;
