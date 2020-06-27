import React from "react"
import {Link} from "react-router-dom"
import "./MainCard.map.css"

const MainCard = ({title, text, link="", track}) => {
        return <div className="main-card">
            <div className="main-card-img">

            </div>
            <div className="main-card-text">
                <div className="main-card-title">
                    <h3>{title}</h3>
                </div>
                <div className="main-card-desc">
                    <p>{text}</p>
                </div>
                <br />
                <div className="main-card-link">
                    <Link to={link}><p>{track}</p></Link>
                </div>
            </div>
        </div>
}

export default MainCard