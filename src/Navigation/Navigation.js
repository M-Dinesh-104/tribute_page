import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
const Navigation=()=>{
    return(
        <div className="nav1">
            <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/Book">Book</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            
            </div>
        </div>
    )
}
export default Navigation;