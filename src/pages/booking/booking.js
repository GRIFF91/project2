import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./booking.css";

import BookingForm from "../../components/bookingForm/bookingForm";

export default class booking extends Component {
	render() {
		return(
            <div>
		<h1>booking</h1>
		<BookingForm />
            </div>
		);
	}
}