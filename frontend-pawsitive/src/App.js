import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing Pages
import Homepage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AboutUs from './pages/AboutUs/AboutUs';
import ViewPet from './pages/ViewPet/ViewPet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/viewpet" element={<ViewPet />} />
      </Routes>
    </Router>
  );
}

export default App;

