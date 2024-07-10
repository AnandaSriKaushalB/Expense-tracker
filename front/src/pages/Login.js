import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import styled from 'styled-components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();


  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <Container>
      <Background>
        <Shape />
        <Shape />
      </Background>
      <LoginFormStyled onSubmit={handleLogin}>
        <h3>Continue where you left Off! Login 👇</h3>
        <label htmlFor="username">Username</label>
        <input
        type="text"
        required
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
        <label htmlFor="password">Password</label>
        <input
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <button disabled={isLoading}>Log In</button>
        {error && <ErrorStyled>{error}</ErrorStyled>}
      </LoginFormStyled>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #080710;
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

const LoginFormStyled = styled.form`
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  font-family: 'Nunito', sans-serif;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 22px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    align-self: flex-start;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }

  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: #ffffff;

    &::placeholder {
      color: #e5e5e5;
    }
  }

    button {
    margin-top: 50px;
    width: 100%;
    background: linear-gradient(#ff4e50, #f9d423);
    border-radius: 10px;
    color: #ffffff;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }

    i {
      margin-right: 4px;
    }
  }
`;

const ErrorStyled = styled.div`
  color: #ff0000; /* Red text color */
  background-color: #ffe5e5; /* Light red background */
  border: 1px solid #ff0000; /* Red border */
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

export default Login;
