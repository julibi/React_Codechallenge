import React from "react";
import {Card} from "./Card.js";
import {Square} from "./Square.js";
import {Label} from "./Label.js";
import {Search} from "./Search.js";

export class Home extends React.Component {
	render () {
		var homeStyle = {
			fontFamily:"monospace",
			marginLeft:"1em"
		};
		return(
			<div>
				<h2 style={homeStyle}>Home</h2>
				<br/>
				<Card color="blue"/>
				<Search />
			</div>
		);
	}
}