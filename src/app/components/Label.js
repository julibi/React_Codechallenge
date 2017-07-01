import React from "react";

export class Label extends React.Component {
	render () {
		var labelStyle = {
			fontFamily:"monospace",
			marginTop:"0.5em",
			marginLeft:"1em",
			padding:"1em"
		};
		return(
			<p style={labelStyle}>{this.props.color}</p>
		);
	}
}