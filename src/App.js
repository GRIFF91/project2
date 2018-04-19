import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import home from "./pages/home/home";
import booking from "./pages/booking/booking";
import shop from "./pages/shop/shop";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              {<Route exact path="/" component={home} />}
              {<Route exact path="/booking" component={booking} />}
              {<Route exact path="/shop" component={shop} />}
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
