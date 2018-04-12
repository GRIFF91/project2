import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/header";
import About from "./components/about/about";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello World</h1>
        <About />
      </div>
    );
  }
}

export default App;
