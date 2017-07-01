import React from "react";
import {render} from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import {Home} from "./components/Home.js";
import {Randomizer} from "./components/Randomizer.js";
import {Footer} from "./components/Footer.js";
import {Card} from "./components/Card.js";
import {Square} from "./components/Square.js";
import {Label} from "./components/Label.js";

	render(
			<Router>
				 <div className="container">
				      <nav className="navbar navbar-default">
				        <div className="container-fluid">
				          <div className="navbar-header">
				            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				              <span className="sr-only">Toggle navigation</span>
				              <span className="icon-bar"></span>
				              <span className="icon-bar"></span>
				              <span className="icon-bar"></span>
				            </button>
				            <NavLink className="navbar-brand" to="/" style={{fontFamily:"monospace"}}>Colorfinder</NavLink>
				          </div>
				          <div id="navbar" className="navbar-collapse collapse">
				            <ul className="nav navbar-nav" style={{fontFamily:"monospace"}}>
				              <li><NavLink to="/">Home</NavLink></li>
				              <li><NavLink to="/Randomizer">Randomizer</NavLink></li>
				            </ul>
				          </div>
				        </div>
				      </nav>
			      	<Route exact path="/" component={Home}/>
			      	<Route path="/Randomizer" component={Randomizer}/>
			    	<Footer className="footer"/>
		    	</div>
		</Router>, 
		window.document.getElementById("app"));
