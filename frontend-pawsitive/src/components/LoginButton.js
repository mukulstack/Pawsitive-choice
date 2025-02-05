// import React from 'react';
// //import './LoginButton.css';

// function LoginButton() {
//     const handleClick = () => {
//         alert("Login Button Working!");
//     }

//     return (
//         <button onClick={handleClick}>
//         Login
//         </button>
//     )

// }

// export default LoginButton;
import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/login">
      <button>Login</button>
    </Link>
  );
};

export default LoginButton;
