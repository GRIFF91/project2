import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./home.css";

import ImageCarousel from "../../components/carousel/carousel";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";

export default class home extends Component {
	render() {
		return(
            <div>
                <ImageCarousel />
                <About />
                <Footer />
            </div>
		);
	}
}