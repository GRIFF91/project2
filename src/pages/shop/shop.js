import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./shop.css";

import ShopCard from "../../components/shopCard/shopCard";

export default class shop extends Component {
	render() {
		return(
            <div>
			<ShopCard />
            </div>
		);
	}
}