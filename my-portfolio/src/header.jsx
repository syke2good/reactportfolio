import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.nav``;

const NavLink = styled.a`
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>My Portfolio</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
