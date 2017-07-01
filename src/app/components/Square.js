import React from "react";

export class Square extends React.Component {
	render () {
		var squareStyle = {
			height:"280px",
			backgroundColor:this.props.color,
			margin:"0"
		};
		return(
			<div style={squareStyle}></div>
		);
	}
}