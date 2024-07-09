import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <Header hidden={user}>
      <div className='container'>
        <Link to="/" className='brand'>
          <h1>Expense Tracker</h1>
        </Link>
        <nav>
          <div>
            <StyledLink to='/login'>Login</StyledLink>
            <StyledLink to='/signup'>Sign Up</StyledLink>
          </div>
        </nav>
      </div>
    </Header>
  );
}

const Header = styled.header`
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  position: ${props => props.hidden ? 'absolute' : 'static'};
  width: 100%;
  top: 0;
  background-color: ${props => props.theme.navbarBackground};
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the navbar is above other content */

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .brand {
    text-decoration: none;
    color: inherit;

    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.linkBackground};
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.linkHoverBackground};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  /* Add margin to the right of each link */
  & + & {
    margin-left: 10px;
  }
`;

export default Navbar;
