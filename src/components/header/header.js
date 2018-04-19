import React from 'react';
import { Link } from "react-router-dom";

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerDiv">
          <a href="/">Home</a>
          <a href="/booking">Booking</a>
          <a href="/shop">Shop</a>
      </div>
    );
  }
}