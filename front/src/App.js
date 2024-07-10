import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import styled from 'styled-components';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <AppStyled className='App'>
        <Navbar />
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #ff4e50, #f9d423); 
    color: var(--dark-text);
  font-family: 'Nunito', sans-serif;
`;

export default App;
