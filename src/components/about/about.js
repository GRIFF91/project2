import React, { Component } from "react";
import { Col, Row } from 'reactstrap';

import './about.css';

export default class About extends Component {
	render() {
		return(

			<div className="mainDiv">
				<Row>
					<Col sm="12" md="12" lg="12">
						<h2><strong><a id="about">About/ Life Story</a></strong></h2>	
					</Col>
				  </Row>

				  <Row>
					<Col sm="12" md="12" lg="3">
						<img className="aboutImg" src="http://via.placeholder.com/300" alt="My Picture" /> 
					</Col>
					<Col sm="12" md="12" lg="9">
						<p className="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												 sed do eiusmod tempor incididunt ut labore et dolore magna 
												 aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
												 ullamco laboris nisi ut aliquip ex ea commodo consequat. 
												 Duis aute irure dolor in reprehenderit in voluptate velit 
												 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
												 occaecat cupidatat non proident, sunt in culpa qui officia 
												 deserunt mollit anim id est laborum.
												 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												 sed do eiusmod tempor incididunt ut labore et dolore magna 
												 aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
												 ullamco laboris nisi ut aliquip ex ea commodo consequat. 
												 Duis aute irure dolor in reprehenderit in voluptate velit 
												 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
												 occaecat cupidatat non proident, sunt in culpa qui officia 
												 deserunt mollit anim id est laborum.
												 </p>
					</Col>					
				</Row>
			</div>
		);
	}
}

