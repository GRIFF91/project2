import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/header";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import ImageCarousel from "./components/carousel/carousel";
import BookingForm from "./components/bookingForm/bookingForm";
import ShopCard from "./components/shopCard";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ImageCarousel />
        <About />
        <BookingForm />
        <ShopCard />
        <Footer />
      </div>
    );
  }
}

export default App;
