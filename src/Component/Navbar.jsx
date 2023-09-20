import React from "react";
import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
export const Navbar= ()=>{
   return <nav>  
    <Link to="/" className="title">Team Haxxar</Link>
    <ul>
        <li><NavLink to="/Home">Home</NavLink></li>
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/Course">Course</NavLink></li>
        <li><NavLink to="/Guidelines">Guidelines</NavLink></li>
        
    </ul>
   </nav>
}