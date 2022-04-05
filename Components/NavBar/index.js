import React, {} from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavGen,
  
} from './NavbarElements';
const Navbar = (props) => {

  return (
    <header>
      <Nav>
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
        <NavBtn  onClick={props.Cart}>
          cart
        </NavBtn>
      </Nav>
      <NavGen>
        <h1 style={{ fontFamily: 'Times New Roman' }} >The Generics</h1>
      </NavGen>
    </header>
  );
};

export default Navbar;