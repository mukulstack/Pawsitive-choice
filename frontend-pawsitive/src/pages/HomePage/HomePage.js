import React from 'react';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <Header>
        <div className="buttons">
          <button onClick={handleLoginClick}>Log in</button>
          <button onClick={handleSignUpClick}>Sign up</button>
        </div>
      </Header>
    </div>
  );
};

export default HomePage;
