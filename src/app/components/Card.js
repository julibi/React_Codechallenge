import React from "react";
import {Square} from "./Square.js";
import {Label} from "./Label.js";

export class Card extends React.Component {
	render () {
		var cardStyle = {
			height:"350px",
			width: "250px",
			marginTop:"1em",
			marginBottom:"2.5em",
			marginLeft:"2.5em",
			padding:"0",
			backgroundColor: "#fff",
			WebkitFilter: "drop-shadow(0 0 5px #666)",
			filter: "drop-shadow(0 0 5px #666)",
			fontFamily:"monospace"
		};

		return(
			<div style={cardStyle}>
			<Square color={this.props.color}/>
			<Label color={this.props.color}/>
			</div>
		);
	}
}