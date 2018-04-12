import React, { Component } from 'react';
import './App.css';
import { Col, Row } from 'reactstrap';

import Header from "./components/header/header";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import ImageCarousel from "./components/carousel/carousel";
import ShopCard from "./components/shopCard";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageCarousel />
        <About />
          <Row>
            <Col md="3">
              <ShopCard />
            </Col>
            <Col md="3">
              <ShopCard />
            </Col>
            <Col md="3">
              <ShopCard />
            </Col>
            <Col md="3">
              <ShopCard />
            </Col>
          </Row>
        <Footer />
      </div>
    );
  }
}

export default App;
