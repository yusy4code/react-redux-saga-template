// Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Layout = () => {
  return (
    <>
      <Navbar>
        <Link to="/">
          <Logo src="https://via.placeholder.com/150x40?text=Logo" alt="Logo" />
        </Link>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </NavLinks>
      </Navbar>
      <main>
        <Outlet />  {/* Renders the child routes */}
      </main>
    </>
  );
};

export default Layout;
