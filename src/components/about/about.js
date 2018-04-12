import React, { Component } from "react";
import './about.css';

export default class About extends Component {
	render() {
		return(
			<div class="mainDiv">
				<br/>
				<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-12">
						<h2><strong>About/ Life Story</strong></h2>
					</div>					
				</div>
		  		<br/>
		  		<div class="row">
					<div class="col-sm-12 col-md-12 col-lg-12">
						<img class="aboutImg" src={"https://pixabay.com/en/avatar-icon-placeholder-1577909/"} alt="My Picture"/> 
						<p class="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>					
				</div>
			</div>
		);
	}
}

