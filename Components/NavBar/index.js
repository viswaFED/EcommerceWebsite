import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavGen,
  
} from './NavbarElements';

const Navbar = () => {
  return (
    <header>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/Store' activeStyle>
            Store
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Cart'>Cart</NavBtnLink>
        </NavBtn>
      </Nav>
      <NavGen>
        <h1 style={{ fontStyle:  'italic' }}>The Generics</h1>
      </NavGen>
    </header>
  );
};

export default Navbar;