import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Importing Pages
import Homepage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AboutUs from './pages/AboutUs/AboutUs';
import ViewPet from './pages/ViewPet/ViewPet';
import SearchPet from './pages/SearchPet/SearchPet';
import SavedPets from './pages/SavedPets/SavedPets';
import Admin from './pages/Admin/AdminLogin';
import AdoptionReq from './pages/AdoptionReq/AdoptionReq';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/viewpet" element={<ViewPet />} />
        <Route path="/searchpet" element={<SearchPet />} />
        <Route path="/savedpets" element={<SavedPets />} />
        <Route path="/admin" element={<Admin />} />        
        <Route path="/adoptionreq" element={<AdoptionReq />} />        
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

