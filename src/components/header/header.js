import React from 'react';
import { Link } from "react-router-dom";
import hover from "hover.css";

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="headerDiv">
          <a className="hvr-glow" href="/">Home</a>
          <a className="hvr-glow" href="/booking">Booking</a>
          <a className="hvr-glow" href="/shop">Shop</a>
      </div>
    );
  }
}