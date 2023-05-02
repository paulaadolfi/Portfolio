import React from "react";
import {NavLink} from "react-router-dom"
import './../../styles/pages/NavBar.css';
import "./../../App.css"



const Nav = (props) => {
    return (
        <nav id="navbar">    
            <div>
                <ul>
                    <li><NavLink to="/Portfolio" className={({ isActive }) => isActive ? "activo" : undefined}>Sobre mi</NavLink></li>
                    <li><NavLink to="/Proyectos" className={({ isActive }) => isActive ? "activo" : undefined}>Proyectos</NavLink></li>
                    <li><NavLink to="/Contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}



export default Nav;