import React from "react";

export class Search extends React.Component {
	render () {
		var inputStyle = {
			marginLeft:"2.5em",
			marginRight:"0.5em",
			marginBottom:"2.5em",
			WebkitFilter: "drop-shadow(0 0 5px #666)",
			filter: "drop-shadow(0 0 5px #666)"
		};
		var buttonStyle = {
		borderStyle:"none",
		backgroundColor: "#282B96",
	  	backgroundImage: "-webkit-linear-gradient(top, #282B96, #284796)",
	  	backgroundImage: "-moz-linear-gradient(top, #282B96, #284796)",
	  	backgroundImage: "-ms-linear-gradient(top, #282B96, #284796)",
	  	backgroundImage: "-o-linear-gradient(top, #282B96, #284796)",
	  	backgroundImage: "linear-gradient(to bottom, #282B96, #284796)",
	  	WebkitBorderRadius: "28px",
	  	MozBorderRadius: "28px",
	  	borderRadius: "28px",
	  	fontFamily: "monospace",
	  	color: "#ffffff",
	  	fontSize: "15px",
	  	padding: "5px 10px 5px 10px",
	  	textDecoration: "none",
	  	WebkitFilter: "drop-shadow(0 0 5px #666)",
		filter: "drop-shadow(0 0 5px #666)"
		}
		return(
			<div>
				<input type="text" style={inputStyle}/>
				<button style={buttonStyle}>See color</button>
			</div>
		);
	}
}