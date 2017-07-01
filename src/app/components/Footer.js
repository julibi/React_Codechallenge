import React from "react";

export class Footer extends React.Component {
	render () {
		var footerStyle = {
			width:"100%",
			backgroundColor:"#F5F5F5",
			color:"#333 !important",
			border: "1px solid #ccc",
			borderRadius: "4px",
			paddingTop:"0.5em",
			fontFamily:"monospace",
			bottom: "0"
		};
		return(
		    <footer className="footer" style={footerStyle}>
		      <div className="container">
		        <p className="text-muted">Colorfinder</p>
		      </div>
		    </footer>
		);
	}
}