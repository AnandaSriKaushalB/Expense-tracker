
import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import styled from 'styled-components';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Background>
        <Shape />
        <Shape />
      </Background>
      <SignupFormStyled onSubmit={handleSubmit}>
        <h3>Start saving your money! <br></br>Sign Up 👇</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={isLoading}>{isLoading ? 'Signing Up...' : 'Sign Up'}</button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </SignupFormStyled>
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

const SignupFormStyled = styled.form`
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
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
    margin-bottom: 15px;
  }

  label {
    align-self: flex-start;
    margin-top: 15px;
    font-size: 16px;
    border-radius: 50px;
    font-weight: 500;
  }

  input {
    display: block;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.07);
    padding: 0 10px;
    margin-top: 7px;
    font-size: 14px;
    font-weight: 300;
    color: #ffffff;

    &::placeholder {
      color: #e5e5e5;
    }
  }

  button {
    margin-top: 30px;
    width: 100%;
    background: linear-gradient(#ff4e50, #f9d423);
    color: #ffffff;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }

    i {
      margin-right: 4px;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  border: 1px solid red;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  width: 100%;
  text-align: center;
`;

export default Signup;
