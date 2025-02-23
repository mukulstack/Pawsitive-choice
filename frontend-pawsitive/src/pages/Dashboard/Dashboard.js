import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Dashboard() {

  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    toast.success("User logged OUT");
    setTimeout(() => {
      navigate('/login');
    }, 1000)

  }

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Dashboard;