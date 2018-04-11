import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerDiv">
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Booking</NavLink>
          <NavLink href="#">Shop</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Nav>
      </div>
    );
  }
}