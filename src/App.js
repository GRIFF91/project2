import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ImageCarousel from "./components/carousel/carousel";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageCarousel />
        <h1>Hello World</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
