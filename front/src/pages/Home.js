// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Navigation from '../Components/Navigation/Navigation';
import Income from '../Components/Income/Income';
import Dashboard from '../Components/Dashboard/Dashboard';
import Expenses from '../Components/Expenses/Expenses';
import YourTransactions from '../Components/YourTransactions/YourTransactions';
import { useGlobalContext } from '../context/globalContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import bg from '../img/bg.png';

function Home() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login page if user is not authenticated
    }
  }, [user, navigate]);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <YourTransactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) return null; // Return null if user is not authenticated to prevent rendering

  return (

      <HomeStyled bg={bg}>
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            {displayData()}
          </main>
        </MainLayout>
      </HomeStyled>

  );
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;


const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;


  
`;
const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  
 
  
  &:first-child {
    background: linear-gradient(#ff4e50, #f9d423);
    left: -80px;
    top: -80px;
  }

  &:last-child {
    background: linear-gradient(to right, #ff512f, #f09819);
    right: -30px;
    bottom: -80px;
  }
`;

const HomeStyled = styled.div`
  position: fixed;  
  width: 100vw;  
  height: 100vh;  
  background-image: url(${props => props.bubbles1});
  background-size: cover;  
  z-index: -1; 
  main {
    flex: 1;
    background-color: rgba(255, 255, 255, 0.13);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default Home;
