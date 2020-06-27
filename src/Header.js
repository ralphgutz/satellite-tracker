import React from "react"
import {NavLink} from "react-router-dom"
import "./App.css"

const Header = () => {
    return <div id="header">
        <div className="header-title">
            <i className="fas fa-satellite"></i>
            <h2>Satellite Tracker</h2>
            <p>Track PH satellites and the ISS.</p>
        </div>
        <ul className="navlinks">
            <li><NavLink to="/" exact activeClassName="active" >Home</NavLink></li>
            <li><NavLink to="/diwata" exact activeClassName="active" >Diwata</NavLink></li>
            <li><NavLink to="/maya" activeClassName="active" >Maya</NavLink></li>
            <li><NavLink to="/iss" activeClassName="active" >ISS</NavLink></li>
        </ul>
    </div>
}

export default Header