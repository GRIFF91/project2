import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerDiv">
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#booking">Booking</NavLink>
          <NavLink href="#shop">Shop</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </div>
    );
  }
}